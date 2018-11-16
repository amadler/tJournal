"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const tradeComments_1 = require("models/tradeComments");
const TradeComment = mongoose.model('TradeComment', tradeComments_1.TradeCommentSchema);
class TradeController {
    addNewComment(req, res) {
        let newComment = new tradeComments_1.TradeCommentSchema(req.body);
        newComment.save((err, comment) => {
            if (err) {
                res.send(err);
            }
            res.json(comment);
        });
    }
    getComments(req, res) {
        TradeComment.find({}, (err, comment) => {
            if (err) {
                res.send(err);
            }
            res.json(comment);
        });
    }
    getComment(req, res) {
        TradeComment.findById(req.params.commentId, (err, comment) => {
            if (err) {
                res.send(err);
            }
            res.json(comment);
        });
    }
    updateComment(req, res) {
        TradeComment.findOneAndUpdate({ _id: req.params.commentId }, req.body, { new: true }, (err, comment) => {
            if (err) {
                res.send(err);
            }
            res.json(comment);
        });
    }
    deleteComment(req, res) {
        TradeComment.remove({ _id: req.params.commentId }, (err, comment) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted comment!' });
        });
    }
}
exports.TradeController = TradeController;
//# sourceMappingURL=TradeController.js.map