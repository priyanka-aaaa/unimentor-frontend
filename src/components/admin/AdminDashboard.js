import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';


class AdminDashboard extends Component {

    render() {
        return (
            <div id="page-top">
                <div id="wrapper">
                    <Sidebar />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">

                            <Topbar />
                        </div>
                    </div>
                </div>

                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>
            </div>
        );
    }
}

export default AdminDashboard;