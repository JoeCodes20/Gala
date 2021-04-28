import React from "react"
import {SiAirplayvideo} from "react-icons/si"
import {CgComedyCentral} from "react-icons/cg"
import {FiTrendingUp} from "react-icons/fi"
import {FaArtstation} from "react-icons/fa"
import {FaMusic} from "react-icons/fa"
import {GiFilmProjector} from "react-icons/gi"
import {FaGrinStars} from "react-icons/fa"
import {FaWpexplorer} from "react-icons/fa"
import userProfile from "../../images/personal-1.png"

function Content(){
       return(
              <div className="content">
                     <div className="content-container">
                            <div className="userSelector">
                                   <ul>
                                          <li>
                                                 <div className="content-user categorySelector">
                                                        <div className="category-img profile">
                                                               <img src={userProfile} alt=""/>
                                                        </div> 
                                                 <div className="category-title">
                                                        <h2>User</h2>
                                                 </div>
                                          </div>
                                          </li>
                                   </ul>
                            </div>
                            <ul>
                                   <li>
                                          <div className="content-comedy categorySelector">
                                                 <div className="category-img"> 
                                                        <CgComedyCentral className="cat-icon"/> 
                                                 </div> 
                                                 <div className="category-title">
                                                        <h2>Comedy</h2>
                                                 </div>
                                          </div>
                                   </li>
                                   <li>
                                          <div className="content-explore categorySelector">
                                                 <div className="category-img">
                                                        <FaWpexplorer className="cat-icon"/>
                                                 </div> 
                                                 <div className="category-title">
                                                        <h2>Explore</h2>
                                                 </div>
                                          </div>
                                   </li>
                                   <li>
                                          <div className="content-art categorySelector">
                                                 <div className="category-img">
                                                        <FaArtstation className="cat-icon"/>
                                                 </div> 
                                                 <div className="category-title">
                                                        <h2>Art</h2>
                                                 </div>
                                          </div>
                                   </li>
                                   <li>
                                          <div className="content-music categorySelector">
                                                 <div className="category-img">
                                                        <FaMusic className="cat-icon"/>
                                                 </div> <div className="category-title">
                                                        <h2>Music</h2>
                                                 </div>
                                          </div>
                                   </li>
                                   <li>
                                          <div className="content-clips categorySelector">
                                                 <div className="category-img">
                                                        <SiAirplayvideo className="cat-icon"/>
                                                 </div> 
                                                 <div className="category-title">
                                                        <h2>Clips</h2>
                                                 </div>
                                          </div>
                                   </li>
                                   <li>
                                          <div className="content-Standup categorySelector">
                                                 <div className="category-img">
                                                        <FaGrinStars className="cat-icon"/>
                                                 </div> 
                                                 <div className="category-title">
                                                        <h2>StandUp</h2>
                                                 </div>
                                          </div>
                                   </li>
                            </ul>
                     </div>
                     <div className="content-break"></div>
              </div>
       )
}

export default Content