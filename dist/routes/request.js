"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const requestController_1 = __importDefault(require("../controller/requestController"));
const request = express_1.default.Router();
request.get("/", (req, res) => {
    res.send("request base route");
});
request.get("/getrequestdetails/:requestid", (req, res) => {
    const resp = requestController_1.default.getrequestdetails(req);
    res.send(resp);
});
request.post("/createrequest", (req, res) => {
    const resp = requestController_1.default.createrequest(req);
    res.send(resp);
});
request.post("/updaterequest", (req, res) => {
    const resp = requestController_1.default.updaterequest(req);
    res.send(resp);
});
request.post("/inacivaterequest", (req, res) => {
    const resp = requestController_1.default.inacivaterequest(req);
    res.send(resp);
});
request.post("/acivaterequest", (req, res) => {
    const resp = requestController_1.default.acivaterequest(req);
    res.send(resp);
});
exports.default = request;
