import { json, urlencoded } from 'body-parser';
import express, { NextFunction, Request, Response } from 'express';

import { appLogger as log, errorHandlerLogger as errorLog } from './winstonLogger';

import CommentsRouter from '../routes/comments/commentsRoutes';

class App {
  public httpServer = express();

  constructor() {
    this.httpServer.use(json({ limit: '500mb' }));

    this.httpServer.use(urlencoded({ extended: true, limit: '500mb' }));

    this.httpServer.use((req: Request, res: Response, next: NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Authorization, X-CSRFToken',
      );
      res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, OPTIONS, DELETE');
      res.header('Access-Control-Allow-Credentials', 'true');
      next();
    });

    this.httpServer.set('trust proxy', true);

    this.httpServer.get('/', (req: Request, res: Response) => {
      console.log('Welcome to Udemy_microservices_with_node_js_and_react comments API');
      res.send('Welcome to Udemy_microservices_with_node_js_and_react comments API');
    });

    this.httpServer.use('/posts', CommentsRouter);

    this.httpServer.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      errorLog.log('error', `Error name: ${err.name}, error stack: ${err.stack}, message: ${err.message}`);
      res.send(err);
      next();
    });

    process.once('uncaughtException', (err: Error) => {
      console.log(err.name, err.message);
      console.log('UNCAUGHT EXCEPTION!  Shutting down...');
      log.log('error', `uncaughtException - Error name: ${err.name}, Error message: ${err.message}, UNCAUGHT EXCEPTION!  Shutting down...`);
      process.exit(1);
    });

    process.once('unhandledRejection', (reason: Error) => {
      console.log(reason.name, reason.message);
      console.log('UNHANDLED REJECTION! 💥 Shutting down...');
      log.log('error', `uncaughtException - Reason name: ${reason.name}, Reason message: ${reason.message}, UNHANDLED REJECTION!  Shutting down...`);
      process.exit(1);
    });
  }
}

export default new App().httpServer;