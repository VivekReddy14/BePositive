"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const donorController_1 = __importDefault(require("../controller/donorController"));
const request = express_1.default.Router();
request.get("/", (req, res) => {
    res.send("donor base route");
});
request.get("/getdonordetails/:donorid", (req, res) => {
    const resp = donorController_1.default.getdonordetails(req);
    res.send(resp);
});
request.post("/createdonor", (req, res) => {
    const resp = donorController_1.default.createdonor(req);
    res.send(resp);
});
request.post("/updatedonor", (req, res) => {
    const resp = donorController_1.default.updatedonor(req);
    res.send(resp);
});
request.post("/inacivatedonor", (req, res) => {
    const resp = donorController_1.default.inacivatedonor(req);
    res.send(resp);
});
request.post("/acivatedonor", (req, res) => {
    const resp = donorController_1.default.acivatedonor(req);
    res.send(resp);
});
exports.default = request;
