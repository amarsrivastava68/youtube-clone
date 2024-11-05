import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'

cloudinary.config({
    cloud_name: 'youtube-backend68',
    api_key: '195698549454921',
    api_secret: '6yFI8ETs8_kkNUmAaySBTqP8J4I'
  });
  
  const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}
