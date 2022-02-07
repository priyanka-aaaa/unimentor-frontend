import React, { useState, useEffect } from "react";
import axios from 'axios';

// start for personal information
export default function PrimaryInfo() {
    const [mounted, setMounted] = useState();
    const [universityId, setuniversityId] = useState();
    const [name, setname] = useState("");
    const [address, setaddress] = useState("");
    const [country, setcountry] = useState("");
    const [state, setstate] = useState("");
    const [city, setcity] = useState("no");
    const [pincode, setpincode] = useState("");
    const [type, settype] = useState("");
    const [description, setdescription] = useState("");
    const [website, setwebsite] = useState("");
    const [phone, setphone] = useState("no");
    const [organization, setorganization] = useState("");
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");


    useEffect(() => {
        if (localStorage.getItem("universityData")) {
            var a = localStorage.getItem('universityData');
            var mydata = JSON.parse(a);
            var myuniversityid = mydata.data.university._id;

            var user_email = mydata.data.university.email;
            var mytoken = mydata.data.token;

        }

        setMounted(mytoken)
        setuniversityId(myuniversityid);
        //start for fetch personal information
        axios.get(process.env.REACT_APP_SERVER_URL + 'university/' + myuniversityid + '/primaryInformation')


            .then(function (res) {
                if (res.data.success === true) {
                    var student_universityPrimaryInformation = res.data.universityPrimaryInformation;

                    setname(student_universityPrimaryInformation.name);
                    setaddress(student_universityPrimaryInformation.address);
                    setcountry(student_universityPrimaryInformation.country);
                    setstate(student_universityPrimaryInformation.state);
                    setcity(student_universityPrimaryInformation.city);
                    setpincode(student_universityPrimaryInformation.pincode);
                    settype(student_universityPrimaryInformation.type);
                    setdescription(student_universityPrimaryInformation.description);
                    setwebsite(student_universityPrimaryInformation.website);
                    setphone(student_universityPrimaryInformation.phone);
                    setorganization(student_universityPrimaryInformation.organization);

                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
         
            axios.get(process.env.REACT_APP_SERVER_URL + 'countries/')
 
 
            .then(function (res) {
                if (res.data.success === true) {
                  
                    // var student_universityPrimaryInformation = res.data.universityPrimaryInformation;
 
                    // setname(student_universityPrimaryInformation.name);
 
 
                }
                else {
                    alert("error");
                }
 
            })
            .catch(error => {
                console.log(error.response)
            });
            //start for fetch for city
            axios.get(process.env.REACT_APP_SERVER_URL + 'states/india')
  .then(function (res) {
                if (res.data.success === true) {
               
                  }
                else {
                    alert("error");
                }
 
            })
            .catch(error => {
                console.log(error.response)
            });
            //end for fetch for city

    }, [])


    function Personal_Information(event) {
        event.preventDefault();
        const obj = {
            name: name,
            address: address,
            country: country,
            state: state,
            city: city,
            pincode: pincode,
            type: type,
            description: description,
            website: website,
            phone: phone,
            organization: organization

        };

        axios.put(process.env.REACT_APP_SERVER_URL + 'university/primaryInformation', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {

                if (res.data.success === true) {
                    setsuccessMessage("Primary Information Updated")
                    setTimeout(() => setsubmitSuccess(""), 3000);
                    setsubmitSuccess(1)

                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
    }
    return (
        <div>

            {submitSuccess === 1 ? <div className="Show_success_message">
                <strong>Success!</strong> {successMessage}
            </div> : null}

            <div className="card">

                <div className="card">
                    <a className="card-header" data-bs-toggle="collapse" href="#collapseOne"><strong>1</strong>
                        Primary Info

                    </a>
                    <div id="collapseOne" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                            {/* start for shwongi popup */}

                            {/* end for showing popup */}

                            <form onSubmit={Personal_Information}>
                                <div className="from-block">


                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Name
                                                    *</label>
                                                <input type="text" className="form-control"
                                                    placeholder="Name" name="uname"

                                                    value={name}
                                                    onChange={(e) => setname(e.target.value)}
                                                    required
                                                />
                                            </div>

                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <h6>Location</h6>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Address
                                                    *</label>
                                                <input type="text" className="form-control"
                                                    placeholder="Address" name="Address"

                                                    value={address}
                                                    onChange={(e) => setaddress(e.target.value)}
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Country *</label>
                                                <select className="form-control" name="country" required=""
                                                    value={country}
                                                    onChange={(e) => setcountry(e.target.value)}

                                                >
                                                    <option >Select Country</option>
                                                    <option>India</option>
                                                    <option>Afghanistan</option>
                                                    <option>Albania</option>
                                                    <option>Algeria</option>
                                                    <option>American Samoa</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>State *
                                                </label>
                                                <select className="form-control" name="state" required=""

                                                    value={state}
                                                    onChange={(e) => setstate(e.target.value)}
                                                >
                                                    <option>Select State</option>
                                                    <option>Please select country to view states
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group"><label>City</label>
                                                <select className="form-control" name="city" required=""

                                                    value={city}
                                                    onChange={(e) => setcity(e.target.value)}
                                                >
                                                    <option >Select State</option>
                                                    <option>Please select a state to view cities
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>Pincode *</label>
                                                <input type="text" className="form-control" placeholder="Pincode" name="pin_code" required=""
                                                    value={pincode}
                                                    onChange={(e) => setpincode(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>University Type</label>
                                                <select className="form-control" name="city" required=""
                                                    value={type}
                                                    onChange={(e) => settype(e.target.value)}
                                                >
                                                    <option >Select Type</option>
                                                    <option>Public</option>
                                                    <option>Private</option>
                                                    <option>Govt</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Description</label>
                                                <textarea
                                                    value={description}
                                                    onChange={(e) => setdescription(e.target.value)}
                                                    className="form-control" row="2" col="3"></textarea>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>Website</label>
                                                <input type="text" className="form-control" placeholder="website" name="website" required=""

                                                    value={website}
                                                    onChange={(e) => setwebsite(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <label>Phone Number</label>
                                            <input type="text" className="form-control" placeholder="phone number" name="ph-no" required=""

                                                value={phone}
                                                onChange={(e) => setphone(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label>Parent organization</label>
                                            <input type="text" className="form-control" placeholder="Parent organization" name="pr-org" required=""

                                                value={organization}
                                                onChange={(e) => setorganization(e.target.value)}
                                            />
                                        </div>
                                    </div>




                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col-md-6"></div>
                                            <div className="col-md-6 text-right">
                                                <button type="submit" className="btn btn-secondary" >Save
                                                </button>
                                                <button data-bs-toggle="collapse" href="#collapseTwo" type="submit"
                                                    className="btn btn-success">Save &
                                                    Next</button>
                                            </div>

                                        </div>

                                    </div>



                                </div>
                            </form>
                        </div>
                        {/* end for primary info */}
                    </div>

                </div>
            </div>
        </div>
    );
}

