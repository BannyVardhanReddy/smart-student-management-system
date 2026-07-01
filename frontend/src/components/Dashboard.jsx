import { useMemo } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user")) || { fullName: "Administrator" };
  const students = JSON.parse(localStorage.getItem("students")) || [];

  const sectionCounts = useMemo(
    () =>
      students.reduce(
        (counts, student) => {
          const section = (student.section || "").trim().toUpperCase();
          if (section === "A") counts.A += 1;
          else if (section === "B") counts.B += 1;
          else if (section === "C") counts.C += 1;
          else counts.Other += 1;
          return counts;
        },
        { A: 0, B: 0, C: 0, Other: 0 }
      ),
    [students]
  );

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const stats = [
    { label: "Total Students", value: students.length, note: "Current student records" },
    { label: "Section A", value: sectionCounts.A, note: "Students enrolled in section A" },
    { label: "Section B", value: sectionCounts.B, note: "Students enrolled in section B" },
    { label: "Section C", value: sectionCounts.C, note: "Students enrolled in section C" },
  ];

  return (
    <>
      <section className="dashboard-header">
        <div>
          <p className="section-label">Dashboard</p>
          <h1>Good day, {user.fullName}</h1>
          <p>
            Track student performance, enrollment status, and administrative actions
            from one central place.
          </p>
        </div>
        <div className="dashboard-date">{today}</div>
      </section>

      <div className="dashboard-cards">
        {stats.map((stat) => (
          <article key={stat.label} className="dashboard-card">
            <p>{stat.label}</p>
            <h2>{stat.value.toString().padStart(2, "0")}</h2>
            <span>{stat.note}</span>
          </article>
        ))}
      </div>

      <div className="dashboard-grid">
        <section className="dashboard-section dashboard-activity">
          <div className="section-heading">
            <h2>Recent Activity</h2>
            <p>Latest actions from the student management portal.</p>
          </div>
          <ul className="activity-list">
            <li>
              <strong>New student added</strong>
              <span>5 minutes ago</span>
            </li>
            <li>
              <strong>Updated class schedule</strong>
              <span>Today at 11:20 AM</span>
            </li>
            <li>
              <strong>Student record reviewed</strong>
              <span>Yesterday at 4:30 PM</span>
            </li>
          </ul>
        </section>

        <section className="dashboard-section dashboard-actions">
          <div className="section-heading">
            <h2>Quick Actions</h2>
            <p>Jump to the tools you use most often.</p>
          </div>
          <div className="action-grid">
            <Link to="/dashboard/students" className="action-card">
              Manage Students
            </Link>
            <Link to="/dashboard/contact" className="action-card">
              Contact Support
            </Link>
            <button className="action-card secondary" type="button">
              Review Reports
            </button>
            <button className="action-card secondary" type="button">
              View Attendance
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
