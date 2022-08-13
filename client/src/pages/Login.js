import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import LoginForm from '../components/LoginForm';
import {QUERY_ME} from '../utils/queries';
import { useEffect, useReducer } from 'react';
import { useUser } from '../context/UserContext';
import reducer from '../context/reducers';
import {LOGIN, LOGOUT} from '../context/actions';


const Login = () => {
  const initialState = useUser();
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(props);
  // const {appState, setAppState} = props;
  const { loading, data } = useQuery(QUERY_ME, {
    fetchPolicy: "no-cache"
  });

  const me = data?.me || {};

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
        <h1>Login</h1>
      </div>
      <div className="card-body m-5">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            { me && me.hasOwnProperty("_id") ? (
              <ul className="square">
                  {/*logged in */}
                    <li>{me.name} is logged in</li>  
                    <li>email: {me.email}</li>
              </ul>
            ) : (
              <>{/*Not Logged in - need form*/}
                <LoginForm/>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
