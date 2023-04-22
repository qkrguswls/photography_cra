import React from 'react';

export default function FooterComponent() {
   return (
      <footer id="footer">
            <div className="container">
               <div className="gap">
                  <div className="row1">
                        {/* <!-- w3schools에서 아이콘 이름만 복사해옴(try it없이!) --> */}
                        <a href="!#"><i className="fa fa-facebook-f"></i></a>
                        <a href="!#"><i className="fa fa-twitter"></i></a>
                        <a href="!#"><i className="fa fa-dribbble"></i></a>
                        <a href="!#"><i className="fa fa-youtube-play"></i></a>
                        <a href="!#"><i className="fa fa-linkedin"></i></a>
                  </div>
                  <hr/>
                  <div className="row2">
                     <p>© 2022 BRANDO IS PROUDLY POWERED BY THEMEZAA.</p>
                  </div>
               </div>
            </div>
      </footer>
   );
};

