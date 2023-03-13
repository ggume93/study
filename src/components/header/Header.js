import React from "react";
import "./css/style.css";

function Header() {
     return (
          <div className="header_area">
               <div className="master_area over_h">
                    <div className="row g-0">
                         <div className="we_130">dd</div>
                         <div className="col bg_color1 p10">dd</div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between mz50">
                         <div class="col-md-4 col-12  prl50">
                              <div className="bg_color1 fs_20_30">Flex item1</div>
                         </div>
                         <div class="col-md-8 col-12  prl50">
                              <div className="bg_color1 fs_20_30">Flex item1</div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Header;
