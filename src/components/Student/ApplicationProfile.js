import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Index from './Index';
import Footer from './Footer';

export default function Studentregister() {
    // start for personal information
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
    // end for personal information
    // start for address
    const [country, setcountry] = useState();
    const [state, setstate] = useState();
    const [city, setcity] = useState();
    const [address, setaddress] = useState();
    const [zipcode, setzipcode] = useState();
    const [communication_address, setcommunication_address] = useState("no");
    // end for address
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
    // start for education
    const [educationhighestEducation, seteducationhighestEducation] = useState();
    const [educationstatus, seteducationstatus] = useState();
    const [educationspecialization, seteducationspecialization] = useState();
    const [educationdegree, seteducationdegree] = useState();
    const [educationgradePercentage, seteducationgradePercentage] = useState();
    const [educationmarks, seteducationmarks] = useState();
    const [educationattendedForm, seteducationattendedForm] = useState();
    const [educationinstitution, seteducationinstitution] = useState();
    const [educationaffiliationUniversity, seteducationaffiliationUniversity] = useState();
    const [educationlanguage, seteducationlanguage] = useState();
    const [educationcountry, seteducationcountry] = useState();
    const [educationstate, seteducationstate] = useState();
    const [educationcity, seteducationcity] = useState();
    const [educationaddress, seteducationaddress] = useState();
    const [educationzipcode, seteducationzipcode] = useState();
    // end for education
    //start for score
    const [scoremarks, setscoremarks] = useState();
    const [scoreenglishProficiency, setscoreenglishProficiency] = useState();
    const [scoregre, setscoregre] = useState();
    const [scoresat, setscoresat] = useState();
    // end for score
    // start for education
    const [experiencestatus, setexperiencestatus] = useState();
    const [experiencetype, setexperiencetype] = useState();
    const [experienceorganization, setexperienceorganization] = useState();
    const [experiencedesignation, setexperiencedesignation] = useState();
    const [experiencerole, setexperiencerole] = useState();
    const [experiencestarted, setexperiencestarted] = useState();
    const [experienceended, setexperienceended] = useState();
    const [experiencecountry, setexperiencecountry] = useState();
    const [experiencecity, setexperiencecity] = useState();
    // end for education
    // start for activity 
    const [activityactivityStatus, setactivityactivityStatus] = useState();
    const [activityactivity, setactivityactivity] = useState();
    const [activityposition, setactivityposition] = useState();
    const [activitydescription, setactivitydescription] = useState();
    const [activitystarted, setactivitystarted] = useState();
    const [activityended, setactivityended] = useState();
    const [activityapply, setactivityapply] = useState();
    // end for activity
    //start for recommendation
    const [recommendationtype, setrecommendationtype] = useState();
    const [recommendationorganization, setrecommendationorganization] = useState();
    const [recommendationrecommenderName, setrecommendationrecommenderName] = useState();
    const [recommendationemail, setrecommendationemail] = useState();
    const [recommendationrelation, setrecommendationrelation] = useState();
    const [recommendationdesignation, setrecommendationdesignation] = useState();
    const [recommendationnumber, setrecommendationnumber] = useState();
    const [recommendationaddress, setrecommendationaddress] = useState();
    const [recommendationletter, setrecommendationletter] = useState();



    //end for recommendation
    useEffect(() => {
        if (localStorage.getItem("userData")) {
            var a = localStorage.getItem('userData');
            var mydata = JSON.parse(a);
            console.log(mydata);
            var user_email = mydata.data.student.email;
            var mytoken = mydata.data.token;
        }
        setMounted(mytoken)
        //start for fetch personal information
        axios.get('/student/personalInformation', { headers: { 'Authorization': mytoken } })
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
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
        //end for fetch personal information
        //start for address
        axios.get('/student/address', { headers: { 'Authorization': mytoken } })
            .then(function (res) {
                console.log(res.data);
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
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
        //end for address
        //start for family
        axios.get('/student/family', { headers: { 'Authorization': mytoken } })
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
        //start for education
        axios.get('/student/education', { headers: { 'Authorization': mytoken } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    var ResultstudentEducation = res.data.studentEducation;
                    seteducationhighestEducation(ResultstudentEducation.highestEducation);
                    seteducationstatus(ResultstudentEducation.status);
                    seteducationspecialization(ResultstudentEducation.specialization);
                    seteducationdegree(ResultstudentEducation.degree);
                    seteducationgradePercentage(ResultstudentEducation.gradePercentage);
                    seteducationmarks(ResultstudentEducation.marks);
                    seteducationattendedForm(ResultstudentEducation.attendedForm);
                    seteducationinstitution(ResultstudentEducation.institution);
                    seteducationaffiliationUniversity(ResultstudentEducation.affiliationUniversity);
                    seteducationlanguage(ResultstudentEducation.language);
                    seteducationcountry(ResultstudentEducation.country);
                    seteducationstate(ResultstudentEducation.state);
                    seteducationcity(ResultstudentEducation.city);
                    seteducationaddress(ResultstudentEducation.address);
                    seteducationzipcode(ResultstudentEducation.zipcode);

                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
        //end for education
        //start for score
        axios.get('/student/score', { headers: { 'Authorization': mytoken } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    var resultStudentScore = res.data.studentScore;
                    setscoremarks(resultStudentScore.marks);
                    setscoreenglishProficiency(resultStudentScore.englishProficiency);
                    setscoregre(resultStudentScore.gre);
                    setscoresat(resultStudentScore.sat);
                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
        //end for score
        //start for work experience
        axios.get('/student/experience', { headers: { 'Authorization': mytoken } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    var resultstudentExperience = res.data.studentExperience;
                    setexperiencestatus(resultstudentExperience.status);
                    setexperiencetype(resultstudentExperience.type);
                    setexperienceorganization(resultstudentExperience.organization);
                    setexperiencedesignation(resultstudentExperience.designation);
                    setexperiencerole(resultstudentExperience.role);
                    setexperiencestarted(resultstudentExperience.started);
                    setexperienceended(resultstudentExperience.ended);
                    setexperiencecountry(resultstudentExperience.country);
                    setexperiencecity(resultstudentExperience.city);
                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
        //end for work experience
        //start for activity
        axios.get('/student/activity', { headers: { 'Authorization': mytoken } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    var resultActivity = res.data.studentActivity;
                    setactivityactivityStatus(resultActivity.activityStatus);
                    setactivityactivity(resultActivity.activity);
                    setactivityposition(resultActivity.position);
                    setactivitydescription(resultActivity.description);
                    setactivitystarted(resultActivity.started);
                    setactivityended(resultActivity.ended);
                    setactivityapply(resultActivity.apply);
                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
        //end for activity
        //start for recommendation
        axios.get('/student/profileRecommendation', { headers: { 'Authorization': mytoken } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    var resultstudentProfileRecommendation = res.data.studentProfileRecommendation;
                    setrecommendationtype(resultstudentProfileRecommendation.type);
                    setrecommendationorganization(resultstudentProfileRecommendation.organization);
                    setrecommendationrecommenderName(resultstudentProfileRecommendation.recommenderName);
                    setrecommendationemail(resultstudentProfileRecommendation.email);
                    setrecommendationrelation(resultstudentProfileRecommendation.relation);
                    setrecommendationdesignation(resultstudentProfileRecommendation.designation);
                    setrecommendationnumber(resultstudentProfileRecommendation.number);
                    setrecommendationaddress(resultstudentProfileRecommendation.address);
                    setrecommendationletter(resultstudentProfileRecommendation.letter);

                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
        //end for recommendation
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
        axios.put('/student/personalInformation', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    alert("Personal Profile update successfully");
                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
    }
    function application_address(event) {
        event.preventDefault();
        console.log(communication_address);
        const obj = {
            country: country,
            state: state,
            city: city,
            address: address,
            zipcode: zipcode,
            communication_address: communication_address

        };
        axios.put('/student/address', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    alert("address update successfully");
                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
    }
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
        axios.put('/student/family', obj, { headers: { 'Authorization': mounted } })
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
    function Personal_education(event) {
        event.preventDefault();
        const obj = {

            highestEducation: educationhighestEducation,
            status: educationstatus,
            specialization: educationspecialization,
            degree: educationdegree,
            gradePercentage: educationgradePercentage,
            marks: educationmarks,
            attendedForm: educationattendedForm,
            institution: educationinstitution,
            affiliationUniversity: educationaffiliationUniversity,
            language: educationlanguage,
            country: educationcountry,
            state: educationstate,
            city: educationcity,
            address: educationaddress,
            zipcode: educationzipcode,
        };
        axios.put('/student/education', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    alert("education update successfully");
                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
    }
    function Personal_test(event) {
        event.preventDefault();
        const obj = {
            marks: scoremarks,
            englishProficiency: scoreenglishProficiency,
            gre: scoregre,
            sat: scoresat
        };
        axios.put('/student/score', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    alert("score update successfully");
                }
                else {
                    alert("error");
                }
            })
            .catch(error => {
                console.log(error.response)
            });
    }
    function Personal_experience(event) {
        event.preventDefault();
        const obj = {
            status: experiencestatus,
            type: experiencetype,
            organization: experienceorganization,
            designation: experiencedesignation,
            role: experiencerole,
            started: experiencestarted,
            ended: experienceended,
            country: experiencecountry,
            city: experiencecity

        };
        axios.put('/student/experience', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    alert("experience update successfully");
                }
                else {
                    alert("error");
                }
            })
            .catch(error => {
                console.log(error.response)
            });
    }
    function application_activity(event) {
        event.preventDefault();
        const obj = {
            activityStatus: activityactivityStatus,
            activity: activityactivity,
            position: activityposition,
            description: activitydescription,
            started: activitystarted,
            ended: activityended,
            apply: activityapply
        };
        axios.put('/student/activity', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    alert("activity update successfully");
                }
                else {
                    alert("error");
                }
            })
            .catch(error => {
                console.log(error.response)
            });
    }
    function application_recommendation(event) {
        event.preventDefault();
        const obj = {
            type: recommendationtype,
            organization: recommendationorganization,
            recommenderName: recommendationrecommenderName,
            email: recommendationemail,
            relation: recommendationrelation,
            designation: recommendationdesignation,
            number: recommendationnumber,
            address: recommendationaddress,
            letter: recommendationletter
        };
        axios.put('/student/profileRecommendation', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    alert("Recommendation update successfully");
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
        <div id="page-top">


            {/* <!-- Page Wrapper --> */}
            <div id="wrapper">
                <Sidebar />
                {/* there will be come sidebar */}

                {/* <!-- Content Wrapper --> */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* <!-- Main Content --> */}
                    <div id="content">

                        {/* topbar will be come there */}
                        <Topbar />
                        {/* <!-- Begin Page Content --> */}
                        {/* the content of each page will be come there */}
                        {/* <ApplicationProfile /> */}
                        <div className="container">

                            {/* <!-- Page Heading --> */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Application Profile</h1>


                            </div>


                            {/* <!-- Content Row --> */}

                            <div className="row">

                                {/* <!-- Area Chart --> */}
                                <div className="col-xl-12 col-lg-7">

                                    {/* <!-- Card Header - Dropdown --> */}
                                    <div id="accordion">
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
                                        <div className="card">
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
                                                                        onChange={(e) => setcountry(e.target.value)}
                                                                        className="form-control" name="country" required="">
                                                                        <option >Select Country</option>
                                                                        <option >India</option>
                                                                        <option >Afghanistan</option>
                                                                        <option>Albania</option>
                                                                        <option >Algeria</option>
                                                                        <option >American Samoa</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="State/Province">State/Province <span className="text-danger"> *</span>
                                                                    </label>
                                                                    <select
                                                                        value={state}
                                                                        onChange={(e) => setstate(e.target.value)}
                                                                        className="form-control" name="state" required="">
                                                                        <option >Select State</option>
                                                                        <option >Please select country to view states
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                                                <div className="form-group"><label htmlFor="City/Town">City/Town <span className="text-danger"> *</span></label>
                                                                    <select
                                                                        value={city}
                                                                        onChange={(e) => setcity(e.target.value)}
                                                                        className="form-control" name="city" required="">
                                                                        <option >Select State</option>
                                                                        <option >Please select a state to view cities
                                                                        </option>
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


                                    </div>

                                    <div className="card">
                                        <a className="card-header" data-bs-toggle="collapse" href="#collapse4">
                                        <strong>4</strong>  Education
                                        </a>
                                        <div id="collapse4" className="collapse" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                <form onSubmit={Personal_education}>
                                                    <div className="form-block">

                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="Highest Level of Education">Highest Level of
                                                                        Education <span className="text-danger"> *</span></label>
                                                                    <select
                                                                        value={educationhighestEducation}
                                                                        onChange={(e) => seteducationhighestEducation(e.target.value)}
                                                                        className="form-control" id="Highest Level of Education" name="education_level">
                                                                        <option >Select</option>
                                                                        <option value="Secondary">Secondary</option>
                                                                        <option value="Undergraduate Degree">Undergraduate Degree</option>
                                                                        <option value="Postgraduate Degree">Postgraduate Degree</option>
                                                                        <option value="Research and Doctoral">Research &amp; Doctoral</option>
                                                                        <option value="Undergraduate Diploma">Undergraduate Diploma</option>
                                                                        <option value="Postgraduate Diploma">Postgraduate Diploma</option>
                                                                        <option value="Foundation Degree">Foundation Degree</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="education_status">Education Status <span className="text-danger"> *</span></label><br />
                                                                    <label className="ant-radio-wrapper ant-radio-wrapper-checked">
                                                                        <span className="ant-radio ant-radio-checked"><input
                                                                            value={educationstatus}
                                                                            onChange={(e) => seteducationstatus(e.target.value)}
                                                                            checked={educationstatus === "Pursuing"}
                                                                            name="education_status_0" type="radio" className="ant-radio-input" value="Pursuing" />
                                                                            <span className="ant-radio-inner"></span></span><span>Pursuing</span></label><label className="ant-radio-wrapper"><span className="ant-radio"><input
                                                                                value={educationstatus}
                                                                                onChange={(e) => seteducationstatus(e.target.value)}
                                                                                checked={educationstatus === "Completed"}
                                                                                value="Completed"
                                                                                name="education_status_0" type="radio" className="ant-radio-input" /><span className="ant-radio-inner"></span></span>
                                                                        <span>Completed</span></label> <br />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="specialisation">Specialization <span className="text-danger"> *</span>
                                                                    </label>
                                                                    <select
                                                                        value={educationspecialization}
                                                                        onChange={(e) => seteducationspecialization(e.target.value)}
                                                                        className="form-control" id="specialisation" name="specialisation" required="">
                                                                        <option >Select</option>
                                                                        <option value="Social Science and Humanities">Social Science and Humanities</option>
                                                                        <option value="Management">Management</option>
                                                                        <option value="Law">Law</option>
                                                                        <option value="Engineering">Engineering</option>
                                                                        <option value="Architecture">Architecture</option>
                                                                        <option value="Design">Design</option>
                                                                        <option value="Medicine">Medicine</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="education_degree">Degree/Diploma/Certificate
                                                                        <span className="text-danger"> *</span></label>
                                                                    <select
                                                                        value={educationdegree}
                                                                        onChange={(e) => seteducationdegree(e.target.value)}
                                                                        className="form-control" id="education_degree" name="education_degree" required="">
                                                                        <option >Select Education Level</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="grading_scheme_id">Grade
                                                                    Scheme(GPA/Percentage)</label><select
                                                                        value={educationgradePercentage}
                                                                        onChange={(e) => seteducationgradePercentage(e.target.value)}
                                                                        className="form-control" id="grading_scheme_id" name="grading_scheme_id" required="">
                                                                        <option >Select</option>
                                                                        <option value="Grade Scale 0-4">Grade Scale 0-4</option>
                                                                        <option value="Grade Scale 0-10">Grade Scale 0-10</option>
                                                                        <option value="Percentage 0-100">Percentage 0-100</option>
                                                                        <option value="Division/Class">Division/Class</option>
                                                                        <option value="Letter Grade F to A+">Letter Grade F to A+</option>
                                                                    </select></div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="grade_marks">Grade
                                                                    Average/Marks Obtained</label><input
                                                                        value={educationmarks}
                                                                        onChange={(e) => seteducationmarks(e.target.value)}
                                                                        type="text" className="form-control" id="grade_marks" name="grade_marks" placeholder="Grade Average/Marks Obtained" required="" /></div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="attendedFrom">Attended From</label>
                                                                    <br />
                                                                    <input
                                                                        value={educationattendedForm}
                                                                        onChange={(e) => seteducationattendedForm(e.target.value)}
                                                                        type="date" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="institute_name">Name of Institution</label>
                                                                    <input
                                                                        value={educationinstitution}
                                                                        onChange={(e) => seteducationinstitution(e.target.value)}
                                                                        type="text" className="form-control" id="institute_name" name="institute_name" placeholder="Name of Institution" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                                                <div className="form-group"><label htmlFor="institute_affiliation">Affiliating University/Board
                                                                    of Education</label>
                                                                    <input
                                                                        value={educationaffiliationUniversity}
                                                                        onChange={(e) => seteducationaffiliationUniversity(e.target.value)}
                                                                        type="text" className="form-control" id="institute_affiliation" name="institute_affiliation" placeholder="Name of Institution" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="language_of_study">Language of
                                                                        Instruction</label>
                                                                    <select
                                                                        value={educationlanguage}
                                                                        onChange={(e) => seteducationlanguage(e.target.value)}
                                                                        className="form-control" id="language_of_study" name="language_of_study" required="">
                                                                        <option value="English">English</option>
                                                                        <option value="Hindi">Hindi</option>
                                                                        <option value="Other">Other</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="nationality">Country</label>
                                                                    <select
                                                                        value={educationcountry}
                                                                        onChange={(e) => seteducationcountry(e.target.value)}
                                                                        className="form-control" id="Nationality" name="Nationality">
                                                                        <option >Select Country</option>
                                                                        <option value="India">India</option>
                                                                        <option value="Afghanistan">Afghanistan</option>
                                                                        <option value="Albania">Albania</option>
                                                                        <option value="Algeria">Algeria</option>
                                                                        <option value="American Samoa">American Samoa
                                                                        </option>
                                                                        <option value="Andorra">Andorra</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="institute_address_state">State/Province</label><select
                                                                    value={educationstate}
                                                                    onChange={(e) => seteducationstate(e.target.value)}
                                                                    className="form-control" id="institute_address_state" name="institute_address_state" required="">
                                                                    <option>Select State</option>
                                                                </select></div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                    <div className="form-group"><label htmlFor="City/institute_address_city">City/Town</label><input
                                                                        value={educationcity}
                                                                        onChange={(e) => seteducationcity(e.target.value)}
                                                                        type="text" className="form-control" id="institute_address_city" placeholder="City/Town" name="institute_address_city" required="" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                    <div className="form-group"><label htmlFor="institute_address_text_1">Address</label><input
                                                                        value={educationaddress}
                                                                        onChange={(e) => seteducationaddress(e.target.value)}
                                                                        type="text" className="form-control" id="institute_address_text_1" placeholder="Address" name="institute_address_text" required="" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                    <div className="form-group"><label htmlFor="institute_address_zipcode">Zipcode</label><input
                                                                        value={educationzipcode}
                                                                        onChange={(e) => seteducationzipcode(e.target.value)}
                                                                        type="text" className="form-control" id="institute_address_zipcode" placeholder="Zipcode" name="institute_address_zipcode" required="" /></div>
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

                                                                    <button type="submit" data-bs-toggle="collapse" className="btn btn-success" href="#collapse5">Save
                                                                        Next</button>

                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>



                                                </form>

                                            </div>

                                        </div>
                                    </div>

                                    <div className="card">
                                        <a className="card-header" data-bs-toggle="collapse" href="#collapse5">
                                        <strong>5</strong>  Test Scores
                                        </a>
                                        <div id="collapse5" className="collapse" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                <div className="form-block">
                                                    <form onSubmit={Personal_test}>
                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                                                <div className="form-group"><label htmlFor="">Marks in English in Class
                                                                    12</label><input

                                                                        value={scoremarks}
                                                                        onChange={(e) => setscoremarks(e.target.value)}
                                                                        type="number" className="form-control" name="score_12th" placeholder="Marks in English in Class 12" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-12 col-lg-4">
                                                                <div className="form-group"><label htmlFor="has_eng">Have you taken any
                                                                    English Proficiency Test?</label><br /><input
                                                                        value={scoreenglishProficiency}
                                                                        onChange={(e) => setscoreenglishProficiency(e.target.value)}
                                                                        checked={scoreenglishProficiency === "yes"}
                                                                        type="radio" id="1" name="has_eng" value="yes" /><label className="mr-1" htmlFor="1">Yes</label>&nbsp;&nbsp;<input
                                                                        value={scoreenglishProficiency}
                                                                        onChange={(e) => setscoreenglishProficiency(e.target.value)}
                                                                        checked={scoreenglishProficiency === "no"}
                                                                        type="radio" id="0" name="has_eng" value="no" /><label className="mr-1" htmlFor="0">No</label>&nbsp;&nbsp;<br /></div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-12 col-lg-4">
                                                                <div className="form-group"><label htmlFor="has_pg">Have you taken
                                                                    GRE/GMAT?</label><br /><input
                                                                        value={scoregre}
                                                                        onChange={(e) => setscoregre(e.target.value)}
                                                                        checked={scoregre === "yes"}
                                                                        type="radio" id="has_pg_1" name="has_pg" value="yes" /><label className="mr-1" htmlFor="has_pg_1">Yes</label>&nbsp;&nbsp;<input
                                                                        value={scoregre}
                                                                        onChange={(e) => setscoregre(e.target.value)}
                                                                        checked={scoregre === "no"}
                                                                        type="radio" id="has_pg_0" name="has_pg" value="no" /><label className="mr-1" htmlFor="has_pg_0">No</label>&nbsp;&nbsp;<br /></div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-12 col-lg-4">
                                                                <div className="form-group"><label htmlFor="has_ug">Have you taken
                                                                    SAT/ACT?</label><br /><input
                                                                        value={scoresat}
                                                                        onChange={(e) => setscoresat(e.target.value)}
                                                                        checked={scoresat === "yes"}
                                                                        type="radio" id="has_ug_1" name="has_ug" value="yes" /><label className="mr-1" htmlFor="has_ug_1">Yes</label>&nbsp;&nbsp;
                                                                    <input
                                                                        value={scoresat}
                                                                        onChange={(e) => setscoresat(e.target.value)}
                                                                        checked={scoresat === "yes"}
                                                                        type="radio" id="has_ug_0" name="has_ug" value="no" /><label className="mr-1" htmlFor="has_ug_0">No</label>&nbsp;&nbsp;<br /></div>
                                                            </div>
                                                        </div>

                                                        <div className="mb-3">
                                                            <div className="row">
                                                                <div className="col-md-6"></div>
                                                                <div className="col-md-6 text-right">

                                                                    <button type="submit" className="btn btn-secondary">Save
                                                                    </button>
                                                                    <button type="submit" data-bs-toggle="collapse" className="btn btn-success" href="#collapse6">Save
                                                                        Next</button>
                                                                </div>

                                                            </div>

                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="card">
                                        <a className="card-header" data-bs-toggle="collapse" href="#collapse6">
                                        <strong>6</strong>  Work Experience
                                        </a>
                                        <div id="collapse6" className="collapse" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                <div className="form-block">
                                                    <form onSubmit={Personal_experience}>
                                                        <div className="row">
                                                            <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                                <div className="form-group">
                                                                    <label>Work Status <span className="text-danger">
                                                                        *</span></label><br />
                                                                    <label className="ant-radio-wrapper"><span className="ant-radio">
                                                                        <input
                                                                            value={experiencestatus}
                                                                            onChange={(e) => setexperiencestatus(e.target.value)}
                                                                            name="is_current_job_0" type="radio" className="ant-radio-input" value="Ongoing" />
                                                                        <span className="ant-radio-inner"></span></span><span>Ongoing</span></label>
                                                                    <label className="ant-radio-wrapper ant-radio-wrapper-checked"><span className="ant-radio ant-radio-checked"><input
                                                                        value={experiencestatus}
                                                                        onChange={(e) => setexperiencestatus(e.target.value)} name="is_current_job_0" type="radio" className="ant-radio-input" value="Completed" /><span className="ant-radio-inner"></span></span><span>Completed</span></label>
                                                                    <br />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                                <div className="form-group"><label htmlFor="work_type">Work Type <span className="text-danger"> *</span></label><select
                                                                    value={experiencetype}
                                                                    onChange={(e) => setexperiencetype(e.target.value)}
                                                                    className="form-control" id="work_type" name="work_type">
                                                                    <option >Select</option>
                                                                    <option value="Full-time">Full-time</option>
                                                                    <option value="Part-time">Part-time</option>
                                                                    <option value="Internship">Internship</option>
                                                                </select></div>
                                                            </div>
                                                            <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                                <div className="form-group"><label htmlFor="company_name">Name of
                                                                    Organization <span className="text-danger">
                                                                        *</span></label><input
                                                                        value={experienceorganization}
                                                                        onChange={(e) => setexperienceorganization(e.target.value)}
                                                                        type="text" className="form-control" id="company_name" name="company_name" placeholder="Name of Organization" /></div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="work_designation">Designation</label><input
                                                                    value={experiencedesignation}
                                                                    onChange={(e) => setexperiencedesignation(e.target.value)}
                                                                    type="text" className="form-control" id="work_designation" name="designation" placeholder="Designation" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="role_description">Job
                                                                    Role</label><input
                                                                        value={experiencerole}
                                                                        onChange={(e) => setexperiencerole(e.target.value)}
                                                                        type="text" className="form-control" id="role_description" name="role_description" placeholder="Job Role" /></div>
                                                            </div>
                                                        </div>



                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="start_from">Started From</label>
                                                                    <input
                                                                        value={experiencestarted}
                                                                        onChange={(e) => setexperiencestarted(e.target.value)}
                                                                        type="date" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="start_from">Ended On</label>
                                                                    <input
                                                                        value={experienceended}
                                                                        onChange={(e) => setexperienceended(e.target.value)}
                                                                        type="date" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <label>Country</label>
                                                                <select
                                                                    value={experiencecountry}
                                                                    onChange={(e) => setexperiencecountry(e.target.value)}
                                                                    className="form-control" id="job_country"
                                                                    name="job_country">
                                                                    <option value="">Select Country</option>
                                                                    <option value="India">India</option>
                                                                    <option value="Afghanistan">Afghanistan</option>
                                                                    <option value="Albania">Albania</option>
                                                                    <option value="Algeria">Algeria</option>
                                                                    <option value="American Samoa">American Samoa</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label
                                                                    htmlFor="job_city">City/Town</label><input
                                                                        value={experiencecity}
                                                                        onChange={(e) => setexperiencecity(e.target.value)}
                                                                        type="text"
                                                                        className="form-control" id="job_city"
                                                                        placeholder="City/Town" name="job_city" value="" /></div>
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
                                                                    <button type="submit" data-bs-toggle="collapse" className="btn btn-success" href="#collapse7">Save
                                                                        Next</button>
                                                                </div>

                                                            </div>

                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <a className="card-header" data-bs-toggle="collapse" href="#collapse7">
                                        <strong>7</strong>  Extra Curricular Activities
                                        </a>
                                        <div id="collapse7" className="collapse" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                <div className="form-block">
                                                    <form onSubmit={application_activity}>
                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group">
                                                                    <label>Acitvity Status <span className="text-danger">
                                                                        *</span></label>
                                                                    <br />
                                                                    <label className="ant-radio-wrapper"><span className="ant-radio">
                                                                        <input name="activity_status_0"
                                                                            value={activityactivityStatus}
                                                                            onChange={(e) => setactivityactivityStatus(e.target.value)}
                                                                            type="radio" className="ant-radio-input" value="Ongoing" /><span className="ant-radio-inner"></span></span>
                                                                        <span>Ongoing</span></label>
                                                                    <label className="ant-radio-wrapper ant-radio-wrapper-checked">
                                                                        <span className="ant-radio ant-radio-checked">
                                                                            <input
                                                                                value={activityactivityStatus}
                                                                                onChange={(e) => setactivityactivityStatus(e.target.value)}
                                                                                name="activity_status_0" type="radio" className="ant-radio-input" value="Completed" />
                                                                            <span className="ant-radio-inner"></span></span>
                                                                        <span>Completed</span></label> <br />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label>Activity <span className="text-danger"> *</span>
                                                                </label>
                                                                    <select
                                                                        value={activityactivity}
                                                                        onChange={(e) => setactivityactivity(e.target.value)}
                                                                        className="form-control" name="activity">
                                                                        <option >Select Activity</option>
                                                                        <option value="Student Government">Student Government
                                                                        </option>
                                                                        <option value="Academic Teams and Clubs">Academic Teams
                                                                            and Clubs</option>
                                                                        <option value="The Debate Team students">The Debate Team
                                                                            students</option>
                                                                        <option value="The Arts Team students">The Arts Team
                                                                            students</option>
                                                                        <option value="Internships">Internships</option>
                                                                        <option value="Culture Clubs">Culture Clubs</option>
                                                                        <option value="Coding and Other Web Skills">Coding and
                                                                            Other Web Skills</option>
                                                                        <option value="Sports">Sports</option>
                                                                        <option value="Music Group">Music Group</option>
                                                                        <option value="Volunteering and Fundraising">
                                                                            Volunteering and Fundraising</option>
                                                                        <option value="Learning a Language">Learning a Language
                                                                        </option>
                                                                        <option value="Others">Others</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="designation">Position/Designation <span className="text-danger"> *</span></label><input
                                                                    value={activityposition}
                                                                    onChange={(e) => setactivityposition(e.target.value)}
                                                                    type="text" className="form-control" id="designation" name="designation" placeholder="Position/Designation" /></div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="description">Description
                                                                </label><input
                                                                        value={activitydescription}
                                                                        onChange={(e) => setactivitydescription(e.target.value)}
                                                                        type="text" className="form-control" id="description" name="description" placeholder="Description" /></div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="start_from">Started From</label>
                                                                    <input
                                                                        value={activitystarted}
                                                                        onChange={(e) => setactivitystarted(e.target.value)}
                                                                        type="date" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="start_from">Ended On</label>
                                                                    <input
                                                                        value={activityended}
                                                                        onChange={(e) => setactivityended(e.target.value)}
                                                                        type="date" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label>Would you be interested in
                                                                    participating in similar activities at university where
                                                                    you apply?<span className="text-danger">
                                                                        *</span></label><br /><label className="ant-radio-wrapper"><span className="ant-radio"><input
                                                                            value={activityapply}
                                                                            onChange={(e) => setactivityapply(e.target.value)}

                                                                            name="participation_interested_0" type="radio" className="ant-radio-input" value="yes" /><span className="ant-radio-inner"></span></span><span>Yes</span></label><label className="ant-radio-wrapper ant-radio-wrapper-checked"><span className="ant-radio ant-radio-checked"><input
                                                                                value={activityapply}
                                                                                onChange={(e) => setactivityapply(e.target.value)}

                                                                                name="participation_interested_0" type="radio" className="ant-radio-input" value="no" /><span className="ant-radio-inner"></span></span><span>No</span></label>
                                                                    <br />
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
                                                                    <button
                                                                     data-bs-toggle="collapse" href="#collapse8"
                                                                    
                                                                    
                                                                    type="submit"  className="btn btn-success " >Save
                                                                        Next</button>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="card">
                                        <a className="card-header" data-bs-toggle="collapse" href="#collapse8">
                                        <strong>8</strong>    Recommendation
                                        </a>
                                        <div id="collapse8" className="collapse" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                <div className="form-block">
                                                    <form onSubmit={application_recommendation}>
                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label>Reference Type <span className="text-danger"> *</span></label><br /><label className="ant-radio-wrapper ant-radio-wrapper-checked"><span className="ant-radio ant-radio-checked"><input
                                                                    value={recommendationtype}
                                                                    onChange={(e) => setrecommendationtype(e.target.value)}
                                                                    name="reference_type_0" type="radio" className="ant-radio-input" value="Professional" /><span className="ant-radio-inner"></span></span><span>Professional</span></label><label className="ant-radio-wrapper"><span className="ant-radio"><input
                                                                        value={recommendationtype}
                                                                        onChange={(e) => setrecommendationtype(e.target.value)}
                                                                        name="reference_type_0" type="radio" className="ant-radio-input" value="Academic" /><span className="ant-radio-inner"></span></span><span>Academic</span></label>
                                                                    <br />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="Name_of_organisation">Name
                                                                    of Organisation/Institution <span className="text-danger">
                                                                        *</span></label><input
                                                                        value={recommendationorganization}
                                                                        onChange={(e) => setrecommendationorganization(e.target.value)}
                                                                        type="text" className="form-control" id="Name_of_organisation" name="Name_of_organisation" placeholder="Name of Organisation/Institution" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="recommender_name">Recommender Name <span className="text-danger"> *</span></label><input
                                                                    value={recommendationrecommenderName}
                                                                    onChange={(e) => setrecommendationrecommenderName(e.target.value)}
                                                                    type="text" className="form-control" id="recommender_name" name="recommender_name" placeholder="Recommender Name" /></div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="official_email_id">Official
                                                                    Email ID <span className="text-danger">
                                                                        *</span></label><input
                                                                        value={recommendationemail}
                                                                        onChange={(e) => setrecommendationemail(e.target.value)}
                                                                        type="text" className="form-control" id="official_email_id" name="official_email_id" placeholder="Email" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="relation_with_applicant">Relation with Recommender</label><input
                                                                    value={recommendationrelation}
                                                                    onChange={(e) => setrecommendationrelation(e.target.value)}
                                                                    type="text" className="form-control" id="relation_with_applicant" name="relation_with_applicant" placeholder="Relation with recommender" /></div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="recommender_designation">Recommender Designation</label><input
                                                                    value={recommendationdesignation}
                                                                    onChange={(e) => setrecommendationdesignation(e.target.value)}
                                                                    type="text" className="form-control" id="recommender_designation" name="recommender_designation" placeholder="Recommender Designation" /></div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="contact_number">Contact Number</label><input
                                                                    value={recommendationnumber}
                                                                    onChange={(e) => setrecommendationnumber(e.target.value)}
                                                                    type="number" className="form-control" id="contact_number" name="contact_number" placeholder="Contact Number" /></div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="address_of_organisation">Address of Organisation/Institution</label><input
                                                                    value={recommendationaddress}
                                                                    onChange={(e) => setrecommendationaddress(e.target.value)}
                                                                    type="text" className="form-control" id="address_of_organisation" name="address_of_organisation" placeholder="Address of Organisation/Institution" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label>Do you have letter of recommendation?</label><br /><label className="ant-radio-wrapper ant-radio-wrapper-checked"><span className="ant-radio ant-radio-checked"><input
                                                                    value={recommendationletter}
                                                                    onChange={(e) => setrecommendationletter(e.target.value)}
                                                                    name="has_lor_0" type="radio" className="ant-radio-input" value="yes" /><span className="ant-radio-inner"></span></span><span>Yes</span></label><label className="ant-radio-wrapper"><span className="ant-radio"><input
                                                                        value={recommendationletter}
                                                                        onChange={(e) => setrecommendationletter(e.target.value)}
                                                                        name="has_lor_0" type="radio" className="ant-radio-input" value="no" /><span className="ant-radio-inner"></span></span><span>No</span></label> <br /></div>
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
                                                                    <button type="button" className="btn btn-success ">Save &amp;
                                                                        Next</button>
                                                                </div>

                                                            </div>

                                                        </div>


                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>









                                    {/* <!-- -------------- --> */}
                                </div>
                            </div>
                            {/* <!-- Card Body --> */}

                        </div>
                        {/* <!-- /.container-fluid --> */}

                    </div>
                    {/* <!-- End of Main Content --> */}

                    {/* <!-- Footer --> */}
                    <Footer />
                    {/* <!-- End of Footer --> */}

                </div>
                {/* <!-- End of Content Wrapper --> */}

            </div>
            {/* <!-- End of Page Wrapper --> */}

            {/* <!-- Scroll to Top Button--> */}
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>

            {/* <!-- Logout Modal--> */}

        </div >
    );
}