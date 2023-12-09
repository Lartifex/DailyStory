# DailyStory

DailyStory is an innovative app designed to spark creativity in storytelling. Each day, users are greeted with the beginnings of four different stories, each accompanied by a unique drawing. Users can select a story that resonates with them, complete it in their own words, and save their creative narratives in their personal profile. This app not only fosters creativity but also provides a platform for users to explore and share their storytelling talents, making it a daily adventure in imagination and expression.

# Getting started:

1. Optain OpenAI API Key and Organization ID:

   - After creating your account, navigate to API keys and create a key for this project.
   - Navigate to Settings to get your Organization ID.

2. Set `.env` in server folder. You can follow the `.env.example` file.

3. Install the dependencies and run the server:

```
  cd server && npm install
  npm start
```

4. Install the dependencies and run the client:

```
  cd client && npm install
  npm start
```

# Tech Stack:

- [React.js](https://es.react.dev/reference/react) as the frontend framework
- Vanilla [CSS](https://css3.com/) for styling
- [Koa.js](https://koajs.com/) and [Mongoose](https://mongoosejs.com/) for the backend server
- [MongoDB](https://www.mongodb.com/docs/) as the database
- [OpenAI](https://platform.openai.com/docs/api-reference) API (GPT4 and Dall-E 3)
