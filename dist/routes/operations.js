"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const operationController_1 = __importDefault(require("../controller/operationController"));
const request = express_1.default.Router();
request.get("/", (req, res) => {
    res.send("operations base route");
});
request.post("/getrelevantdonors", (req, res) => {
    const resp = operationController_1.default.getrelevantdonors(req);
});
exports.default = request;
