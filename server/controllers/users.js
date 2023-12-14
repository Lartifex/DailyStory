import bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { UserSchema } from '../models/userSchema.js';

export async function registerUser(ctx) {
  try {
    const { username, email, password } = ctx.request.body;

    const saltRounds = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new UserSchema({
      username,
      email,
      authentication: {
        password: hashedPassword,
        salt: saltRounds,
      },
    });

    await newUser.save();
    ctx.status = 201;
    ctx.body = { message: 'User registered successfully' };
  } catch (error) {
    ctx.status = 400;
    ctx.body = { error: error.message };
  }
}

export async function loginUser(ctx) {
  try {
    const { email, password } = ctx.request.body;
    const user = await UserSchema.findOne({ email }).select(
      '+authentication.password'
    );

    if (!user || !validatePassword(password, user.authentication.password)) {
      throw new Error('Invalid email or password');
    }

    function generateSessionToken() {
      return randomBytes(64).toString('hex');
    }

    const sessionToken = generateSessionToken;
    user.authentication.sessionToken = sessionToken;
    await user.save();

    ctx.body = { message: 'Login successfull', sessionToken };
  } catch (error) {
    ctx.status = 400;
    ctx.body = { error: error.message };
  }
}
