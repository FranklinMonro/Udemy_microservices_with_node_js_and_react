import express from 'express';
import { postPostController, getPostController, putPostController, deletePostController } from './postsControllers';


class PostRouter {
    public router = express.Router();

    constructor() {

        this.router.post('/', postPostController);

        this.router.get('/', getPostController);

        this.router.put('/', putPostController);

        this.router.delete('/', deletePostController);
    }
}

export default new PostRouter().router;