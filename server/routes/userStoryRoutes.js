import Router from "koa-router";
import {
  postUserStory,
  getUserStory,
  getAllUserStories,
} from "../controllers/userStoryControl.js";

const userStoryRouter = new Router();

userStoryRouter.post(`/userstories`, postUserStory);

userStoryRouter.get(`/userstories/:id`, getUserStory);

userStoryRouter.get(`/userstories`, getAllUserStories);

export default userStoryRouter;
