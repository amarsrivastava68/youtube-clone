import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  fullname: {
    type: String,
    required: true,
    index: true,
    trim: true,
  },
  avatar : {
    type : String , // here i will add cloudinary url 
    required : true 
  }, 
  coverImage : {
    type : String // cloudinary url 
  }, 
  watchHistory :[
    {
        type : Schema.Types.ObjectId , 
        ref : "Video"
    }
  ] ,
  password : {
    type : String ,
    required : [true , 'password is required']
  },

  refreshToken : {
    type  : String 
  }


  

} , { timestamps : true  });

export const User = mongoose.model("User" , userSchema);