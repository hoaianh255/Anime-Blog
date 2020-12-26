import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./app.css";
import "./css/navbar.css";
import "./css/menu.css";
import "./css/newsCpn.css";
import "./css/banner.css";
import "./css/encyclopedia.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import NavCategories from './components/NavCategories';
function App() {
  return (
    <div id="page" className="container">
      <Navbar />
      <Menu />
      <Banner />
      <NavCategories/>
    </div>
  );
}

export default App;
