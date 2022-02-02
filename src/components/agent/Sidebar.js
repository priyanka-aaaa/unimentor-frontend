import React, { Component } from 'react';

// import ApplicationProfile from './ApplicationProfile';
// import Profile from './Profile';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div>
                {/* <!-- Sidebar --> */}
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                    {/* <!-- Sidebar - Brand --> */}
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        {/* <!-- <div className="sidebar-brand-icon rotate-n-15">
<i className="fas fa-graduation-cap"></i>
</div> --> */}
                        <div className="sidebar-brand-text mx-3">Coursementor </div>
                    </a>

                    {/* <!-- Divider --> */}
                    <hr className="sidebar-divider my-0" />

                    {/* <!-- Nav Item - Dashboard --> */}


                    <li className="nav-item">

                        <Link to={'/AgentTeam'} className="nav-link" >
                            <i className="fas fa-file-alt"></i>
                            <span>Partner Team</span></Link>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <i className="fas fa-user-tie"></i>
                            <span>my Student </span>
                        </a>
                        <div id="collapseTwo" className="collapse" data-bs-parent="#accordion" data-parent="#accordionSidebar" >
                            <div className="bg-white py-2 collapse-inner rounded">
                                <Link to={'/AddStudent'} className="collapse-item">
                                    <span>Add Student</span></Link>
                                    <Link to={'/AgentStudent'} className="collapse-item">
                                    <span>Student</span></Link>
                                    <Link to={'/AgentApplication'} className="collapse-item">
                                    <span>Student Application</span></Link>
                     
                              
                            </div>
                        </div>
                    </li>



                    <li className="nav-item ">
                        <Link to={'/AgentEvaluate'} className="nav-link" href="#">
                            <i className="fas fa-file-upload"></i>
                            <span>Evaluate Profile</span></Link>
                    </li>
                    <li className="nav-item ">
                        <Link to={'/AgentCommission'} className="nav-link" href="#">
                            <i className="fas fa-file-upload"></i>
                            <span>Commissions</span></Link>
                    </li>
                    

                    <li className="nav-item ">
                        <Link to={'/AgentCertificate'} className="nav-link" href="#">
                            <i className="fas fa-file-upload"></i>
                            <span>Download Certificate</span></Link>
                    </li>
                    {/* <!-- Sidebar Toggler (Sidebar) --> */}
                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle"></button>
                    </div>

                </ul>
                {/* <!-- End of Sidebar --> */}
            </div>
        );
    }
}

export default Sidebar;