const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require('jsonwebtoken');
const User = require("./models/User");
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Cloud Connected Successfully!");
  })
  .catch((err) => {
    console.log("MonogDB connection failed!", err);
  });

app.get("/", (req, res) => {
  res.send(`Backend Server is running..`);
});

app.post("/api/register", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered.",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName: fullName,
      email: email.toLowerCase(),
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
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;


    const user = await User.findOne({ email: email });
    if(!user){
        return res.status(404).json({
            message: "Wrong email or password"
        })
    }

    const isMatch = await bcrypt.compare(
        password,
        user.password
    )

    if(!isMatch){
      return res.status(404).json({
        message:"Wrong email or password"
      })
    }

    const token = jwt.sign({
      id: user._id,
      email : user.email
    },process.env.JWT_TOKEN,
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
});
app.listen(process.env.PORT, () => {
  console.log(`Server running on port: http://localhost:${process.env.PORT}`);
});
