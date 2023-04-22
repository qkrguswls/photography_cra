// 1. Wrap 컴포넌트 만들기
function WrapComponent(){
   return(
      <div id="wrap">
         <HeaderComponent/>
         <MainComponent/>
         <FooterComponent/>
      </div>
   );
}

function HeaderComponent(){
   return(
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
}
function MainComponent(){
   return(
      <main id="main">
            <section id="section1">
               <h2>PEOPLE</h2>
               <span>
                  <strong>2480 SHOTS</strong>
               </span>
            </section>
            <section id="section2">
               <h2>NATURE</h2>
               <span>
                  <strong>2480 SHOTS</strong>
               </span>
            </section>
            <section id="section3">
               <h2>WILDLIFE</h2>
                <span>
                    <strong>2480 SHOTS</strong>
                </span>
            </section>
            <section id="section4">
                <h2>OBJECT</h2>
                <span>
                    <strong>2480 SHOTS</strong>
                </span>
            </section>
            <section id="section5">
                <div className="container">
                    <div className="gap">
                        <div className="content">
                            <div className="left">
                                <div className="col-gap">
                                    <h2>ABOUT</h2>
                                </div>
                            </div>
                            <div className="right">
                                <div className="col-gap">
                                    <h2>
                                        <span><i>"</i></span>
                                        YOU DON'T TAKE A PHOTOGRAPH, YOU MAKE IT.
                                    </h2>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <span><a href="#">CONTACT NOW</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section6">
                <div className="container">
                    <div className="gap">
                        <div className="content">
                            <div className="left">
                                <div className="col-gap">
                                    <h2>SERVICES</h2>
                                </div>
                            </div>
                            <div className="right">
                                <div className="col-gap">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <span><a href="#">SEE PORTFOLIO</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section7">
                <div className="container">
                    <div className="gap">
                        <div className="title hide">
                            <h2>PEOPLE</h2>
                        </div>
                        <div className="content">
                            <ul>
                                <li>
                                    <div className="col-gap">
                                        <figure className="img-box">
                                            <img src="./img/photography-img7.jpg" alt=""/>
                                            <figcaption className="caption-box">
                                                <h3>PEOPLE</h3>
                                                <span><a href="#">SEE PORTFOLICO</a></span>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-gap">
                                        <figure className="img-box">
                                            <img src="./img/photography-img8.jpg" alt=""/>
                                            <figcaption className="caption-box">
                                                <h3>NATURE</h3>
                                                <span><a href="#">SEE PORTFOLICO</a></span>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-gap">
                                        <figure className="img-box">
                                            <img src="./img/photography-img9.jpg" alt=""/>
                                            <figcaption className="caption-box">
                                                <h3>WILDLIFE</h3>
                                                <span><a href="#">SEE PORTFOLICO</a></span>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-gap">
                                        <figure className="img-box">
                                            <img src="./img/photography-img10.jpg" alt=""/>
                                            <figcaption className="caption-box">
                                                <h3>OBJECTS</h3>
                                                <span><a href="#">SEE PORTFOLICO</a></span>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section8">
                <div className="container">
                    <div className="gap">
                        <div className="title hide">
                            <h2>SHUFFLE GALLERY</h2>
                        </div>
                        <div className="content">
                            <nav>
                                <ul>
                                    <li><a href="#" className="gallery-btn on"><span>ALL</span></a></li>
                                    <li><a href="#" className="gallery-btn"><span>NATURE</span></a></li>
                                    <li><a href="#" className="gallery-btn"><span>OBJECT</span></a></li>
                                    <li><a href="#" className="gallery-btn"><span>PEOPLE</span></a></li>
                                    <li><a href="#" className="gallery-btn"><span>WILDLIFE</span></a></li>
                                </ul>
                            </nav>
                            <div className="gallery">
                                <ul>
                                    <li className="list list1">
                                        <div className="col-gap">
                                            <figure className="img-box">
                                                <img data-num="13" src="./img/photography-img13.jpg" alt=""/>
                                                <span className="color-cap-bg"></span>
                                                <figcaption className="figcaption">
                                                    <hr/>
                                                    <h3>PIXFLOW<br/>STUDIO</h3>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </li>
                                    <li className="list list2">
                                        <div className="col-gap">
                                            <figure className="img-box">
                                                <img data-num="14" src="./img/photography-img14.jpg" alt=""/>
                                                <span className="color-cap-bg"></span>
                                                <figcaption className="figcaption">
                                                    <hr/>
                                                    <h3>PIXFLOW<br/>STUDIO</h3>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </li>
                                    <li className="list list3">
                                        <div className="col-gap">
                                            <figure className="img-box">
                                                <img data-num="15" src="./img/photography-img15.jpg" alt=""/>
                                                <span className="color-cap-bg"></span>
                                                <figcaption className="figcaption">
                                                    <hr/>
                                                    <h3>PIXFLOW<br/>STUDIO</h3>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </li>
                                    <li className="list list4">
                                        <div className="col-gap">
                                            <figure className="img-box">
                                                <img data-num="16" src="./img/photography-img16.jpg" alt=""/>
                                                <span className="color-cap-bg"></span>
                                                <figcaption className="figcaption">
                                                    <hr/>
                                                    <h3>PIXFLOW<br/>STUDIO</h3>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </li>
                                    <li className="list list5">
                                        <div className="col-gap">
                                            <figure className="img-box">
                                                <img data-num="17" src="./img/photography-img17.jpg" alt=""/>
                                                <span className="color-cap-bg"></span>
                                                <figcaption className="figcaption">
                                                    <hr/>
                                                    <h3>PIXFLOW<br/>STUDIO</h3>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </li>
                                    <li className="list list6">
                                        <div className="col-gap">
                                            <figure className="img-box">
                                                <img data-num="18" src="./img/photography-img18.jpg" alt=""/>
                                                <span className="color-cap-bg"></span>
                                                <figcaption className="figcaption">
                                                    <hr/>
                                                    <h3>PIXFLOW<br/>STUDIO</h3>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </li>
                                    <li className="list list7">
                                        <div className="col-gap">
                                            <figure className="img-box">
                                                <img data-num="19" src="./img/photography-img19.jpg" alt=""/>
                                                <span className="color-cap-bg"></span>
                                                <figcaption className="figcaption">
                                                    <hr/>
                                                    <h3>PIXFLOW<br/>STUDIO</h3>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </li>
                                    <li className="list list8">
                                        <div className="col-gap">
                                            <figure className="img-box">
                                                <img data-num="20" src="./img/photography-img20.jpg" alt=""/>
                                                <span className="color-cap-bg"></span>
                                                <figcaption className="figcaption">
                                                    <hr/>
                                                    <h3>PIXFLOW<br/>STUDIO</h3>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </li>
                                    <li className="list list9">
                                        <div className="col-gap">
                                            <figure className="img-box">
                                                <img data-num="21" src="./img/photography-img21.jpg" alt=""/>
                                                <span className="color-cap-bg"></span>
                                                <figcaption className="figcaption">
                                                    <hr/>
                                                    <h3>PIXFLOW<br/>STUDIO</h3>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </li>
                                    <li className="list list10">
                                        <div className="col-gap">
                                            <figure className="img-box">
                                                <img data-num="22" src="./img/photography-img22.jpg" alt=""/>
                                                <span className="color-cap-bg"></span>
                                                <figcaption className="figcaption">
                                                    <hr/>
                                                    <h3>PIXFLOW<br/>STUDIO</h3>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </li>
                                    <li className="list list11">
                                        <div className="col-gap">
                                            <figure className="img-box">
                                                <img data-num="23" src="./img/photography-img23.jpg" alt=""/>
                                                <span className="color-cap-bg"></span>
                                                <figcaption className="figcaption">
                                                    <hr/>
                                                    <h3>PIXFLOW<br/>STUDIO</h3>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </li>
                                    <li className="list list12">
                                        <div className="col-gap">
                                            <figure className="img-box">
                                                <img data-num="24" src="./img/photography-img24.jpg" alt=""/>
                                                <span className="color-cap-bg"></span>
                                                <figcaption className="figcaption">
                                                    <hr/>
                                                    <h3>PIXFLOW<br/>STUDIO</h3>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section9">
                <div className="container">
                    <div className="gap">
                        <article>
                            <h2>AWRADS</h2>
                        </article>
                        <article>
                            <div className="title">
                                <hr/>
                                <h3>/ 2015</h3>
                            </div>
                            <ul>
                                <li>
                                    <figure>
                                        <img src="./img/photography-img26.jpg.webp" alt=""/>
                                    </figure>
                                    <div>
                                        <h4>GRAND WINNER</h4>
                                        <h5>THE HUMAN TOWERS</h5>
                                        <span><i></i></span>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img src="./img/photography-img27.jpg.webp" alt=""/>
                                    </figure>
                                    <div>
                                        <h4>HONORABLE MENTION</h4>
                                        <h5>EYES OF MOROCCO</h5>
                                        <span><i></i></span>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img src="./img/photography-img28.jpg.webp" alt=""/>
                                    </figure>
                                    <div>
                                        <h4>
                                            BEST PHOTOGRAPHER</h4>
                                        <h5>A WORLD OF SNAILS</h5>
                                        <span><i></i></span>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img src="./img/photography-img29.jpg.webp" alt=""/>
                                    </figure>
                                    <div>
                                        <h4>GRAND WINNER</h4>
                                        <h5>COST OF SLAVERY</h5>
                                        <span><i></i></span>
                                    </div>
                                </li>
                            </ul>
                            <div className="title">
                                <hr/>
                                <h3>/ 2014</h3>
                            </div>
                            <ul>
                                <li>
                                    <figure>
                                        <img src="./img/photography-img30.jpg.webp" alt=""/>
                                    </figure>
                                    <div>
                                        <h4>GRAND WINNER</h4>
                                        <h5>THE HUMAN TOWERS</h5>
                                        <span><i></i></span>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img src="./img/photography-img31.jpg.webp" alt=""/>
                                    </figure>
                                    <div>
                                        <h4>
                                            HONORABLE MENTION</h4>
                                        <h5>EYES OF MOROCCO</h5>
                                        <span><i></i></span>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img src="./img/photography-img32.jpg.webp" alt=""/>
                                    </figure>
                                    <div>
                                        <h4>BEST PHOTOGRAPHER</h4>
                                        <h5>A WORLD OF SNAILS</h5>
                                        <span><i></i></span>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img src="./img/photography-img33.jpg.webp" alt=""/>
                                    </figure>
                                    <div>
                                        <h4>GRAND WINNER</h4>
                                        <h5>COST OF SLAVERY</h5>
                                        <span><i></i></span>
                                    </div>
                                </li>
                            </ul>
                        </article>
                    </div>
                </div>
            </section>
            <section id="section10" className="section10-14">
                <div className="container">
                    <div className="gap">
                        <div className="left">
                            <h2>17</h2>
                            <h3>FEBRUARY 2016</h3>
                        </div>
                        <div className="right">
                            <p>IT IS MORE IMPORTANT TO CLICK WITH PEOPLE THAN TO CLICK THE SHUTTER.</p>
                            <h6>POSTED BY <a href="#">HARESH</a></h6>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section11" className="section10-14">
                <div className="container">
                    <div className="gap">
                        <div className="left">
                            <h2>11</h2>
                            <h3>APRIL 2016</h3>
                        </div>
                        <div className="right">
                            <p>BAD DESIGN IS SMOKE, WHILE GOOD DESIGN IS A MIRROR.</p>
                            <h6>POSTED BY <a href="#">HARESH</a></h6>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section12" className="section10-14">
                <div className="container">
                    <div className="gap">
                        <div className="left">
                            <h2>11</h2>
                            <h3>APRIL 2016</h3>
                        </div>
                        <div className="right">
                            <p>WE ARE MAKING PHOTOGRAPHS TO UNDERSTAND WHAT OUR LIVES MEAN TO US.</p>
                            <h6>POSTED BY <a href="#">HARESH</a></h6>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section13" className="section10-14">
                <div className="container">
                    <div className="gap">
                        <div className="left">
                            <h2>11</h2>
                            <h3>APRIL 2016</h3>
                        </div>
                        <div className="right">
                            <p>YOU DON’T TAKE A PHOTOGRAPH. YOU ASK QUIETLY TO BORROW IT.</p>
                            <h6>POSTED BY <a href="#">HARESH</a></h6>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section14" className="section10-14">
                <div className="container">
                    <div className="gap">
                        <div className="left">
                            <h2>11</h2>
                            <h3>APRIL 2016</h3>
                        </div>
                        <div className="right">
                            <p>A PORTRAIT IS NOT MADE IN THE CAMERA BUT ON EITHER SIDE OF IT.</p>
                            <h6>POSTED BY <a href="#">HARESH</a></h6>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section15">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <ul>
                                <li>
                                    <span><i className="icon-map-pin"></i></span>
                                    <h3>301 THE GREENHOUSE,</h3>
                                    <h4>LONDON, E2 8DY.</h4>
                                </li>
                                <li>
                                    <span><i className="icon-clipboard"></i></span>
                                    <h3>GENERAL ENQUIRIES</h3>
                                    <h4>SALES@DOMAIN.COM</h4>
                                </li>
                                <li>
                                    <span><i className="icon-phone"></i></span>
                                    <h3>CALL US TODAY</h3>
                                    <h4>+44 (0) 123 456 7890</h4>
                                </li>
                            </ul>
                        </div>
                        <div className="content">
                            <form name="form_mail" id="formMail" method="post" action="./form_message.php">
                                <div className="left-box">
                                    <div className="col-gap">
                                        <div className="input-box">
                                            <input type="text" name="user_name" id="userName" placeholder="Your Name" autoFocus required/>
                                            <input type="email" name="user_email" id="userEmail" placeholder="Your Email" autoFocus required/>
                                        </div>
                                        <p>*PLEASE COMPLETE ALL FIELDS CORRECTLY</p>
                                        <div className="submit-message">
                                            <p className="success-message">Your message was sent successfully. Thanks.</p>
                                            <p className="error-message">Validation errors occurred. Please confirm the fields and submit it again.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-box">
                                    <div className="col-gap">
                                        <div className="input-box">
                                            <textarea name="user_message" id="userMessage" placeholder="Your Message" autoFocus required></textarea>
                                        </div>
                                        <button type="submit" className="send-btn">SEND MESSAGE</button>
                                    </div>
                                </div>
                                <div className="send-after-msg">
                                    <p>Your message was sent successfully. Thanks.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
      </main>
   );
}
function FooterComponent(){
   return(
      <footer id="footer">
            <div className="container">
               <div className="gap">
                  <div className="row1">
                        {/* <!-- w3schools에서 아이콘 이름만 복사해옴(try it없이!) --> */}
                        <a href="#"><i className="fa fa-facebook-f"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-dribbble"></i></a>
                        <a href="#"><i className="fa fa-youtube-play"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                  </div>
                  <hr/>
                  <div className="row2">
                     <p>© 2022 BRANDO IS PROUDLY POWERED BY THEMEZAA.</p>
                  </div>
               </div>
            </div>
      </footer>
   );
}

// 2. WrapComponent와 index.html의 돔컨테이너인 root와 연결
// 방법1 - 버전17
/*
ReactDOM.render(
   <WrapComponent/>, //가상태그
   document.getElementById('root')
);
*/

// 방법2 - 버전18
// 돔컨테이너인 루트를 생성하여 연결하는 방식
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <WrapComponent/>
);
*/

// 방법3 - 버전18
// 엄격한 모드인 StrictMode사용
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <WrapComponent/>
   </React.StrictMode>
);