const Student = require("../models/Student");

exports.getAllStudents = async (req, res) => {
  try{
    const students = await Student.find();
    res.status(200).json({
      message: "Students fetched successfully",
      students
    });
  } catch(error){
    res.status(500).json({
      message: "Error fetching Students",
      error: error.message
    });
  }
};

exports.addStudent = async (req, res) => {
  try{
    const { firstName, lastName, rollNo, email, phone, classs, section, address, city, state, country } = req.body;
    const existingStudent = await Student.findOne({ rollNo: rollNo });
    if(existingStudent){
      return res.status(400).json({
        message: "Roll number already registered"
      });
    }
    const newStudent = new Student({
      firstName: firstName,
      lastName: lastName,
      rollNo: rollNo,
      email: email,
      phone: phone,
      class: classs,
      section: section,
      address: address,
      city: city,
      state: state,
      country: country
    });
    await newStudent.save();
    res.status(200).json({
      message: "Student added successfully"
    });
  } catch(error){
    res.status(500).json({
      message: "Error adding Student",
      error: error.message
    });
  }
};

exports.updateStudent =  async (req, res) => {
  try{
    const { firstName, lastName, rollNo, email, phone, classs, section, address, city, state, country } = req.body;
    const student = await Student.findById(req.params.id);
    if(!student){
      return res.status(404).json({
        message: "Student not found"
      });
    }
    student.firstName = firstName || student.firstName;
    student.lastName = lastName || student.lastName;
    student.rollNo = rollNo || student.rollNo;
    student.email = email || student.email;
    student.phone = phone || student.phone;
    student.class = classs || student.class;
    student.section = section || student.section;
    student.address = address || student.address;
    student.city = city || student.city;
    student.state = state || student.state;
    student.country = country || student.country;
    await student.save();
    res.status(200).json({
      message: "Student updated successfully"
    });
  } catch(error){
    res.status(500).json({
      message: "Error updating Student",
      error: error.message
    });
  }
};

exports.deleteStudent = async (req, res) => {
  try{
    const student = await Student.findById(req.params.id);
    if(!student){
      return res.status(404).json({
        message: "Student not found"
      });
    }
    await student.deleteOne();
    res.status(200).json({
      message: "Student deleted successfully"
    });
  } catch(error){
    res.status(500).json({
      message: "Error deleting Student",
      error: error.message
    });
  }
};
