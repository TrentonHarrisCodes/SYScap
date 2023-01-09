import dotenv from 'dotenv'
import cloudinaryModule from "cloudinary"


dotenv.config()
const cloudinary =cloudinaryModule.v2
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secert:process.env.CLOUDINARY_API_SECERT
})

export default cloudinary