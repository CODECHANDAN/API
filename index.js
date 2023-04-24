const express = require("express");
const mongoose = require ("mongoose");
const datamodel = require("./model");
const connection = require("./conn");
const bodyParser = require("body-parser");
connection()
const app =  express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json());
// app.post("/ ", (req,res)=>{
//     res.send("Hello this is the Task api");
// })


app.post("/",async(req,res)=>{
    try {
        const data = {
            name : req.body.name,
            email: req.body.email
        }

        console.log(data)
        const userdata = await datamodel.create(data);
        res.status(201).json({
            status:"Sucess",
            message : userdata
        })
    } catch (error) {
        res.status(404).json({
            status:"failed",
            message:error.message
        })
    }
})



app.get("/user", async(req,res)=>{
    try {
        const userdata = await datamodel.find({});
        res.status(201).json({
            status:"Sucess",
            message :  userdata
        })
    } catch (error) {
        res.status(404).json({
            status:"failed",
            message:error.message
        })
    }
})


app.get("/user/id:",async(req,res)=>{
    try {
        const userdata = await datamodel.find({_id:req.params._id})
        res.status(201).json({
            status:"Sucess",
            message :  userdata
        })
    } catch (error) {
        res.status(404).json({
            status:"failed",
            message:error.message
        })
    }
})

app.delete("/user/id:",async(req,res)=>{
    try {
        const userdata = await datamodel.deleteOne({_id:req.params._id})
        res.status(201).json({
            status:"Deleted",
            message :  userdata
        })
    } catch (error) {
        res.status(404).json({
            status:"failed",
            message:error.message
        })
    }
})


app.put("/user/id:",async(req,res)=>{
    try {
        const userdata = await datamodel.updateOne({_id:req.params._id},req.body)
        res.status(201).json({
            status:"",
            message :  userdata
        })
    } catch (error) {
        res.status(404).json({
            status:"failed",
            message:error.message
        })
    }
})



app.listen(9000,()=>{
   console.log("The server is up at 3000");
})