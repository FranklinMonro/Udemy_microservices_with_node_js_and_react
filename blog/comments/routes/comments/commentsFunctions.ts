import { randomBytes } from 'crypto';

import { commentsLogger as log } from '../../server/winstonLogger';
import Comments from './commentsInterface';

const COMMENTS_BY_POST_ID: Comments[] = [];

const addPostComment = (id: string, content: string): Comments[] => {
    try {
        const commentID = randomBytes(4).toString('hex');
        const findIndex = COMMENTS_BY_POST_ID.findIndex((com) => com.postID === id);
        if (findIndex !== -1 ) {
            COMMENTS_BY_POST_ID[findIndex].comments?.push({
                id: commentID,
                content,
            });
            return COMMENTS_BY_POST_ID;
        }
        COMMENTS_BY_POST_ID.push({
            postID: id,
            comments: [
                { 
                    id: commentID,
                    content,
                }
            ],
        });
        return COMMENTS_BY_POST_ID;
    } catch (error) {
        log.log('error', `Error in addPostComment function, error: ${error}`);
        throw error;
    }
}

const findCommentsByPost = (id: string): Comments[] => {
    try {
        return COMMENTS_BY_POST_ID.filter((com) => com.postID === id);
    } catch (error) {
        log.log('error', `Error in findCommentsByPost function, error: ${error}`);
        throw error;
    }
}

export {
    addPostComment,
    findCommentsByPost,
};