import React, { useState, useEffect } from "react";
import axios from 'axios';
import Courses from '../Courses'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SweetAlert from 'react-bootstrap-sweetalert';

const CoursesFee = () => {
   
    return (
        <div>
            <div className="card">
                <a className="card-header" data-bs-toggle="collapse" href="#collapse3"><strong>3</strong>
                    Courses & Fees
                </a>
                <div id="collapse3" className="collapse" data-bs-parent="#accordion">
                  <Courses/>
                </div>

            </div>
        </div>
    );
}

export default CoursesFee;
