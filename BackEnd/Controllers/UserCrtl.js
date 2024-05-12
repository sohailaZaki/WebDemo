const User = require("../models/UserModel");
const asyncHandler = require("express-async-handler");
const bcrypt =require("bcrypt");
const jwt =require("jsonwebtoken");
const { generateToken } = require("../config/jwtToken");
const { generateRefreshToken } = require("../config/refreshtoken");
const validateMongoDbId = require("../Utils/validateMongoDbId");




const signUp = asyncHandler(async (req, res,next) => { 
    try{
        const user = await User.findOne({email:req.body.email});
        if (user) {
          // return next(new creatError("User already exists", 400));
           res.status(400).json({
               status: 'fail',
               message: 'User already exists',

           })
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);

        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        }); 

        //Assign JWT (json web token) to user 
        const token = jwt.sign({id:newUser._id}, 'secretkey123', {
            expiresIn: '90d',          
        })
        res.status(201).json({
            status: 'success',
            message: 'User created successfully',
            token , 
            user :{
                _id:newUser._id, 
                name:newUser.name,
                email:newUser.email,
                role:newUser.role,
            }, 
        })
    }
    catch(err){
        next(err);
    }
    
});
const logIn = asyncHandler(async (req, res,next) => {
    try{
       
        const user = await User.findOne({email:req.body.email});
        if (!user) {
            //return next(new creatError("User not found", 404));
            res.status(400).json({
                status: 'fail',
                message: 'User not found',
            })
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
           // return next(new creatError("Invalid email or password", 401));
           //should go to login
           res.status(400).json({
            status: 'fail',
            message: 'Invalid email or password',

        })
        }
        const token = jwt.sign({id:user._id}, 'secretkey123', {
            expiresIn: '90d',          
        })
        res.status(200).json({
            //should go to home
            status: 'success',
            message: 'User logged in successfully',
            token:token,
            user :{
                _id:user._id, 
                name:user.name,
                email:user.email,
                role:user.role,
            }, 
            
        })
    }catch(err){
        next(err);
    }


 });
 // admin login

const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // check if user exists or not
    const findAdmin = await User.findOne({ email });
    if (findAdmin.role !== "admin") throw new Error("Not Authorised");
    if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
      const refreshToken = await generateRefreshToken(findAdmin?._id);
      
      const updateuser = await User.findByIdAndUpdate(
        findAdmin.id,
        {
          refreshToken: refreshToken,
        },
        { new: true }
      );
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 72 * 60 * 60 * 1000,
      });
      res.json({
        _id: findAdmin?._id,
        firstname: findAdmin?.firstname,
        lastname: findAdmin?.lastname,
        email: findAdmin?.email,
        mobile: findAdmin?.mobile,
        token: generateToken(findAdmin?._id),
      });
    } else {
      throw new Error("Invalid Credentials");
    }
  });
  
  // handle refresh token
  
  const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) throw new Error(" No Refresh token present in db or not matched");
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
      if (err || user.id !== decoded.id) {
        throw new Error("There is something wrong with refresh token");
      }
      const accessToken = generateToken(user?._id);
      res.json({ accessToken });
    });
  });
  
  // logout functionality
  

  // save user Address

const saveAddress = asyncHandler(async (req, res, next) => {
    const { _id } = req.user;
    validateMongoDbId(_id);
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        _id,
        {
          address: req?.body?.address,
        },
        {
          new: true,
        }
      );
      res.json(updatedUser);
    } catch (error) {
      throw new Error(error);
    }
  });
  const updatePassword = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { password } = req.body;
    validateMongoDbId(_id);
    const user = await User.findById(_id);
    if (password) {
      user.password = password;
      const updatedPassword = await user.save();
      res.json(updatedPassword);
    } else {
      res.json(user);
    }
  });
  
//   const forgotPasswordToken = asyncHandler(async (req, res) => {
//     const { email } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) throw new Error("User not found with this email");
//     try {
//       const token = await user.createPasswordResetToken();
//       await user.save();
//       const resetURL = `Hi, Please follow this link to reset Your Password. This link is valid till 10 minutes from now. <a href='http://localhost:5000/api/user/reset-password/${token}'>Click Here</>`;
//       const data = {
//         to: email,
//         text: "Hey User",
//         subject: "Forgot Password Link",
//         htm: resetURL,
//       };
//       sendEmail(data);
//       res.json(token);
//     } catch (error) {
//       throw new Error(error);
//     }
//   });
  
  const resetPassword = asyncHandler(async (req, res) => {
    const { password } = req.body;
    const { token } = req.params;
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });
    if (!user) throw new Error(" Token Expired, Please try again later");
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    res.json(user);
  });
  
  const getWishlist = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    try {
      const findUser = await User.findById(_id).populate("wishlist");
      res.json(findUser);
    } catch (error) {
      throw new Error(error);
    }
  });

  // API endpoint to fetch all users
  const alluser = asyncHandler(async (req, res) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (error) {
      console.error('Error fetching users', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
 

  // Get a single user

const getaUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const getaUser = await User.findById(id);
    res.json({
      getaUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});
 module.exports = {

    signUp,
    logIn,
    handleRefreshToken,
    updatePassword,
    resetPassword,
    loginAdmin,
    getWishlist,
    saveAddress,

    alluser,
      getaUser,
  };


