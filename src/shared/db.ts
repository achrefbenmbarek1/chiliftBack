import mongoose from "mongoose";

const connectToDb = (uri: string) => {
  return mongoose.connect(uri);
};

export default connectToDb;

