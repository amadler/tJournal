import { Request, Response, Router } from 'express';
import Comment from '../models/tradeComments';
//import { TradeController } from "../controllers/TradeController";

class CommentRouter{
    router:Router;


    constructor() {
        this.router = Router();
        this.routes()
    }

    public GetComments(req:Request, res:Response):void{
        Comment.find({})
        .then( (data) => {
            const status = res.statusCode;
            res.status(200).json({
                status,
                data
            })
        })
        .catch( (err) => {
            const status = res.statusCode;
            res.json({
                status,
                err
            })
        })
    }

    public GetComment(req:Request, res:Response):void{

    }

    public CreateComment(req:Request, res:Response):void{

    }

    public UpdateComment(req:Request, res:Response):void{

    }

    public DeleteComment(req:Request, res:Response):void{

    }
    routes(){
        this.router.get('/', this.GetComments)
        this.router.get('/:slug', this.GetComment)
    }
}
const commentsRoutes = new CommentRouter();
commentsRoutes.routes();
export default commentsRoutes.router;


