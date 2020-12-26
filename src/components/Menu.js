import React, { useEffect, useState } from "react";
import News from "./MenuPrimary/News";
import Views from "./MenuPrimary/Views";
import NewAnime from "./MenuPrimary/NewAnime";
import Encyclopedia from "./MenuPrimary/Encyclopedia";
import Forum from "./MenuPrimary/Forum";
import MyAnn from "./MenuPrimary/MyAnn";
import About from "./MenuPrimary/About";
import LoginRegister from "./MenuPrimary/LoginRegister";
import {FaSignInAlt} from 'react-icons/fa';
function Menu(props) {
  const [index, setIndex] = useState(null);
  const [sameId,setSamId] = useState(false);
  const handleActive = (id, e) => {
    e.preventDefault();
    if (id === index) {
      setIndex(null);
      setSamId(true);
      return false;
    }
    setSamId(false);
    setIndex(id);
  };
  const listLi = [
    {
      id: 1,
      name: "News"
    },
    {
      id: 2,
      name: "Views"
    },
    {
      id: 3,
      name: "New Anime"
    },
    { 
      id: 4,
      name: "Encyclopedia"
    },
    {
      id: 5,
      name: "Forum"
    },
    {
      id: 6,
      name: "My ANN"
    },
    {
      id: 7,
      name: "About"
    },
    {
      id: 8,
      name: "Login and Register"
    },
  ]
  const content =[
    {
      id: 1,
      content: ()=>{
        return <News/>
      }
    },
    {
      id: 2,
      content: ()=>{
        return <Views/>
      }
    },
    {
      id: 3,
      content: ()=>{
        return <NewAnime/>
      }
    },
    {
      id: 4,
      content: ()=>{
        return <Encyclopedia/>
      }
    },
    {
      id: 5,
      content: ()=>{
        return <Forum/>
      }
    },
    {
      id: 6,
      content: ()=>{
        return <MyAnn/>
      }
    },
    {
      id: 7,
      content: ()=>{
        return <About/>
      }
    },
    {
      id: 8,
      content: ()=>{
        return <LoginRegister/>
      }
    },
  ]
  return (
    <React.Fragment>
      <nav id="topMenu">
        <ul id="topMenu_nav">
          {listLi.map((data)=>{
            return <li key={data.id}
            style={index === data.id ? { backgroundColor: "#3399CC" } : {}}
            onClick={(e) => handleActive(data.id, e)}
          >
            {data.id === 8 && <FaSignInAlt  className="mr-1 mb-1"/>}
            {data.name}
          </li>
          })}
          
        </ul>
        <div className="tab-content">
          {content.map((data)=>{
            return <div
            key={data.id}
            className={`tab-child col-md-12 ${
              index === data.id ? "maxH-1000 downEffect" : "maxH-0"
            } ${sameId ? 'upEffect' : ''}`}
          >
            {data.content()}
          </div>
          })}
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Menu;
