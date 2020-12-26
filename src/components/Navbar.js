import React, { useState, useEffect } from "react";
import Logo from "../img/logo.name.no-dot.png";
import {FaFacebookSquare,FaTwitterSquare,FaYoutubeSquare,FaInstagramSquare,FaGithubSquare} from "react-icons/fa";

function Navbar() {
  const [locale, showLocale] = useState(false);

  return (
    <header id="navbar">
      {/*Box left (logo, icon social network)*/}
      <div className="navbar__left ">
        <div className="navbar__logo">
          <a href="https://www.google.com/">
            <img src={Logo} alt="logo website" />
          </a>
        </div>
        <div
          className="navbar__button dropdown"
          onClick={()=> showLocale(!locale)}
        >
          <button type="button">
            World <span>&#x25BC;</span>
          </button>
          <ul
            className="navbar_locale_show"
            style={{ visibility: locale ? "visible" : "hidden" }}
          >
            <li>
              <a href="https://www.google.com/">World</a>
            </li>
            <li>
              <a href="#">USA & Canada</a>
            </li>
            <li>
              <a href="#">Australia & New-Zealand</a>
            </li>
            <li>
              <a href="#">India</a>
            </li>
            <li>
              <a href="#">Southeast Asia</a>
            </li>
            <li>
              <a href="#">Francais</a>
            </li>
          </ul>
        </div>
        <div className="navbar__icon_social">
          <a href="#">
            <FaFacebookSquare/>
          </a>
          <a href="#">
            <FaYoutubeSquare/>
          </a>
          <a href="#">
            <FaTwitterSquare/>
          </a>
          <a href="#">
            <FaInstagramSquare/>
          </a>
          <a href="#">
            <FaGithubSquare/>
          </a>
          
        </div>
      </div>
      {/*Box right (input search )*/}
      <div className="navbar__right">
        <form action="" className="navbar__form_search">
          <input type="text" name="navbar__search" />
          <button className="navbar__button">
            <i className="fas fa-search" />
          </button>
        </form>
      </div>
    </header>
  );
}

export default Navbar;
