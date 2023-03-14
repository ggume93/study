import React from "react";
import "./css/style.css";

function Header() {
     return (
          <>
               {/* pc영역 */}
               <div className="header_area_pc d-none d-lg-block">
                    <div className="master_area over_h">
                         <div className="row g-0">
                              <div className="logo_area">
                                   <img src={require("./images/logo.png")} className="logo_size" />
                              </div>
                              <div className="col text-center menu_center_area">
                                   <a href="" className="ml15 mr15 class_text1" id="class_text1">
                                        회사소개
                                   </a>
                                   <a href="" className="ml15 mr15">
                                        담보대출
                                   </a>
                                   <a href="" className="ml15 mr15">
                                        커뮤니티
                                   </a>
                                   <a href="" className="ml15 mr15">
                                        제휴안내
                                   </a>
                              </div>
                              <div className="menu_right_area">
                                   <img src={require("./images/h_icon.png")} alt="이미지" className="h_img_size mr15" />
                                   <span className="name_color ">홍길동</span>
                                   <span className="mr15">님</span>
                                   <input type="button" value="마이페이지" className="mypage_bt mr15" />
                                   <a href="">로그아웃</a>
                              </div>
                         </div>
                    </div>
               </div>
               {/* mobile영역 */}
               <div className="header_area_mobile d-block d-lg-none">
                    <div className="master_area d-flex flex-wrap">
                         <div className="col-6 offset-3 text-center">
                              <img src={require("./images/logo.png")} className="logo_size_mo" />
                         </div>
                         <div className="col-3 text-end">asd</div>
                    </div>
               </div>

               <div className="he90 d-none d-lg-block"></div>
               <div className="he60 d-block d-lg-none"></div>
          </>
     );
}

export default Header;
