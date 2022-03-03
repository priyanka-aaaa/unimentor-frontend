import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus, faTrash, faPen,faEye,faUser,faFile,faFileUpload,faUserTie

} from '@fortawesome/free-solid-svg-icons';
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}

const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg|webp)$/));

function Sidebar(props) {
    const [addWidth, setaddWidth] = useState(0);
 
 

    return (
        <div>
            {/* <!-- Sidebar --> */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar"
              

            >

                {/* <!-- Sidebar - Brand --> */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">

                    <div className="sidebar-brand-text mx-3"> <a href="/">
                        <img src={images["dash-logo.png"]} alt="" /></a></div>
                </a>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0" />

                {/* <!-- Nav Item - Dashboard --> */}

                <li className="nav-item" data-toggle="tooltip" data-placement="right" title="University">

                    <Link to={'/UniversityProfile'} className="nav-link" >
                    <FontAwesomeIcon icon={faUser} />

                     
                        <span>University</span></Link>

                </li>
                <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Coures Listingn">

                    <Link to={'/UniversityCourses'} className="nav-link" data-toggle="tooltip" data-placement="right" title="Coures Listing">
                   
                    <FontAwesomeIcon icon={faFile} />

                        <span>Courses Listing</span></Link>
                </li>
                <li className="nav-item " data-toggle="tooltip" data-placement="right" title="Set Commission">
                    <Link to={'/UniversitySetcommission'} className="nav-link" href="#">
                    <FontAwesomeIcon icon={faFile} />

                        <span>Set Commission</span></Link>
                </li>

                <li className="nav-item " data-toggle="tooltip" data-placement="right" title="Summary Information"
                >
                    <Link to={'/UniversitySummary'} className="nav-link" href="#"

                    >
                    <FontAwesomeIcon icon={faFileUpload} />

                    
                        <span >Summary Information</span></Link>
                </li>


                <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Setting">
                    <a className="nav-link collapsed" data-bs-toggle="collapse" href="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                    <FontAwesomeIcon icon={faUserTie} />
                      
                       
                        <span>Settings </span>
                    </a>
                    <div id="collapseTen" className="collapse" data-bs-parent="#accordion" data-parent="#accordionSidebar" >
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link to={'/UniversityPassword'} className="collapse-item" href="#">

                                <span>Change Password</span></Link>
                            <Link to={'/UniversityIntake'} className="collapse-item" href="#">

                                <span>Intake</span></Link>


                        </div>
                    </div>
                </li>


                {/* <!-- Sidebar Toggler (Sidebar) --> */}
               

            </ul>
            {/* <!-- End of Sidebar --> */}
        </div>
    );
}

export default Sidebar;