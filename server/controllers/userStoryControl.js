import { UserStorySchema } from "../models/userStorySchema.js";
import { StorySchema } from "../models/storySchema.js";

export async function postUserStory(ctx) {
  try {
    const newUserStory = new UserStorySchema(ctx.request.body);
    const savedUserStory = await newUserStory.save();
    ctx.status = 200;
    console.log("saved user story", savedUserStory);
    ctx.body = savedUserStory;
  } catch (err) {
    ctx.status = 500;
    ctx.body = "Server Error: " + err.message;
  }
}

export async function getUserStory(ctx) {
  try {
    const userStoryById = await UserStorySchema.findById(ctx.params.id);
    const originalStoryId = userStoryById.originalStoryId;
    const originalStoryData = await StorySchema.findById(originalStoryId);
    const body = {
      url: originalStoryData.url,
      title: originalStoryData.title,
      text: originalStoryData.text,
      userText: userStoryById.userText,
    };
    ctx.status = 200;
    ctx.body = body;
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
