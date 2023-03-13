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
const userController = {};
userController.getuserdetails = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(yield index_1.db.models.usertable.findOne({
            ut_id: 1
        }));
        console.log(index_1.db.models.usertable);
    }
    catch (e) {
        console.log(e);
    }
    return index_1.db;
});
userController.createuser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield index_1.db.models.usertable.create({});
    }
    catch (e) {
        console.log(e);
    }
});
userController.updateuser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield index_1.db.models.usertable.create({});
    }
    catch (e) {
        console.log(e);
    }
});
userController.inacivateuser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield index_1.db.models.usertable.update({});
    }
    catch (e) {
        console.log(e);
    }
});
userController.acivateuser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield index_1.db.models.usertable.update({});
    }
    catch (e) {
        console.log(e);
    }
});
exports.default = userController;
