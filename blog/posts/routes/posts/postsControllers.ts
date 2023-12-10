import { Request, Response, NextFunction } from 'express';

import { postLogger as log } from '../../server/winstonLogger';


const postPostController = (req: Request, res: Response, next: NextFunction): void => {
    try {
        res.sendStatus(200);
    } catch (error) {
        log.log('error', `URL ${req.baseUrl}, error: ${error}`);
        next(error);
    }
};

const getPostController = (req: Request, res: Response, next: NextFunction): void => {
    try {
        res.sendStatus(200);
    } catch (error) {
        log.log('error', `URL ${req.baseUrl}, error: ${error}`);
        next(error);
    }
};

const putPostController = (req: Request, res: Response, next: NextFunction): void => {
    try {
        res.sendStatus(200);
    } catch (error) {
        log.log('error', `URL ${req.baseUrl}, error: ${error}`);
        next(error);
    }
};

const deletePostController = (req: Request, res: Response, next: NextFunction): void => {
    try {
        res.sendStatus(200);
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