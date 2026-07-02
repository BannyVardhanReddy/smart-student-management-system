import  { useState } from "react";
import axios from "axios";
export default function AddStudent({setStudents}) {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const currentUserId = currentUser?._id || currentUser?.id || "";
  // console.log(localStorage.getItem("token"));
  const [data,setData] = useState({
    firstName: "",
    lastName: "",
    roll: "",
    class: "",
    section: "",
    email: "",
    phone: "",
    city: "",
    user: currentUserId
  });

  function handleOnChange(e){
    setData({...data,[e.target.name]: e.target.value});
  }


  async function handleOnSave(e){
    e.preventDefault();
    // console.log(data);

    try{
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:5000/api/students",data,
        {
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      );
      console.log(response.data.student);

      setStudents(prevStudents => [...prevStudents, response.data.student]);

      setData({
        firstName: "",
        lastName: "",
        roll: "",
        class: "",
        section: "",
        email: "",
        phone: "",
        city: "",
        user: currentUserId
      });
    }catch(err){
      console.log(err.response.data);
      alert("Error adding student");
    }
  }

  return (
    <div className="add-student-form">
      <form action="">
        <div className="row-1">
          <div className="col">
            <label htmlFor="first-name">First Name</label>
            <input type="text" name="firstName" id="name" placeholder="Enter first name" onChange={handleOnChange} value={data.firstName}/>
          </div>

          <div className="col">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name="lastName" id="name" placeholder="Enter last name" onChange={handleOnChange} value={data.lastName}/>
          </div>

          <div className="col">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter email" onChange={handleOnChange} value={data.email}/>
          </div>
        </div>

        <div className="row-2">
          <div className="col">
            <label htmlFor="roll">Roll No</label>
            <input type="number" name="roll" id="roll" placeholder="Enter roll no" onChange={handleOnChange} value={data.roll}/>
          </div>

          <div className="col">
            <label htmlFor="class">Class</label>
            <input type="text" name="class" id="class" placeholder="Enter class" onChange={handleOnChange} value={data.class}/>
          </div>

          <div className="col">
            <label htmlFor="section">Section</label>
            <input type="text" name="section" id="section" placeholder="Enter section" onChange={handleOnChange} value={data.section}/>
          </div>

          <div className="col">
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" id="phone" placeholder="Enter phone number" onChange={handleOnChange} value={data.phone}/>
          </div>

          <div className="col">
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" placeholder="Enter city" onChange={handleOnChange} value={data.city}/>
          </div>
        </div>

        <div className="row-3">
            <button className="cancel-btn">Cancel</button>
            <button className="add-btn" onClick={handleOnSave}>Save</button>
        </div>

      </form>
    </div>
  );
}
