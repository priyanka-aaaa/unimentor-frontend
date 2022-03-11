import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Courses from './Courses';
import SweetAlert from 'react-bootstrap-sweetalert';
const UniversityCourses = () => {
    return (
        <Courses />
    );
}

export default UniversityCourses;
