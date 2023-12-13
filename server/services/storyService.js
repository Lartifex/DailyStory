import { StorySchema } from '../models/storySchema.js';

import moment from 'moment';

export async function getTodayStories() {
  const today = moment().startOf('day');
  return await StorySchema.find({
    date: {
      $gte: today.toDate(),
      $lte: moment(today).endOf('day').toDate(),
    },
  });
}

export async function getRandomStoryByGenre(genre) {
  const randomStory = await StorySchema.aggregate([
    { $match: { genre } },
    { $sample: { size: 1 } },
  ]);

  return randomStory[0];
}
