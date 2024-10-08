import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinaryConfig.js";

// Multer middleware
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: 'channelAvatars', // Folder where images will be stored on Cloudinary
      allowed_formats: ['jpeg', 'png', 'jpg'], // Allowed file formats
    },
  });
  
  const upload = multer({ storage });

  export default upload

