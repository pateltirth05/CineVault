import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import "../style/style.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(formData);

      console.log(data);

      login(data.user, data.token);

      navigate("/home");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="authPage">
      {/* Left: Cinematic Background */}
      <div className="authBg">
        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=900&q=80"
          alt="Cinema"
        />

        <div className="authBgOverlay">
          <Link
            to="/home"
            className="navLogo"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <div className="navLogoIcon">🎬</div>

            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.5rem",
                fontWeight: "900",
                color: "#fff",
              }}
            >
              CineVault
            </span>
          </Link>

          <div className="authBgQuote">
            <blockquote>
              "Cinema is a mirror by which we often see ourselves."
            </blockquote>
            <cite>— Martin Scorsese</cite>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="authPanel">
        <form className="authCard" onSubmit={handleSubmit}>
          <div className="authHeader">
            <h1 className="authTitle">Welcome back</h1>
            <p className="authSubtitle">
              Sign in to continue your cinematic journey
            </p>
          </div>

          {/* Social Buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            {/* <button type="button" className="socialBtn">
              <i
                className="fab fa-google"
                style={{ color: "#EA4335", fontSize: "1.1rem" }}
              ></i>{" "}
              Continue with Google
            </button> */}

            {/* <button type="button" className="socialBtn">
              <i
                className="fab fa-github"
                style={{ fontSize: "1.1rem" }}
              ></i>{" "}
              Continue with GitHub
            </button> */}
          </div>

          {/* <div className="formDivider">or sign in with email</div> */}

          {/* Email */}
          <div className="formGroup">
            <label className="formLabel">Email address</label>

            <div className="inputWrapper">
              <i className="fa fa-envelope inputIcon"></i>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="formInput inputWithIcon"
                placeholder="tirth@gmail.com"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="formGroup">
            <label className="formLabel">Password</label>

            <div className="inputWrapper">
              <i className="fa fa-lock inputIcon"></i>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="formInput inputWithIcon"
                placeholder="••••••••"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--textMuted)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <i
                  className={`fa ${
                    showPassword ? "fa-eye-slash" : "fa-eye"
                  }`}
                ></i>
              </button>
            </div>

            <Link to="/login" className="forgotLink">
              Forgot password?
            </Link>
          </div>

      

          {/* Login Button */}
          <button
            type="submit"
            className="btnPrimary btnFull"
            style={{
              borderRadius: "var(--radiusSm)",
              justifyContent: "center",
            }}
          >
            Sign In
          </button>

          {/* Footer */}
          <div className="authFooter">
            Don't have an account?{" "}
            <Link to="/register">Create one free</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;