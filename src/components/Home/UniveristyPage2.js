import React, { useState, useEffect } from "react";


import { useLocation } from 'react-router-dom'

export default function AllUniversity2() {
    const location = useLocation()
    useEffect(() => {
      console.log(location.state)
        if(location.state) {
          console.log(location.state)
         
        }
      },[location.state])
      

    return (
      <div>
          fgfdg
          </div>



    );
};


