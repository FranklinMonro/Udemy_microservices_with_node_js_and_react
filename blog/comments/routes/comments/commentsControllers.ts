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
        const { id } = req.params;
        const { content } = req.body;
        const postUtils = postCommentsUtils(id, content);
        res.status(201).send(postUtils);
    } catch (error) {
        log.log('error', `URL ${req.baseUrl}, error: ${error}`);
        next(error);
    }
};

const getCommentsController = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const { id } = req.params;
        const getUtils = getCommentsUtils(id);
        res.status(200).send(getUtils);
    } catch (error) {
        log.log('error', `URL ${req.baseUrl}, error: ${error}`);
        next(error);
    }
};

const putCommentsController = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const putUtils = putCommentsUtils();
        res.status(200).send(putUtils);
    } catch (error) {
        log.log('error', `URL ${req.baseUrl}, error: ${error}`);
        next(error);
    }
};

const deleteCommentsController = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const deleteUtils = deleteCommentsUtils();
        res.status(200).send(deleteUtils);
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