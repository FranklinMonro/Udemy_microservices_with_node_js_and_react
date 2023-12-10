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

        this.router.post('/', postCommentsController);

        this.router.get('/', getCommentsController);

        this.router.put('/', putCommentsController);

        this.router.delete('/', deleteCommentsController);
    }
}

export default new CommentsRouter().router;