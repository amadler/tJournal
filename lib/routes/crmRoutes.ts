import {Request, Response} from "express";
import { TradeController } from "./../controllers/TradeController";

export class Routes {    
    public tradeController: TradeController = new TradeController();
    
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        app.route('comments')
        .get( this.tradeController.getComments)
        .post(this.tradeController.addNewComment);

        app.route('comments:commentId')
        .get(this.tradeController.getComment)
        .put( this.tradeController.updateComment)
        .delete(this.tradeController.deleteComment)
    }
}