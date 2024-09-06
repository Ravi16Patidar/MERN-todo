import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { password, ...restData } = req.body;
    const isEmailExist=await UserModel.findOne({email:req.body.email})
    if(isEmailExist){
    return res.status(409).json({
      message:"Email already exist",
      status:409
    })
    }
    let hashPassword = await bcrypt.hash(password, 10);
    const userData = {
      ...restData,
      password: hashPassword,
    };
    let result = await UserModel.create(userData);
    res.status(201).json({
      data: result,
      message: "Signup successfully",
      status: 201,
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      status: 500,
      error: err,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let userData = await UserModel.findOne({ email });
    if (userData) {
      bcrypt.compare(password, userData.password, function (err, result) {
        if (result) {
          let payload = { userData };
          // console.log(payload)
          // let token = jwt.sign(payload, process.env.SECREAT_KEY);
          // console.log(process.env.SECRET_KEY)
          let token = jwt.sign({ userId: userData.id }, "thisisasecreatkey", { expiresIn: '1h' });
          res.status(200).json({
            message: "login successfully",
            status: 200,
            token:token
          });
        } else {
          res.status(400).json({
            message: "password Incorrect",
            status: 400,
          });
        }
      });
    } else {
      res.status(400).json({
        message: "user not found",
        status: 400,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      status: 500,
      error: err,
    });
  }
};
