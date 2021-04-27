import React from "react"
import logo from "../../images/Diana-logo.png"

function MovieClose(){
       return(
              <div className="section-ele-container-close">
                     <div className="coverArt">
                            <img src={logo} alt=""/>
                     </div>
                     <div className="main-element">
                            <p>Joseph Adeyanju</p> 
                            <h2>Lorem ipsum dseus.</h2>  
                            <div className="time-controle">
                                   <div className="start-time">0:00</div>
                                   <div><input type="range" className="slider"/></div>
                                   <div className="end-time">12:23</div>
                            </div>
                     </div>
                     <div className="command">
                            <button></button>
                     </div>
              </div>
       )
}

export default MovieClose