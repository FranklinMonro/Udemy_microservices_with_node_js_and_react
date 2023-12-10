import { commentsLogger as log } from '../../server/winstonLogger';
import Comments from './commentsInterface';

const COMMENTS: Comments = {};

const postCommentsUtils = (): Comments => {
    try {
        
        return COMMENTS;
    } catch (error) {
        log.log('error', `Error in post utils, error: ${error}`);
        throw error;
    }
};

const getCommentsUtils = (): Comments => {
    try {
        
        return COMMENTS;
    } catch (error) {
        log.log('error', `Error in get utils, error: ${error}`);
        throw error;
    }
};

const putCommentsUtils = (): Comments => {
    try {
        
        return COMMENTS;
    } catch (error) {
        log.log('error', `Error in put utils, error: ${error}`);
        throw error;
    }
};

const deleteCommentsUtils = (): Comments => {
    try {
        
        return COMMENTS;
    } catch (error) {
        log.log('error', `Error in delete post, error: ${error}`);
        throw error;
    }
};

export {
    postCommentsUtils,
    getCommentsUtils,
    putCommentsUtils,
    deleteCommentsUtils,
}