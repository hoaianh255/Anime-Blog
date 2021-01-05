import React, {useEffect, useRef, useState} from "react";
import {listLi,content} from "./dataMenu";
import {FaSignInAlt} from 'react-icons/fa';
import  './menu.css';
function Menu() {
  const [index, setIndex] = useState(null);
  const handleActive = (id, e) => {
    e.preventDefault();
    if (id === index) {
      setIndex(null);
      return false;
    }
    setIndex(id);
  };

  return (
    <React.Fragment>
      <nav id="topMenu">
        <ul id="topMenu_nav">
          {listLi.map((data,i) => {
            return <li key={i}
                       style={index === data.id ? {backgroundColor: "#3399CC"} : {}}
                       onClick={(e) => handleActive(data.id, e)}
            >
              <a href="#">
                {data.id === 8 && <FaSignInAlt className="mr-1 mb-1"/>}
                {data.name}
              </a>
            </li>
          })}

        </ul>
        <div className="tab-content" >

            {content.map(val => {
              return (
                <div key={val.id} className={`tab-child col-md-12 ${val.id === index ? 'maxH-1200 downEffect' : 'maxH-0'} ${index === null && 'upEffect'}`} >
                  {val.content()}
                </div>
              )
            })}
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Menu;
