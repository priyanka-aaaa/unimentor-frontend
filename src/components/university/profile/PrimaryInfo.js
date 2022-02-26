import React, { useState, useEffect } from "react";
import axios from 'axios';
import Loader from '../../Home/Loader';
import PhoneInput from 'react-phone-number-input'
import { isValidPhoneNumber } from 'react-phone-number-input'

export default function PrimaryInfo() {
    const [mounted, setMounted] = useState();
    const [universityId, setuniversityId] = useState();
    const [name, setname] = useState("");
    const [address, setaddress] = useState("");
    const [country, setcountry] = useState("Select Country");
    const [state, setstate] = useState("Select State");
    const [city, setcity] = useState("Select City");
    const [pincode, setpincode] = useState("");
    const [type, settype] = useState("");
    const [description, setdescription] = useState("");
    const [website, setwebsite] = useState("");
    const [phone, setphone] = useState("no");
    const [organization, setorganization] = useState("");
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [CheckState, setCheckState] = useState("0");
    const [CheckCity, setCheckCity] = useState("0");
    const [phoneError, setphoneError] = useState("");
    const [typeError, settypeError] = useState("");
    const [descriptionError, setdescriptionError] = useState("");
    const [stateError, setstateError] = useState("");
    const [cityError, setcityError] = useState("");
    const [DescriptionLengthError, setDescriptionLengthError] = useState("");
    const [websiteStartError, setwebsiteStartError] = useState("");
    const [websiteEndError, setwebsiteEndError] = useState("");




    const [loader, setmyloader] = useState("false");

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
        var universityId = localStorage.getItem('universityId');
        var mounted = localStorage.getItem('universityToken');

        setMounted(mounted)
        setuniversityId(universityId);

        axios.get(process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/primaryInformation')


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
    function onChangeName(e) {
        const arr = e.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const str2 = arr.join(" ");
        setname(str2)
    }
    function handlecountry(e) {

        setcountry(e)
        setCheckState("1")
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
        setCheckCity("1")


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
    function nameMethod(e) {
        // const re = /[a-zA-Z]+/s;
        const re = "^[a-zA-Z ]+$";

        if (!re.test(e.key)) {
            e.preventDefault();
        }
    }
    function streetAddressMethod(e) {
        // const re = /[a-zA-Z]+/s;
        const re = /[!@$%^*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        // const re = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        if (re.test(e.key)) {
            e.preventDefault();
        }
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        setdescriptionError("");
        settypeError("");
        setphoneError("");
        setstateError("");
        setcityError("")
        setDescriptionLengthError("");
        setwebsiteStartError("");
        setwebsiteEndError("");
        var descriptionLength = description.split(' ').length;


        if (type === "") {
            settypeError("Please Select University Type");

        }
        else if (phone === "") {
            setphoneError("Please enter phone number");
        }
        else if (isValidPhoneNumber(phone) === false) {
            setphoneError("Please enter correct phone number");
        }
        else if (description === "") {
            setdescriptionError("Please Enter Description")
        }
        else if (state === "Select State") {
            setstateError("Please Enter State")
        }
        else if (city === "Select City") {
            setcityError("Please Enter City")
        }
        else if (descriptionLength < 49) {
            setDescriptionLengthError("Please Enter Aleast 50-60 words")

        }
        else if (!website.startsWith('www.')) {
            setwebsiteStartError("Please Start website with www.")

        }
        else if (!website.endsWith('.com') && !website.endsWith('.edu') && !website.endsWith('.in')) {
            setwebsiteEndError("Please End website with .com or .edu or .in")

        }
        else {
            setmyloader("true")
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
                    setmyloader("false")
                    if (res.data.success === true) {

                        setsuccessMessage("Primary Information Updated")
                        setTimeout(() => setsubmitSuccess(""), 3000);
                        setsubmitSuccess(1)

                    }
                    else {

                    }

                })
                .catch(error => {

                });
        }

    }
    return (
        <div>


            {loader === "true" ?

                <Loader />

                : null}
            {submitSuccess === 1 ? <div className="Show_success_message">
                <strong>Success!</strong> {successMessage}
            </div> : null}



            <div className="card">
                <a className="card-header" data-bs-toggle="collapse" href="#collapseOne"><strong>1</strong>
                    Primary Info

                </a>
                <div id="collapseOne" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">
                        {/* start for shwongi popup */}

                        {/* end for showing popup */}

                        <form onSubmit={handleFormSubmit}>
                            <div className="from-block">


                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Name
                                                *</label>
                                            <input type="text" className="form-control"
                                                placeholder="Name" name="uname"
                                                onKeyPress={(e) => nameMethod(e)}
                                                value={name}
                                                onChange={(e) => onChangeName(e.target.value)}
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
                                            <label className="form-label">Street Address
                                                *</label>
                                            <input type="text" className="form-control"
                                                placeholder="Address" name="Address"
                                                onKeyPress={(e) => streetAddressMethod(e)}
                                                value={address}
                                                onChange={(e) => setaddress(e.target.value)}
                                                required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Country *</label>
                                            <select className="form-control" name="country" required
                                                value={country}
                                                onChange={(e) => handlecountry(e.target.value)}
                                                required
                                            >
                                                <option


                                                    value="" >Select country</option>
                                                {countries.map((element, index) => {


                                                    return (

                                                        <option


                                                            value={element.country_name} key={index}>{element.country_name}</option>
                                                    )
                                                })}

                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>State *
                                            </label>

                                            <select className="form-control" name="state"
                                                onChange={(e) => handlestate(e.target.value)}
                                                required
                                                value={state}
                                            >
                                                {CheckState === "0" ? <option value={state}>{state}</option> : <option>Please select state</option>}
                                                {states.map((element, index) => {
                                                    return (
                                                        <option
                                                            value={element.state_name} key={index}>{element.state_name}</option>
                                                    )
                                                })}

                                            </select>
                                            <span style={{ color: "red" }}> {stateError}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group"><label>City *</label>
                                            <select className="form-control" name="city" required

                                                value={city}
                                                onChange={(e) => setcity(e.target.value)}
                                            >
                                                {CheckCity === "0" ? <option value={city}>{city}</option> : <option value="">Please select City</option>}
                                                {cities.map((element, index) => {

                                                    return (

                                                        <option


                                                            value={element.city_name} key={index}>{element.city_name}</option>
                                                    )
                                                })}
                                            </select>
                                            <span style={{ color: "red" }}> {cityError}</span>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Pincode *</label>
                                            <input type="number" className="form-control" placeholder="1234" name="pin_code" required
                                                value={pincode}
                                                onChange={(e) => setpincode(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>University Type *</label>
                                            <select className="form-control" name="city" required
                                                value={type}
                                                onChange={(e) => settype(e.target.value)}
                                            >
                                                <option value="">Select Type</option>
                                                <option value="Public">Public</option>
                                                <option value="Private">Private</option>
                                                <option value="Govt">Govt</option>
                                            </select>
                                            <span style={{ color: "red" }}> {typeError}</span>

                                        </div>
                                    </div>
                                </div>



                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Description *</label>
                                            <textarea
                                                value={description}
                                                onChange={(e) => setdescription(e.target.value)}
                                                className="form-control" row="2" col="3"></textarea>
                                            <span style={{ color: "red" }}> {descriptionError}</span>
                                            <span style={{ color: "red" }}> {DescriptionLengthError}</span>



                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Website *</label>
                                            <input type="text" className="form-control" placeholder="https://www.sunderland.ac.uk/" name="website" required

                                                value={website}
                                                onChange={(e) => setwebsite(e.target.value)}
                                            />
                                            <span style={{ color: "red" }}> {websiteStartError}</span>
                                            <span style={{ color: "red" }}> {websiteEndError}</span>


                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label>Phone Number *</label>
                                        <PhoneInput
                                            placeholder="Enter Phone Number"
                                            required
                                            value={phone}
                                            onChange={setphone} />
                                        <span style={{ color: "red" }}> {phoneError}</span>

                                        {/* <input type="text" className="form-control" placeholder="phone number" name="ph-no" required

                                            value={phone}
                                            onChange={(e) => setphone(e.target.value)}
                                        /> */}
                                    </div>
                                    <div className="col-md-4">
                                        <label>Parent organization</label>
                                        <input type="text" className="form-control" placeholder="Parent organization" name="pr-org"

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

    );
}

