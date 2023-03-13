"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controller/userController"));
const request = express_1.default.Router();
request.get("/", (req, res) => {
    res.send("user base route");
});
request.get("/getuserdetails/:userid", (req, res) => {
    const resp = userController_1.default.getuserdetails(req);
    res.send(resp);
});
request.post("/createuser", (req, res) => {
    const resp = userController_1.default.createuser(req);
    res.send(resp);
});
request.post("/updateuser", (req, res) => {
    const resp = userController_1.default.updateuser(req);
    res.send(resp);
});
request.post("/inacivateuser", (req, res) => {
    const resp = userController_1.default.inacivateuser(req);
    res.send(resp);
});
request.post("/acivateuser", (req, res) => {
    const resp = userController_1.default.acivateuser(req);
    res.send(resp);
});
exports.default = request;
