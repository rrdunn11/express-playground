import { Request, Response, NextFunction } from 'express';
import {
  createNewProfile,
  getProfileByEmail,
  getProfileById,
  patchProfileEmailById,
  patchProfileFirstNameById,
  patchProfileLastNameById,
  patchProfilePhoneNumberById,
} from '../db/profile.queries';
import redisClient from '../redis';
import { isNil } from '../utils/general';

export const saveProfile = async (req: Request, res: Response, next: NextFunction) => {
  const {
    email, firstName, lastName, phoneNumber,
  } = req.body;
  try {
    const result = await createNewProfile({
      email, firstName, lastName, phoneNumber,
    });
    res.send(result);
  } catch (error: any) {
    next(error);
  }
};

export const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  const { id, email } = req.query as {id: string; email: string};
  try {
    await redisClient.connect();
    await redisClient.set('some', 'thing');
    const redisResult = await redisClient.get('some');
    console.log('result', redisResult);
    if (!isNil(id)) {
      const result = await getProfileById({ id: Number(id) });
      res.send(result.rows[0]);
    } else if (!isNil(email)) {
      const result = await getProfileByEmail({ email });
      res.send(result.rows[0]);
    } else {
      throw new Error('Not valid query');
    }
  } catch (error: any) {
    next(error);
  }
};

export const patchProfile = async (req: Request, res: Response, next: NextFunction) => {
  const {
    firstName, lastName, email, phoneNumber,
  } = req.body;
  const { id } = req.query;
  try {
    const queries = [];
    if (!isNil(firstName)) {
      queries.push(patchProfileFirstNameById({ id: Number(id), columnValue: firstName }));
    }
    if (!isNil(lastName)) {
      queries.push(patchProfileLastNameById({ id: Number(id), columnValue: lastName }));
    }
    if (!isNil(email)) {
      queries.push(patchProfileEmailById({ id: Number(id), columnValue: email }));
    }
    if (!isNil(phoneNumber)) {
      queries.push(patchProfilePhoneNumberById({ id: Number(id), columnValue: phoneNumber }));
    }
    await Promise.all(queries);
    res.send({
      data: true,
    });
  } catch (error) {
    next(error);
  }
};
