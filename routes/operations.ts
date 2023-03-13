import express from 'express';
import operationController from '../controller/operationController'

const request=express.Router();

request.get("/",(req,res)=>{
    res.send("operations base route")
})

request.post("/getrelevantdonors",(req,res)=>{
    const resp = operationController.getrelevantdonors(req);
})

export default request;