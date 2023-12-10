import { randomBytes } from 'crypto';

import { postLogger as log } from '../../server/winstonLogger';
import Post from './postsInterfaces';

let POSTS: Post[] = [];

const postPostsUtils = (title: string): Post[] => {
    try {
        const id = randomBytes(4).toString('hex');
        POSTS.push({
            id,
            title,
        });
        return POSTS;
    } catch (error) {
        log.log('error', `Error in post utils, error: ${error}`);
        throw error;
    }
};

const getPostsUtils = (): Post[] => {
    try {
        
        return POSTS;
    } catch (error) {
        log.log('error', `Error in get utils, error: ${error}`);
        throw error;
    }
};

const putPostsUtils = (): Post[] => {
    try {
        
        return POSTS;
    } catch (error) {
        log.log('error', `Error in put utils, error: ${error}`);
        throw error;
    }
};

const deletePostsUtils = (): Post[] => {
    try {
        
        return POSTS;
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