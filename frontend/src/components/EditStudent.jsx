import  { useState } from "react";
import axios from "axios";

export default function EditStudent({student: s, setEdit, setStudents}) {
  const [student, setStudent] = useState(s);

  function handleOnChange(e){
    setStudent({...student,[e.target.name]: e.target.value});
  }

  function handleOnCancel(e){
    e.preventDefault();

    setEdit(false);
  }

  async function handleOnSave(e){
    e.preventDefault(); 

    try{
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:5000/api/students/${student._id}`,
        student,
        {
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      );
      console.log(response.data);
      alert("Student updated successfully");

      setStudents(prevStudents => prevStudents.map(stu => stu._id === student._id ? student : stu));

      setEdit(false);
    }catch(err){
      console.log(err);
      console.log(err.response.data);
    }
  }
  return (
    <div className="add-student-form edit-student-form">
      <form action="">
        <div className="row-1">
          <div className="col">
            <label htmlFor="first-name">First Name</label>
            <input type="text" name="firstName" id="name" value={student.firstName} onChange={handleOnChange}/>
          </div>

          <div className="col">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name="lastName" id="name" value={student.lastName} onChange={handleOnChange}/>
          </div>

          <div className="col">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={student.email} onChange={handleOnChange}/>
          </div>
        </div>

        <div className="row-2">
          <div className="col">
            <label htmlFor="roll">Roll No</label>
            <input type="number" name="roll" id="roll" value={student.roll} onChange={handleOnChange}/>
          </div>

          <div className="col">
            <label htmlFor="class">Class</label>
            <input type="text" name="class" id="class" value={student.class} onChange={handleOnChange}/>
          </div>

          <div className="col">
            <label htmlFor="section">Section</label>
            <input type="text" name="section" id="section" value={student.section} onChange={handleOnChange}/>
          </div>

          <div className="col">
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" id="phone" value={student.phone} onChange={handleOnChange}/>
          </div>

          <div className="col">
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" value={student.city} onChange={handleOnChange}/>
          </div>
        </div>

        <div className="row-3">
            <button className="cancel-btn" onClick={handleOnCancel}>Cancel</button>
            <button className="add-btn" onClick={handleOnSave}>Save</button>
        </div>
      </form>
    </div>
  );
}
