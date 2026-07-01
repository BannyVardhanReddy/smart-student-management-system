const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const studentRoutes = require("./routes/studentRoutes");
const userRoutes = require("./routes/userRoutes");


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

app.use("/api/students", studentRoutes);
app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port: http://localhost:${process.env.PORT}`);
});

// app.post("/api/register", async (req, res) => {
//   try {
//     const { fullName, email, password } = req.body;
//     const LowerCaseEmail = email.toLowerCase();
//     const existingUser = await User.findOne({ email: LowerCaseEmail });
    
//     if (existingUser) {
//       return res.status(400).json({
//         message: "Email already registered.",
//       });
//     }

//     if(fullName.length < 3){
//       return res.status(400).json({
//         message: "Name must be at least 3 characters long"
//       });
//     }

//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if(!emailRegex.test(email)){
//       return res.status(400).json({
//         message: "Invalid email format"
//       });
//     }

//     if(password.length < 6){
//       return res.status(400).json({
//         message: "Password must be at least 6 characters long"
//       });
//     }

//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     if(!passwordRegex.test(password)){
//       return res.status(400).json({
//         message: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character"
//       });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       fullName: fullName,
//       email: LowerCaseEmail,
//       password: hashedPassword,
//     });

//     await newUser.save();

//     res.status(200).json({
//       message: "User added successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Registration Failed",
//       error: error.message,
//     });
//   }
// });

// app.post("/api/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const LowerCaseEmail = email.toLowerCase();
//     const user = await User.findOne({ email: LowerCaseEmail });
//     if(!user){
//         return res.status(401).json({
//             message: "Wrong email or password"
//         })
//     }

//     const isMatch = await bcrypt.compare(
//         password,
//         user.password
//     )

//     if(!isMatch){
//       return res.status(401).json({
//         message:"Wrong email or password"
//       })
//     }

//     const token = jwt.sign({
//       id: user._id,
//       email : user.email
//     },process.env.JWT_TOKEN,
//     {
//       expiresIn: "1h"
//     });

//     res.status(200).json({
//       message: "Login successfull",
//       token: token,
//       user
//     });

//   } catch (e) {
//     res.status(500).json({
//       message: "Login failed. Try again",
//     });
//   }
// });

// app.get('/api/students', async (req, res) => {
//   try{
//     const students = await Student.find();
//     res.status(200).json({
//       message: "Studnets fetched successfully",
//       students
//     });
//   } catch(error){
//     res.status(500).json({
//       message: "Error fetching Students",
//       error: error.message
//     });
//   }
// // });

// app.post('/api/students', async (req, res) => {
//   try{
//     const { firstName, lastName, rollNo, email, phone, classs, section, address, city, state, country } = req.body;
//     const existingStudent = await Student.findOne({ rollNo: rollNo });
//     if(existingStudent){
//       return res.status(400).json({
//         message: "Roll number already registered"
//       });
//     }
//     const newStudent = new Student({
//       firstName: firstName,
//       lastName: lastName,
//       rollNo: rollNo,
//       email: email,
//       phone: phone,
//       class: classs,
//       section: section,
//       address: address,
//       city: city,
//       state: state,
//       country: country
//     });
//     await newStudent.save();
//     res.status(200).json({
//       message: "Student added successfully"
//     });
//   } catch(error){
//     res.status(500).json({
//       message: "Error adding Student",
//       error: error.message
//     });
//   }
// });

// app.put('/api/student/:id', async (req, res) => {
//   try{
//     const { firstName, lastName, rollNo, email, phone, classs, section, address, city, state, country } = req.body;
//     const student = await Student.findById(req.params.id);
//     if(!student){
//       return res.status(404).json({
//         message: "Student not found"
//       });
//     }
//     student.firstName = firstName || student.firstName;
//     student.lastName = lastName || student.lastName;
//     student.rollNo = rollNo || student.rollNo;
//     student.email = email || student.email;
//     student.phone = phone || student.phone;
//     student.class = classs || student.class;
//     student.section = section || student.section;
//     student.address = address || student.address;
//     student.city = city || student.city;
//     student.state = state || student.state;
//     student.country = country || student.country;
//     await student.save();
//     res.status(200).json({
//       message: "Student updated successfully"
//     });
//   } catch(error){
//     res.status(500).json({
//       message: "Error updating Student",
//       error: error.message
//     });
//   }
// });

// app.delete('/api/student/:id', async (req, res) => {
//   try{
//     const student = await Student.findById(req.params.id);
//     if(!student){
//       return res.status(404).json({
//         message: "Student not found"
//       });
//     }
//     await student.deleteOne();
//     res.status(200).json({
//       message: "Student deleted successfully"
//     });
//   } catch(error){
//     res.status(500).json({
//       message: "Error deleting Student",
//       error: error.message
//     });
//   }
// });

// const express = require("express");
// const mongoose = require("mongoose");
// const Student = require("./models/Student");
// require("dotenv").config();

// const app = express();

// mongoose.connect(process.env.MONGO_URI)
// .then(async () => {
//   console.log("DB connected");

//   try {
//     await Student.collection.dropIndex("rollNo_1");
//     console.log("rollNo index removed");
//   } catch (err) {
//     console.log(err.message);
//   }

//   app.listen(5000);
// });

