import { useLogin } from "../context/UserContext";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
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
  };
  return (
    <div className="container-fluid" style={{ paddingTop: "16px" }}>
      <Card style={{ width: "30rem", padding: "20px" }}>
        <Card.Body>
          <Card.Title style={{ textAlign: "center", fontSize: "30px" }}>
            Login
          </Card.Title>

          <Form onSubmit={onFormSubmit}>
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
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
