import validator from "validator";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from "../models/UserModel.js";

const CreateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

//Route for user login
const LoginUser = async (req,res) => {
    try {
        const {email,password} = req.body;

        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false, message : "Account doesn't exists."})  
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(isMatch){
            const token = CreateToken(user._id)
            res.json({success:true , token}) 
        }

        else{
            res.json({success:false, message: "Invalid Credentials."})
        }



    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message}) 
    }
    
}

//Route for user register
const RegisterUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Check if user already exists
      const exists = await userModel.findOne({ email });
      if (exists) {
        return res.status(400).json({ success: false, message: "Account already exists." });
      }
  
      // Validate email format
      if (!validator.isEmail(email)) {
        return res.json({ success: false, message: "Kindly enter a valid email." });
      }
  
      // Validate password strength
      if (password.length < 8) {
        return res.json({ success: false, message: "Kindly create a strong password." });
      }
  
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create new user
      const newUser = new userModel({
        name,
        email,
        password: hashedPassword,
      });
  
      const user = await newUser.save();
      const token = CreateToken(user._id);
  
      res.status(201).json({ success: true, token });
    } catch (error) {
      // Check for duplicate email error
      if (error.code === 11000) {
        return res.status(400).json({ success: false, message: "Email already exists." });
      }
      console.error(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  };
  

//Route for admin Login
const AdminLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' });
        return res.json({ success: true, token });
      } else {
        return res.status(401).json({ success: false, message: "Invalid credentials" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: error.message });
    }
  };
  

export { LoginUser, RegisterUser, AdminLogin }