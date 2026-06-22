import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleOnChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const navigate = useNavigate();
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const exists = await axios.post("http://localhost:5000/api/users/login", data);
      console.log(exists);
      localStorage.setItem("token", exists.data.token);
      localStorage.setItem("user", JSON.stringify(exists.data.user));
      alert(exists.data.message);
      navigate("/dashboard");
    } catch (e) {
      console.log(e.response);
      console.log(e.response.data);
    }
  };


  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="background">
      <div className="main">
        <div className="image">

        </div>
        <div className="login-section">
          <section >
            <div className="details">
              <h2>Welcome Back</h2>
              <p className="description ">Login to your account to continue</p>
              <label>Email address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                name="email"
                onChange={handleOnChange}/>
              <label htmlFor="password">Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  name="password"
                  onChange={handleOnChange}
                />
                <button 
                  type="button" 
                  className="toggle-password-btn" 
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'} 
                </button>
              </div>
              <div className="password-details">
                <div className="remember-me">
                  <input type="checkbox" name="" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <span className="forgot-password" >Forgot Password?</span>
              </div>
              <button className="active" onClick={handleOnSubmit}>Login</button>
              <p className="or ore">or</p>
              <button className="google-btn" type="submit">Login with Google</button>
              <p className="or">Don't have an account?{"  "}
                <Link className="register-link" to="/register">Register here</Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div >
  );
}
