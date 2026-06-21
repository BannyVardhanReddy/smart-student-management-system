import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  function handleOnLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  }

  return (
    <section className="home-header">
      <div className="left">
        <h1 style={{ fontFamily: "Courier Prime", fontSize: "2rem" }}>
          Student Management System
        </h1>
        <p>Every Student On record</p>
      </div>
      <div className="right">
        <Link to="/dashboard" className="link">
          Home
        </Link>
        <Link to="/dashboard/students" className="link">
          Student
        </Link>
        <Link to="/dashboard/contact" className="link">
          Contact
        </Link>
        <button onClick={handleOnLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </section>
  );
}
