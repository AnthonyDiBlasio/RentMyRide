import React, {useEffect, useReducer} from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { useUser } from '../context/UserContext';
import reducer from '../context/reducers';
import {LOGIN, LOGOUT} from '../context/actions';

const Home = () => {
  const initialState = useUser();
  const [state, dispatch] = useReducer(reducer, initialState);

  const logout = (event) =>{
    event.preventDefault();

    Auth.logout(dispatch);
  }

  

  const { loading: loadingMe, data: dataMe } = useQuery(QUERY_ME, {
    fetchPolicy: "no-cache"
  });

  const me = dataMe?.me || {};

  useEffect( () => {
    if(me && me.hasOwnProperty("_id")){
      if(state.user === null || me._id !== state.user._id ){
        dispatch({type: LOGIN, payload: me});
      }
    }
  }); // want to update state on any change
  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Tech Matchup!</h1>
        <Link to="/login">{ state.logged_in ? "Profile" : "Login" }</Link><br />
        <a href="/logout" onClick={logout}>Logout</a><br/>
        { state.logged_in ? (
          <></>
        ) : (
          <>
            <Link to="/signup">Sign Up</Link>
            <br />
          </>
        )}
        
      </div>
    </div>
  );
};

export default Home;
