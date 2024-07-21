import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    mongoose.set('strictQuery', true);
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewurlParser: true,
      useUnifiedTopology: true,
      keepAlive: true,
      // socketTimeourMS: 3000,
      connectTimeoutMS: 3000

    });

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;
