import mongoose from "../main.js";

const Schema = mongoose.Schema;

const userStory = new Schema({
  // userId: String,
  originalStoryId: String,
  userText: String,
});

export const UserStorySchema = mongoose.model("userstories", userStory);
