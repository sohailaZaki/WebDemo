import React from 'react'
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const validateMongoDbId = require("../Utils/validateMongoDbId");
const Check=require("../models/checkModels");
app.post("/check", async (req, res) => {
    let check = await checkoutSchema.find({});
    let iid;
    if (check.length > 0) {
        let last_check_array = check.slice(-1);
        let last_check = last_check_array[0];
        iid = last_check.iid + 1;
    } else {
        iid = 1;
    }
    //
    const neworder = new checkoutSchema({
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
    
  });
  app.get('/check',async(req,res)=>{
    let check = await checkoutSchema.find({});
    console.log("all ordered fetched");
    res.send(check);
  
  })
  
  
  
  