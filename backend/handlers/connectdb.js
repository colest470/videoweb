import mongoose from "mongoose";
import "dotenv/config";

const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error("MONGO_URI is not defined in environment variables.");
}

const videowebDB = mongoose.createConnection(uri, {
  dbName: "videoweb",
});

const portfolioDB = mongoose.createConnection(uri, {
  dbName: "Videowe2",
});

videowebDB.on("connected", () => console.log("videowebDB connected."));
videowebDB.on("error", (err) => console.error("videowebDB connection error:", err));
portfolioDB.on("connected", () => console.log("portfolioDB connected."));
portfolioDB.on("error", (err) => console.error("portfolioDB connection error:", err));

export { videowebDB, portfolioDB };

// import mongoose from 'mongoose';

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect("mongodb+srv://markbironga:udJw5DUN7ikgPW0s@cluster0.ahklyvd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
//       dbName: 'videoweb',
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
      
//     });
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };

// export default connectDB;