
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const validateMongoDbId = require("../Utils/validateMongoDbId");
const Check=require("../models/checkModels");
const Order = require("../models/checkModels");
exports.addOrder= async (req, res) => {
    let check = await Check.find({});
    let iid;
    if (check.length > 0) {
        let last_check_array = check.slice(-1);
        let last_check = last_check_array[0];
        if (!isNaN(last_check.iid)) {
            iid = last_check.iid + 1;
        } else {
            // Handle the case where the iid is NaN
            // For example, set iid to the _id of the last_check document
            iid = last_check._id;
            // You might need to format the _id as per your requirements
        }
    } else {
        iid = 1;
    }
    
    //
    const neworder = new Check({
        iid:iid,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        phoneNumber:req.body.phoneNumber,
        address:req.body.address,
        governorate:req.body.governorate,
        location:req.body.location,
        TotalPrice:req.body.TotalPrice,
        myArray:req.body.myArray,
        
  
    });
    console.log(neworder);
    await neworder.save();
    console.log("saved");
    res.json({
        success:true,
        email:req.body.email,
    })
    
  };
  exports.getOrder=async(req,res)=>{
    let check = await Check.find({});
    console.log("all ordered fetched");
    res.send(check);
  
  }
