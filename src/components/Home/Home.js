import React from 'react';
import Footer from './Footer'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}
const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
export default function Home() {
  return (
    <div>
      <div className="main-content">
        {/*Full width header Start*/}
        <div className="full-width-header">
          {/*Header Start*/}
          <Header />
          {/*Header End*/}
          
        </div>
        {/*Full width header End*/}
        {/* Banner Section Start */}
        <div className="rs-banner style3 modify2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 md-mb-50 order-last">
                <div className="banner-img">

                  <img src={images["cbanner-5.png"]}
                    alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-content">
                  <h1 className="title"><span>No one like you.</span><br /> No place like this Coursementor</h1>
                  <p className="desc">
                    It has never been more competitive for universities and colleges to recruit students to
                    their campuses. Institutions of higher learning have to stand out from hundreds if not
                    thousands of competing schools.
                  </p>
                  <ul className="banner-btn">


                    <li>
                      <Link to={'/country'} className="readon started" href="#">

                        Get Started</Link>
                      {/* <a className="readon started" href="#">Get Started</a> */}
                    </li>
                    {/* <li>
                                            <div className="rs-videos">
                                                <div className="animate-border">
                                                    <a className="popup-border popup-videos" href="https://www.youtube.com/watch?v=YLN1Argi7ik">
                                                        <i className="fa fa-play"></i>
                                                    </a>
                                                </div>
                                            </div> 
                                        </li> */}
                  </ul>
                </div>
                {/* Partner Start */}
                <div className="rs-partner style2 modify1 pt-50 ">
                  <div className="container">
                    <p className="title">Trusted By 5000+ Worldwide Customers:</p>
                    <div className="rs-carousel owl-carousel" data-loop="true" data-items={3} data-margin={30} data-autoplay="true" data-hoverpause="true" data-autoplay-timeout={5000} data-smart-speed={800} data-dots="false" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device={2} data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device={3} data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2={3} data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device={3} data-md-device-nav="false" data-md-device-dots="false">
                      <div className="partner-item">
                        <div className="logo-img">
                          <a href="#">
                            <img src={images["pt-1.png"]} alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="partner-item">
                        <div className="logo-img">
                          <a href="#">
                            <img src={images["pt-2.png"]} alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="partner-item">
                        <div className="logo-img">
                          <a href="#">
                            <img src={images["pt-3.png"]} alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="partner-item">
                        <div className="logo-img">
                          <a href="#">
                            <img src={images["pt-4.png"]} alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="partner-item">
                        <div className="logo-img">
                          <a href="#">
                            <img src={images["pt-5.png"]} alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="partner-item">
                        <div className="logo-img">
                          <a href="#">
                            <img src={images["pt-6.png"]} alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="partner-item">
                        <div className="logo-img">
                          <a href="#">
                            <img src={images["7.png"]} alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="partner-item">
                        <div className="logo-img">
                          <a href="#">
                            <img src={images["8.png"]} alt="" />
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
            <img className="dance3" src={images["b4-dot-6.png"]} alt="images" />
          </div>
        </div>
        {/* Banner Section End */}
        {/* Services Section Start */}
        <div className="rs-services style2 modify1 pt-40 pb-120 md-pt-80 md-pb-80">
          <div className="container">
            <div className="sec-title2 text-center mb-45">
              <span className="sub-text gold-color">We Are Best</span>
              <h2 className="title">
                Course Mentor
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
                            <img src={images["service-6.png"]} alt="" />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title"><a href="#">Student </a></h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            Are you a student looking to study abroad in Canada, the United States, the United Kingdom, or Australia? Register to let our team of experts guide you through<br></br> your journey.
                          </p>
                        </div>
                        <div className="front-btn-part">
                          {/* <a className="readon view-more" href="#">Student Registration</a> */}
                          <Link to={'/StudentRegister'} className="readon view-more" href="#">Student Registration</Link>
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
                            <img src={images["universities-icon.png"]} alt="" />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title"><a href="#">Recruitment Partners</a></h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            Do you recruit prospective students who want to study in Canada, the United States, the United Kingdom, or Australia? Register to become an Course Mentor Certified Recruitment Partner.
                          </p>
                        </div>
                        <div className="front-btn-part">
                          {/* <a className="readon view-more" href="#">Recruiter Registration</a> */}
                          <Link to={'/AgentRegister'} className="readon view-more" href="#">Recruiter Registration</Link>
                      
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
                            <img src={images["patner.png"]} alt="" />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title"><a href="#">Partner Schools </a></h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            Become an Course Mentor partner school to diversify your campus by attracting qualified students from around the world. Complete this form and our Partner Relations team will be in touch.
                          </p>
                        </div>
                        <div className="front-btn-part">
                          {/* <a className="readon view-more" href="#">Partner Inquiry</a> */}
                          <Link to={'/Universitylogin'} className="readon view-more" href="#">University Registration</Link>
                          
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
            <div className="row align-items-center">
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
                      {/* <a className="readon started" href="course_finder_select_country.html">Get Started</a> */}
                      <Link to={'/country'} className="readon started" href="#">

Get Started</Link>
                    </div>
                  </div>
                </div>
                {/* Skillbar Section End */}
              </div>
              <div className="col-lg-6 pl-65 md-pl-15">
                <div className="about-img">
                  <img src={images["ab-5.png"]} alt="" />
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
                    <img src={images["style3-1.png"]} alt="" />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Find Programs<br></br>
                      Faster</h4>
                  </div>
                </div>
              </div>
              <div className="services-item">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img src={images["spport-team.png"]} alt="" />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Helpful and Dedicated<br></br> Support Team</h4>
                  </div>
                </div>
              </div>
              <div className="services-item">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img src={images["scholarship.png"]} alt="" />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Access to Exclusive<br></br>  Scholarships</h4>
                  </div>
                </div>
              </div>
              <div className="services-item">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img src={images["style3-10.png"]} alt="" />
                  </div>
                  <div className="services-text">
                    <h4 className="title">One Easy Application<br></br> Platform</h4>
                  </div>
                </div>
              </div>
              <div className="services-item">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img src={images["style3-5.png"]} alt="" />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Knowledgeable<br></br> Support Team</h4>
                  </div>
                </div>
              </div>
              <div className="services-item">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img src={images["ssm-8.png"]} alt="" />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Data Driven<br></br>
                      Insights</h4>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="rs-technology gray-color pt-50 pb-50 mt-50 mb-50">
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
                      <img src={images["ts2-1.png"]} alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src={images["ts2-2.png"]} alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src={images["ts2-3.png"]} alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src={images["ts2-4.png"]} alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src={images["ts2-5.png"]} alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src={images["ts2-6.png"]} alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src={images["ts2-7.png"]} alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src={images["ts2-8.png"]} alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src={images["ts2-9.png"]} alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src={images["ts2-10.png"]} alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src={images["ts2-11.png"]} alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src={images["ts2-12.png"]} alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src={images["ts2-13.png"]} alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src={images["ts2-14.png"]} alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src={images["ts2-15.png"]} alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src={images["ts2-16.png"]} alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src={images["ts2-17.png"]} alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src={images["ts2-18.png"]} alt="" />
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
        <div id="rs-blog" className="rs-blog pt-50 pb-50 mt-50 mb-50">
          <div className="container">
            <div className="sec-title2 text-center mb-30">
              <span className="sub-text gold-color">Blogs</span>
              <h2 className="title title2">
                Latest Tips &amp;Tricks
              </h2>
              <div className="desc">
                We've been building creative tools together for over a decade and have a deep appreciation for
                software applications
              </div>
            </div>
            <div className="rs-carousel owl-carousel" data-loop="true" data-items={3} data-margin={30} data-autoplay="true" data-hoverpause="true" data-autoplay-timeout={5000} data-smart-speed={800} data-dots="false" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device={1} data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device={2} data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2={2} data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device={3} data-md-device-nav="false" data-md-device-dots="false">
              <div className="blog-item">
                <div className="image-wrap">
                  <a href="#"><img src={images["bmh-1.jpg"]} alt="" /></a>
                  <ul className="post-categories">
                    <li><a href="#">Software Development</a></li>
                  </ul>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title"><a href="#">Necessity May Give Us Your Best Virtual
                    Court System</a></h3>
                  <p className="desc">We denounce with righteous indige nation and dislike men who are so
                    beguiled...</p>
                  <div className="blog-button"><a href="#">Learn More</a></div>
                </div>
              </div>
              <div className="blog-item">
                <div className="image-wrap">
                  <a href="#"><img src={images["bmh-2.jpg"]} alt="" /></a>
                  <ul className="post-categories">
                    <li><a href="#"> Web Development</a></li>
                  </ul>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title"><a href="#">Tech Products That Makes Its Easier to
                    Stay at Home</a></h3>
                  <p className="desc">We denounce with righteous indige nation and dislike men who are so
                    beguiled...</p>
                  <div className="blog-button"><a href="#">Learn More</a></div>
                </div>
              </div>
              <div className="blog-item">
                <div className="image-wrap">
                  <a href="blog-details.html"><img src={images["bmh-3.jpg"]} alt="" /></a>
                  <ul className="post-categories">
                    <li><a href="#">It Services</a></li>
                  </ul>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title"><a href="#">Open Source Job Report Show More Openings
                    Fewer</a></h3>
                  <p className="desc">We denounce with righteous indige nation and dislike men who are so
                    beguiled...</p>
                  <div className="blog-button"><a href="#">Learn More</a></div>
                </div>
              </div>
              <div className="blog-item">
                <div className="image-wrap">
                  <a href="#"><img src={images["bmh-4.jpg"]} alt="" /></a>
                  <ul className="post-categories">
                    <li><a href="#">Artifical Intelligence</a></li>
                  </ul>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title"><a href="#">Types of Social Proof What its Makes Them
                    Effective</a></h3>
                  <p className="desc">We denounce with righteous indige nation and dislike men who are so
                    beguiled...</p>
                  <div className="blog-button"><a href="#">Learn More</a></div>
                </div>
              </div>
              <div className="blog-item">
                <div className="image-wrap">
                  <a href="#"><img src={images["bmh-5.jpg"]} alt="" /></a>
                  <ul className="post-categories">
                    <li><a href="#">Digital Technology</a></li>
                  </ul>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title"><a href="#">Tech Firms Support Huawei Restriction,
                    Balk at Cost</a></h3>
                  <p className="desc">We denounce with righteous indige nation and dislike men who are so
                    beguiled...</p>
                  <div className="blog-button"><a href="#">Learn More</a></div>
                </div>
              </div>
              <div className="blog-item">
                <div className="image-wrap">
                  <a href="#"><img src={images["bmh-6.jpg"]} alt="" /></a>
                  <ul className="post-categories">
                    <li><a href="#">It Services</a></li>
                  </ul>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title"><a href="#">Servo Project Joins The Linux Foundation
                    Fold Desco</a></h3>
                  <p className="desc">We denounce with righteous indige nation and dislike men who are so
                    beguiled...</p>
                  <div className="blog-button"><a href="#">Learn More</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog Section End */}
        {/* Testimonial Section Start */}
        <div className="rs-testimonial main-home style4 modify1 pt-120 pb-120 md-pt-80 md-pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="testi-img">
                  <img src={images["testimonial-3.png"]} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="sec-title">
                  <div className="sub-text style4-bg left testi">Testimonials</div>
                  <h2 className="title mb-20">
                    What Our Students Have To Say
                  </h2>
                 
                </div>
                <Slider {...settings}>
                  <div>
                    <div className="testi-item">
                      <div className="author-desc">
                        <div className="desc"><img className="quote" src={images["quote2.png"]} alt="" />"I
                          had an excellent time learning about many topics. I had a little bit
                          of knowledge but never had the chance to study them deeply. Thank
                          You so much for valuable information. "</div>
                      </div>
                      <div className="testimonial-content">
                        <div className="author-img">
                          <img src={images["tmh4.jpg"]} alt="" />
                        </div>
                        <div className="author-part">
                          <a className="name" href="#">Parteek sharma</a>
                          {/* <span className="designation">Arist</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="testi-item">
                      <div className="author-desc">
                        <div className="desc"><img className="quote" src={images["quote2.png"]} alt="" />"
                          It's a great course. The starting can be a bit tough if you're not
                          from a programming background, but later, you start to understand
                          everything because they will explain everything step by step."</div>
                      </div>
                      <div className="testimonial-content">
                        <div className="author-img">
                          <img src={images["tmh2.jpg"]} alt="" />
                        </div>
                        <div className="author-part">
                          <a className="name" href="#">Somya Saini</a>
                          {/* <span className="designation">CEO, Keen IT Solution</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="testi-item">
                      <div className="author-desc">
                        <div className="desc"><img className="quote" src={images["quote2.png"]} alt="" />"Based on such knowledge, we may understand several other
                          programming languages in a more in-depth way. They have such an easy
                          way of teaching. 5/5 rating great work keep it up"</div>
                      </div>
                      <div className="testimonial-content">
                        <div className="author-img">
                          <img src={images["tmh3.jpg"]} alt="" />
                        </div>
                        <div className="author-part">
                          <a className="name" href="#">Imran Khan</a>
                          {/* <span className="designation">Web Developer</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="testi-item">
                      <div className="author-desc">
                        <div className="desc"><img className="quote" src={images["quote2.png"]} alt="" />"I
                          had an excellent time learning about many topics. I had a little bit
                          of knowledge but never had the chance to study them deeply. Thank
                          You so much for valuable information. "</div>
                      </div>
                      <div className="testimonial-content">
                        <div className="author-img">
                          <img src={images["tmh4.jpg"]} alt="" />
                        </div>
                        <div className="author-part">
                          <a className="name" href="#">Parteek sharma</a>
                          {/* <span className="designation">Arist</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
             
                  </div>
                  <div>
                    <div className="testi-item">
                      <div className="author-desc">
                        <div className="desc"><img className="quote" src={images["quote2.png"]} alt="" />"
                          It's a great course. The starting can be a bit tough if you're not
                          from a programming background, but later, you start to understand
                          everything because they will explain everything step by step."</div>
                      </div>
                      <div className="testimonial-content">
                        <div className="author-img">
                          <img src={images["tmh2.jpg"]} alt="" />
                        </div>
                        <div className="author-part">
                          <a className="name" href="#">Somya Saini</a>
                          {/* <span className="designation">CEO, Keen IT Solution</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial Section End */}
        {/* Partner Start */}

        {/* Partner End */}
      </div>
      {/* Main content End */}
      {/* Footer Start */}
      <Footer />
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
    </div>

  );
}

