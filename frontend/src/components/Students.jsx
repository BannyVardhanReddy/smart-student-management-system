import { useEffect, useState } from "react";
import './Students.css'
import AddStudent from "./AddStudent";
import StudentTable from "./StudentTable";
export default function Students() {
  const [add, setAdd] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(()=>{
    async function fetchStudents() {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:5000/api/students", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setStudents(data.students);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    }

    fetchStudents();
  },[]);

  return (
    <div className="students">
      <h2 style={{fontFamily: 'Courier Prime'}}>Hello, {localStorage.getItem('user')?.name ?? 'User'}</h2>
      <div className="data-cards">
        <div>
          <p>Total Students</p>
          <h2>00</h2>
        </div>
        <div>
          <p>Class-A</p>
          <h2>00</h2>
        </div>
        <div>
          <p>Class-B</p>
          <h2>00</h2>
        </div>
        <div>
          <p>Class-C</p>
          <h2>00</h2>
        </div>
      </div>

      <div className="search-options">
        <input
          type="text"
          name="search"
          placeholder="Search by name,age,rollno"
        />

        <button className="class-btn">All</button>
        <button className="class-btn">Class</button>
        <button className="class-btn">Section</button>
        <button className="class-btn">City</button>
        <button
          className="add-student-btn"
          onClick={() => {
            setAdd((prev) => !prev);
          }}
        >
          +Add Student
        </button>
      </div>
      {add && <AddStudent setStudents={setStudents}/>}

      {/* <p>Table with students data</p> */}
      <StudentTable students={students}></StudentTable>
    </div>
  );
}