import mongoose from "mongoose";

const Connection = async () => {
  try {
    const cnn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("dbConnected", cnn);
    return cnn;
  } catch (error) {
    console.log("dbConnection Failed=>", error);
  }
};

export default Connection;
