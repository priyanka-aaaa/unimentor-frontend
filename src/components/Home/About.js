import React from 'react';
import Footer from './Footer'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}

const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
export default function About() {
  return (

      
            <div className="main-content">
              {/*Full width header Start*/}
              <div className="full-width-header">
                {/*Header Start*/}
            <Header/>
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
                    <a href="index.html"><img 
                  
                    src=  {images["logo.png"]} alt="logo" /></a>
                  </div>
                  <div className="offcanvas-text">
                    <p> Coursementor.com is a 24*7 Online Tutoring Platform. Get online tutoring on-demand on hundreds
                      of subjects or topics, whenever you need it.
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
              {/* Breadcrumbs Start */}
              <div className="rs-breadcrumbs img1">
                <div className="breadcrumbs-inner text-center">
                  <h1 className="page-title">About</h1>
                  <ul>
                    <li title="Braintech - IT Solutions and Technology Startup HTML Template">
                      <a className="active" href="index.html">Home</a>
                    </li>
                    <Link to={'/About'} className="nav-link" href="#">
                    About
                           </Link>

                    <li>About</li>
                  </ul>
                </div>
              </div>
              {/* Breadcrumbs End */}
              {/* About Section Start */}
              <div className="rs-about gray-color pt-120 pb-120 md-pt-80 md-pb-80">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 md-mb-30">
                      <div className="rs-animation-shape">
                        <div className="images">
                          <img 
                        src=  {images["about-3.png"]}
                          alt="" />
                        </div>
                        <div className="middle-image2">
                          <img className="dance3"
                           src=
                           {images["effect-1.png"]}
                         
                           alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 pl-60 md-pl-15">
                      <div className="contact-wrap">
                        <div className="sec-title mb-30">
                          <div className="sub-text style-bg">About Us</div>
                          <h2 className="title pb-38">
                            We Are Increasing Business Success With Technology
                          </h2>
                          <div className="desc pb-35">
                            Over 25 years working in IT services developing software applications and mobile
                            apps for clients all over the world.
                          </div>
                          <p className="margin-0 pb-15">
                            We denounce with righteous indignation and dislike men who are so beguiled and
                            demoralized by the charms of pleasure of the moment, so blinded by desire, that they
                            cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs
                            to those who fail in their duty through weakness of will, which is the same as
                            saying.
                          </p>
                        </div>
                        <div className="btn-part">
                          <a className="readon learn-more" href="contact.html">Learn-More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shape-image">
                    <img className="top dance" 
                    src=
                    {images["dotted-3.png"]}
                   
                     alt="" />
                  </div>
                </div>
              </div>
              {/* About Section End */}
              {/* Team Section Start */}
              <div className="rs-team pt-120 pb-120 md-pt-80 md-pb-80 xs-pb-54">
                <div className="sec-title2 text-center mb-30">
                  <span className="sub-text style-bg white-color">Team</span>
                  <h2 className="title white-color">
                    Expert IT Consultants
                  </h2>
                </div>
                <div className="container">
                  <div className="container">
                    <div className="rs-carousel owl-carousel" data-loop="true" data-items={3} data-margin={30} data-autoplay="true" data-hoverpause="true" data-autoplay-timeout={5000} data-smart-speed={800} data-dots="false" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device={1} data-mobile-device-nav="false" data-mobile-device-dots="true" data-ipad-device={2} data-ipad-device-nav="false" data-ipad-device-dots="true" data-ipad-device2={2} data-ipad-device-nav2="false" data-ipad-device-dots2="true" data-md-device={3} data-md-device-nav="false" data-md-device-dots="true">
                      <div className="team-item-wrap">
                        <div className="team-wrap">
                          <div className="image-inner">
                            <a href="single-team.html"><img src=
                           
                            {images["team1.jpg"]}
                             alt="" /></a>
                          </div>
                        </div>
                        <div className="team-content text-center">
                          <h4 className="person-name"><a href="single-team.html">Makhaia Antitni</a></h4>
                          <span className="designation">President &amp; CEO</span>
                          <ul className="team-social">
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-instagram" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-item-wrap">
                        <div className="team-wrap">
                          <div className="image-inner">
                            <a href="single-team.html"><img src=
                            
                            {images["team2.jpg"]}
                            alt="" /></a>
                          </div>
                        </div>
                        <div className="team-content text-center">
                          <h4 className="person-name"><a href="single-team.html">Corey Anderson</a></h4>
                          <span className="designation">CEO &amp; Founder</span>
                          <ul className="team-social">
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-instagram" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-item-wrap">
                        <div className="team-wrap">
                          <div className="image-inner">
                            <a href="single-team.html"><img src=
                         
                            {images["team3.jpg"]}
                            alt="" /></a>
                          </div>
                        </div>
                        <div className="team-content text-center">
                          <h4 className="person-name"><a href="single-team.html">Masud Rana</a></h4>
                          <span className="designation">Web Developer</span>
                          <ul className="team-social">
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-instagram" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-item-wrap">
                        <div className="team-wrap">
                          <div className="image-inner">
                            <a href="single-team.html"><img src=
                           
                            {images["team4.jpg"]}
                            alt="" /></a>
                          </div>
                        </div>
                        <div className="team-content text-center">
                          <h4 className="person-name"><a href="single-team.html">Najmul Huda</a></h4>
                          <span className="designation">Digital Marketer</span>
                          <ul className="team-social">
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-instagram" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-item-wrap">
                        <div className="team-wrap">
                          <div className="image-inner">
                            <a href="single-team.html"><img src=
                       
                            {images["team5.jpg"]}
                            alt="" /></a>
                          </div>
                        </div>
                        <div className="team-content text-center">
                          <h4 className="person-name"><a href="single-team.html">Rushali Rumi</a></h4>
                          <span className="designation">Design Lead</span>
                          <ul className="team-social">
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-instagram" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-item-wrap">
                        <div className="team-wrap">
                          <div className="image-inner">
                            <a href="single-team.html"><img src=
                     
                            {images["team6.jpg"]}
                            alt="" /></a>
                          </div>
                        </div>
                        <div className="team-content text-center">
                          <h4 className="person-name"><a href="single-team.html">Abu Sayed</a></h4>
                          <span className="designation">App Developer</span>
                          <ul className="team-social">
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-instagram" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-item-wrap">
                        <div className="team-wrap">
                          <div className="image-inner">
                            <a href="single-team.html"><img src=
                      
                            {images["team7.jpg"]}
                            alt="" /></a>
                          </div>
                        </div>
                        <div className="team-content text-center">
                          <h4 className="person-name"><a href="single-team.html">Sonia Akhter</a></h4>
                          <span className="designation">Graphic Artist</span>
                          <ul className="team-social">
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-instagram" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-item-wrap">
                        <div className="team-wrap">
                          <div className="image-inner">
                            <a href="single-team.html"><img 
                            src=
                            {images["team8.jpg"]}
                          
                            
                            alt="" /></a>
                          </div>
                        </div>
                        <div className="team-content text-center">
                          <h4 className="person-name"><a href="single-team.html">Rayhan Ali</a></h4>
                          <span className="designation">CEO &amp; Founder</span>
                          <ul className="team-social">
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-instagram" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-item-wrap">
                        <div className="team-wrap">
                          <div className="image-inner">
                            <a href="single-team.html"><img src=
                         
                            {images["team9.jpg"]}
                            alt="" /></a>
                          </div>
                        </div>
                        <div className="team-content text-center">
                          <h4 className="person-name"><a href="single-team.html">Benjir Akther</a></h4>
                          <span className="designation">Graphic Designer</span>
                          <ul className="team-social">
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-instagram" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-item-wrap">
                        <div className="team-wrap">
                          <div className="image-inner">
                            <a href="single-team.html"><img src="images_vimal/team1.jpg" alt="" /></a>
                          </div>
                        </div>
                        <div className="team-content text-center">
                          <h4 className="person-name"><a href="single-team.html">Makhaia Antitni</a></h4>
                          <span className="designation">President &amp; CEO</span>
                          <ul className="team-social">
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-instagram" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-item-wrap">
                        <div className="team-wrap">
                          <div className="image-inner">
                            <a href="single-team.html"><img 
                            src=
                            {images["team2.jpg"]} 
                           
                            
                            alt="" /></a>
                          </div>
                        </div>
                        <div className="team-content text-center">
                          <h4 className="person-name"><a href="single-team.html">Corey Anderson</a></h4>
                          <span className="designation">CEO &amp; Founder</span>
                          <ul className="team-social">
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-instagram" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-item-wrap">
                        <div className="team-wrap">
                          <div className="image-inner">
                            <a href="single-team.html"><img src=
                            
                            {images["team3.jpg"]}
                            alt="" /></a>
                          </div>
                        </div>
                        <div className="team-content text-center">
                          <h4 className="person-name"><a href="single-team.html">Masud Rana</a></h4>
                          <span className="designation">Web Developer</span>
                          <ul className="team-social">
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-instagram" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-item-wrap">
                        <div className="team-wrap">
                          <div className="image-inner">
                            <a href="single-team.html"><img src=
                            {images["team4.jpg"]}
                          
                             alt="" /></a>
                          </div>
                        </div>
                        <div className="team-content text-center">
                          <h4 className="person-name"><a href="single-team.html">Najmul Huda</a></h4>
                          <span className="designation">Digital Marketer</span>
                          <ul className="team-social">
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-instagram" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Team Section End */}
              {/* Process Section Start */}
              <div className="rs-process style2 pt-120 pb-120 md-pt-80 md-pb-73">
                <div className="container">
                  <div className="sec-title2 text-center mb-45">
                    <span className="sub-text style-bg">Process</span>
                    <h2 className="title title2">
                      Our Working Process
                    </h2>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-sm-6 md-mb-50">
                      <div className="addon-process">
                        <div className="process-wrap">
                          <div className="process-img">
                            <img src=
                         
                            {images["process1.png"]}
                            alt="" />
                          </div>
                          <div className="process-text">
                            <h3 className="title">Discovery</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 md-mb-50">
                      <div className="addon-process">
                        <div className="process-wrap">
                          <div className="process-img">
                            <img src=
                            {images["process4.png"]}
                            
                            alt="" />
                          </div>
                          <div className="process-text">
                            <h3 className="title"> Planning</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="addon-process">
                        <div className="process-wrap">
                          <div className="process-img">
                            <img src=
                            {images["process2.png"]}
                          
                             alt="" />
                          </div>
                          <div className="process-text">
                            <h3 className="title">Execute</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="addon-process">
                        <div className="process-wrap">
                          <div className="process-img">
                            <img src=
                            {images["process3.png"]}
                         
                             alt="" />
                          </div>
                          <div className="process-text">
                            <h3 className="title">Deliver</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Process Section End */}
              {/* Pricing section start */}
              <div className="rs-pricing style2 gray-color pt-120 pb-143 md-pt-80 md-pb-80">
                <div className="container">
                  <div className="sec-title2 text-center mb-45">
                    <span className="sub-text style-bg">Pricing</span>
                    <h2 className="title title2">
                      Our Pricing Plan
                    </h2>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 md-mb-30">
                      <div className="pricing-table new-style2">
                        <div className="pricing-badge">
                          Silver
                        </div>
                        <div className="pricing-icon">
                          <img src=
                   
                          {images["pricing-main-home-icons1.png"]}
                          alt="" />
                        </div>
                        <div className="pricing-table-price">
                          <div className="pricing-table-bags">
                            <span className="pricing-currency">$</span>
                            <span className="table-price-text">29.99</span>
                            <span className="table-period">Monthly Package</span>
                          </div>
                        </div>
                        <div className="pricing-table-body">
                          <ul>
                            <li><i className="fa fa-check" /><span>Powerful Admin Panel</span></li>
                            <li><i className="fa fa-check" /><span>1 Native Android App</span></li>
                            <li><i className="fa fa-close" /><span>Multi-Language Support</span></li>
                            <li><i className="fa fa-check" /><span>Support via E-mail and Phone</span></li>
                          </ul>
                        </div>
                        <div className="btn-part">
                          <a className="readon buy-now" href="contact.html">Buy Now</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 md-mb-30">
                      <div className="pricing-table primary-bg">
                        <div className="pricing-badge white-color-bg">
                          Gold
                        </div>
                        <div className="pricing-icon">
                          <img src=
                         
                          {images["pricing-main-home-icons2.png"]}
                          alt="" />
                        </div>
                        <div className="pricing-table-price">
                          <div className="pricing-table-bags">
                            <span className="pricing-currency">$</span>
                            <span className="table-price-text">39.99</span>
                            <span className="table-period">Monthly Package</span>
                          </div>
                        </div>
                        <div className="pricing-table-body">
                          <ul>
                            <li><i className="fa fa-check" /><span>Powerful Admin Panel</span></li>
                            <li><i className="fa fa-check" /><span>2 Native Android App</span></li>
                            <li><i className="fa fa-check" /><span>Multi-Language Support</span></li>
                            <li><i className="fa fa-check" /><span>Support via E-mail and Phone</span></li>
                          </ul>
                        </div>
                        <div className="btn-part">
                          <a className="readon buy-now" href="contact.html">Buy Now</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="pricing-table new-style2">
                        <div className="pricing-badge">
                          Platinum
                        </div>
                        <div className="pricing-icon">
                          <img src=
                     
                          {images["pricing-main-home-icons3.png"]}
                          alt="" />
                        </div>
                        <div className="pricing-table-price">
                          <div className="pricing-table-bags">
                            <span className="pricing-currency">$</span>
                            <span className="table-price-text">79.99</span>
                            <span className="table-period">Monthly Package</span>
                          </div>
                        </div>
                        <div className="pricing-table-body">
                          <ul>
                            <li><i className="fa fa-check" /><span>Powerful Admin Panel</span></li>
                            <li><i className="fa fa-check" /><span>3 Native Android App</span></li>
                            <li><i className="fa fa-check" /><span>Multi-Language Support</span></li>
                            <li><i className="fa fa-check" /><span>Support via E-mail and Phone</span></li>
                          </ul>
                        </div>
                        <div className="btn-part">
                          <a className="readon buy-now" href="contact.html">Buy Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pricing section end */}
              {/* Counter Section Start */}
              <div className="rs-contact-wrap bg5 pt-120 pb-390 md-pt-80">
                <div className="container">
                  <div className="sec-title2 text-center mb-30">
                    <span className="sub-text style-bg white-color">Contact</span>
                    <h2 className="title white-color">
                      Request A Free Consultation
                    </h2>
                  </div>
                </div>
              </div>
              {/* Counter Section End */}
              {/* Video Section End */}
              <div className="rs-video-wrap style2 inner pb-120 md-pb-80">
                <div className="container">
                  <div className="row margin-0 gray-color">
                    <div className="col-lg-6 padding-0">
                      <div className="video-item">
                        <div className="rs-videos">
                          <div className="animate-border main-home style2">
                            <a className="popup-border popup-videos" href="https://www.youtube.com/watch?v=YLN1Argi7ik">
                              <i className="fa fa-play" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 padding-0">
                      <div className="rs-requset">
                        <div id="form-messages" />
                        <form id="contact-form" method="post" action="https://rstheme.com/products/html/braintech/mailer.php">
                          <fieldset>
                            <div className="row">
                              <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                <input className="from-control" type="text" id="name" name="name" placeholder="Name" required />
                              </div>
                              <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                <input className="from-control" type="text" id="email" name="email" placeholder="E-Mail" required />
                              </div>
                              <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                <input className="from-control" type="text" id="phone" name="phone" placeholder="Phone Number" required />
                              </div>
                              <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                <input className="from-control" type="text" id="website" name="website" placeholder="Your Website" required />
                              </div>
                              <div className="col-lg-12 mb-45">
                                <textarea className="from-control" id="message" name="message" placeholder="Your message Here" required defaultValue={""} />
                              </div>
                            </div>
                            <div className="btn-part">
                              <input className="submit sub-small" type="submit" defaultValue="Submit Now" />
                            </div>
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Video Section End */}
            </div>
      

  );
}

