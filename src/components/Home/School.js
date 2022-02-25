import React from 'react';
import Footer from './Footer'
import Header from './Header'
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}

const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
function School(props) {

  return (
    <div>
      <div className="main-content">
        {/*Full width header Start*/}
        <div className="full-width-header">
          {/*Header Start*/}
          <Header />
          {/*Header End*/}
          {/* Canvas Menu start */}
          <nav className="right_menu_togle hidden-md">
            <div className="close-btn">
              <div className="nav-link">
                <a id="nav-close" className="humburger nav-expander" href="#">
                  <span className="dot1" />
                  <span className="dot2" />
                  <span className="dot3" />
                  <span className="dot4" />
                  <span className="dot5" />
                  <span className="dot6" />
                  <span className="dot7" />
                  <span className="dot8" />
                  <span className="dot9" />
                </a>
              </div>
            </div>
            <div className="canvas-logo">
              <a href="index.html"><img src=
            
              {images["logo.png"]}
              alt="logo" /></a>
            </div>
            <div className="offcanvas-text">
              <p> Coursementor.com is a 24*7 Online Tutoring Platform. Get online tutoring on-demand on hundreds of subjects or topics, whenever you need it.
              </p>
            </div>
            <div className="canvas-contact">
              <div className="address-area">
                <div className="address-list">
                  <div className="info-icon">
                    <i className="flaticon-location" />
                  </div>
                  <div className="info-content">
                    <h4 className="title">Address</h4>
                    <em>#211 P,Sector7 Kurukshetra,haryana 136118</em>
                  </div>
                </div>
                <div className="address-list">
                  <div className="info-icon">
                    <i className="flaticon-email" />
                  </div>
                  <div className="info-content">
                    <h4 className="title">Email</h4>
                    <em><a href="mailto:hello@coursementor.com/">hello@coursementor.com</a></em>
                  </div>
                </div>
                <div className="address-list">
                  <div className="info-icon">
                    <i className="flaticon-call" />
                  </div>
                  <div className="info-content">
                    <h4 className="title">Phone</h4>
                    <em>1800-890-6477</em>
                  </div>
                </div>
              </div>
              <ul className="social">
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-instagram" /></a></li>
              </ul>
            </div>
          </nav>
          {/* Canvas Menu end */}
        </div>
        {/*Full width header End*/}
        {/* Banner Section Start */}
        <div className="rs-banner style3 modify2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6  order-last">
                <div className="banner-img">
                  <img src=
               
                  {images["stu-banner.jpg"]}
                  alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-content">
                  <h1 className="title"><span>Every Month, 100,000+</span><br /> Students Will See You</h1>
                  <p className="desc">
                    From a single, easy-to-use platform trusted by over 1,500 universities worldwide, expand your global presence and the number of qualified students.
                  </p>
                  <ul className="banner-btn">
                    <li><a className="readon started" href="#">Get Started</a></li>
                    {/* <li>
                                                        <div class="rs-videos">
                                                            <div class="animate-border">
                                                                <a class="popup-border popup-videos" href="https://www.youtube.com/watch?v=YLN1Argi7ik">
                                                                    <i class="fa fa-play"></i>
                                                                </a>
                                                            </div>
                                                        </div> 
                                                    </li> */}
                  </ul>
                </div>
                {/* Partner Start */}
              </div>
            </div>
          </div>
          <div className="rs-animation">
            <img className="dance3" src=
            {images["b4-dot-6.png"]}
           
             alt="images" />
          </div>
        </div>
        {/* Banner Section End */}
        {/* Services Section Start */}
        <div className="rs-services style2 modify1 pt-40 pb-120 md-pt-80 md-pb-80">
          <div className="container">
            <div className="sec-title2 text-center mb-45">
              <span className="sub-text gold-color">We Are Best</span>
              <h2 className="title">
                Our Impact
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 md-mb-30">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part purple-bg">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img src=
                            
                            {images["home-style6-6.png"]}
                            alt="" />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title"><a href="#">Students 
                            Helped </a></h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            200,000+</p>
                        </div>
                      </div>
                    </div>
                    <div className="back-front purple-bg">
                      <div className="back-front-content">
                        <div className="back-title-part">
                          <h3 className="back-title">Students
                            Helped
                          </h3>
                        </div>
                        <div className="back-desc-part">
                          <p className="back-desc">   200,000+
                          </p>
                        </div>
                        <div className="back-btn-part">
                          <a className="readon view-more" href="#">View More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 md-mb-30">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part gold-bg">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img src=
                         
                            {images["home-icons-8.png"]}
                            alt="" />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title"><a href="#">Student Source
                            Countries</a></h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            125+
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="back-front gold-bg">
                      <div className="back-front-content">
                        <div className="back-title-part">
                          <h3 className="back-title">Student Source
                            Countries</h3>
                        </div>
                        <div className="back-desc-part">
                          <p className="back-desc"> 125+ </p>
                        </div>
                        <div className="back-btn-part">
                          <a className="readon view-more" href="#">View More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part blue-bg">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img src=
                         
                            {images["home-icons-9.png"]}
                            alt="" />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title"><a href="#">Offer of
                            Admission Rate </a></h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            95%
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="back-front blue-bg">
                      <div className="back-front-content">
                        <div className="back-title-part">
                          <h3 className="back-title">Offer of
                            Admission Rate</h3>
                        </div>
                        <div className="back-desc-part">
                          <p className="back-desc">95%</p>
                        </div>
                        <div className="back-btn-part">
                          <a className="readon view-more" href="#">View More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services Section End */}
        {/* About Section Start */}
        <div className="rs-about style2 modify2 gray-color pt-120 pb-120 md-pt-80 md-pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 md-mb-50">
                <div className="sec-title mb-30">
                  <div className="sub-text style4-bg">CourseMentor</div>
                  <h2 className="title pb-20">
                    Increasing Our International Presence
                  </h2>
                  <div className="desc">
                    <ul>
                      <li><span><i className="fa fa-angle-right " /></span> Increase Student Diversity</li>
                      <li><span><i className="fa fa-angle-right " /></span> Receive Quality Applications</li>
                      <li><span><i className="fa fa-angle-right " /></span> Approved Recruiter Network</li>
                      <li><span><i className="fa fa-angle-right " /></span> Document Verification</li>
                      <li><span><i className="fa fa-angle-right " /></span> Promotional Channels</li>
                      <li><span><i className="fa fa-angle-right " /></span> Applicant Matching</li>
                    </ul>
                  </div>
                </div>
                {/* Skillbar Section Start */}
                <div className="rs-skillbar style1 home4">
                  <div className="cl-skill-bar">
                    <div className="btn-part mt-45">
                      <a className="readon started" href="course_finder_select_country.html">Get Started</a>
                    </div>
                  </div>
                </div>
                {/* Skillbar Section End */}
              </div>
              <div className="col-lg-6 pl-65 md-pl-15">
                <div className="about-img">
                  <img src=
                  
                  {images["home-about-5.png"]}
                  alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Section End */}
        <div className="rs-services style3 modify1 pt-120 pb-120 md-pt-80 md-pb-80">
          <div className="container">
            <div className="sec-title2 text-center mb-45">
              <span className="sub-text gold-color">SKILLS</span>
              <h2 className="title title2">
                How It Works
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="services-item pink-light-bg">
                  <div className="services-icon">
                    <div className="image-part">
                      <span><i className="fa fa-user " /></span>
                    </div>
                  </div>
                  <div className="services-content">
                    <div className="services-text">
                      <h3 className="title"><a href="#">Students Check Their Eligibility</a></h3>
                    </div>
                    <div className="services-desc">
                      <p>
                        Students complete a short survey and get matched to programs and schools.
                      </p>
                    </div>
                    <div className="services-button"><a href="#">Read More</a></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="services-item blue2-bg">
                  <div className="services-icon">
                    <div className="image-part">
                      <span><i className="fa fa-file " /></span>
                    </div>
                  </div>
                  <div className="services-content">
                    <div className="services-text">
                      <h3 className="title"><a href="#">Students Apply to Schools</a></h3>
                    </div>
                    <div className="services-desc">
                      <p>
                        Students select a school and program, complete their profile, pay their fees, and submit the proper documentation.
                      </p>
                    </div>
                    <div className="services-button"><a href="#">Read More</a></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="services-item paste2-bg">
                  <div className="services-icon">
                    <div className="image-part">
                      <span><i className="fa fa-check " /></span>
                    </div>
                  </div>
                  <div className="services-content">
                    <div className="services-text">
                      <h3 className="title"><a href="#">Students Get Accepted</a></h3>
                    </div>
                    <div className="services-desc">
                      <p>
                        The application is reviewed by the school and a letter of acceptance is issued.
                      </p>
                    </div>
                    <div className="services-button"><a href="#">Read More</a></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 md-mb-30">
                <div className="services-item purple2-bg">
                  <div className="services-icon">
                    <div className="image-part">
                      <span><i className="fa fa-file " /></span>
                    </div>
                  </div>
                  <div className="services-content">
                    <div className="services-text">
                      <h3 className="title"><a href="#">Student Applies for Visa</a></h3>
                    </div>
                    <div className="services-desc">
                      <p>
                        Course Mentor experts guide the student through the visa application process.
                      </p>
                    </div>
                    <div className="services-button"><a href="#">Read More</a></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 sm-mb-30">
                <div className="services-item cyan2-bg">
                  <div className="services-icon">
                    <div className="image-part">
                      <span><i className="fa fa-paper-plane " /></span>
                    </div>
                  </div>
                  <div className="services-content">
                    <div className="services-text">
                      <h3 className="title"><a href="#">Student Journey Begins</a></h3>
                    </div>
                    <div className="services-desc">
                      <p>
                        The student sets off with bags packed ready to start their adventure on your campus.
                      </p>
                    </div>
                    <div className="services-button"><a href="#">Read More</a></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="services-item pink2-bg">
                  <div className="services-icon">
                    <div className="image-part">
                      <span><i className="fa fa-graduation-cap" /></span>
                    </div>
                  </div>
                  <div className="services-content">
                    <div className="services-text">
                      <h3 className="title"><a href="web-development.html">Learn From Industry Experts</a></h3>
                    </div>
                    <div className="services-desc">
                      <p>
                        Learning top skills can bring an extra-ordinary outcome in a career.
                      </p>
                    </div>
                    <div className="services-button"><a href="web-development.html">Read More</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Technology Section Start */}
        <div className="rs-technology gray-color pt-120 pb-120 md-pt-80 md-pb-80">
          <div className="container">
            <div className="sec-title2 text-center mb-45">
              <span className="sub-text gold-color">Student</span>
              <h2 className="title title2">
                Trusted by Universities
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src=
                     
                      {images["pt-1.png"]} 
                      alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src=
                 
                      {images["pt-2.png"]} 
                      
                      alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src=
                     
                      {images["pt-3.png"]}
                      alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src=
                      {images["pt-4.png"]}
                     
                       alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src=
                     
                      {images["pt-5.png"]}
                      alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src=
                   
                      {images["pt-6.png"]}
                      alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <div className="btn-part mt-30">
                <a className="readon started" href="#">Get Started</a>
              </div>
            </div>
          </div>
        </div>
        {/* Technology Section End */}
        {/* Testimonial Section Start */}
        <div className="rs-testimonial main-home style4 modify1 pt-120 pb-120 md-pt-80 md-pb-80">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="testi-img">
                  <img src=
                 
                  {images["testimonial-3.png"]}
                  alt="" />
                </div>
              </div>
              <div className="col-lg-6 md-pt-50 modify-gap">
                <div className="sec-title mb-50">
                  <div className="sub-text style4-bg left testi">Testimonials</div>
                  <h2 className="title pb-20">
                    What Our Students Have To Say
                  </h2>
                  <div className="desc">
                    "
                    “Studying abroad in the United States changes the way one communicates. Learning under the tutelage of acclaimed professors, networking with people from different parts of the world, and establishing lifelong friendships are some of the major advantages of being an international student.”					".
                  </div>
                </div>
                <div className="rs-carousel owl-carousel owl-loaded owl-drag" data-loop="true" data-items={1} data-margin={30} data-autoplay="true" data-hoverpause="true" data-autoplay-timeout={2000} data-smart-speed={800} data-dots="true" data-nav="false" data-nav-speed="false" data-md-device={1} data-md-device-nav="false" data-md-device-dots="false" data-center-mode="false" data-ipad-device2={1} data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-ipad-device={1} data-ipad-device-nav="false" data-ipad-device-dots="true" data-mobile-device={1} data-mobile-device-nav="false" data-mobile-device-dots="false">
                  <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(-3335px, 0px, 0px)', transition: 'all 0.8s ease 0s', width: '5336px' }}><div className="owl-item cloned" style={{ width: '637px', marginRight: '30px' }}><div className="testi-item">
                    <div className="author-desc">
                      <div className="desc"><img className="quote" src=
                    
                      {images["quote2.png"]}
                      alt="" />"Based on such knowledge, we may understand several other programming languages in a more in-depth way. They have such an easy way of teaching. 5/5 rating great work keep it up"</div>
                    </div>
                    <div className="testimonial-content">
                      <div className="author-img">
                        <img src=
                        {images["3.jpg"]}
                      
                         alt="" />
                      </div>
                      <div className="author-part">
                        <a className="name" href="#">Aman</a>
                        {/* <span class="designation">Web Developer</span> */}
                      </div>
                    </div>
                  </div></div><div className="owl-item cloned" style={{ width: '637px', marginRight: '30px' }}><div className="testi-item">
                    <div className="author-desc">
                      <div className="desc"><img className="quote" src=
                    
                      {images["quote2.png"]}
                      alt="" />"
                        "Course Mentor guided me through the application process to make sure it went smoothly. They filled me with trust because their communication is so strong. Course Mentor double-checked every part of my application and visa requirements so that everything was correct.”										</div>
                    </div>
                    <div className="testimonial-content">
                      <div className="author-img">
                        <img src=
                   
                        {images["4.jpg"]}
                        alt="" />
                      </div>
                      <div className="author-part">
                        <a className="name" href="#">Parteek sharma</a>
                        {/* <span class="designation">Arist</span> */}
                      </div>
                    </div>
                  </div></div><div className="owl-item" style={{ width: '637px', marginRight: '30px' }}><div className="testi-item">
                    <div className="author-desc">
                      <div className="desc"><img className="quote" src=
                      {images["quote2.png"]}
                   
                      alt="" />" It was important for me to get an education that would provide me with real-world skills. Studying abroad in Canada is the best decision I’ve ever made, and an experience I wouldn't trade for anything"
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <div className="author-img">
                        <img src=
                      
                        {images["1.jpg"]}
                        alt="" />
                      </div>
                      <div className="author-part">
                        <a className="name" href="#">Ankit</a>
                        {/* <span class="designation">CEO, Brick Consulting</span> */}
                      </div>
                    </div>
                  </div></div><div className="owl-item" style={{ width: '637px', marginRight: '30px' }}><div className="testi-item">
                    <div className="author-desc">
                      <div className="desc"><img className="quote" src=
                    
                      {images["quote2.png"]}
                      alt="" />
                        “Getting an education in Canada is an opportunity that you shouldn’t miss. The diversity I experienced in the classroom was not available in my home country. I applied to and was accepted by five colleges for my graduate studies, and the entire process was very simple.”					</div>
                    </div>
                    <div className="testimonial-content">
                      <div className="author-img">
                        <img src=
                        {images["2.jpg"]}
                       
                         alt="" />
                      </div>
                      <div className="author-part">
                        <a className="name" href="#">Somya Saini</a>
                        {/* <span class="designation">CEO, Keen IT Solution</span> */}
                      </div>
                    </div>
                  </div></div><div className="owl-item" style={{ width: '637px', marginRight: '30px' }}><div className="testi-item">
                    <div className="author-desc">
                      <div className="desc"><img className="quote" src=
                   
                      {images["quote2.png"]}
                      alt="" />
                        “Being an international student in Canada was the most rewarding experience of my life, and I am happy to say that it’s now my permanent home. Canada is a country that embraces multiculturalism, friendly immigration policies, and quality education.”					</div>
                    </div>
                    <div className="testimonial-content">
                      <div className="author-img">
                        <img 
                        
                        src="assets/images/testimonial/main-home/3.jpg" alt="" />
                      </div>
                      <div className="author-part">
                        <a className="name" href="#">Vishal</a>
                        {/* <span class="designation">Web Developer</span> */}
                      </div>
                    </div>
                  </div></div><div className="owl-item active" style={{ width: '637px', marginRight: '30px' }}><div className="testi-item">
                    <div className="author-desc">
                      <div className="desc"><img className="quote" src=
                      {images["home-about-5"]}
                     
                       alt="" />"I had an excellent time learning about many topics. I had a little bit of knowledge but never had the chance to study them deeply. Thank You so much for valuable information. "</div>
                    </div>
                    <div className="testimonial-content">
                      <div className="author-img">
                        <img src=
                          {images["tmh4.jpg"]}
                 
                         alt="" />
                      </div>
                      <div className="author-part">
                        <a className="name" href="#">Parteek sharma</a>
                        {/* <span class="designation">Arist</span> */}
                      </div>
                    </div>
                  </div></div><div className="owl-item cloned" style={{ width: '637px', marginRight: '30px' }}><div className="testi-item">
                    <div className="author-desc">
                      <div className="desc"><img className="quote" src="assets/images/testimonial/main-home/quote2.png" alt="" />" Someone told me Python is not easy to understand if you are a newbie in it. But they taught everything from the ground level. I really enjoyed learning from such a nice course. "
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <div className="author-img">
                        <img src="assets/images/testimonial/main-home/1.jpg" alt="" />
                      </div>
                      <div className="author-part">
                        <a className="name" href="#">Keli</a>
                        {/* <span class="designation">CEO, Brick Consulting</span> */}
                      </div>
                    </div>
                  </div></div><div className="owl-item cloned" style={{ width: '637px', marginRight: '30px' }}><div className="testi-item">
                    <div className="author-desc">
                      <div className="desc"><img className="quote" src="assets/images/testimonial/main-home/quote2.png" alt="" />" It's a great course. The starting can be a bit tough if you're not from a programming background, but later, you start to understand everything because they will explain everything step by step."</div>
                    </div>
                    <div className="testimonial-content">
                      <div className="author-img">
                        <img src="assets/images/testimonial/main-home/2.jpg" alt="" />
                      </div>
                      <div className="author-part">
                        <a className="name" href="#">Somya Saini</a>
                        {/* <span class="designation">CEO, Keen IT Solution</span> */}
                      </div>
                    </div>
                  </div></div></div></div><div className="owl-nav disabled"><div className="owl-prev"><i className="fa fa-angle-left" /></div><div className="owl-next"><i className="fa fa-angle-right" /></div></div><div className="owl-dots disabled" /></div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial Section End */}
      </div>
      <Footer />
    </div>
  );
}

export default School;