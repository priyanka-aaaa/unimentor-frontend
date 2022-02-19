import React from 'react';
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}

const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
function Footer(props) {
    return (
        <footer id="rs-footer" className="rs-footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12 footer-widget">
                <div className="footer-logo mb-30">
                  <a href="index.html"><img src={images["logofirst-1.png"]} alt="" /></a>
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
    );
}

export default Footer;