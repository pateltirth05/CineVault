import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import "../style/style.css";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
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
      const data = await registerUser(formData);

      alert(data.message);

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="authPage">
      {/* Left Side */}
      <div className="authBg">
        <img
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=900&q=80"
          alt="Cinema"
        />

        <div className="authBgOverlay">
          <Link
            to="/"
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

          <div style={{ maxWidth: "400px", marginTop: "auto" }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.6rem",
                fontWeight: "700",
                color: "#fff",
                marginBottom: "1rem",
              }}
            >
              Join 500,000+ cinephiles worldwide
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.9rem",
                }}
              >
                <span style={{ color: "var(--gold)", fontSize: "1.1rem" }}>
                  ✓
                </span>
                AI-powered personalized recommendations
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.9rem",
                }}
              >
                <span style={{ color: "var(--gold)", fontSize: "1.1rem" }}>
                  ✓
                </span>
                Track your entire watch history
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.9rem",
                }}
              >
                <span style={{ color: "var(--gold)", fontSize: "1.1rem" }}>
                  ✓
                </span>
                Create unlimited watchlists
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.9rem",
                }}
              >
                <span style={{ color: "var(--gold)", fontSize: "1.1rem" }}>
                  ✓
                </span>
                Connect with the film community
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="authPanel">
        <form className="authCard" onSubmit={handleSubmit}>
          <div className="authHeader">
            <h1 className="authTitle">Create your account</h1>

            <p className="authSubtitle">
              Free forever. No credit card needed.
            </p>
          </div>

          {/* Name */}
          <div className="formGroup">
            <label className="formLabel">Full Name</label>

            <input
              type="text"
              name="name"
              className="formInput"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="formGroup">
            <label className="formLabel">Email address</label>

            <div className="inputWrapper">
              <i className="fa fa-envelope inputIcon"></i>

              <input
                type="email"
                name="email"
                className="formInput inputWithIcon"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
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
                className="formInput inputWithIcon"
                placeholder="Minimum 6 characters"
                value={formData.password}
                onChange={handleChange}
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
          </div>

         

          {/* Submit */}
          <button
            type="submit"
            className="btnPrimary btnFull"
            style={{
              borderRadius: "var(--radiusSm)",
              justifyContent: "center",
            }}
          >
            Create Account
          </button>

          {/* Footer */}
          <div className="authFooter">
            Already have an account? <Link to="/login">Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;