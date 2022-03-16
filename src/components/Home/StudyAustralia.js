import React, { useState, useEffect } from "react";

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
export default function StudyAustralia() {
  useEffect(() => {
 
    const url1 = process.env.REACT_APP_SERVER_URL + 'universitysCountry/Australia';
    fetch(url1, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        var myresults = data.universities;
       // if (Object.keys(myresults).length === 0) {
        //   setTable("true");
        // }
        // setFormValues(data.universities)
      })

  }, [])
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
              <a href="index.html"><img src="assets/images/logo.png" alt="logo" /></a>
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
            <h1 className="page-title">Study in Australia
            </h1>
            <a className="readon started" href="#"> Apply Now</a>
          </div>
        </div>
        {/* Breadcrumbs End */}
        <section id="secondaryNavBar" style={{ display: 'block' }}>
          <ul>
            <li className><a> FAST FACTS</a></li>
            <li className><a> TOP UNIVERSITIES</a></li>
            <li className><a> ADMISSIONS</a></li>
            <li className><a> VISA</a></li>
            <li className><a> COST OF LIVING</a></li>
            <li className><a> WORK OPPORTUNITIES</a></li>
            <li className><a> FAQs</a></li>
          </ul>
        </section>
        <div className="container">
          <div className="row  mt-5 mb-5">
            <div className="col-sm-10 ">
              <div className="row">
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img src="assets/images/washington-monument.webp" /></div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>Capital<br /><strong>Canberra</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img src="assets/images/population.png" />
                    </div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>Population<br /><strong>26 Mn</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img src="assets/images/language.png" />
                    </div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>Language<br /><strong>English</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img src="assets/images/int-student.png" /></div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>International Students<br /><strong>869,709</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img src="https://images.leverageedu.com/assets/img/economic.png" /></div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>GDP<br /><strong>$1.37 Trillion</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img src="https://images.leverageedu.com/assets/img/keypad.png" /></div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>Dialing Code<br /><strong>+61</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img src="https://images.leverageedu.com/assets/img/money.png" /></div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>Currency<br /><strong>Australian Dollar</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img src="https://images.leverageedu.com/assets/img/graduation-hat.png" /></div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>Universities<br /><strong>43</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="study-location-facts_rankingBox__2pQ44 mobile-hide">
                <img src="assets/images/7.jpg" />
              </div>
              <div className="study-location-facts_studyGuide__isgq9 mobile-hide">
                <div className="textC ">
                  <p style={{ marginBottom: '0px' }}>Download your Australia Free Guide</p>
                </div><a id="button"><img src="https://images.leverageedu.com/assets/img/icon.png" style={{ marginLeft: '10px', height: '30px' }} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main content End */}
      <section className="taranding-block">
        <div className="container">
          <h2>What’s Trending?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="blog-item">
                <div className="image-wrap">
                  <a href="#"><img src="assets/images/trad-aus1.jpg" alt="" /></a>
                </div>
                <div className="blog-content">
                  <h4 className="blog-title  mt-3"><a href="#">Western Australia Reopens for International
                    Students</a></h4>
                  <p className="desc">Western Australia reopens its borders for international students after 2
                    years of isolatio...</p>
                  <div className="blog-button"><a href="#">Learn More</a></div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-item">
                <div className="image-wrap">
                  <a href="#"><img src="assets/images/trad-aus2.jpg" alt="" /></a>
                </div>
                <div className="blog-content">
                  <h4 className="blog-title  mt-3"><a href="#">Master of Supply Chain Management in Australia</a>
                  </h4>
                  <p className="desc">Master of Supply Chain Management is an international degree offered as an
                    MBA in Supply C...</p>
                  <div className="blog-button"><a href="#">Learn More</a></div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-item">
                <div className="image-wrap">
                  <a href="#"><img src="assets/images/trad-aus3.jpg" alt="" /></a>
                </div>
                <div className="blog-content">
                  <h4 className="blog-title mt-3"><a href="#">Deakin University Scholarships for International
                    Students</a></h4>
                  <p className="desc">Founded in 1974, Deakin University is a public university located in
                    Victoria, Australia. ...</p>
                  <div className="blog-button"><a href="#">Learn More</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="taranding-block">
        <div className="container">
          <h2>Top Universities</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="uniBlock">
                <div className="headerBlock"><a href="https://leverageedu.com/universities/university-of-tasmania" target="_blank"><img className="logo" src="https://s3.ap-south-1.amazonaws.com/leverageedu/school-logo/australia/tasmaniauniversity.png" /></a>
                  <div className="nameBlock">
                    <div className="name">University of Tasmania</div>
                    <div className="address">Tasmania, Australia</div>
                  </div><img className="star" src="https://images.leverageedu.com/assets/img/starInactive.png" />
                </div>
                <div className="detailBlock">
                  <div className="detail"><img className="logo" src="https://images.leverageedu.com/assets/img/study-locations/score.png" />
                    <div className="content">
                      <div className="value">6</div>
                      <div className="description">Minimum IELTS Required</div>
                    </div>
                  </div>
                  <div className="detail"><img className="logo" src="https://images.leverageedu.com/assets/img/study-locations/ranking.png" />
                    <div className="content">
                      <div className="value">287</div>
                      <div className="description">Ranking</div>
                    </div>
                  </div>
                </div><a href="/universities/university-of-tasmania" target="_blank" className="redirector">
                  <p>Apply Now</p>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="uniBlock">
                <div className="headerBlock"><a href="https://leverageedu.com/universities/swinburne-university-of-technology" target="_blank"><img className="logo" src="https://s3.ap-south-1.amazonaws.com/leverageedu/school-logo/australia/swinburneuniversityoftechnology.png" /></a>
                  <div className="nameBlock">
                    <div className="name">Swinburne University of Technology</div>
                    <div className="address">Melbourne, Australia</div>
                  </div><img className="star" src="https://images.leverageedu.com/assets/img/starInactive.png" />
                </div>
                <div className="detailBlock">
                  <div className="detail"><img className="logo" src="https://images.leverageedu.com/assets/img/study-locations/score.png" />
                    <div className="content">
                      <div className="value">6</div>
                      <div className="description">Minimum IELTS Required</div>
                    </div>
                  </div>
                  <div className="detail"><img className="logo" src="https://images.leverageedu.com/assets/img/study-locations/ranking.png" />
                    <div className="content">
                      <div className="value">387</div>
                      <div className="description">Ranking</div>
                    </div>
                  </div>
                </div><a href="/universities/swinburne-university-of-technology" target="_blank" className="redirector">
                  <p>Apply Now</p>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="uniBlock">
                <div className="headerBlock"><a href="https://leverageedu.com/universities/queensland-university-of-technology-qut" target="_blank"><img className="logo" src="https://s3.ap-south-1.amazonaws.com/leverageedu/school-logo/australia/queenslanduniversityoftechnology.png" /></a>
                  <div className="nameBlock">
                    <div className="name">Queensland University of Technology</div>
                    <div className="address">Brisbane, Australia</div>
                  </div><img className="star" src="https://images.leverageedu.com/assets/img/starInactive.png" />
                </div>
                <div className="detailBlock">
                  <div className="detail"><img className="logo" src="https://images.leverageedu.com/assets/img/study-locations/score.png" />
                    <div className="content">
                      <div className="value">6.5</div>
                      <div className="description">Minimum IELTS Required</div>
                    </div>
                  </div>
                  <div className="detail"><img className="logo" src="https://images.leverageedu.com/assets/img/study-locations/ranking.png" />
                    <div className="content">
                      <div className="value">213</div>
                      <div className="description">Ranking</div>
                    </div>
                  </div>
                </div><a href="/universities/queensland-university-of-technology-qut" target="_blank" className="redirector">
                  <p>Apply Now</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>


  );
}

