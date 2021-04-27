import React from "react"
import thumbnail from "../../images/maxresdefault.jpg"
import creator from "../../images/Diana-logo.png"

function ContentTN(){
       return(
              <div className="content">
                     <div className="content-thumbnail">
                            <div className="thumbnail-info">
                                   <p>Joseph Adeyanju</p>
                                   <div className="pbg"></div>
                                   <h2>Lorem addes sedes...</h2>
                                   <div className="h2bg"></div>
                                   <img src={thumbnail} alt=""/>
                            </div>
                            <div className="nailBg"></div>
                            <div className="creator">
                                   <img src={creator} alt=""/>
                            </div>
                            {/* <div className="thumbnail-info">
                                   <p>Joseph Adeyanju</p>
                                   <div className="pbg"></div>
                                   <h2>Lorem addes sedes...</h2>
                                   <div className="h2bg"></div>
                                   <img src={thumbnail} alt=""/>
                            </div>
                            <div className="nailBg"></div>
                            <div className="creator">
                                   <img src={creator} alt=""/>
                            </div> */}
                     </div>
              </div>
       )
}

export default ContentTN