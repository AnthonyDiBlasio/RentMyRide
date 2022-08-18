
import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import { useUser } from "../context/UserContext";
import reducer from "../context/reducers";
import { LOGIN, LOGOUT } from "../context/actions";

import "../styles/Home.css";

const Home = () => {
  const initialState = useUser();
  const [state, dispatch] = useReducer(reducer, initialState);

  const logout = (event) => {
    event.preventDefault();

    Auth.logout(dispatch);
  };

  const { loading: loadingMe, data: dataMe } = useQuery(QUERY_ME, {
    fetchPolicy: "no-cache",
  });

  const me = dataMe?.me || {};

  useEffect(() => {
    if (me && me.hasOwnProperty("_id")) {
      if (state.user === null || me._id !== state.user._id) {
        dispatch({ type: LOGIN, payload: me });
      }
    }
  }); // want to update state on any change
  return (

    <div className="container-fluid d-flex flex-wrap flex-column align-content-center">
      {/* header section */}
      <div className="carImgHeader mb-3">
        <div className="headerText">
          <h1 className="heading1Home p-5">
            Get Into Gear and Find Your Dream Ride
          </h1>
          <h2 className="heading2Home text-center">Book Online Now</h2>
        </div>

      </div>
    </div>
  );
};

export default Home;




