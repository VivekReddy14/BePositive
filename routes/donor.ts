import express from 'express';
import donorController from '../controller/donorController'

const request=express.Router();

request.get("/",(req,res)=>{
    res.send("donor base route")
})

request.get("/getdonordetails/:donorid",(req,res)=>{
    const resp = donorController.getdonordetails(req);
    res.send(resp)
})

request.post("/createdonor",(req,res)=>{
    const resp = donorController.createdonor(req);
    res.send(resp)
})

request.post("/updatedonor",(req,res)=>{
    const resp = donorController.updatedonor(req);
    res.send(resp)
})

request.post("/inacivatedonor",(req,res)=>{
    const resp = donorController.inacivatedonor(req);
    res.send(resp)
})

request.post("/acivatedonor",(req,res)=>{
    const resp = donorController.acivatedonor(req);
    res.send(resp)
})

export default request;