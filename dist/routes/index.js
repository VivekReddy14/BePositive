"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const request_1 = __importDefault(require("./request"));
const user_1 = __importDefault(require("./user"));
const donor_1 = __importDefault(require("./donor"));
const operations_1 = __importDefault(require("./operations"));
router.use('/user', user_1.default);
router.use('/donor', donor_1.default);
router.use('/request', request_1.default);
router.use('/operations', operations_1.default);
exports.default = router;
