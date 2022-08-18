
import React from "react";
import '../styles/Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                            <FontAwesomeIcon icon={"fa-brands fa-square-git"} />
                            </a>
                        </li>
                    </ul>

                </div>
                
                <div className="col-lg-6 col-md-6">
                    <h3>When you rent from us:</h3>
                    <ul className="list-group ">
                        <li>
                            <span>24/7 Customer Support</span> - Here for any issues that might arrise during your trip.
                        </li>
                        <li>
                            <span>Pick your dream car</span> - Countless makers and models to chosen from.
                        </li>
                        <li>
                            <span>Rent and Earn</span> - Rent your AMAZING car to others and earn money while doing it
                        </li>
                        <li>
                            <span>Drive with Confidence</span> - comes with standard third-party insurance.
                        </li>
                    </ul>
                    
                </div>
                
                {/* Team credits */}
                <div className="col-lg-3">
                    <h3>The Team</h3>
                    <ul className="list-inline">
                        <li>
                           <a href="https://github.com/AnthonyDiBlasio">
                            Anthony DiBlassio
                           </a>
                        </li>
                        <li>
                            <a href="https://github.com/cpaschall">
                                Cal Pascall
                            </a>
                        </li>
                        <li>
                           <a href="https://github.com/binnie51">
                                Vincent Tjia
                           </a>
                        </li>
                        <li>
                            <a href="https://github.com/choyoonme">
                                Jennifer Cho
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/sajjazaidi2015">
                                Sajjad Zaidi
                            </a>
                        </li>
                    </ul>
                </div>
                
                </div>
            </div>
            <div class="copyright text-center">
                Copyright &copy; 2022 <span>SuperGroup</span>
            </div>
            </footer>
    )
}

export default Footer;


