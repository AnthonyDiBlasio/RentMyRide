import React from "react";
import "../styles/Footer.css";
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
          <div className="col-lg-3 col-md-6">
            <h3>logo here</h3>

            {/* Repo/Github link here (fa icon doesn't show... yet) */}
            <ul className="list-inline socila-list">
              <li className="list-inline-item">
                <a href="https://github.com/AnthonyDiBlasio/RentMyRide.git">
                  <FontAwesomeIcon icon={["fa-brands", "fa-github"]} />
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-3">
            <h3>Rent My Ride</h3>
            <ul className="list-group " style={{ listStyle: "none" }}>
              <li>
                <FontAwesomeIcon
                  icon={faBellConcierge}
                  style={{ marginRight: "10px" }}
                />
                <span>24/7 Customer Support</span>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ marginRight: "10px" }}
                />
                <span>Pick your dream car</span>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faHandHoldingDollar}
                  style={{ marginRight: "10px" }}
                />
                <span>Rent and Earn</span>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCarBurst}
                  style={{ marginRight: "10px" }}
                />
                <span>Drive with Confidence</span>
              </li>
            </ul>
          </div>

          {/* Team credits */}
          <div className="col-lg-3">
            <h3>The Team</h3>
            <ul className="list-inline">
              <li>
                <FontAwesomeIcon
                  icon={["fa-brands", "fa-github"]}
                  style={{ marginRight: "10px" }}
                />
                <a href="https://github.com/AnthonyDiBlasio">
                  Anthony DiBlassio
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={["fa-brands", "fa-github"]} />{" "}
                <a href="https://github.com/cpaschall">Cal Pascall</a>
              </li>
              <li>
                <FontAwesomeIcon icon={["fa-brands", "fa-github"]} />{" "}
                <a href="https://github.com/binnie51">Vincent Tjia</a>
              </li>
              <li>
                <FontAwesomeIcon icon={["fa-brands", "fa-github"]} />{" "}
                <a href="https://github.com/choyoonme">Jennifer Cho</a>
              </li>
              <li>
                <FontAwesomeIcon icon={["fa-brands", "fa-github"]} />{" "}
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
