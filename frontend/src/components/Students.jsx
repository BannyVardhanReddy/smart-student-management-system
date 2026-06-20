import { useState } from "react";

export default function Students() {
  const [add, setAdd] = useState(false);

  return (
    <div className="students">
      <div className="intro">
        <h1>Student Management System</h1>
        <p>Every Student On record</p>
      </div>
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
          <p>Class-B</p>
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
        <button className="class-btn">Class-A</button>
        <button className="class-btn">Class-B</button>
        <button className="class-btn">Class-c</button>
      </div>
      <div className="add-section">
        <button
          className="add-btn"
          onClick={() => {
            setAdd((prev) => !prev);
          }}
        >
          +Add Student
        </button>

        {add && <p>Form to add students</p>}
      </div>
      {/* <StudentList /> */}
      <p>Table with students data</p>
    </div>
  );
}
