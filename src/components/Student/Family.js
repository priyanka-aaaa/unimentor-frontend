import React, { useState, useEffect } from "react";

import axios from 'axios';
function PersonalInformation(props) {
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [mounted, setMounted] = useState();
    // start for family
    const [familyRelationship, setfamilyRelationship] = useState();
    const [familySalutation, setfamilySalutation] = useState();
    const [familyfirstName, setfamilyfirstName] = useState();
    const [familymiddleName, setfamilymiddleName] = useState();
    const [familylastName, setfamilylastName] = useState();
    const [familyemail, setfamilyemail] = useState();
    const [familymobile, setfamilymobile] = useState();
    const [familyoccupation, setfamilyoccupation] = useState();
    const [familyqualification, setfamilyqualification] = useState();
    // end for family
    useEffect(() => {
        if (localStorage.getItem("userData")) {
            var a = localStorage.getItem('userData');
            var mydata = JSON.parse(a);
            console.log(mydata);
            var user_email = mydata.data.student.email;
            var mounted = mydata.data.token;
        }
        setMounted(mounted)
        var myurl = process.env.REACT_APP_SERVER_URL;
        //start for family
        axios.get(process.env.REACT_APP_SERVER_URL+'student/family', { headers: { 'Authorization': mounted } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    var MystudentFamily = res.data.studentFamily;
                    setfamilyRelationship(MystudentFamily.relationship);
                    setfamilySalutation(MystudentFamily.salutation);
                    setfamilyfirstName(MystudentFamily.firstName);
                    setfamilymiddleName(MystudentFamily.middleName);
                    setfamilylastName(MystudentFamily.lastName);
                    setfamilyemail(MystudentFamily.email);
                    setfamilymobile(MystudentFamily.mobile);
                    setfamilyoccupation(MystudentFamily.occupation);
                    setfamilyqualification(MystudentFamily.qualification);

                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
        //end for family

    }, [])
    // start for personal information

    // end for personal information
   
    function Personal_family(event) {
        event.preventDefault();
        const obj = {
            relationship: familyRelationship,
            salutation: familySalutation,
            firstName: familyfirstName,
            middleName: familymiddleName,
            lastName: familylastName,
            email: familyemail,
            mobile: familymobile,
            occupation: familyoccupation,
            qualification: familyqualification,
        };
        axios.post(process.env.REACT_APP_SERVER_URL+'student/families', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    alert("family update successfully");
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

        <div className="card">
        <a className="card-header" data-bs-toggle="collapse" href="#collapse3">
        <strong>3</strong> Family Information
        </a>
        <div id="collapse3" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">

                <div className="from-block">
                    <form onSubmit={Personal_family}>

                        <div className="mb-3">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="state" className="form-label">Relationship *
                                    </label>
                                    <select
                                        value={familyRelationship}
                                        onChange={(e) => setfamilyRelationship(e.target.value)}
                                        className="form-control" id="Relationship" name="relationship">
                                        <option>Select</option>
                                        <option>Father</option>
                                        <option>Mother</option>
                                        <option>Brother</option>
                                        <option>Sister</option>
                                        <option>Guardian</option>
                                        <option >Sibling</option>
                                        <option>Husband</option>
                                        <option >Wife</option>
                                        <option >Son</option>
                                        <option>Daughter</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="state" className="form-label">Salutation
                                        *</label>
                                    <select
                                        value={familySalutation}
                                        onChange={(e) => setfamilySalutation(e.target.value)}
                                        type="text" className="form-control" id="salutation" placeholder="Salutation" name="salutation">
                                        <option >Select</option>
                                        <option value="Ms.">Ms.</option>
                                        <option value="Mr.">Mr.</option>
                                        <option value="Mrs.">Mrs.</option>
                                        <option value="Miss.">Miss.</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="fname" className="form-label">First Name
                                        *</label>
                                    <input
                                        value={familyfirstName}
                                        onChange={(e) => setfamilyfirstName(e.target.value)}
                                        type="text" className="form-control" placeholder="First Name" name="fname" />
                                </div>
                                <div className="col">
                                    <label htmlFor="Mname" className="form-label">Middle
                                        Name</label>
                                    <input
                                        value={familymiddleName}
                                        onChange={(e) => setfamilymiddleName(e.target.value)}
                                        type="text" className="form-control" placeholder="Middle Name" name="Mname" />
                                </div>
                                <div className="col">
                                    <label htmlFor="lname" className="form-label">L-Name/
                                        S-name/ Family Name *</label>
                                    <input
                                        value={familylastName}
                                        onChange={(e) => setfamilylastName(e.target.value)}
                                        type="text" className="form-control" placeholder="" name="lname" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                    <div className="form-group"><label htmlFor="fOccupation">Email
                                    </label><input type="email"
                                        value={familyemail}
                                        onChange={(e) => setfamilyemail(e.target.value)}
                                        className="form-control" id="email" name="email" placeholder="Email" /></div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                    <div className="form-group"><label htmlFor="2-qualification">Mobile </label><input
                                        value={familymobile}
                                        onChange={(e) => setfamilymobile(e.target.value)}
                                        type="number" className="form-control" id="mobile" name="mobile" placeholder="Mobile" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                    <div className="form-group"><label htmlFor="occupation">Occupation</label><input
                                        value={familyoccupation}
                                        onChange={(e) => setfamilyoccupation(e.target.value)}
                                        type="text" className="form-control" id="occupation" name="occupation" placeholder="Occupation" /></div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                    <div className="form-group"><label htmlFor="highest_qualification">Highest
                                        Qualification </label><select
                                            value={familyqualification}
                                            onChange={(e) => setfamilyqualification(e.target.value)}
                                            className="form-control dropdown" id="highest_qualification" name="highest_qualification">
                                            <option >Select Qualification</option>
                                            <option value="Diploma">Diploma</option>
                                            <option value="Secondary">Secondary</option>
                                            <option value="Higher Secondary">Higher
                                                Secondary</option>
                                            <option value="Undergraduate">Undergraduate
                                            </option>
                                            <option value="Postgraduate">Postgraduate
                                            </option>
                                        </select></div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <div className="row">
                                <div className="col-md-6"></div>
                                <div className="col-md-6 text-right">
                                    <button type="button" className="btn btn-success ">Add New
                                    </button>
                                    <button type="submit" className="btn btn-secondary">Save
                                    </button>

                                    <button type="submit" data-bs-toggle="collapse" className="btn btn-success " href="#collapse4">Save
                                        Next</button>
                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>

        </div>
    </div>




    );
}

export default PersonalInformation;