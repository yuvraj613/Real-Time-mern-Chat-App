import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";

config(); // Add this line

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Fixed typo: was CLOUDINAR
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
