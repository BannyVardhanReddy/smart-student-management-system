import { Link } from "react-router-dom";

export default function Header() {

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  function handleOnLogout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");

  }
  return (
    <section className="home-header">
      <div className="left">
        <h1>Smart Students</h1>
        <p>Hello, {user.fullName} </p>
      </div>
      <div className="right">
        <p className="active">Home</p>
        {/* <p>Students</p> */}
        <Link to="/dashboard/students" className="link">Student</Link>
        <p>Contact</p>
        <p onClick={handleOnLogout}>Logout</p>
      </div>
    </section>
  );
}
