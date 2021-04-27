import React from "react"
import Nav from "./components/Nav/nav"
import Explore from "./components/Explore/explore"
import Music from "./components/Music/music"
import Content from "./components/Content/content"
import ThumbNail from "./components/ThumbNail/thumbnail"
import "./style/style.css"


function Gala() {
  return (
    <div className="Gala">
      <Nav />
      <Explore />
      <Music />
      <Content />
      <ThumbNail />
    </div>
  );
}

export default Gala;
