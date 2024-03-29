"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv/config');
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
    .connect(process.env.MONGODB_API)
    .then(() => console.log("Mongodb connected"))
    .catch((error) => console.log(error));
