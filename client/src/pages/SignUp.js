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
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function BasicExample() {
  return (
    <Card style={{ width: "30rem", padding: "20px" }}>
      <Card.Body>
        <Card.Title style={{ textAlign: "center", fontSize: "30px" }}>
          Sign Up
        </Card.Title>
        <Container>
          {/* <Row className="justify-content-center" lg={3}>
            <Col> */}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          {/* </Col>
          </Row> */}
        </Container>
      </Card.Body>
    </Card>
  );
}

function SignUp(props) {
  const [createUser] = useMutation(CREATE_USER);
  const initialState = useUser();
  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    "name-finished": true,
    "email-finished": true,
    "password-finished": true,
    "name-verified": true,
    "email-verified": true,
    "password-verified": true,
  });

  const verify = (name, data) => {
    if (name === "name") {
      if (data.length < 6) {
        return { [name + "-verified"]: false }; // something is wrong, data is not long enough
      }
    } else if (name === "email") {
      if (!/.+@.+\..+/.test(data)) {
        return { [name + "-verified"]: false }; // something is wrong, regex says it is not an email
      }
    } else if (name === "password") {
      if (!/[a-zA-Z0-9!-]+/i.test(data)) {
        return { [name + "-verified"]: false }; // something is wrong, regex says it is not using the right characters
      }
      if (data.length < 6) {
        return { [name + "-verified"]: false }; // something is wrong, data is not long enough
      }
    }
    return {
      [name + "-verified"]: true,
    };
  };
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const verifyResult = verify(name, value);
    console.log(verifyResult);

    setFormState({
      ...formState,
      ...verifyResult,
      [name]: value,
    });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    // alert(JSON.stringify(formState));
    let { name, email, password } = formState;
    let tokenUser = await createUser({
      variables: {
        name,
        email,
        password,
      },
    });
    const token = tokenUser.data.createUser.token;
    const user = tokenUser.data.createUser.user;

    // formData.login.user
    Auth.login(
      dispatch,
      token,
      {
        login: user,
      },
      navigate
    );
  };
  return (
    <section className="card">
      <form onSubmit={submitHandler}>
        {!formState["name-verified"] ? (
          <>
            <span className="badge text-bg-danger">
              Name must be longer than 6 characters
            </span>
            <br />
          </>
        ) : (
          <></>
        )}
        Enter your Name:&nbsp;
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={onChangeHandler}
        />
        <br />
        {!formState["email-verified"] ? (
          <>
            <span className="badge text-bg-danger">
              Email must look like "name@company.com"
            </span>
            <br />
          </>
        ) : (
          <></>
        )}
        Email: &nbsp;
        <input
          type="text"
          name="email"
          value={formState.email}
          onChange={onChangeHandler}
        />
        <br />
        {!formState["password-verified"] ? (
          <>
            <span className="badge text-bg-danger">
              Password must be longer than 5 characters and use letters, numbers
              or "!" or "-".
            </span>
            <br />
          </>
        ) : (
          <></>
        )}
        Password: &nbsp;
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={onChangeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
