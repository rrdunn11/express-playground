import { Router } from 'express';
import { getProfile, saveProfile, patchProfile } from '../controller/profile';

const profileRouter = Router();

profileRouter.route('/').get(getProfile).post(saveProfile).patch(patchProfile);

export default profileRouter;
