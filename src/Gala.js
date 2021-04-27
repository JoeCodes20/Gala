import React from "react"
import Nav from "./components/Nav/nav"
import Explore from "./components/Explore/explore"
import Music from "./components/Music/music"
import Content from "./components/Content/content"
import ThumbNail from "./components/ThumbNail/thumbnail"
import GalaBg from "./images/Gala-logo.png"
import Footer from "./components/Footer/footer"
import "./style/style.css"


function Gala() {
  return (
    <div className="Gala">
      <Nav />
      <Explore />
      <Music />
      <Content />
      <ThumbNail />
      <div className="galaBg">
        <img src={GalaBg} alt=""/>
      </div>
      <Footer />
    </div>
  );
}

export default Gala;
