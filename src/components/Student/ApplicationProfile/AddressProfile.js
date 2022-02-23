import React, { useState, useEffect } from "react";

import axios from 'axios';
function PersonalInformation(props) {
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [mounted, setMounted] = useState();

  
    const [country, setcountry] = useState();
    const [state, setstate] = useState();
    const [city, setcity] = useState();
    const [address, setaddress] = useState();
    const [zipcode, setzipcode] = useState()
    const [communication_address, setcommunication_address] = useState("no");
    const [countries, setcountries] = useState([{
        country_name: ""
    }]);
    const [states, setstates] = useState([{
        state_name: ""
    }])
    const [cities, setcities] = useState([{
        city_name: ""
    }])


    useEffect(() => {
        if (localStorage.getItem("userData")) {
            var a = localStorage.getItem('userData');
            var mydata = JSON.parse(a);
        
            var user_email = mydata.data.student.email;
            var mytoken = mydata.data.token;
        }
        setMounted(mytoken)
        var myurl = process.env.REACT_APP_SERVER_URL;

     axios.get(process.env.REACT_APP_SERVER_URL + 'student/address', { headers: { 'Authorization': mytoken } })
     .then(function (res) {
        
         if (res.data.success === true) {

             var studentAddress = res.data.studentAddress;
             setcountry(studentAddress.country);
             setstate(studentAddress.state);
             setcity(studentAddress.city);
             setaddress(studentAddress.address);
             setzipcode(studentAddress.zipcode);
             setcommunication_address(studentAddress.communication_address);
         }
         else {
         
         }

     })
     .catch(error => {
  
     });
     axios.get(process.env.REACT_APP_SERVER_URL + 'countries/')


     .then(function (res) {
         if (res.data.success === true) {
        setcountries(res.data.result);


         }
         else {
             
         }

     })
     .catch(error => {
       
     });

 axios.get(process.env.REACT_APP_SERVER_URL + 'states/india')
     .then(function (res) {
         if (res.data.success === true) {

         }
         else {
           
         }

     })
     .catch(error => {
  
     });

    }, [])
    function application_address(event) {
        event.preventDefault();
    
        const obj = {
            country: country,
            state: state,
            city: city,
            address: address,
            zipcode: zipcode,
            communication_address: communication_address

        };
        axios.put(process.env.REACT_APP_SERVER_URL + 'student/address', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
          
                if (res.data.success === true) {
                    setsuccessMessage("Address Updated")
                    setTimeout(() => setsubmitSuccess(""), 3000);
                    setsubmitSuccess(1)

                }
                else {
               
                }

            })
            .catch(error => {
              
            });
    }
    
    function handlecountry(e) {

        setcountry(e)

        axios.get(process.env.REACT_APP_SERVER_URL + 'states/' + e + '/')


            .then(function (res) {
                if (res.data.success === true) {
                 setstates(res.data.result);


                }
                else {
                
                }

            })
            .catch(error => {
               
            });
    }
    function handlestate(e) {

        setstate(e)

        axios.get(process.env.REACT_APP_SERVER_URL + 'cities/' + e + '/')


            .then(function (res) {
                if (res.data.success === true) {
                 setcities(res.data.result);


                }
                else {
           
                }

            })
            .catch(error => {
              
            });
    }
    return (
      
        <div className="card">
             {submitSuccess === 1 ? <div className="Show_success_message">
                            <strong>Success!</strong> {successMessage}
                        </div> : null}
        <a className="card-header" data-bs-toggle="collapse" href="#collapseTwo">
            <strong>2</strong>   Address & Contact
        </a>
        <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
                <form onSubmit={application_address}>
                    <div className="d-flex flex-wrap" id="Address">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                                <label htmlFor="Country">Country <span className="text-danger">
                                    *</span>
                                </label>
                                <select
                                    value={country}
                                    onChange={(e) => handlecountry(e.target.value)}

                                
                                    className="form-control" name="country" required="">
                                     {countries.map((element, index) => {
                                                        return (

                                                            <option


                                                                value={element.country_name} key={index}>{element.country_name}</option>
                                                        )
                                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                                <label htmlFor="State/Province">State/Province <span className="text-danger"> *</span>
                                </label>
                                <select
                                    value={state}
                                    onChange={(e) => handlestate(e.target.value)}
                                    className="form-control" name="state" required="">
                     
                                    {states.map((element, index) => {
                                                        return (

                                                            <option


                                                                value={element.state_name} key={index}>{element.state_name}</option>
                                                        )
                                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group"><label htmlFor="City/Town">City/Town <span className="text-danger"> *</span></label>
                                <select
                                    value={city}
                                    onChange={(e) => setcity(e.target.value)}
                                    className="form-control" name="city" required="">
                                    {cities.map((element, index) => {
                                                        return (

                                                            <option


                                                                value={element.city_name} key={index}>{element.city_name}</option>
                                                        )
                                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                                <label htmlFor="addressLine2">Address <span className="text-danger">
                                    *</span></label>
                                <input
                                    value={address}
                                    onChange={(e) => setaddress(e.target.value)}
                                    type="text" className="form-control" placeholder="Address" name="address_text" required="" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                                <label htmlFor="Zipcode">Zipcode <span className="text-danger">
                                    *</span></label>
                                <input
                                    value={zipcode}
                                    onChange={(e) => setzipcode(e.target.value)}
                                    type="text" className="form-control" placeholder="Zipcode" name="zip_code" required="" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-12">
                            <div className="form-group"><label htmlFor="addressLine2">Is your Home
                                Address same as Communication Address?</label>
                                <label htmlFor="1" className="m-3">
                                    <input
                                        value={communication_address}
                                        onChange={(e) => setcommunication_address(e.target.value)}
                                        checked={communication_address === "yes"}
                                        value="yes"
                                        type="radio" name="address_check" /> Yes</label>
                                <label htmlFor="0" className="m-3"><input type="radio" name="address_check"
                                    value={communication_address}
                                    onChange={(e) => setcommunication_address(e.target.value)}
                                    checked={communication_address === "no"}
                                    value="no"
                                /> No</label>
                            </div>
                        </div>
                        <div className="clearfix"></div>

                    </div>

                    <div className="mb-3">
                        <div className="row">
                            <div className="col-md-6"></div>
                            <div className="col-md-6 text-right">
                                <button type="submit" className="btn btn-secondary btn-lg">Save
                                </button>
                                <button type="submit" data-bs-toggle="collapse" className="btn btn-success btn-lg" href="#collapse3">Save
                                    Next</button>
                            </div>

                        </div>

                    </div>
                </form>
            </div>
        </div>
    </div>

    );
}

export default PersonalInformation;