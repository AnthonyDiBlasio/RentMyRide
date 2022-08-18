import React, {useEffect, useReducer} from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { useUser } from '../context/UserContext';
import reducer from '../context/reducers';
import {LOGIN, LOGOUT} from '../context/actions';
import Footer from '../components/Footer';

import '../styles/Home.css';

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
    <>
    <div className='container-fluid d-flex flex-wrap flex-column align-content-center'>
      {/* header section */}
      <div className='carImgHeader mb-3'>
        <div className='headerText'>
          <h1 className='heading1Home p-5'>Get Into Gear and Find Your Dream Ride</h1>
          <h2 className='heading2Home text-center'>Book Online Now</h2>
        </div>  
      </div>

      {/* not liking this section at Home.js. Maybe put it on about.js? */}
      <div className=' card homeInfo' style={{ width: '50rem'}}>
        <div className='card-body m-3'>
          <h3 className='card-title'>When you rent from us:</h3>
          <ul className='list-group list-group-flush'>
            <li className="list-group-item">24/7 Customer Support - Here for any issues that might arrise during your trip.</li>
            <li className="list-group-item">Pick your dream car - Countless makers and models to chosen from.</li>
            <li className="list-group-item">Rent and Earn - Rent your AMAZING car to others and earn money while doing it.</li>
            <li className="list-group-item">Drive with Confidence - comes with standard third-party insurance.</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
