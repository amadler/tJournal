"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const compression = require("compression");
//import * as cookieParser from 'cookie-parser';
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const logger = require("morgan");
const CommentsRouter_1 = require("./routes/CommentsRouter");
class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    routes() {
        const router = express.Router();
        this.app.use('/', router);
        this.app.use('/api/v1/comments', CommentsRouter_1.default);
    }
    config() {
        const MONGO_URI = 'mongodb://localhost/tJournal';
        mongoose.connect(MONGO_URI || process.env.MONGODB_URI);
        // express middleware
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        //this.app.use(cookieParser());
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
        this.app.listen(3000);
        // cors
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });
    }
}
exports.default = new Server().app;
//# sourceMappingURL=server.js.map