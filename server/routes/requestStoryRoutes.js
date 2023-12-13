import Router from 'koa-router';
import { msgRequest, getStoryById } from '../controllers/requestStoryOpenAI.js';
import {
  getTodayStories,
  getRandomStoryByGenre,
} from '../services/storyService.js';

const requestStoryRouter = new Router();

requestStoryRouter.get('/stories/today', async (ctx) => {
  try {
    const todayStories = await getTodayStories();

    if (todayStories.length > 0) {
      ctx.body = { stories: todayStories };
    } else {
      // To use MOCK DATA
      if (process.env.USE_MOCK_DATA === 'true') {
        const genres = ['Fantasy', 'Mystery', 'Adventure', 'Science fiction'];
        ctx.body = { stories: await getRandomStoryByGenre(genres) };
      } else {
        // To use OPENAI API
        ctx = await msgRequest(ctx, 'Fantasy');
        ctx = await msgRequest(ctx, 'Mystery');
        ctx = await msgRequest(ctx, 'Adventure');
        ctx = await msgRequest(ctx, 'Science fiction');
      }
    }
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: 'Internal server error', error: err.message };
  }
});

requestStoryRouter.get('/stories/:_id', getStoryById);

export default requestStoryRouter;
