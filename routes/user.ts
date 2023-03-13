import express from 'express';
import userController from '../controller/userController'

const request=express.Router();

request.get("/",(req,res)=>{
    res.send("user base route")
})

request.get("/getuserdetails/:userid",(req,res)=>{
    const resp = userController.getuserdetails(req);
    res.send(resp)
})

request.post("/createuser",(req,res)=>{
    const resp = userController.createuser(req);
    res.send(resp)
})

request.post("/updateuser",(req,res)=>{
    const resp = userController.updateuser(req);
    res.send(resp)
})

request.post("/inacivateuser",(req,res)=>{
    const resp = userController.inacivateuser(req);
    res.send(resp)
})

request.post("/acivateuser",(req,res)=>{
    const resp = userController.acivateuser(req);
    res.send(resp)
})


export default request;