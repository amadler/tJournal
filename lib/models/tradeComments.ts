import { Schema, model } from 'mongoose';


let CommentSchema: Schema = new Schema({
    title: {
        type: String,
        required: 'Enter a title'
    },
    createdAt: Date,
    slug: {
        type: String,
        default:'',
        required: true,
        unique:true
    },
    content:{
        type:String,
        default:''
    }
})
export default model('Comment', CommentSchema)