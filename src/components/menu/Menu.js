import React, {useEffect, useRef, useState} from "react";
import {listLi,content} from "./dataMenu";
import {FaSignInAlt} from 'react-icons/fa';
import  './menu.css';
function Menu() {
  const [index, setIndex] = useState(null);
  const linksRef = useRef(null);
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
          {listLi.map((data) => {
            return <li key={data.id}
                       style={index === data.id ? {backgroundColor: "#3399CC"} : {}}
                       onClick={(e) => handleActive(data.id, e)}
            >
              {data.id === 8 && <FaSignInAlt className="mr-1 mb-1"/>}
              {data.name}
            </li>
          })}

        </ul>
        <div className="tab-content" >

            {content.map(val => {
              return (
                <div className={`tab-child col-md-12 ${val.id === index ? 'maxH-1200 downEffect' : 'maxH-0'} ${index === null && 'upEffect'}`} >
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
