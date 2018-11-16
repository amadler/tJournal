import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TradeCommentSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    }
   
});