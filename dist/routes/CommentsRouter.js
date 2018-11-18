"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tradeComments_1 = require("../models/tradeComments");
//import { TradeController } from "../controllers/TradeController";
class CommentRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    GetComments(req, res) {
        tradeComments_1.default.find({})
            .then((data) => {
            const status = res.statusCode;
            res.status(200).json({
                status,
                data
            });
        })
            .catch((err) => {
            const status = res.statusCode;
            res.json({
                status,
                err
            });
        });
    }
    GetComment(req, res) {
    }
    CreateComment(req, res) {
    }
    UpdateComment(req, res) {
    }
    DeleteComment(req, res) {
    }
    routes() {
        this.router.get('/', this.GetComments);
        this.router.get('/:slug', this.GetComment);
    }
}
const commentsRoutes = new CommentRouter();
commentsRoutes.routes();
exports.default = commentsRoutes.router;
//# sourceMappingURL=CommentsRouter.js.map