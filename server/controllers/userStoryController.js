import { UserStorySchema } from "../models/userStorySchema.js";

export async function postUserStory(ctx) {
  try {
    const newUserStory = new UserStorySchema(ctx.request.body);
    const savedUserStory = await newUserStory.save();
    ctx.status = 200;
    ctx.body = savedUserStory;
  } catch (err) {
    ctx.status = 500;
    ctx.body = "Server Error: " + err.message;
  }
}

export async function getUserStory(ctx) {
  try {
    const userStoryById = await UserStorySchema.findById(ctx.params.id);
    ctx.status = 200;
    ctx.body = userStoryById;
  } catch (err) {
    ctx.status = 500;
    ctx.body = "Server Error: " + err.message;
  }
}

export async function getAllUserStories(ctx) {
  try {
    const userStories = await UserStorySchema.find({});
    ctx.status = 200;
    ctx.body = userStories;
  } catch (err) {
    ctx.status = 500;
    ctx.body = "Server Error: " + err.message;
  }
}
