import React from "react";
import PropTypes from "prop-types";
import './encyclopedia.css';

const About = (props) => {
  return (
    <>
      <div className="row" id="encyclopedia">
        {/* block1 */}
        <div className="col-lg-4 p-3 box-child">
      
          <div className="block-child">
           
            <ul className="encyclopedia_nav">
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Site news</a>
              </li>
              <li>
                <a href="#">Staff openings</a>
              </li>
            </ul>
          </div>
        </div>
        {/* block 2 */}
        <div className="col-lg-4 p-3 box-child">
          <div className="block-child">
            
            <ul className="encyclopedia_nav">
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Copyright policy</a>
              </li>
              <li>
                <a href="#">Other policies</a>
              </li>
              <li>
                <a href="#">Advertise with ANN</a>
              </li>
            </ul>
          </div>
        </div>

        {/* block 3 */}
        <div className="col-lg-4 p-3 box-child">
          <div className="block-child">
            <h2 className="title">Help...</h2>
          
            <ul className="encyclopedia_nav">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Report a Problem</a>
              </li>
              <li>
                <a href="#">Bugs & Technical Questions Forum</a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </>
  );
};

About.propTypes = {};

export default About;
