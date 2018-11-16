import * as mongoose from "mongoose";
import { Request, Response } from "express";
import { TradeCommentSchema } from "./../models/tradeComments";

export class TradeController {
  TradeComment: any = mongoose.model("TradeComment", TradeCommentSchema);
  public addNewComment(req: Request, res: Response) {
    let newComment = new TradeCommentSchema(req.body);

    newComment.save((err, comment) => {
      if (err) {
        res.send(err);
      }
      res.json(comment);
    });
  }

  public getComments(req: Request, res: Response) {
    this.TradeComment.find({}, (err, comment) => {
      if (err) {
        res.send(err);
      }
      res.json(comment);
    });
  }

  public getComment(req: Request, res: Response) {
    this.TradeComment.findById(req.params.commentId, (err, comment) => {
      if (err) {
        res.send(err);
      }
      res.json(comment);
    });
  }

  public updateComment(req: Request, res: Response) {
    this.TradeComment.findOneAndUpdate(
      { _id: req.params.commentId },
      req.body,
      { new: true },
      (err, comment) => {
        if (err) {
          res.send(err);
        }
        res.json(comment);
      }
    );
  }

  public deleteComment(req: Request, res: Response) {
    this.TradeComment.remove({ _id: req.params.commentId }, (err, comment) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Successfully deleted comment!" });
    });
  }
}
