import "../stylesheets/Footer.css"
import { BsArrowUpRight} from 'react-icons/bs'
import { useState } from "react"
import { MdKeyboardArrowDown} from 'react-icons/md'

function Footer() {

const [childe, setchilde] = useState(true)
const [childe1, setchilde1] = useState(true)
const [childe2, setchilde2] = useState(true)
const [childe3, setchilde3] = useState(true)
const [childe4, setchilde4] = useState(true)


    return(<div>
           <div className="footer_div">
             <div className="footer_div_childe">
               <h4 className="footer_childe_head"  onClick={()=>{
                 setchilde(!childe)
               }}>Chrome Family <MdKeyboardArrowDown className={childe?"arrow_footer":"arrow_footer_false"}/></h4>
               <div className={childe?"footer_childe_links":"footer_childe_links_false"}>
               <a href="#" className="footer_childe_text">Other Platforms</a>
               <a href="#" className="footer_childe_text">Other Platforms<BsArrowUpRight className="footer_childe_arrow"/></a>
               <a href="#" className="footer_childe_text">Chromebooks <BsArrowUpRight className="footer_childe_arrow"/></a>
               <a href="#" className="footer_childe_text">Chromecast <BsArrowUpRight className="footer_childe_arrow"/></a>
               <a href="#" className="footer_childe_text">Chrome Cleanup Tool <BsArrowUpRight className="footer_childe_arrow"/></a>                           
               </div>
             </div>

             <div className="footer_div_childe">
               <h4 className="footer_childe_head" onClick={()=>{
                 setchilde1(!childe1)
               }}>Enterprise <MdKeyboardArrowDown className={childe1?"arrow_footer":"arrow_footer_false"}/></h4>
               <div className={childe1?"footer_childe_links":"footer_childe_links_false"}>
               <a href="#" className="footer_childe_text">Download Chrome Browser <BsArrowUpRight className="footer_childe_arrow"/></a>
               <a href="#" className="footer_childe_text"> Chrome Browser for Enterprise <BsArrowUpRight className="footer_childe_arrow"/></a>
               <a href="#" className="footer_childe_text">Chrome Devices  <BsArrowUpRight className="footer_childe_arrow"/></a>
               <a href="#" className="footer_childe_text">Chrome OS  <BsArrowUpRight className="footer_childe_arrow"/></a> 
               <a href="#" className="footer_childe_text">Google Cloud <BsArrowUpRight className="footer_childe_arrow"/></a>
               <a href="#" className="footer_childe_text">Google Workspace   <BsArrowUpRight className="footer_childe_arrow"/></a>                                                     
               </div>
             </div>
             
             <div className="footer_div_childe">
               <h4 className="footer_childe_head" onClick={()=>{
                 setchilde2(!childe2)
               }}>Education <MdKeyboardArrowDown className={childe2?"arrow_footer":"arrow_footer_false"}/></h4>
               <div className={childe2?"footer_childe_links":"footer_childe_links_false"}>
               <a href="#" className="footer_childe_text">Google Chrome Browser <BsArrowUpRight className="footer_childe_arrow"/></a>
               <a href="#" className="footer_childe_text"> Devices  <BsArrowUpRight className="footer_childe_arrow"/></a>
               <a href="#" className="footer_childe_text">Web Store <BsArrowUpRight className="footer_childe_arrow"/></a>
               </div>
             </div>

             <div className="footer_div_childe">
               <h4 className="footer_childe_head" onClick={()=>{
                 setchilde3(!childe3)
               }}>Dev and Partners <MdKeyboardArrowDown className={childe3?"arrow_footer":"arrow_footer_false"}/></h4>
               <div className={childe3?"footer_childe_links":"footer_childe_links_false"}>
               <a href="#" className="footer_childe_text">Chromium  <BsArrowUpRight className="footer_childe_arrow"/></a>
               <a href="#" className="footer_childe_text">Chrome OS <BsArrowUpRight className="footer_childe_arrow"/></a>
               <a href="#" className="footer_childe_text">Chrome Web Store <BsArrowUpRight className="footer_childe_arrow"/></a>
               <a href="#" className="footer_childe_text">Chrome Experiments  <BsArrowUpRight className="footer_childe_arrow"/></a> 
               <a href="#" className="footer_childe_text">Chrome Beta</a>
               <a href="#" className="footer_childe_text">Chrome Dev</a>                                                     
               <a href="#" className="footer_childe_text">Chrome Canary</a>                                                     

               </div>
             </div>
           
             <div className="footer_div_childe">
               <h4 className="footer_childe_head" onClick={()=>{
                 setchilde4(!childe4)
               }}>Stay Connected <MdKeyboardArrowDown className={childe4?"arrow_footer":"arrow_footer_false"}/></h4>
               <div className={childe4?"footer_childe_links":"footer_childe_links_false"}>
               <a href="#" className="footer_childe_text">Google Chrome Blog  <BsArrowUpRight className="footer_childe_arrow"/></a>
               <a href="#" className="footer_childe_text">Update Chrome </a>
               <a href="#" className="footer_childe_text">Chrome Help  <BsArrowUpRight className="footer_childe_arrow"/></a>
               <a href="#" className="footer_childe_text">Chrome Tips</a>
                                                            

               </div>
             </div>
           

           </div>
           
           

          </div>)
}

export default Footer