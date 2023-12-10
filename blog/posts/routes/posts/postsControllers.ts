import { Request, Response, NextFunction } from 'express';

import { postLogger as log } from '../../server/winstonLogger';
import { 
    deletePostsUtils,
    getPostsUtils,
    postPostsUtils,
    putPostsUtils,
} from './postUtils';


const postPostController = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const postUtils = postPostsUtils();
        res.status(200).send(postUtils);
    } catch (error) {
        log.log('error', `URL ${req.baseUrl}, error: ${error}`);
        next(error);
    }
};

const getPostController = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const getUtils = getPostsUtils();
        res.sendStatus(200).send(getUtils);
    } catch (error) {
        log.log('error', `URL ${req.baseUrl}, error: ${error}`);
        next(error);
    }
};

const putPostController = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const putUtils = putPostsUtils();
        res.sendStatus(200).send(putUtils);
    } catch (error) {
        log.log('error', `URL ${req.baseUrl}, error: ${error}`);
        next(error);
    }
};

const deletePostController = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const deleteUtils = deletePostsUtils();
        res.sendStatus(200).send(deleteUtils);
    } catch (error) {
        log.log('error', `URL ${req.baseUrl}, error: ${error}`);
        next(error);
    }
};

export {
    postPostController,
    getPostController,
    putPostController,
    deletePostController,
}