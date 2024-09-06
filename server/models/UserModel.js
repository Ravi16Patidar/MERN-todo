import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    },
    password:{
        type:String,
        required:true,
    },
   
},{
    timestamps:true
})

const UserModel=mongoose.model('user',userSchema);
export default UserModel;