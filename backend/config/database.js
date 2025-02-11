require("dotenv").config();  // Ensure dotenv is loaded
console.log("MONGODB_URL from database.js:", process.env.MONGODB_URL); // Debugging Line

const mongoose = require("mongoose");

exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected Successfully!");
  } catch (error) {
    console.error("Error connecting to DB:", error);
    process.exit(1);
  }
};
