import { useState } from "react";
import './Students.css'
import AddStudent from "./AddStudent";
import StudentTable from "./StudentTable";
export default function Students() {
  const [add, setAdd] = useState(false);
  const [students, setStudents] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);
  const [selectedFilterValue, setSelectedFilterValue] = useState("");

  const handleAddStudent = (student) => {
    setStudents((prev) => [...prev, student]);
    setAdd(false);
  };

  const handleDeleteStudent = (studentId) => {
    setStudents((prev) => prev.filter((student) => (student.id ?? student.roll) !== studentId));
  };

  const handleEditStudent = (updatedStudent) => {
    setStudents((prev) =>
      prev.map((student) =>
        (student.id ?? student.roll) === (updatedStudent.id ?? updatedStudent.roll)
          ? updatedStudent
          : student
      )
    );
  };

  const getSectionKey = (sectionName = "") => {
    const normalized = sectionName.trim().toLowerCase();

    if (/section[-\s]?a/.test(normalized) || normalized === "a") return "A";
    if (/section[-\s]?b/.test(normalized) || normalized === "b") return "B";
    if (/section[-\s]?c/.test(normalized) || normalized === "c") return "C";

    return "C";
  };

  const sectionCounts = students.reduce(
    (acc, student) => {
      const sectionKey = getSectionKey(student.section);
      acc[sectionKey] += 1;
      return acc;
    },
    { A: 0, B: 0, C: 0 }
  );

  const filterKeyLabel = {
    branch: "Branch",
    section: "Section",
    city: "City",
  };

  const availableFilterValues = Array.from(
    new Set(
      students
        .map((student) => {
          const value = student[activeFilter] || "";
          return value.toString().trim();
        })
        .filter(Boolean)
    )
  ).sort();

  const filteredStudents = students.filter((student) => {
    if (!activeFilter || !selectedFilterValue) return true;
    return (student[activeFilter] || "").toString().trim().toLowerCase() === selectedFilterValue.toLowerCase();
  });

  const toggleFilter = (field) => {
    if (activeFilter === field) {
      setActiveFilter(null);
      setSelectedFilterValue("");
      return;
    }

    setActiveFilter(field);
    setSelectedFilterValue("");
  };

  return (
    <div className="students">
      <h2 style={{fontFamily: 'Courier Prime'}}>Hello, {JSON.parse(localStorage.getItem('user')).fullName}</h2>
      <div className="data-cards">
        <div>
          <p>Total Students</p>
          <h2>{students.length.toString().padStart(2, '0')}</h2>
        </div>
        <div>
          <p>Section-A</p>
          <h2>{sectionCounts.A.toString().padStart(2, '0')}</h2>
        </div>
        <div>
          <p>Section-B</p>
          <h2>{sectionCounts.B.toString().padStart(2, '0')}</h2>
        </div>
        <div>
          <p>Section-C</p>
          <h2>{sectionCounts.C.toString().padStart(2, '0')}</h2>
        </div>
      </div>

      <div className="search-options">
        <input
          type="text"
          name="search"
          placeholder="Search by name,age,rollno"
        />

        <button className="class-btn" onClick={() => {
          setActiveFilter(null);
          setSelectedFilterValue("");
        }}>All</button>
        <button className="class-btn" onClick={() => toggleFilter("branch")}>Branch</button>
        <button className="class-btn" onClick={() => toggleFilter("section")}>Section</button>
        <button className="class-btn" onClick={() => toggleFilter("city")}>City</button>
        <button
          className="add-student-btn"
          onClick={() => {
            setAdd((prev) => !prev);
          }}
        >
          +Add Student
        </button>
      </div>
      {add && <AddStudent onAddStudent={handleAddStudent} onCancel={() => setAdd(false)} />}

      {activeFilter && (
        <div style={{ margin: "0.75rem 0", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <strong>{filterKeyLabel[activeFilter]}:</strong>
          {availableFilterValues.length === 0 ? (
            <span>No {filterKeyLabel[activeFilter].toLowerCase()} values yet.</span>
          ) : (
            availableFilterValues.map((value) => (
              <button
                key={value}
                className="class-btn"
                style={{
                  backgroundColor: selectedFilterValue === value ? "#2563eb" : "#f3f4f6",
                  color: selectedFilterValue === value ? "#fff" : "#111827",
                }}
                onClick={() => setSelectedFilterValue((prev) => (prev === value ? "" : value))}
              >
                {value}
              </button>
            ))
          )}
        </div>
      )}

      <StudentTable
        students={filteredStudents}
        onDeleteStudent={handleDeleteStudent}
        onEditStudent={handleEditStudent}
      ></StudentTable>
    </div>
  );
}