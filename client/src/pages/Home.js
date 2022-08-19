import React from "react";
import { useUser } from "../context/UserContext";
import "../styles/Home.css";

const Home = () => {
  const [userData] = useUser();
  console.log(userData);
  return (
    <div className="body">
      <div className="container-fluid d-flex flex-wrap flex-column align-content-center">
        {/* header section */}
        <div className="carImgHeader">
          <div className="headerText">
            <h1 className="heading1Home p-5">
              Get Into Gear and Find Your Dream Ride
            </h1>
            <h2 className="heading2Home text-center">Book Online Now</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
