import { Express } from 'express';
import postRouter from './post';
import profileRouter from './profile';

const mainRouter = (app: Express) => {
  app.use('/profile', profileRouter);
  app.use('/post', postRouter);
};

export default mainRouter;
