import mongoose from "../main.js";

const Schema = mongoose.Schema;

const story = new Schema({
  date: Date,
  imgB64: String,
  title: String,
  text: String,
  genre: String,
});

export const StorySchema = mongoose.model("stories", story);
