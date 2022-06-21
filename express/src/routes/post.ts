import { Router } from 'express';
import { createNewPost, getPosts } from '../controller/post';

const postRouter = Router();

postRouter.route('/').get(getPosts).post(createNewPost);

export default postRouter;
