import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../../images/logo.png";
import useFirebase from "../../../hooks/useFirebase";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    signInWithGoogle,
    loginWithEmailAndPassword,
    user,
    authError,
    loading,
  } = useFirebase();

  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    signInWithGoogle(navigate, location);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // Login user using email and passworld
    loginWithEmailAndPassword(data.email, data.password, navigate, location);
  };

  return (
    <div className="login-container">
      <div className="mb-2">
        <img src={logo} style={{ width: "60px", height: "60px" }} alt="" />
      </div>
      <div>
        <h2 className="h3 mb-4">Login to Home Solution</h2>
      </div>
      <div className="login-form border rounded">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              defaultValue={user.email}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-warning">This field is required</span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-warning">This field is required</span>
            )}
          </div>
          <input
            type="submit"
            className="btn btn-primary fw-bold"
            value="Login"
          />
        </form>
        <div className="mt-4 d-grid">
          <button onClick={handleGoogleSignIn} className="btn btn-success">
            <i className="fab fa-google text-light"></i> &nbsp; &nbsp; Continue
            with Google
          </button>
        </div>

        {loading && (
          <div className="text-center mt-4">
            <div className="spinner-border text-primary"></div>
          </div>
        )}

        {authError && (
          <div className="alert alert-danger mt-4" role="alert">
            {authError}
          </div>
        )}
      </div>
      <div
        className="border mt-4"
        style={{ backgroundColor: "#f6f8fa", padding: "10px 82px" }}
      >
        <span>
          New to Home Solution? <Link to="/register">Register</Link>{" "}
        </span>
      </div>
    </div>
  );
};

export default Login;
