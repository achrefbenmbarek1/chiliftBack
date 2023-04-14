"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./shared/db"));
const dotenv = __importStar(require("dotenv"));
const authRoutes_1 = require("./shared/authentification/routes/authRoutes");
const AuthTokenRequired_1 = require("./shared/authentification/Middlewares/AuthTokenRequired");
const feedbackRouter_1 = require("./feedback/router/feedbackRouter");
dotenv.config({ path: __dirname + '/.env' });
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT);
//
//
//
app.use(body_parser_1.default.json());
app.use(authRoutes_1.authRouter);
app.use('/feedbacks', feedbackRouter_1.feedbackRouter);
app.get('/', AuthTokenRequired_1.authMiddleware, (req, res) => {
    console.log(req.user);
    res.send(req.user);
});
(0, db_1.default)(process.env.MONGO_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT} `);
    });
}).catch(error => {
    console.log(error);
    console.log(process.env.MONGO_URL);
});
