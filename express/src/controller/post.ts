import { Request, Response, NextFunction } from 'express';
import { createPost, getPostById, getPostsByProfileId } from '../db/post.queries';
import { addToKafkaTopic } from '../kafka';
import { isNil } from '../utils/general';

export const createNewPost = async (req: Request, res: Response, next: NextFunction) => {
  const {
    content, profileId,
  } = req.body;
  try {
    addToKafkaTopic((err:any, data:any) => {
      if (err) {
        console.log('addToKafkaTopic Error: ', err);
      } else {
        console.log(`addToKafkaTopic Success: ${JSON.stringify(data)}`);
      }
      res.send(true);
    });
    // const result = await createPost({ content, profileId: Number(profileId) });
    // res.send(result);
  } catch (error: any) {
    next(error);
  }
};

export const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  const {
    profileId, id,
  } = req.query;
  try {
    if (!isNil(profileId)) {
      const result = await getPostsByProfileId({ profileId: Number(profileId) });
      res.send(result);
    } else if (!isNil(id)) {
      const result = await getPostById({ postId: Number(id) });
      res.send(result);
    } else {
      throw new Error('Not valid query params');
    }
  } catch (error: any) {
    next(error);
  }
};
