import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStar, faBiking, faHome, faGraduationCap, faCalendarCheck, faPhone,
    faEnvelope, faGlobe, faCheckCircle

} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useParams,useLocation } from 'react-router-dom';

import Footer from './Footer'
import Header from './Header'


function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}

const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg|webp)$/));


export default function AllUniversity2() {
    const location = useLocation()
 
  

    useEffect(() => {
        
        console.log(location.state.id)
      
    }, [])
  


    return (
      <div>
          fgfdg
          </div>



    );
};


