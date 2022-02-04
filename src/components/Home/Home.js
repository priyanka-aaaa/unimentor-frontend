import React from 'react';
function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
export default function Home() {

  console.log(images)

    return (
      <div>
        <div className="offwrap" />
        {/*Preloader area start here*/}
        {/* <div id="loader" className="loader">
          <div className="loader-container" />
        </div> */}
        {/*Preloader area End here*/} 
        {/* Main content Start */}
        <div className="main-content">
          {/*Full width header Start*/}
          <div className="full-width-header">
            {/*Header Start*/}
            <header id="rs-header" className="rs-header style3 modify1 header-transparent">
              {/* Menu Start */}
              <div className="menu-area menu-sticky">
                <div className="container-fluid">
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="logo-part">
                        <a href="index.html"><img src={images["logo.png"]} alt="" /></a>
                      </div>
                      <div className="mobile-menu">
                        <a href="#" className="rs-menu-toggle rs-menu-toggle-close secondary">
                          <i className="fa fa-bars" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-10 text-right">
                      <div className="rs-menu-area">
                        <div className="main-menu">
                          <nav className="rs-menu pr-86 lg-pr-50 md-pr-0">
                            <ul className="nav-menu">
                              <li className="menu-item-has-children current-menu-item"> <a href="#">Home</a>                                                      
                              </li>
                              <li>
                                <a href="about.html">About</a>
                              </li>                                                
                              <li>
                                <a href="contact.html">Contact</a>
                              </li>
                            </ul> {/* //.nav-menu */}
                          </nav>                                         
                        </div> {/* //.main-menu */}
                        <div className="expand-btn-inner search-icon hidden-md">
                          <ul>
                            <li className="sidebarmenu-search">
                              <a className="hidden-xs rs-search" data-target=".search-modal" data-toggle="modal" href="#">
                                <i className="flaticon-search" />
                              </a>
                            </li>
                            <li>
                              <a id="nav-expander" className="humburger nav-expander" href="#">
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
                            </li>
                          </ul>
                        </div>                                
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Menu End */}
            </header>
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
                <a href="index.html"><img src={images["logo.png"]} alt="logo" /></a>
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
              <div className="row align-items-end">
                <div className="col-lg-6 md-mb-50 order-last">
                  <div className="banner-img">
                    <img src={images["banner/banner-5.png"]} alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="banner-content">
                    <h1 className="title"><span>No one like you.</span><br /> No place like this Coursementor</h1>
                    <p className="desc">
                      It has never been more competitive for universities and colleges to recruit students to their campuses. Institutions of higher learning have to stand out from hundreds if not thousands of competing schools.
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
                  <div className="rs-partner style2 modify1 pt-120 pb-100 md-pt-70 pb-lg-0 md-pb-0">
                    <div className="container">
                      <p className="title">Trusted By 5000+ Worldwide Customers:</p>
                      <div className="rs-carousel owl-carousel" data-loop="true" data-items={3} data-margin={30} data-autoplay="true" data-hoverpause="true" data-autoplay-timeout={5000} data-smart-speed={800} data-dots="false" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device={2} data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device={3} data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2={3} data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device={3} data-md-device-nav="false" data-md-device-dots="false">
                        <div className="partner-item">
                          <div className="logo-img">
                            <a href="https://rstheme.com/">
                              <img src={images["partner/style2/1.png"]} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="partner-item">
                          <div className="logo-img">
                            <a href="https://rstheme.com/">
                              <img src={images["partner/style2/2.png"]} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="partner-item">
                          <div className="logo-img">
                            <a href="https://rstheme.com/">
                              <img src={images["partner/style2/3.png"]} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="partner-item">
                          <div className="logo-img">
                            <a href="https://rstheme.com/">
                              <img src={images["partner/style2/4.png"]} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="partner-item">
                          <div className="logo-img">
                            <a href="https://rstheme.com/">
                              <img src={images["partner/style2/5.png"]} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="partner-item">
                          <div className="logo-img">
                            <a href="https://rstheme.com/">
                              <img src={images["partner/style2/6.png"]} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="partner-item">
                          <div className="logo-img">
                            <a href="https://rstheme.com/">
                              <img src={images["partner/style2/7.png"]} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="partner-item">
                          <div className="logo-img">
                            <a href="https://rstheme.com/">
                              <img src={images["partner/style2/8.png"]} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Partner End */}
                </div>
              </div>
            </div>
            <div className="rs-animation">
              <img className="dance3" src={images["banner/b4-dot-6.png"]} alt="images" />
            </div>
          </div>
          {/* Banner Section End */}
          {/* Services Section Start */}
          <div className="rs-services style2 modify1 pt-40 pb-120 md-pt-80 md-pb-80">
            <div className="container">
              <div className="sec-title2 text-center mb-45">
                <span className="sub-text gold-color">We Are Best</span>
                <h2 className="title">
                  Why Choose Unizmentor
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
                              <img src={images["services/style6/6.png"]} alt="" /> 
                            </div>
                          </div>
                          <div className="front-title-part">
                            <h3 className="title"><a href="#">Student </a></h3>
                          </div>
                          <div className="front-desc-part">
                            <p>
                              Can directly search the university or colleges on our portal and can apply for admissions in that. 
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="back-front purple-bg">
                        <div className="back-front-content">
                          <div className="back-title-part">
                            <h3 className="back-title">Student
                            </h3>
                          </div>
                          <div className="back-desc-part">
                            <p className="back-desc">   Can directly search the university or colleges on our portal and can apply for admissions in that. They can also see the application status of their admission and the college will update their application on the portal. 
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
                              <img src={images["services/main-home/icons/8.png"]} alt="" /> 
                            </div>
                          </div>
                          <div className="front-title-part">
                            <h3 className="title"><a href="#">Universities</a></h3>
                          </div>
                          <div className="front-desc-part">
                            <p>
                              From all over the world to be registered on our portal. Universities will be able to list their all courses . 
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="back-front gold-bg">
                        <div className="back-front-content">
                          <div className="back-title-part">
                            <h3 className="back-title">Universities</h3>
                          </div>
                          <div className="back-desc-part">
                            <p className="back-desc">  From all over the world to be registered on our portal. Universities will be able to list their all courses with all information about them like course name, description, duration, credit, fee, etc.</p>
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
                              <img src={images["services/main-home/icons/9.png"]} alt="" /> 
                            </div>
                          </div>
                          <div className="front-title-part">
                            <h3 className="title"><a href="#">Immigration Agents/Partners </a></h3>
                          </div>
                          <div className="front-desc-part">
                            <p>
                              Can also apply for student applications for admission on the student’s behalf. 
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="back-front blue-bg">
                        <div className="back-front-content">
                          <div className="back-title-part">
                            <h3 className="back-title">Immigration Agents/Partners</h3>
                          </div>
                          <div className="back-desc-part">
                            <p className="back-desc">Can also apply for student applications for admission on the student’s behalf. He is the one responsible for uploading all documents of students on their behalf. and also see the application status of their admission and the college will update their application on the portal.</p>
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
                      What kind of help do you need? Study Abroad Expert
                    </h2>
                    <div className="desc">
                        
                      Thinking of studying abroad? But don't know which
                      universities &amp; courses are best-fit for you!
                      Try our AI powered Course Finder. Feed in your
                      preferences, let the AI match them against millions of
                      data points &amp; voila! you get what you are looking for,
                      saving you hours of research.
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
                    <img src={images["about/about-5.png"]} alt="" /> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* About Section End */}
          {/* Industry Section Start */}
          <div className="rs-industry pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
              <div className="sec-title2 text-center mb-45">
                <span className="sub-text gold-color">Work For Any Industry</span>
                <h2 className="title">
                  Best Solutions, For All Organizations
                </h2>
              </div>
              <div className="all-services">
                <div className="services-item">
                  <div className="services-wrap">
                    <div className="services-icon">
                      <img src={images["technology/style3/1.png"]} alt="" />
                    </div>
                    <div className="services-text">
                      <h4 className="title">Software</h4> 
                    </div>
                  </div>
                </div>
                <div className="services-item">
                  <div className="services-wrap">
                    <div className="services-icon">
                      <img src={images["technology/style3/2.png"]} alt="" />
                    </div>
                    <div className="services-text">
                      <h4 className="title">Fintech</h4> 
                    </div>
                  </div>
                </div>
                <div className="services-item">
                  <div className="services-wrap">
                    <div className="services-icon">
                      <img src={images["technology/style3/3.png"]} alt="" />
                    </div>
                    <div className="services-text">
                      <h4 className="title">Healthcare</h4> 
                    </div>
                  </div>
                </div>
                <div className="services-item">
                  <div className="services-wrap">
                    <div className="services-icon">
                      <img src={images["technology/style3/4.png"]} alt="" />
                    </div>
                    <div className="services-text">
                      <h4 className="title">Data Mining</h4> 
                    </div>
                  </div>
                </div>
                <div className="services-item">
                  <div className="services-wrap">
                    <div className="services-icon">
                      <img src={images["technology/style3/5.png"]} alt="" />
                    </div>
                    <div className="services-text">
                      <h4 className="title">Machine learning</h4> 
                    </div>
                  </div>
                </div>
                <div className="services-item">
                  <div className="services-wrap">
                    <div className="services-icon">
                      <img src={images["technology/style3/6.png"]} alt="" />
                    </div>
                    <div className="services-text">
                      <h4 className="title">Medical</h4> 
                    </div>
                  </div>
                </div>
                <div className="services-item">
                  <div className="services-wrap">
                    <div className="services-icon">
                      <img src={images["technology/style3/7.png"]} alt="" />
                    </div>
                    <div className="services-text">
                      <h4 className="title">Entertainment</h4> 
                    </div>
                  </div>
                </div>
                <div className="services-item">
                  <div className="services-wrap">
                    <div className="services-icon">
                      <img src={images["technology/style3/8.png"]} alt="" />
                    </div>
                    <div className="services-text">
                      <h4 className="title">AI</h4> 
                    </div>
                  </div>
                </div>
                <div className="services-item">
                  <div className="services-wrap">
                    <div className="services-icon">
                      <img src={images["technology/style3/9.png"]} alt="" />
                    </div>
                    <div className="services-text">
                      <h4 className="title">Manufacturing</h4> 
                    </div>
                  </div>
                </div>
                <div className="services-item">
                  <div className="services-wrap">
                    <div className="services-icon">
                      <img src={images["technology/style3/10.png"]} alt="" />
                    </div>
                    <div className="services-text">
                      <h4 className="title">Logistics</h4> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Industry Section End */}
          <div className="rs-services style3 modify1 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
              <div className="sec-title2 text-center mb-45">
                <span className="sub-text gold-color">SKILLS</span>
                <h2 className="title title2">
                  Focus on the skills you need
                </h2>
                <p>Focus on the skills you need</p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-30">
                  <div className="services-item pink-light-bg">
                    <div className="services-icon">
                      <div className="image-part">
                        <img className="main-img" src={images["services/style3/main-img/5.png"]} alt="" />
                        <img className="hover-img" src={images["services/style3/hover-img/5.png"]} alt="" />
                      </div>
                    </div>
                    <div className="services-content">
                      <div className="services-text">
                        <h3 className="title"><a href="web-development.html">Learn At Home</a></h3>
                      </div>
                      <div className="services-desc">
                        <p>
                          Enjoy learning from the comfort of your home, at your own time and pace.
                        </p>
                      </div>
                      <div className="services-button"><a href="web-development.html">Read More</a></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-30">
                  <div className="services-item blue2-bg">
                    <div className="services-icon">
                      <div className="image-part">
                        <img className="main-img" src={images["services/style3/main-img/6.png"]} alt="" />
                        <img className="hover-img" src={images["services/style3/hover-img/6.png"]} alt="" />
                      </div>
                    </div>
                    <div className="services-content">
                      <div className="services-text">
                        <h3 className="title"><a href="web-development.html">Expert Tutors</a></h3>
                      </div>
                      <div className="services-desc">
                        <p>
                          Receive specialized training in statistics by trained educators. We handpick the best teachers from our rigorous hiring process.
                        </p>
                      </div>
                      <div className="services-button"><a href="web-development.html">Read More</a></div>
                    </div>
                  </div>  
                </div>
                <div className="col-lg-4 col-md-6 mb-30">
                  <div className="services-item paste2-bg">
                    <div className="services-icon">
                      <div className="image-part">
                        <img className="main-img" src={images["services/style3/main-img/7.png"]} alt="" />
                        <img className="hover-img" src={images["services/style3/hover-img/7.png"]} alt="" />
                      </div>
                    </div>
                    <div className="services-content">
                      <div className="services-text">
                        <h3 className="title"><a href="web-development.html">Strong Community</a></h3>
                      </div>
                      <div className="services-desc">
                        <p>
                          Join our Affiliate Schools that are growing as one of India’s largest community of student.
                        </p>
                      </div>
                      <div className="services-button"><a href="web-development.html">Read More</a></div>
                    </div>
                  </div>  
                </div>
                <div className="col-lg-4 col-md-6 md-mb-30">
                  <div className="services-item purple2-bg">
                    <div className="services-icon">
                      <div className="image-part">
                        <img className="main-img" src={images["services/style3/main-img/8.png"]} alt="" />
                        <img className="hover-img" src={images["services/style3/hover-img/8.png"]} alt="" />
                      </div>
                    </div>
                    <div className="services-content">
                      <div className="services-text">
                        <h3 className="title"><a href="web-development.html">Online Tutoring</a></h3>
                      </div>
                      <div className="services-desc">
                        <p>
                          Learning never stops, and this is especially true when it comes to e-learning. It ensures flexibility and fun ways of learning to keep you engaged.
                        </p>
                      </div>
                      <div className="services-button"><a href="web-development.html">Read More</a></div>
                    </div>
                  </div>  
                </div>
                <div className="col-lg-4 col-md-6 sm-mb-30">
                  <div className="services-item cyan2-bg">
                    <div className="services-icon">
                      <div className="image-part">
                        <img className="main-img" src={images["services/style3/main-img/9.png"]} alt="" />
                        <img className="hover-img" src={images["services/style3/hover-img/9.png"]} alt="" />
                      </div>
                    </div>
                    <div className="services-content">
                      <div className="services-text">
                        <h3 className="title"><a href="web-development.html">Enjoy Learning From Anywhere</a></h3>
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
                <div className="col-lg-4 col-md-6">
                  <div className="services-item pink2-bg">
                    <div className="services-icon">
                      <div className="image-part">
                        <img className="main-img" src={images["services/style3/main-img/10.png"]} alt="" />
                        <img className="hover-img" src={images["services/style3/hover-img/10.png"]} alt="" />
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
                <span className="sub-text gold-color">Technology Index</span>
                <h2 className="title title2">
                  What Technology We Are Using For Our Valued Customers
                </h2>
              </div>
              <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                  <div className="technology-item">
                    <a href="#">
                      <div className="logo-img">
                        <img src={images["technology/style2/1.png"]} alt="" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                  <div className="technology-item">
                    <a href="#">
                      <div className="logo-img">
                        <img src={images["technology/style2/2.png"]} alt="" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                  <div className="technology-item">
                    <a href="#">
                      <div className="logo-img">
                        <img src={images["technology/style2/3.png"]} alt="" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                  <div className="technology-item">
                    <a href="#">
                      <div className="logo-img">
                        <img src={images["technology/style2/4.png"]} alt="" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                  <div className="technology-item">
                    <a href="#">
                      <div className="logo-img">
                        <img src={images["technology/style2/5.png"]} alt="" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                  <div className="technology-item">
                    <a href="#">
                      <div className="logo-img">
                        <img src={images["technology/style2/6.png"]} alt="" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                  <div className="technology-item">
                    <a href="#">
                      <div className="logo-img">
                        <img src={images["technology/style2/7.png"]} alt="" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                  <div className="technology-item">
                    <a href="#">
                      <div className="logo-img">
                        <img src={images["technology/style2/8.png"]} alt="" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                  <div className="technology-item">
                    <a href="#">
                      <div className="logo-img">
                        <img src={images["technology/style2/9.png"]} alt="" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                  <div className="technology-item">
                    <a href="#">
                      <div className="logo-img">
                        <img src={images["technology/style2/10.png"]} alt="" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                  <div className="technology-item">
                    <a href="#">
                      <div className="logo-img">
                        <img src={images["technology/style2/11.png"]} alt="" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                  <div className="technology-item">
                    <a href="#">
                      <div className="logo-img">
                        <img src={images["technology/style2/12.png"]} alt="" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                  <div className="technology-item">
                    <a href="#">
                      <div className="logo-img">
                        <img src={images["technology/style2/13.png"]} alt="" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                  <div className="technology-item">
                    <a href="#">
                      <div className="logo-img">
                        <img src={images["technology/style2/14.png"]} alt="" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                  <div className="technology-item">
                    <a href="#">
                      <div className="logo-img">
                        <img src={images["technology/style2/15.png"]} alt="" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                  <div className="technology-item">
                    <a href="#">
                      <div className="logo-img">
                        <img src={images["technology/style2/16.png"]} alt="" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                  <div className="technology-item">
                    <a href="#">
                      <div className="logo-img">
                        <img src={images["technology/style2/17.png"]} alt="" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                  <div className="technology-item">
                    <a href="#">
                      <div className="logo-img">
                        <img src={images["technology/style2/18.png"]} alt="" />
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
          {/* Blog Section Start */}
          <div id="rs-blog" className="rs-blog pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">  
              <div className="sec-title2 text-center mb-30">
                <span className="sub-text">Blogs</span>
                <h2 className="title testi-title">
                  Latest Tips &amp;Tricks
                </h2>
                <div className="desc">
                  We've been building creative tools together for over a decade and have a deep appreciation for software applications
                </div>
              </div>
              <div className="rs-carousel owl-carousel" data-loop="true" data-items={3} data-margin={30} data-autoplay="true" data-hoverpause="true" data-autoplay-timeout={5000} data-smart-speed={800} data-dots="false" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device={1} data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device={2} data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2={2} data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device={3} data-md-device-nav="false" data-md-device-dots="false">
                <div className="blog-item">
                  <div className="image-wrap">
                    <a href="blog-details.html"><img src={images["blog/main-home/1.jpg"]} alt="" /></a>
                    <ul className="post-categories">
                      <li><a href="blog-details.html">Software Development</a></li>
                    </ul>
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title"><a href="blog-details.html">Necessity May Give Us Your Best Virtual Court System</a></h3>
                    <p className="desc">We denounce with righteous indige nation and dislike men who are so beguiled...</p>
                    <div className="blog-button"><a href="blog-details.html">Learn More</a></div>
                  </div>
                </div>
                <div className="blog-item">
                  <div className="image-wrap">
                    <a href="blog-details.html"><img src={images["2.jpg"]} alt="" /></a>
                    <ul className="post-categories">
                      <li><a href="blog-details.html"> Web Development</a></li>
                    </ul>
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title"><a href="blog-details.html">Tech Products That Makes Its Easier to Stay at Home</a></h3>
                    <p className="desc">We denounce with righteous indige nation and dislike men who are so beguiled...</p>
                    <div className="blog-button"><a href="blog-details.html">Learn More</a></div>
                  </div>
                </div>
                <div className="blog-item">
                  <div className="image-wrap">
                    <a href="blog-details.html"><img src={images["blog/main-home/3.jpg"]} alt="" /></a>
                    <ul className="post-categories">
                      <li><a href="blog-details.html">It Services</a></li>
                    </ul>
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title"><a href="blog-details.html">Open Source Job Report Show More Openings Fewer</a></h3>
                    <p className="desc">We denounce with righteous indige nation and dislike men who are so beguiled...</p>
                    <div className="blog-button"><a href="blog-details.html">Learn More</a></div>
                  </div>
                </div>
                <div className="blog-item">
                  <div className="image-wrap">
                    <a href="blog-details.html"><img src={images["blog/main-home/4.jpg"]} alt="" /></a>
                    <ul className="post-categories">
                      <li><a href="blog-details.html">Artifical Intelligence</a></li>
                    </ul>
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title"><a href="blog-details.html">Types of Social Proof What its Makes Them Effective</a></h3>
                    <p className="desc">We denounce with righteous indige nation and dislike men who are so beguiled...</p>
                    <div className="blog-button"><a href="blog-details.html">Learn More</a></div>
                  </div>
                </div>
                <div className="blog-item">
                  <div className="image-wrap">
                    <a href="blog-details.html"><img src={images["blog/main-home/5.jpg"]} alt="" /></a>
                    <ul className="post-categories">
                      <li><a href="blog-details.html">Digital Technology</a></li>
                    </ul>
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title"><a href="blog-details.html">Tech Firms Support Huawei Restriction, Balk at Cost</a></h3>
                    <p className="desc">We denounce with righteous indige nation and dislike men who are so beguiled...</p>
                    <div className="blog-button"><a href="blog-details.html">Learn More</a></div>
                  </div>
                </div>
                <div className="blog-item">
                  <div className="image-wrap">
                    <a href="blog-details.html"><img src={images["blog/main-home/6.jpg"]} alt="" /></a>
                    <ul className="post-categories">
                      <li><a href="blog-details.html">It Services</a></li>
                    </ul>
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title"><a href="blog-details.html">Servo Project Joins The Linux Foundation Fold Desco</a></h3>
                    <p className="desc">We denounce with righteous indige nation and dislike men who are so beguiled...</p>
                    <div className="blog-button"><a href="blog-details.html">Learn More</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Blog Section End */}
          {/* Testimonial Section Start */}
          <div className="rs-testimonial main-home style4 modify1 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="testi-img">
                    <img src={images["testimonial/testimonial-3.png"]} alt="" /> 
                  </div>
                </div>
                <div className="col-lg-6 md-pt-50 modify-gap">
                  <div className="sec-title mb-50">
                    <div className="sub-text style4-bg left testi">Testimonials</div>
                    <h2 className="title pb-20">
                      What Our Students Have To Say
                    </h2>
                    <div className="desc">
                      "It's a great course. The starting can be a bit tough if you're not from a programming background, but later, you start to understand everything because they will explain everything step by step.".
                    </div>
                  </div>
                  <div className="rs-carousel owl-carousel owl-loaded owl-drag" data-loop="true" data-items={1} data-margin={30} data-autoplay="true" data-hoverpause="true" data-autoplay-timeout={5000} data-smart-speed={800} data-dots="true" data-nav="false" data-nav-speed="false" data-md-device={1} data-md-device-nav="false" data-md-device-dots="false" data-center-mode="false" data-ipad-device2={1} data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-ipad-device={1} data-ipad-device-nav="false" data-ipad-device-dots="true" data-mobile-device={1} data-mobile-device-nav="false" data-mobile-device-dots="false">
                    <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(-3335px, 0px, 0px)', transition: 'all 0.8s ease 0s', width: '5336px'}}><div className="owl-item cloned" style={{width: '637px', marginRight: '30px'}}><div className="testi-item">
                            <div className="author-desc">           
                              <div className="desc"><img className="quote" src={images["testimonial/main-home/quote2.png"]} alt="" />"Based on such knowledge, we may understand several other programming languages in a more in-depth way. They have such an easy way of teaching. 5/5 rating great work keep it up"</div>
                            </div>
                            <div className="testimonial-content">
                              <div className="author-img">
                                <img src={images["testimonial/main-home/3.jpg"]} alt="" />
                              </div>
                              <div className="author-part">
                                <a className="name" href="#">Imran Khan</a>
                                {/* <span class="designation">Web Developer</span> */}
                              </div>
                            </div>
                          </div></div><div className="owl-item cloned" style={{width: '637px', marginRight: '30px'}}><div className="testi-item">
                            <div className="author-desc">           
                              <div className="desc"><img className="quote" src={images["testimonial/main-home/quote2.png"]} alt="" />"I had an excellent time learning about many topics. I had a little bit of knowledge but never had the chance to study them deeply. Thank You so much for valuable information. "</div>
                            </div>
                            <div className="testimonial-content">
                              <div className="author-img">
                                <img src={images["testimonial/main-home/4.jpg"]} alt="" />
                              </div>
                              <div className="author-part">
                                <a className="name" href="#">Parteek sharma</a>
                                {/* <span class="designation">Arist</span> */}
                              </div>
                            </div>
                          </div></div><div className="owl-item" style={{width: '637px', marginRight: '30px'}}><div className="testi-item">
                            <div className="author-desc">           
                              <div className="desc"><img className="quote" src={images["testimonial/main-home/quote2.png"]} alt="" />" Someone told me Python is not easy to understand if you are a newbie in it. But they taught everything from the ground level. I really enjoyed learning from such a nice course. "
                              </div>
                            </div>
                            <div className="testimonial-content">
                              <div className="author-img">
                                <img src={images["testimonial/main-home/1.jpg"]} alt="" />
                              </div>
                              <div className="author-part">
                                <a className="name" href="#">Keli</a>
                                {/* <span class="designation">CEO, Brick Consulting</span> */}
                              </div>
                            </div>
                          </div></div><div className="owl-item" style={{width: '637px', marginRight: '30px'}}><div className="testi-item">
                            <div className="author-desc">           
                              <div className="desc"><img className="quote" src={images["testimonial/main-home/quote2.png"]} alt="" />" It's a great course. The starting can be a bit tough if you're not from a programming background, but later, you start to understand everything because they will explain everything step by step."</div>
                            </div>
                            <div className="testimonial-content">
                              <div className="author-img">
                                <img src={images["testimonial/main-home/2.jpg"]} alt="" />
                              </div>
                              <div className="author-part">
                                <a className="name" href="#">Somya Saini</a>
                                {/* <span class="designation">CEO, Keen IT Solution</span> */}
                              </div>
                            </div>
                          </div></div><div className="owl-item" style={{width: '637px', marginRight: '30px'}}><div className="testi-item">
                            <div className="author-desc">           
                              <div className="desc"><img className="quote" src={images["testimonial/main-home/quote2.png"]} alt="" />"Based on such knowledge, we may understand several other programming languages in a more in-depth way. They have such an easy way of teaching. 5/5 rating great work keep it up"</div>
                            </div>
                            <div className="testimonial-content">
                              <div className="author-img">
                                <img src={images["testimonial/main-home/3.jpg"]} alt="" />
                              </div>
                              <div className="author-part">
                                <a className="name" href="#">Imran Khan</a>
                                {/* <span class="designation">Web Developer</span> */}
                              </div>
                            </div>
                          </div></div><div className="owl-item active" style={{width: '637px', marginRight: '30px'}}><div className="testi-item">
                            <div className="author-desc">           
                              <div className="desc"><img className="quote" src={images["testimonial/main-home/quote2.png"]} alt="" />"I had an excellent time learning about many topics. I had a little bit of knowledge but never had the chance to study them deeply. Thank You so much for valuable information. "</div>
                            </div>
                            <div className="testimonial-content">
                              <div className="author-img">
                                <img src={images["testimonial/main-home/4.jpg"]} alt="" />
                              </div>
                              <div className="author-part">
                                <a className="name" href="#">Parteek sharma</a>
                                {/* <span class="designation">Arist</span> */}
                              </div>
                            </div>
                          </div></div><div className="owl-item cloned" style={{width: '637px', marginRight: '30px'}}><div className="testi-item">
                            <div className="author-desc">           
                              <div className="desc"><img className="quote" src={images["testimonial/main-home/quote2.png"]} alt="" />" Someone told me Python is not easy to understand if you are a newbie in it. But they taught everything from the ground level. I really enjoyed learning from such a nice course. "
                              </div>
                            </div>
                            <div className="testimonial-content">
                              <div className="author-img">
                                <img src={images["testimonial/main-home/1.jpg"]} alt="" />
                              </div>
                              <div className="author-part">
                                <a className="name" href="#">Keli</a>
                                {/* <span class="designation">CEO, Brick Consulting</span> */}
                              </div>
                            </div>
                          </div></div><div className="owl-item cloned" style={{width: '637px', marginRight: '30px'}}><div className="testi-item">
                            <div className="author-desc">           
                              <div className="desc"><img className="quote" src={images["testimonial/main-home/quote2.png"]} alt="" />" It's a great course. The starting can be a bit tough if you're not from a programming background, but later, you start to understand everything because they will explain everything step by step."</div>
                            </div>
                            <div className="testimonial-content">
                              <div className="author-img">
                                <img src={images["testimonial/main-home/2.jpg"]} alt="" />
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
          {/* Partner Start */}
          <div className="rs-partner pt-80 pb-70">
            <div className="container">
              <div className="rs-carousel owl-carousel" data-loop="true" data-items={5} data-margin={30} data-autoplay="true" data-hoverpause="true" data-autoplay-timeout={5000} data-smart-speed={800} data-dots="false" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device={2} data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device={3} data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2={3} data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device={5} data-md-device-nav="false" data-md-device-dots="false">
                <div className="partner-item">
                  <div className="logo-img">
                    <a href="https://rstheme.com/">
                      <img className="hover-logo" src={images["partner/1.png"]} alt="" />
                      <img className="main-logo" src={images["partner/1.png"]} alt="" />
                    </a>
                  </div>
                </div>
                <div className="partner-item">
                  <div className="logo-img">
                    <a href="https://rstheme.com/">
                      <img className="hover-logo" src={images["partner/2.png"]} alt="" />
                      <img className="main-logo" src={images["partner/2.png"]} alt="" />
                    </a>
                  </div>
                </div>
                <div className="partner-item">
                  <div className="logo-img">
                    <a href="https://rstheme.com/">
                      <img className="hover-logo" src={images["partner/3.png"]} alt="" />
                      <img className="main-logo" src={images["partner/3.png"]} alt="" />
                    </a>
                  </div>
                </div>
                <div className="partner-item">
                  <div className="logo-img">
                    <a href="https://rstheme.com/">
                      <img className="hover-logo" src={images["partner/4.png"]} alt="" />
                      <img className="main-logo" src={images["partner/4.png"]} alt="" />
                    </a>
                  </div>
                </div>
                <div className="partner-item">
                  <div className="logo-img">
                    <a href="https://rstheme.com/">
                      <img className="hover-logo" src={images["partner/5.png"]} alt="" />
                      <img className="main-logo" src={images["partner/5.png"]} alt="" />
                    </a>
                  </div>
                </div>
                <div className="partner-item">
                  <div className="logo-img">
                    <a href="https://rstheme.com/">
                      <img className="hover-logo" src={images["partner/6.png"]} alt="" />
                      <img className="main-logo" src={images["partner/6.png"]} alt="" />
                    </a>
                  </div>
                </div>
                <div className="partner-item">
                  <div className="logo-img">
                    <a href="https://rstheme.com/">
                      <img className="hover-logo" src={images["partner/7.png"]} alt="" />
                      <img className="main-logo" src={images["partner/7.png"]} alt="" />
                    </a>
                  </div>
                </div>
                <div className="partner-item">
                  <div className="logo-img">
                    <a href="https://rstheme.com/">
                      <img className="hover-logo" src={images["partner/8.png"]} alt="" />
                      <img className="main-logo" src={images["partner/8.png"]} alt="" />
                    </a>
                  </div>
                </div>
                <div className="partner-item">
                  <div className="logo-img">
                    <a href="https://rstheme.com/">
                      <img className="hover-logo" src={images["partner/9.png"]} alt="" />
                      <img className="main-logo" src={images["partner/9.png"]} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Partner End */}
        </div> 
        {/* Main content End */}
        {/* Footer Start */}
        <footer id="rs-footer" className="rs-footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-12 footer-widget">
                  <div className="footer-logo mb-30">
                    <a href="index.html"><img src={images["logo.png"]} alt="" /></a>
                  </div>
                  <div className="textwidget pb-30">
                    <p>Coursementor.com is a 24*7 Online Tutoring Platform. Get online tutoring on-demand on
                      hundreds of subjects or topics, whenever you need it.</p>
                  </div>
                  <ul className="footer-social md-mb-30">
                    <li>
                      <a href="#" target="_blank"><span><i className="fa fa-facebook" /></span></a>
                    </li>
                    <li>
                      <a href="# " target="_blank"><span><i className="fa fa-twitter" /></span></a>
                    </li>
                    <li>
                      <a href="# " target="_blank"><span><i className="fa fa-pinterest-p" /></span></a>
                    </li>
                    <li>
                      <a href="# " target="_blank"><span><i className="fa fa-instagram" /></span></a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 pl-45 md-pl-15 md-mb-30">
                  <h3 className="widget-title">Policy</h3>
                  <ul className="site-map">
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Refund Policy</a></li>
                    <li><a href="#">Honor Code</a></li>
                    <li><a href="#">Mentors</a></li>
                    <li><a href="#">Blog</a></li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 md-mb-30">
                  <h3 className="widget-title">Contact Info</h3>
                  <ul className="address-widget">
                    <li>
                      <i className="flaticon-location" />
                      <div className="desc">#211 P,Sector7 Kurukshetra,haryana 136118</div>
                    </li>
                    <li>
                      <i className="flaticon-call" />
                      <div className="desc">
                        <a href="tel:1800-890-6477">1800-890-6477</a>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-email" />
                      <div className="desc">
                        <a href="mailto:hello@coursementor.com">hello@coursementor.com</a>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-clock-1" />
                      <div className="desc">
                        Our Mentors are ready to help 24/7
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12">
                  <h3 className="widget-title">Exploring</h3>
                  <ul className="site-map">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                  </ul>
                  {/* <p class="widget-desc">We denounce with righteous and in and dislike men who are so beguiled and demo realized.</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row y-middle">
                {/* <div class="col-lg-6 text-right md-mb-10 order-last">
                        <ul class="copy-right-menu">
                           <li><a href="index.html">Home</a></li>
                           <li><a href="about.html">About</a></li>
                           <li><a href="blog.html">Blog</a></li>
                           <li><a href="shop.html">Shop</a></li>
                           <li><a href=case-studies-single.html></a></li>
                        </ul>
                    </div> */}
                <div className="col-lg-6">
                  <div className="copyright">
                    <p>©Copyright 2018 - 2022<a href="http://Coursementor.com/">Coursementor.com</a> All
                      rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Footer End */}
        {/* start scrollUp  */}
        <div id="scrollUp" className="orange-color">
          <i className="fa fa-angle-up" />
        </div>
        {/* End scrollUp  */}
        {/* Search Modal Start */}
        <div aria-hidden="true" className="modal fade search-modal" role="dialog" tabIndex={-1}>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span className="flaticon-cross" />
          </button>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="search-block clearfix">
                <form>
                  <div className="form-group">
                    <input className="form-control" placeholder="Search Here..." type="text" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      {/* Search Modal End */}
        {/* modernizr js */}
        {/* jquery latest version */}
        {/* Bootstrap v4.4.1 js */}
        {/* Menu js */}
        {/* op nav js */}
        {/* owl.carousel js */}
        {/* wow js */}
        {/* Skill bar js */}
        {/* counter top js */}
        {/* swiper js */}
        {/* particles js */}
        {/* magnific popup js */}
        {/* plugins js */}
        {/* pointer js */}
        {/* contact form js */}
        {/* main js */}
      </div>
    );
}

