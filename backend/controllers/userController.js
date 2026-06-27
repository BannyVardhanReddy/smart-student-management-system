const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const LowerCaseEmail = email.toLowerCase();
    const existingUser = await User.findOne({ email: LowerCaseEmail });
    
    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered.",
      });
    }

    if(fullName.length < 3){
      return res.status(400).json({
        message: "Name must be at least 3 characters long"
      });
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email)){
      return res.status(400).json({
        message: "Invalid email format"
      });
    }

    if(password.length < 8){
      return res.status(400).json({
        message: "Password must be at least 8 characters long"
      });
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passwordRegex.test(password)){
      return res.status(400).json({
        message: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName: fullName,
      email: LowerCaseEmail,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(200).json({
      message: "User added successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Registration Failed",
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const LowerCaseEmail = email.toLowerCase();
    const user = await User.findOne({ email: LowerCaseEmail });
    if(!user){
        return res.status(401).json({
            message: "Wrong email or password"
        })
    }

    const isMatch = await bcrypt.compare(
        password,
        user.password
    )

    if(!isMatch){
      return res.status(401).json({
        message:"Wrong email or password"
      })
    }

    const token = jwt.sign({
      id: user._id,
      email : user.email
    },process.env.JWT_SECRET,
    {
      expiresIn: "1h"
    });

    res.status(200).json({
      message: "Login successfull",
      token: token,
      user
    });

  } catch (e) {
    res.status(500).json({
      message: "Login failed. Try again",
    });
  }
};