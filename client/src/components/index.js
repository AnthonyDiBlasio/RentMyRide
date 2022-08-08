import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({appState, setAppState}) => {
  const [login, { error, data }] = useMutation(LOGIN_USER);
  let navigate = useNavigate();

  const [formState, setFormState] = useState({
    email: "turtle@turtle.com",
    password: "password1111"
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormState({
      ...formState,
      [name]: value
    });
  }

  const onFormSubmit = async(event) => {
    event.preventDefault();
    console.log(formState);

    const result = await login({
      variables: {...formState}
    });
    console.log(result);
    Auth.login(appState, setAppState, result.data.login.token, result.data, navigate);
  }
  return (
    <form onSubmit={onFormSubmit}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="email-label">Email</span>
        <input 
          name="email" type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-label" 
          value={formState.email}
          onChange={handleChange}
          />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="password-label">Password</span>
        <input 
          name="password" type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-label" 
          value={formState.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  );
};

export default LoginForm;
