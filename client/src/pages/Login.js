import { useLogin } from "../context/UserContext";
import React, { useState } from "react";

const Login = () => {
  //pulling in UserContext data
  const login = useLogin();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    await login(formState);
    // console.log(result);
    // Auth.login(
    //   appState,
    //   setAppState,
    //   result.data.login.token,
    //   result.data,
    //   navigate
    // );
  };
  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Login</h1>
      </div>
      <div className="card-body m-5">
        <form onSubmit={onFormSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="email-label">
              Email
            </span>
            <input
              name="email"
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="email-label"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="password-label">
              Password
            </span>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="password-label"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
