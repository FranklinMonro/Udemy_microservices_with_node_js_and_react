import { Request, Response, NextFunction } from 'express';

import { commentsLogger as log } from '../../server/winstonLogger';


const postCommentsController = (req: Request, res: Response, next: NextFunction): void => {
    try {
        res.sendStatus(200);
    } catch (error) {
        log.log('error', `URL ${req.baseUrl}, error: ${error}`);
        next(error);
    }
};

const getCommentsController = (req: Request, res: Response, next: NextFunction): void => {
    try {
        res.sendStatus(200);
    } catch (error) {
        log.log('error', `URL ${req.baseUrl}, error: ${error}`);
        next(error);
    }
};

const putCommentsController = (req: Request, res: Response, next: NextFunction): void => {
    try {
        res.sendStatus(200);
    } catch (error) {
        log.log('error', `URL ${req.baseUrl}, error: ${error}`);
        next(error);
    }
};

const deleteCommentsController = (req: Request, res: Response, next: NextFunction): void => {
    try {
        res.sendStatus(200);
    } catch (error) {
        log.log('error', `URL ${req.baseUrl}, error: ${error}`);
        next(error);
    }
};

export {
    postCommentsController,
    getCommentsController,
    putCommentsController,
    deleteCommentsController,
}