import { useEffect, useState, useMemo } from "react";
import "./Students.css";
import AddStudent from "./AddStudent";
import StudentTable from "./StudentTable";
export default function Students() {
  const [add, setAdd] = useState(false);
  const [students, setStudents] = useState([]);

  const [search, setSearch] = useState("");
  const [classFilter, setClassFilter] = useState("All");
  const [cityFilter, setCityFilter] = useState("All");
  const [sectionFilter, setSectionFilter] = useState("All");

  const classes = [...new Set(students.map((s) => s.class))];
  const sections = [...new Set(students.map((s) => s.section))];
  const cities = [...new Set(students.map((s) => s.city))];

  useEffect(() => {
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
  }, []);

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const fullName = `${student.firstName ?? ""} ${student.lastName ?? ""}`;
      const matchesSearch =
        fullName.toLowerCase().includes(search.toLowerCase()) ||
        student.roll.toString().includes(search) ||
        student.class.toString().includes(search);

      const matchesClass =
        classFilter === "All" || student.class === classFilter;

      const matchesSection =
        sectionFilter === "All" || student.section === sectionFilter;

      const matchesCity = cityFilter === "All" || student.city === cityFilter;

      return matchesSearch && matchesClass && matchesSection && matchesCity;
    });
  }, [students, search, classFilter, sectionFilter, cityFilter]);

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="students">
      <h2 style={{ fontFamily: "Courier Prime" }}>
        Hello,{user?.fullName}
      </h2>

      <div className="search-options">
        <input
          type="text"
          name="search"
          placeholder="Search by name,class,rollno"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={classFilter}
          onChange={(e) => setClassFilter(e.target.value)}
        >
          <option value="All">All Classes</option>

          {classes.map((cls) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>
        <select
          value={sectionFilter}
          onChange={(e) => setSectionFilter(e.target.value)}
        >
          <option value="All">All Sections</option>

          {sections.map((cls) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>
        <select
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
        >
          <option value="All">All Cities</option>

          {cities.map((cls) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>
        <button
          className="add-student-btn"
          onClick={() => {
            setAdd((prev) => !prev);
          }}
        >
          +Add Student
        </button>
      </div>
      {add && <AddStudent setStudents={setStudents} />}

      {/* <p>Table with students data</p> */}
      <StudentTable
        students={filteredStudents}
        setStudents={setStudents}
      ></StudentTable>
    </div>
  );
}
