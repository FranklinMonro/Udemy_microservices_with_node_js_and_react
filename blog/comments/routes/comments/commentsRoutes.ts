import express from 'express';
import { 
    deleteCommentsController,
    getCommentsController,
    postCommentsController,
    putCommentsController,
} from './commentsControllers';


class CommentsRouter {
    public router = express.Router();

    constructor() {

        this.router.post('/:postID/comments', postCommentsController);

        this.router.get('/:postID/comments', getCommentsController);

        this.router.put('/:postID/comments/:commentID', putCommentsController);

        this.router.delete('/:postID/comments/:commentID', deleteCommentsController);
    }
}

export default new CommentsRouter().router;