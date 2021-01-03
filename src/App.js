import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./app.css";
import {Navbar,Menu,Banner,NavCategories,AnimeShow} from "./components";

function App() {
  return (
    <div id="page" className="container">
      <Navbar />
      <Menu />
      <Banner />
      <NavCategories/>
      <AnimeShow/>
    </div>
  );
}

export default App;
