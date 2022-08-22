import React from "react";
import "../styles/Footer.css";
import logo from "../images/logo.png";
import {
  faBellConcierge,
  faHandHoldingDollar,
  faCarBurst,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="pt-4 col-lg-3 col-md-12">
            <img src={logo} className="logoCar" alt="logo" />

            {/* <ul className="list-inline socila-list">
              <li className="list-inline-item">
                <a href="https://github.com/AnthonyDiBlasio/RentMyRide.git">
                  <FontAwesomeIcon icon={["fa-brands", "fa-github"]} />
                </a>
              </li>
            </ul> */}
          </div>

          <div className="col-lg-6 col-md-12">
            <h3>Rent My Ride</h3>
            <ul className="list-group " style={{ listStyle: "none" }}>
              <li>
                <FontAwesomeIcon
                  icon={faBellConcierge}
                  style={{ marginRight: "10px" }}
                />
                <span>24/7 Customer Support</span>- Here for any issues that
                might arise during your trip.
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ marginRight: "10px" }}
                />
                <span>Pick your dream car</span>- Countless makes and models to
                choose from.
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faHandHoldingDollar}
                  style={{ marginRight: "10px" }}
                />
                <span>Rent and Earn</span>- Rent your car to other and earn
                money while doing it.
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCarBurst}
                  style={{ marginRight: "10px" }}
                />
                <span>Drive with Confidence</span>- Comes with standard third
                party insurance.
              </li>
            </ul>
          </div>

          {/* Team credits */}
          <div className="col-lg-3 col-md-12">
            <h3>The Team</h3>
            <ul className="list-inline">
              <li>
                <FontAwesomeIcon
                  icon={["fa-brands", "fa-github"]}
                  style={{ marginRight: "10px" }}
                />
                <a href="https://github.com/AnthonyDiBlasio">
                  Anthony DiBlasio
                </a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fa-brands", "fa-github"]}
                  style={{ marginRight: "10px" }}
                />
                <a href="https://github.com/cpaschall">Cal Pascall</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fa-brands", "fa-github"]}
                  style={{ marginRight: "10px" }}
                />
                <a href="https://github.com/binnie51">Vincent Tjia</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fa-brands", "fa-github"]}
                  style={{ marginRight: "10px" }}
                />
                <a href="https://github.com/choyoonme">Jennifer Cho</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fa-brands", "fa-github"]}
                  style={{ marginRight: "10px" }}
                />
                <a href="https://github.com/sajjazaidi2015">Sajjad Zaidi</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright text-center">
        Copyright &copy; 2022 <span>SuperGroup</span>
      </div>
    </footer>
  );
};

export default Footer;
