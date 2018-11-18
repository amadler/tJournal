import * as debug from 'debug';
import * as http from 'http';

import Server from './server';

debug('ts-express:server');

const port = normalizePort(process.env.PORT || 3000);
Server.set('port', port);

console.log(`Server listening on port ${port}`);

const server = http.createServer(Server);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val: number | string): number | string | boolean {
  const port: number = typeof val === 'string' ? parseInt(val, 10) : val;
  if (isNaN(port)) {
    return val;
  } else if (port >= 0) {
    return port;
  } else {
    return false;
  }
}

function onError(error: NodeJS.ErrnoException): void {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening(): void {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}



















// import * as express from "express";
// import * as bodyParser from "body-parser";
// import { Routes } from "./routes/crmRoutes";
// import * as mongoose from "mongoose";



// class App {
//     public app: express.Application;
//     public routePrv: Routes = new Routes();
//     constructor() {
//         this.app = express();
//         this.config();   
//         this.routePrv.routes(this.app); 
//         this.mongoSetup();    
//     }
//     public mongoUrl: string = 'mongodb://localhost/tJournal'; 

//     private mongoSetup(): void{
//         mongoose.Promise = global.Promise;
//         mongoose.connect(this.mongoUrl);    
//     }
//     private config(): void{
//         // support application/json type post data
//         this.app.use(bodyParser.json());
//         //support application/x-www-form-urlencoded post data
//         this.app.use(bodyParser.urlencoded({ extended: false }));
//     }

// }

// export default new App().app;