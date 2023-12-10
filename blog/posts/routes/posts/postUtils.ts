import { postLogger as log } from '../../server/winstonLogger';

const POSTS = {};

const postPostsUtils = () => {
    try {
        
    } catch (error) {
        log.log('error', `Error in post utils, error: ${error}`);
        throw error;
    }
};

const getPostsUtils = () => {
    try {
        
    } catch (error) {
        log.log('error', `Error in get utils, error: ${error}`);
        throw error;
    }
};

const putPostsUtils = () => {
    try {
        
    } catch (error) {
        log.log('error', `Error in put utils, error: ${error}`);
        throw error;
    }
};

const deletePostsUtils = () => {
    try {
        
    } catch (error) {
        log.log('error', `Error in delete post, error: ${error}`);
        throw error;
    }
};

export {
    postPostsUtils,
    getPostsUtils,
    putPostsUtils,
    deletePostsUtils,
}