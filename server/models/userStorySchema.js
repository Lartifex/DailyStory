import mongoose from "../main.js";

const Schema = mongoose.Schema;

const userStory = new Schema({
  // userId: String,
  originalStoryId: String,
  imgB64: String,
  title: String,
  text: String,
  userText: String,
  genre: String,
  creationDate: String,
});

export const UserStorySchema = mongoose.model("userstories", userStory);
