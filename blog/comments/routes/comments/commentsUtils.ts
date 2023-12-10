import { commentsLogger as log } from '../../server/winstonLogger';

const POSTs = {};

const postCommentsUtils = () => {
    try {
        
    } catch (error) {
        log.log('error', `Error in post utils, error: ${error}`);
        throw error;
    }
};

const getCommentsUtils = () => {
    try {
        
    } catch (error) {
        log.log('error', `Error in get utils, error: ${error}`);
        throw error;
    }
};

const putCommentsUtils = () => {
    try {
        
    } catch (error) {
        log.log('error', `Error in put utils, error: ${error}`);
        throw error;
    }
};

const deleteCommentsUtils = () => {
    try {
        
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