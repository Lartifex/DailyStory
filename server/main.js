import mongoose from "mongoose";

mongoose.connect(`mongodb://localhost:27017/dailyStorydb`);

export default mongoose;
