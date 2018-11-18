"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let CommentSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: 'Enter a title'
    },
    createdAt: Date,
    slug: {
        type: String,
        default: '',
        required: true,
        unique: true
    },
    content: {
        type: String,
        default: ''
    }
});
exports.default = mongoose_1.model('Comment', CommentSchema);
//# sourceMappingURL=tradeComments.js.map