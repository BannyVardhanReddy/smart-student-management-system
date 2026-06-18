import { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export default function Registration() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  function handleOnChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleRegister = async (e) =>{
    e.preventDefault();

    try{
        // console.log(data);
        const response = await axios.post(
            "http://localhost:3000/api/register",
            data
        );

        alert('Registered Succesfully!',response);
    }catch(e){
        console.log(e.response);
    }

  }

  return (
    <section className="login-section">
      <div className="details">
        <h2>Create Account</h2>
        <p className="description ">Fill in your details to get started</p>

        <form action="">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={data.fullName}
            id="name"
            placeholder="Enter your full name"
            onChange={handleOnChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={data.email}
            name="email"
            placeholder="Enter your email"
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            id="password"
            placeholder="Enter your password"
            onChange={handleOnChange}
          />


          <div className="terms-conditions">
            <input type="checkbox" name="" id="remember" />
            <p>
              I agree to all <span>Terms of Service</span> and{" "}
              <span>Privacy policy</span>
            </p>
          </div>

          <button type="submit" className="active" onClick={handleRegister}>
            Register
          </button>

          <p className="or">
            Already have an account?{" "}
              <Link to="/">Login here</Link>
          </p>
        </form>
      </div>
    </section>
  );
}
