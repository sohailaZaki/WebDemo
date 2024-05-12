const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middelwares/errorHandelr");
const app = express();
const path = require('path'); // Import path module
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const productRoute = require('./routes/ProductRoute');
const authRoute = require('./routes/authRoute');
const uploadRoute = require('./routes/UploadRoute'); // Import the new route file
// const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const { Console } = require("console");

dbConnect();
// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Routes
// Serve static files from the 'upload/images' directory
app.use('/images', express.static(path.join(__dirname, 'upload', 'images')));
app.use('/', productRoute);
app.use('/', authRoute);
app.use('/upload', uploadRoute);

// Error Handling Middleware
app.use(errorHandler);
app.use(notFound);
app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});



///////////////////////////
// app.post("/check", async (req, res) => {
//   let check = await checkoutSchema.find({});
//   let iid;
//   if (check.length > 0) {
//       let last_check_array = check.slice(-1);
//       let last_check = last_check_array[0];
//       iid = last_check.iid + 1;
//   } else {
//       iid = 1;
//   }
//   //
//   const neworder = new checkoutSchema({
//       iid:iid,
//       firstName:req.body.firstName,
//       lastName:req.body.lastName,
//       email:req.body.email,
//       phoneNumber:req.body.phoneNumber,
//       address:req.body.address,
//       governorate:req.body.governorate,
//       location:req.body.location,
//       TotalPrice:req.body.TotalPrice,
//       myArray:req.body.myArray,
      

//   });
//   console.log(neworder);
//   await neworder.save();
//   console.log("saved");
//   res.json({
//       success:true,
//       email:req.body.email,
//   })
  
// });
// app.get('/check',async(req,res)=>{
//   let check = await checkoutSchema.find({});
//   console.log("all ordered fetched");
//   res.send(check);

// })

// // Start server
// app.listen(port, (error) => {
//   if (!error) {
//       console.log("Server running on port " + port);
//   } else {
//       console.log("Error: " + error);
//   }
// });
