import React, {useState} from "react"
import {FaSearch} from "react-icons/fa"
import {AiFillHome} from "react-icons/ai"
import {FaWpexplorer} from "react-icons/fa"
import {FaLaughSquint} from "react-icons/fa"
import galaLogo from "../../images/Diana-logo.png"


function Nav(){
       const [click, setClick] = useState(false)
       const search = () =>{
              setClick(!click)
       }
       const escSearch = () => {
              setClick(!click)
              // console.log('hello')
       }
       
       return(
              <div className="nav">
                     <div className="nav-container">
                            <div className="nav-logo">
                                   <img src={galaLogo} alt=""/>
                            </div>
                            <div className="main-nav"></div>
                            <div className="top-nav">
                                   <div className="nav-home"><AiFillHome className="nav-icon"/></div>
                                   <div className="nav-explore"><FaWpexplorer className="nav-icon"/></div>
                                   <div className="nav-standup"><FaLaughSquint className="nav-icon"/></div>
                            </div>
                            <div className="search">
                                   <FaSearch className={`search-icon ${click? "hidden" : ""}`}/> <input type="text" placeholder="search creators" onClick={search} onKeyUp={(e) =>{
                                          if(e.key === "Escape"){
                                                 escSearch()
                                          }
                                   }}/>
                            </div>
                            <div className={`search-results ${click? "show" : ""}`}></div>
                     </div>
              </div>
       )
}

export default Nav