import React from "react"
import {GiLifeSupport} from "react-icons/gi"
import {FaGratipay} from "react-icons/fa"
import {BsThreeDotsVertical} from "react-icons/bs"

function Explore(){
       return(
              <div className="gala-explore">
                     <div className="container">
                            <div className="content-player"></div>
                            <div className="content-desc">
                                   <div className="container">
                                          <div className="desc-info">
                                                 <div className="break"></div>
                                                 <h2>Practice Title.</h2>
                                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque explicabo corrupti, consequuntur, sint labore eveniet dicta quisquam inventore fuga adipisci nostrum veniam. Ipsam ea at, ipsum provident excepturi officia error.</p>
                                                 <div className="expand"><BsThreeDotsVertical /></div>
                                          </div>
                                          <div className="desc-buttons">
                                                 <div>
                                                        <button className="support btn"> <GiLifeSupport className="support-icon"/> Support</button>
                                                 </div>
                                                 <div>
                                                        <button className="tip btn"> <FaGratipay className="tip-icon"/> Tip</button>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       )
}

export default Explore