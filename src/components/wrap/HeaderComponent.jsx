import React from 'react';

export default function HeaderComponent() {
   return (
      <header id="header">
         <div className="container">
               <div className="gap">
                  <h1><a href="#wrap"><img src="./img/logo-photography.png.webp" alt="로고이미지"/></a></h1>
                     <nav>
                        <ul className="nav-menu">
                           <li><a href="#section5" className="nav-btn">ABOUT</a></li>
                           <li><a href="#section6" className="nav-btn">SERVICE</a></li>
                           <li><a href="#section8" className="nav-btn">PORTFOLICO</a></li>
                           <li><a href="#section9" className="nav-btn">AWRADS</a></li>
                           <li><a href="#section10" className="nav-btn">BLOG</a></li>
                           <li><a href="#section15" className="nav-btn">CONTACT</a></li>
                        </ul>
                        <div className="mobile">
                           <a href="#" className="mobile-btn">
                              <i className="line line1"></i>
                              <i className="line line2"></i>
                              <i className="line line3"></i>
                           </a>
                        </div>
                  </nav>
               </div>
         </div>
      </header>
   );
};
