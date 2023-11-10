import Router from "koa-router";
import { msgRequest } from "../controllers/requestStoryOpenai.js";
import { StorySchema } from "../models/storySchema.js";
import moment from "moment";

const routerStoryApi = new Router();

routerStoryApi.get("/stories/today", async (ctx) => {
  try {
    // Check if there are Stories saved from today in the db
    const today = moment().startOf("day");
    const todayStories = await StorySchema.find({
      // date: new Date("2023-11-08T09:43:26.836+00:00"),
      date: {
        $gte: today.toDate(),
        $lte: moment(today).endOf("day").toDate(),
      },
    });
    // console.log("TODAY", todayStories);
    if (todayStories.length > 0) {
      ctx.body = { stories: todayStories };
      // console.log("TODAY STORIES", todayStories);
    } else {
      // If there aren't, execute the function in requestStoryOpenai controller
      ctx = await msgRequest(ctx);
    }
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: "Internal server error", error: err.message };
  }
});

export default routerStoryApi;
