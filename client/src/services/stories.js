export const fetchTodayStories = async () => {
  const res = await fetch(`http://localhost:3001/stories/today`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  const stories = data.stories;
  console.log('stories', stories);
  return stories;
};
