"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../models/index");
const donorController = {};
const donormodel = index_1.db.models.donortable;
donorController.getdonordetails = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(yield donormodel.findOne({
            ut_id: 1
        }));
        console.log(req);
    }
    catch (e) {
        console.log(e);
    }
    return req;
});
donorController.createdonor = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield donormodel.create({});
    }
    catch (e) {
        console.log(e);
    }
});
donorController.updatedonor = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield donormodel.create({});
    }
    catch (e) {
        console.log(e);
    }
});
donorController.inacivatedonor = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield donormodel.update({});
    }
    catch (e) {
        console.log(e);
    }
});
donorController.acivatedonor = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield donormodel.update({});
    }
    catch (e) {
        console.log(e);
    }
});
exports.default = donorController;
