import express from 'express';
import requestController from '../controller/requestController'

const request=express.Router();

request.get("/",(req,res)=>{
    res.send("request base route")
})

request.get("/getrequestdetails/:requestid",(req,res)=>{
    const resp = requestController.getrequestdetails(req);
    res.send(resp)
})

request.post("/createrequest",(req,res)=>{
    const resp = requestController.createrequest(req);
    res.send(resp)
})

request.post("/updaterequest",(req,res)=>{
    const resp = requestController.updaterequest(req);
    res.send(resp)
})

request.post("/inacivaterequest",(req,res)=>{
    const resp = requestController.inacivaterequest(req);
    res.send(resp)
})

request.post("/acivaterequest",(req,res)=>{
    const resp = requestController.acivaterequest(req);
    res.send(resp)
})


export default request;