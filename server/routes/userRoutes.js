import Router from 'koa-router';
import { loginUser, registerUser } from '../controllers/users.js';

const userRouter = new Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

export default userRouter;
