import Router from "koa-router";
import {
  postUserStory,
  getUserStory,
  getAllUserStories,
  setStoryAsFavorite,
} from "../controllers/userStoryController.js";

const userStoryRouter = new Router();

userStoryRouter.post(`/userstories`, postUserStory);

userStoryRouter.get(`/userstories/:id`, getUserStory);

userStoryRouter.get(`/userstories`, getAllUserStories);

userStoryRouter.post(`/setfavorite`, setStoryAsFavorite);

export default userStoryRouter;
