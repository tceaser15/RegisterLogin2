import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
   <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">     
          <div className="sb_footer-links_div">
           
          </div>    
        <hr></hr>

        <div className="sb_footer-below">
          <div className="sb_footer-cpoyright">
            <p>
              @{new Date().getFullYear()} 
            </p>
          </div>
         
      </div>

      </div>
     </div>
   </div>
  )
}

export default Footer;