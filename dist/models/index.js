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
exports.db = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../config/dbconfig");
const usertable_1 = require("./usertable");
const donortable_1 = require("./donortable");
const requesttable_1 = require("./requesttable");
const sequelize = new sequelize_1.Sequelize(dbconfig_1.coredbConfig.DATABASE, dbconfig_1.coredbConfig.USER, dbconfig_1.coredbConfig.PASSWORD, {
    host: dbconfig_1.coredbConfig.HOST,
    dialect: 'mysql'
});
const db = {};
exports.db = db;
db.sequelize = sequelize;
db.models = {};
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        db.models.usertable = (0, usertable_1.usertablemodel)(sequelize, sequelize_1.DataTypes);
        db.models.donortable = (0, donortable_1.donortablemodel)(sequelize, sequelize_1.DataTypes);
        db.models.requesttable = (0, requesttable_1.requesttablemodel)(sequelize, sequelize_1.DataTypes);
    }
    catch (e) {
        console.log(e);
    }
}))();
