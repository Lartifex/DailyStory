import Router from "koa-router";
import {
  msgRequest,
  getStoryById,
} from "../controllers/requestStoryController.js";
import { StorySchema } from "../models/storySchema.js";
import moment from "moment";

const requestStoryRouter = new Router();

requestStoryRouter.get("/stories/today", async (ctx) => {
  try {
    // Check if there are Stories created today in the db
    const today = moment().startOf("day");
    const todayStories = await StorySchema.find({
      // date: new Date("2023-11-08T09:43:26.836+00:00"),
      date: {
        $gte: today.toDate(),
        $lte: moment(today).endOf("day").toDate(),
      },
    });
    if (todayStories.length > 0) {
      ctx.body = { stories: todayStories };
    } else {
      // If there aren't, execute the function in requestStoryOpenai controller
      ctx = await msgRequest(ctx, "Fantasy");
      ctx = await msgRequest(ctx, "Mystery");
      ctx = await msgRequest(ctx, "Adventure");
      ctx = await msgRequest(ctx, "Science fiction");
    }
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: "Internal server error", error: err.message };
  }
});

requestStoryRouter.get("/stories/:_id", getStoryById);

export default requestStoryRouter;
