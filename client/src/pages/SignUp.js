import React, { useState, useReducer } from "react";
import { CREATE_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { useUser } from "../context/UserContext";
import Auth from "../utils/auth";
import { useNavigate } from "react-router-dom";
import reducer from "../context/reducers";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export default function SignUp() {
  const initialState = useUser();
  const [_, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const [createUser] = useMutation(CREATE_USER);
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState({
    username: false,
    email: false,
    password: false,
  });
  const verify = (data) => {
    //check length of username if less than 6 set error to true
    const invalid = {};
    if (data.username.length < 6) {
      invalid.username = true;
    }
    //check the email against regex set error to true if invalid
    if (!/.+@.+\..+/.test(data.email)) {
      invalid.email = true;
    }
    //check length of password if less than 6 set error to true
    if (!/[a-zA-Z0-9!-]+/i.test(data.password)) {
      invalid.password = true;
    }
    if (data.password.length < 6) {
      invalid.password = true;
    }
    return invalid;
  };

  return (
    <Card style={{ width: "30rem", padding: "20px" }}>
      <Card.Body>
        <Card.Title style={{ textAlign: "center", fontSize: "30px" }}>
          Sign Up
        </Card.Title>
        <Container>
          <Form
            onSubmit={async (e) => {
              e.preventDefault();
              const invalid = verify(data);
              setError(invalid);
              if (Object.keys(invalid).length > 0) {
                console.log("form is invalid.");
              } else {
                let tokenUser = await createUser({
                  variables: {
                    name: data.username,
                    email: data.email,
                    password: data.password,
                  },
                });
                const token = tokenUser.data.createUser.token;
                const user = tokenUser.data.createUser.user;

                Auth.login(
                  dispatch,
                  token,
                  {
                    login: user,
                  },
                  navigate
                );
              }
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                onChange={(e) => setData({ ...data, username: e.target.value })}
                isInvalid={error.username}
              />

              <Form.Control.Feedback type="invalid">
                Name must be longer than 6 characters.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                name="email"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                isInvalid={error.email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setData({ ...data, password: e.target.value })}
                isInvalid={error.password}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </Card.Body>
    </Card>
  );
}
