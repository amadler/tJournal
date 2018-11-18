import * as bodyParser from 'body-parser';
import * as compression from 'compression';
//import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import * as mongoose from 'mongoose';
import * as logger from 'morgan';
import CommentsRouter from './routes/CommentsRouter'
class Server{
    public app: express.Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    public routes(){
        const router: express.Router = express.Router();

      this.app.use('/', router);
      this.app.use('/api/v1/comments', CommentsRouter);

    }
    public config(){
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
        this.app.listen(3000)
     // cors
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
            res.header(
            'Access-Control-Allow-Methods',
            'GET, POST, PUT, DELETE, OPTIONS',
            );
            res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials',
            );
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });
        }
        
}

export default new Server().app;
