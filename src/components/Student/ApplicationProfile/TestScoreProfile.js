import React, { useState, useEffect } from "react";

import axios from 'axios';
function PersonalInformationProfile(props) {
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [mounted, setMounted] = useState();
  const [scoremarks, setscoremarks] = useState();
    const [scoreenglishProficiency, setscoreenglishProficiency] = useState();
    const [scoregre, setscoregre] = useState();
    const [scoresat, setscoresat] = useState();
   useEffect(() => {
        if (localStorage.getItem("userData")) {
            var a = localStorage.getItem('userData');
            var mydata = JSON.parse(a);
          
            var user_email = mydata.data.student.email;
            var mytoken = mydata.data.token;
        }
        setMounted(mytoken)
        var myurl = process.env.REACT_APP_SERVER_URL;
    
        axios.get(process.env.REACT_APP_SERVER_URL + 'student/score', { headers: { 'Authorization': mytoken } })
            .then(function (res) {
             
                if (res.data.success === true) {
                    var resultStudentScore = res.data.studentScore;
                    setscoremarks(resultStudentScore.marks);
                    setscoreenglishProficiency(resultStudentScore.englishProficiency);
                    setscoregre(resultStudentScore.gre);
                    setscoresat(resultStudentScore.sat);
                }
                else {
              
                }

            })
            .catch(error => {
       
            });

    }, [])






    function Personal_test(event) {
        event.preventDefault();
        const obj = {
            marks: scoremarks,
            englishProficiency: scoreenglishProficiency,
            gre: scoregre,
            sat: scoresat
        };
        axios.put(process.env.REACT_APP_SERVER_URL + 'student/score', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
          
                if (res.data.success === true) {
                    setsuccessMessage("Score Updated")
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

        <div className="card">
            {submitSuccess === 1 ? <div className="Show_success_message">
                <strong>Success!</strong> {successMessage}
            </div> : null}
            <a className="card-header" data-bs-toggle="collapse" href="#collapsefive">
                <strong>5</strong>  Test Scores
            </a>
            <div id="collapsefive" className="collapse" data-bs-parent="#accordion">
                <div className="card-body">
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

    );
}

export default PersonalInformationProfile;