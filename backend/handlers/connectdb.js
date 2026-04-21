import mongoose from "mongoose";
import "dotenv/config";

const videowebDB = mongoose.createConnection(process.env.MONGO_URI, {
  dbName: "videoweb"
});

const portfolioDB = mongoose.createConnection(process.env.MONGO_URI, {
  dbName: "Videowe2"
});

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