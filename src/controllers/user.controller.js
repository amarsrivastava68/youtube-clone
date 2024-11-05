import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req, res) => {  
    //get user details from the frontend 
    //validate if not empty 
    // check if the user is already existing , 
    //check for images and avatar 
    //upload to cloudinary 
    //create user object which will be entered in the database . 
    //remove refresh token and password   from the response . 
    //check for user is created or not successfully . 
    // return response . 

   const {fullName , username , email , password , } = req.body
   console.log(fullName , email ) 
       res.status(200).json({
      message: "ok",
    });
  });

export { registerUser };
