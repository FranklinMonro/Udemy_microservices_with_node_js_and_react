import { commentsLogger as log } from '../../server/winstonLogger';
import Comments from './commentsInterface';
import { addPostComment, findCommentsByPost } from './commentsFunctions';

const COMMENTS_BY_POST_ID: Comments[] = [];

const postCommentsUtils = (id: string, content: string): Comments[] => {
    try {
        return addPostComment(id, content);
    } catch (error) {
        log.log('error', `Error in post utils, error: ${error}`);
        throw error;
    }
};

const getCommentsUtils = (id: string): Comments[] => {
    try {
        return findCommentsByPost(id);
    } catch (error) {
        log.log('error', `Error in get utils, error: ${error}`);
        throw error;
    }
};

const putCommentsUtils = (): Comments[] => {
    try {
        
        return COMMENTS_BY_POST_ID;
    } catch (error) {
        log.log('error', `Error in put utils, error: ${error}`);
        throw error;
    }
};

const deleteCommentsUtils = (): Comments[] => {
    try {
        
        return COMMENTS_BY_POST_ID;
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
};
