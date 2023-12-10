import { Request, Response, NextFunction } from 'express';

import { commentsLogger as log } from '../../server/winstonLogger';
import { 
    postCommentsUtils, 
    getCommentsUtils, 
    putCommentsUtils, 
    deleteCommentsUtils,
} from './commentsUtils';


const postCommentsController = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const postUtils = postCommentsUtils();
        res.sendStatus(200).send(postUtils);
    } catch (error) {
        log.log('error', `URL ${req.baseUrl}, error: ${error}`);
        next(error);
    }
};

const getCommentsController = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const getUtils = getCommentsUtils();
        res.sendStatus(200).send(getUtils);
    } catch (error) {
        log.log('error', `URL ${req.baseUrl}, error: ${error}`);
        next(error);
    }
};

const putCommentsController = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const putUtils = putCommentsUtils();
        res.sendStatus(200).send(putUtils);
    } catch (error) {
        log.log('error', `URL ${req.baseUrl}, error: ${error}`);
        next(error);
    }
};

const deleteCommentsController = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const deleteUtils = deleteCommentsUtils();
        res.sendStatus(200).send(deleteUtils);
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