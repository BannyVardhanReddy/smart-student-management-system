import { useEffect, useState, useMemo } from "react";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [students, setStudents] = useState([]);
  const today = new Date();
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

    const stats = useMemo(() => {
    const classCounts = {};

    students.forEach((student) => {
      classCounts[student.class] = (classCounts[student.class] || 0) + 1;
    });

    return {
      total: students.length,
      classCounts,
    };
  }, [students]);


  return (
    <>
      <div className="greeting-container">
        <div className="greeting" style={{ margin: "10px 0px" }}>
          <h1>Welcome back, {user.fullName}</h1>
          <p>Here's what happening across your students.</p>
        </div>

        <h2>{today.toDateString()}</h2>
      </div>
      
      <div className="data-cards">
        <div>
          <p>Total Students</p>
          <h2>{stats.total}</h2>
        </div>

        {Object.entries(stats.classCounts).map(([cls, count]) => (
          <div key={cls}>
            <p>Class-{cls}</p>
            <h2>{count}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
