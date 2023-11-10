import OpenAI from "openai";
import "dotenv/config";
import { StorySchema } from "../models/storySchema.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const initialMessage = `"

You are an assistant that helps create the start of a very short story (4 paragraphs long).
Your answer needs to be in json format and needs to be parseable with javascript:
{
  title,
  text,
  dalleMessage,
  genre,
}

Here's an explanation of each field of the response:

- Title: the title of the story.
- Text: Write the first two paragraphs (half of the story). These are the instructions for the text:
1. Use kid friendly language
2. Use elementary English
3. Each paragraph has to be maximum 30 words long.
4. What you are going to write has to have the action of the story (draw the reader in with an inciting incident), the background (introduce and set the scene of the world and characters), and the development (characters chase their goals to progress the plot).

DalleMessage: You need to create a short sentence that will be the prompt for Dall-e so that it can create a front page image for the story. Preferably a drawing.

Genre: Inside the Fiction genre, you need to classify the short story as a genre. Example: Fantasy or Thriller."`;

export async function msgRequest(ctx, next) {
  try {
    // Story request to GPT4
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: `${initialMessage}` }],
      model: "gpt-4",
      max_tokens: 200, // The maximum number of tokens to generate in the chat completion. A CANVIAR 500
      n: 1, // How many chat completion choices to generate for each input message. Defaults to 1. A CANVIAR 4 (?)
    });

    let msgContent = JSON.parse(completion.choices[0].message.content);
    console.log("MESSAGE", msgContent.text);

    let imgPrompt = msgContent.dalleMessage;
    console.log("IMG PROMPT", imgPrompt);

    // Image request to dalle
    const image = await openai.images.generate({
      model: "dall-e-3",
      prompt: `${imgPrompt}`,
    });
    console.log("IMAGE DATA", image.data);

    let imgURL = image.data[0].url;
    console.log("IMG URL", imgURL);

    // Create a new StorySchema
    const storySchema = new StorySchema({
      date: Date.now(),
      url: imgURL,
      title: msgContent.title,
      text: msgContent.text,
      genre: msgContent.genre,
    });
    console.log("STORY", storySchema);

    // Save the storySchema to the DB
    await storySchema.save();

    ctx.body = storySchema;
    return ctx;
  } catch (err) {
    ctx.throw(400, err);
  }
}

export async function getStoryById(ctx, next) {
  try {
    const _id = ctx.params._id;
    console.log("ID:", _id);
    const stories = await StorySchema.findById(_id);
    if (!stories) {
      ctx.status = 404;
      ctx.body = "Task not found";
    }
    ctx.body = stories;
  } catch (err) {
    ctx.status = 500;
    ctx.body = "Server Error";
  }
}
