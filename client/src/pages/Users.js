import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

const Users = () => {
  const { loading, data } = useQuery(QUERY_USERS, {
    fetchPolicy: "no-cache"
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // copy
    const formValues = {...formState};
    // modify
    formValues[name] = value;
    // set state
    setFormState(formValues);
  }

  const userList = data?.users || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Users List!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Here is a list of users on this website:</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
            {userList.map((user) => {
              return (
                <li key={user._id}>
                <span>{user.name}</span><br />
                <span>{user.email}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div>
        <form>
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            placeholder='Name of person' 
            onChange={handleInputChange}
            value={formState.name}
          />
          <label>Email</label>
          <input 
            type="text"
            name="email" 
            placeholder='Email of person' 
            onChange={handleInputChange}
            value={formState.email}
          />
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            placeholder='Password' 
            onChange={handleInputChange}
            value={formState.password}
          />
        </form>
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to create a new matchup?</h2>
        <Link to="/matchup">
          <button className="btn btn-lg btn-danger">Create Matchup!</button>
        </Link>
      </div>
    </div>
  );
};

export default Users;
