import React, { useState, useEffect } from "react";

import axios from 'axios';
function PersonalInformation(props) {
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [mounted, setMounted] = useState();
    const [salutation, setsalutation] = useState("");
    const [firstName, setfirstName] = useState("");
    const [middleName, setmiddleName] = useState("");
    const [lastName, setlastName] = useState("");
    const [otherName, setotherName] = useState("no");
    const [gender, setgender] = useState("");
    const [dateOfBirth, setdateOfBirth] = useState("");
    const [countryOfBirth, setcountryOfBirth] = useState("");
    const [nationality, setnationality] = useState("");
    const [dualNationality, setdualNationality] = useState("no");
    const [maritalStatus, setmaritalStatus] = useState("");
    const [differentlyAble, setdifferentlyAble] = useState("no");
    const [passport, setpassport] = useState("no");
    const [aadharCard, setaadharCard] = useState("no");
    const [firstLanguage, setfirstLanguage] = useState("");
    const [visa, setvisa] = useState("no");
    const [refusedVisa, setrefusedVisa] = useState("no");
    useEffect(() => {
        if (localStorage.getItem("userData")) {
            var a = localStorage.getItem('userData');
            var mydata = JSON.parse(a);
         
            var user_email = mydata.data.student.email;
            var mounted = mydata.data.token;
        }
        setMounted(mounted)
        var myurl = process.env.REACT_APP_SERVER_URL;
        
        axios.get(process.env.REACT_APP_SERVER_URL + 'student/personalInformation', { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    var student_personal = res.data.studentPersonalInformation;
                    setsalutation(student_personal.salutation);
                    setfirstName(student_personal.firstName);
                    setmiddleName(student_personal.middleName);
                    setlastName(student_personal.lastName);
                    setotherName(student_personal.otherName);
                    setgender(student_personal.gender);
                    setdateOfBirth(student_personal.dateOfBirth);
                    setcountryOfBirth(student_personal.countryOfBirth);
                    setnationality(student_personal.nationality);
                    setdualNationality(student_personal.dualNationality);
                    setmaritalStatus(student_personal.maritalStatus);
                    setdifferentlyAble(student_personal.differentlyAble);
                    setpassport(student_personal.passport);
                    setaadharCard(student_personal.aadharCard);
                    setfirstLanguage(student_personal.firstLanguage);
                    setvisa(student_personal.visa);
                    setrefusedVisa(student_personal.refusedVisa);

                }
                else {
            
                }

            })
            .catch(error => {
           
            });
       


    }, [])
  

  
    function Personal_Information(event) {
        event.preventDefault();
        const obj = {
            salutation: salutation,
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            otherName: otherName,
            gender: gender,
            dateOfBirth: dateOfBirth,
            countryOfBirth: countryOfBirth,
            nationality: nationality,
            dualNationality: dualNationality,
            maritalStatus: maritalStatus,
            differentlyAble: differentlyAble,
            passport: passport,
            aadharCard: aadharCard,
            firstLanguage: firstLanguage,
            visa: visa,
            refusedVisa: refusedVisa
        };
        axios.put(process.env.REACT_APP_SERVER_URL + 'student/personalInformation', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
          
                if (res.data.success === true) {

                    setsuccessMessage("Personal Info Updated")
                    setTimeout(() => setsubmitSuccess(""), 3000);
                    setsubmitSuccess(1)
                }
                else {
              
                }

            })
            .catch(error => {

            });
    }

    return (

        <div id="accordion">
            {submitSuccess === 1 ? <div className="Show_success_message">
                <strong>Success!</strong> {successMessage}
            </div> : null}
            <div className="card">

                <div className="card">
                    <a className="card-header" data-bs-toggle="collapse" href="#collapseOne">
                        <strong>1</strong>  Personal Information

                    </a>
                    <div id="collapseOne" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">

                            <div className="from-block">
                                <form onSubmit={Personal_Information}>
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="state" className="form-label">Salutation
                                                    *</label>
                                                <select type="text" className="form-control" id="salutation"
                                                    value={salutation}
                                                    onChange={(e) => setsalutation(e.target.value)}
                                                    placeholder="Salutation" name="salutation">
                                                    <option >Select</option>
                                                    <option value="Ms.">Ms.</option>
                                                    <option value="Mr.">Mr.</option>
                                                    <option value="Mrs.">Mrs.</option>
                                                    <option value="Miss.">Miss.</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="fname" className="form-label">First Name
                                                    *</label>
                                                <input
                                                    value={firstName}
                                                    onChange={(e) => setfirstName(e.target.value)}
                                                    type="text" className="form-control" placeholder="First Name" name="fname" />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="Mname" className="form-label">Middle
                                                    Name</label>
                                                <input
                                                    value={middleName}
                                                    onChange={(e) => setmiddleName(e.target.value)}
                                                    type="text" className="form-control" placeholder="Middle Name" name="Mname" />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="lname" className="form-label">Last Name/
                                                    Surname/ Family Name *</label>
                                                <input
                                                    value={lastName}
                                                    onChange={(e) => setlastName(e.target.value)}
                                                    type="text" className="form-control" placeholder="" name="lname" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="email" className="form-label">Have you
                                                    ever been known by any other name ?</label>
                                                <select
                                                    value={otherName}
                                                    onChange={(e) => setotherName(e.target.value)}
                                                    className="form-control" id="othername" name="has_other_name">
                                                    <option value="no">No</option>
                                                    <option value="yes">Yes</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="gender">Gender</label><select

                                                    value={gender}
                                                    onChange={(e) => setgender(e.target.value)}
                                                    className="form-control" id="gender" name="user_gender">
                                                    <option >Select</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Transgender">Transgender
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <div className="mt"><label htmlFor="dob">Date of
                                                    Birth</label>
                                                    <input
                                                        value={dateOfBirth}
                                                        onChange={(e) => setdateOfBirth(e.target.value)}
                                                        type="date" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="country_of_birth">Country of
                                                    Birth</label>
                                                <select
                                                    value={countryOfBirth}
                                                    onChange={(e) => setcountryOfBirth(e.target.value)}
                                                    className="form-control" id="country_of_birth" name="country_of_birth">
                                                    <option >Select</option>
                                                    <option value="India">India</option>
                                                    <option value="Afghanistan">Afghanistan</option>
                                                    <option value="Albania">Albania</option>
                                                    <option value="Algeria">Algeria</option>
                                                    <option value="American Samoa">American Samoa</option>
                                                    <option value="Andorra">Andorra</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="mt">
                                                    <label htmlFor="nationality">Nationality</label>
                                                    <select

                                                        value={nationality}
                                                        onChange={(e) => setnationality(e.target.value)}
                                                        className="form-control" id="Nationality" name="Nationality">
                                                        <option >Select</option>
                                                        <option value="India">India</option>
                                                        <option value="Afghanistan">Afghanistan</option>
                                                        <option value="Albania">Albania</option>
                                                        <option value="Algeria">Algeria</option>
                                                        <option value="American Samoa">American Samoa</option>
                                                        <option value="Andorra">Andorra</option>


                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="mt"><label htmlFor="DualNationality">Do
                                                    you hold Dual
                                                    Nationality?</label><select
                                                        value={dualNationality}
                                                        onChange={(e) => setdualNationality(e.target.value)}

                                                        className="form-control" id="DualNationality" name="has_dual_nationality">
                                                        <option value="no">No</option>
                                                        <option value="yes">Yes</option>
                                                    </select></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="mt"><label htmlFor="">Marital
                                                    Status</label><br /><input
                                                        value={maritalStatus}
                                                        onChange={(e) => setmaritalStatus(e.target.value)}
                                                        type="radio" id="married" name="marital_status" value="married" /><label className="mr-1" htmlFor="married">Married</label>&nbsp;&nbsp;<input type="radio" id="unmarried" name="marital_status" value="unmarried" /><label className="mr-1" htmlFor="unmarried">Unmarried</label>&nbsp;&nbsp;<input type="radio" id="widowed" name="marital_status" value="widowed" /><label htmlFor="widowed">Widowed</label></div>
                                            </div>


                                            <div className="col-md-4">
                                                <div className="mt"><label htmlFor="abled">Are
                                                    you differently abled?</label><select
                                                        value={differentlyAble}
                                                        onChange={(e) => setdifferentlyAble(e.target.value)}
                                                        className="form-control" id="abled" name="is_differently_abled">
                                                        <option value="no">No</option>
                                                        <option value="yes">Yes</option>
                                                    </select></div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                                <div className="mt"><label htmlFor="passport">Do you
                                                    have a valid passport?</label><select
                                                        value={passport}
                                                        onChange={(e) => setpassport(e.target.value)}
                                                        className="form-control" id="passport" name="has_valid_passport">
                                                        <option value="no">No</option>
                                                        <option value="yes">Yes</option>
                                                    </select></div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                                <div className="mt"><label htmlFor="aadharCard">Do you
                                                    have
                                                    a valid Aadhar Card?</label><select
                                                        value={aadharCard}
                                                        onChange={(e) => setaadharCard(e.target.value)}
                                                        className="form-control" id="aadharCard" name="has_aadhar_card">
                                                        <option value="no">No</option>
                                                        <option value="yes">Yes</option>
                                                    </select></div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                            <div className="mt">
                                                <label htmlFor="firstLanguage">First
                                                    Language</label><input
                                                    value={firstLanguage}
                                                    onChange={(e) => setfirstLanguage(e.target.value)}
                                                    type="text" className="form-control" id="firstLanguage" placeholder="First Language" name="first_language" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                            <div className="mt"><label htmlFor="">Do you have a valid
                                                study visa/work permit?</label><select
                                                    value={visa}
                                                    onChange={(e) => setvisa(e.target.value)}
                                                    className="form-control" name="has_visa">
                                                    <option value="no">No</option>
                                                    <option value="yes">Yes</option>
                                                </select></div>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                                <div className="mt-3"><label htmlFor="refusedVisa">Have
                                                    you been refused a visa from Canada, the
                                                    USA, the United Kingdom, New Zealand or
                                                    Australia?</label><select
                                                        value={refusedVisa}
                                                        onChange={(e) => setrefusedVisa(e.target.value)}
                                                        className="form-control" id="refusedVisa" name="is_visa_refused">
                                                        <option value="no">No</option>
                                                        <option value="yes">Yes</option>
                                                    </select></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col-md-6"></div>
                                            <div className="col-md-6 text-right">
                                                <button type="submit" className="btn btn-secondary btn-lg">Save
                                                </button>
                                                <button type="submit" data-bs-toggle="collapse" className="btn btn-success btn-lg" href="#collapseTwo">Save
                                                    Next</button>
                                            </div>

                                        </div>

                                    </div>


                                </form>
                            </div>
                        </div>

                    </div>




                </div>
            </div>



        </div>

    );
}

export default PersonalInformation;