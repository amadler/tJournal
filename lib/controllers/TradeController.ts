import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { TradeCommentSchema } from 'models/tradeComments';

const TradeComment = mongoose.model('TradeComment', TradeCommentSchema);

export class TradeController{
public addNewComment (req: Request, res: Response) {                
        let newComment = new TradeCommentSchema(req.body);
    
        newComment.save((err, comment) => {
            if(err){
                res.send(err);
            }    
            res.json(comment);
        });
    }

    public getComments (req: Request, res: Response) {           
        TradeComment.find({}, (err, comment) => {
            if(err){
                res.send(err);
            }
            res.json(comment);
        });
    }

    public getComment (req: Request, res: Response) {           
        TradeComment.findById(req.params.commentId, (err, comment) => {
            if(err){
                res.send(err);
            }
            res.json(comment);
        });
    }

    public updateComment (req: Request, res: Response) {           
        TradeComment.findOneAndUpdate({ _id: req.params.commentId }, req.body, { new: true }, (err, comment) => {
            if(err){
                res.send(err);
            }
            res.json(comment);
        });
    }

    public deleteComment (req: Request, res: Response) {           
        TradeComment.remove({ _id: req.params.commentId }, (err, comment) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted comment!'});
        });
    }

}