import React from 'react';
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
  }
  
  const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
function Header(props) {
    return (
        <header id="rs-header" className="rs-header style3 modify1 header-transparent">
        {/* Menu Start */}
        <div className="menu-area menu-sticky">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-2">
                <div className="logo-part">
        
                  <a href="index.html"><img src={images["logofirst-1.png"]} alt="" /></a>
        
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
    );
}

export default Header;