import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

import Footer from './Footer';
// import certificate from './img/certificate.jpg';
export default function AgentEvaluate() {
  return (
    <div class="container">

    {/* <!-- Page Heading --> */}
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Certificate</h1>


    </div>


    {/* <!-- Content Row --> */}

    <div class="row">

        {/* <!-- Area Chart --> */}
        <div class="col-xl-12 col-lg-7">
            <div class="card shadow mb-4">
                {/* <!-- Card Header - Dropdown --> */}
                <div class="card shadow mb-4">
                    <div class="certificate">
                        <img src="certificate" class="img-fluid" />


                    </div>
                </div>
                {/* <!-- Card Body --> */}

            </div>
        </div>


    </div>


</div>
    );
}