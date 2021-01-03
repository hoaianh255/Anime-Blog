import News from "./childMenu/News";
import Views from "./childMenu/Views";
import NewAnime from "./childMenu/NewAnime";
import Encyclopedia from "./childMenu/Encyclopedia";
import Forum from "./childMenu/Forum";
import MyAnn from "./childMenu/MyAnn";
import About from "./childMenu/About";
import LoginRegister from "./childMenu/LoginRegister";
import React from "react";

export  const listLi = [
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
export const content = [
  {
    id: 1,
    content: () => {
      return <News/>
    }
  },
  {
    id: 2,
    content: () => {
      return <Views/>
    }
  },
  {
    id: 3,
    content: () => {
      return <NewAnime/>
    }
  },
  {
    id: 4,
    content: () => {
      return <Encyclopedia/>
    }
  },
  {
    id: 5,
    content: () => {
      return <Forum/>
    }
  },
  {
    id: 6,
    content: () => {
      return <MyAnn/>
    }
  },
  {
    id: 7,
    content: () => {
      return <About/>
    }
  },
  {
    id: 8,
    content: () => {
      return <LoginRegister/>
    }
  },
]