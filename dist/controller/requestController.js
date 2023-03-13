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
const requestController = {};
requestController.getrequestdetails = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(yield index_1.db.models.requesttable.findOne({
            ut_id: 1
        }));
        console.log(index_1.db.models.requesttable);
    }
    catch (e) {
        console.log(e);
    }
    return index_1.db;
});
requestController.createrequest = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield index_1.db.models.requesttable.create({});
    }
    catch (e) {
        console.log(e);
    }
});
requestController.updaterequest = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield index_1.db.models.requesttable.create({});
    }
    catch (e) {
        console.log(e);
    }
});
requestController.inacivaterequest = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield index_1.db.models.requesttable.update({});
    }
    catch (e) {
        console.log(e);
    }
});
requestController.acivaterequest = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield index_1.db.models.requesttable.update({});
    }
    catch (e) {
        console.log(e);
    }
});
exports.default = requestController;
