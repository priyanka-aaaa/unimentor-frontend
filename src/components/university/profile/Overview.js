import React, { useState, useEffect } from "react";
import axios from 'axios';


export default function Overview() {
    const [mounted, setMounted] = useState();
    const [foundedYear, setfoundedYear] = useState("");
    const [ranking, setranking] = useState("");
    const [rate, setrate] = useState("");
    const [course, setcourse] = useState("");
    const [courseNo, setcourseNo] = useState("");
    const [month, setmonth] = useState("");
    const [myyear, setmyyear] = useState("");
    const [english, setenglish] = useState("");
    const [cgpa, setcgpa] = useState("");
    const [acceptanceRate, setacceptanceRate] = useState("");
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [foundedYearMessage, setfoundedYearMessage] = useState("");
    const [yearMessage, setyearMessage] = useState("");


    const onChangefoundedYear = (e) => {

        setfoundedYear(e);
        setfoundedYearMessage("")
    }
    const onChangeYear = (e) => {
     
        setmyyear(e);
        setyearMessage("")
    }
    useEffect(() => {

        var universityId = localStorage.getItem('universityId');
        var mounted = localStorage.getItem('universityToken');
        setMounted(mounted)

        axios.get(process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/overview')

            .then(function (res) {

                if (res.data.success === true) {
                    var student_universityOverview = res.data.universityOverview;

                    setfoundedYear(student_universityOverview.foundedYear);
                    setranking(student_universityOverview.ranking);
                    setrate(student_universityOverview.rate);
                    setcourse(student_universityOverview.course);
                    setcourseNo(student_universityOverview.courseNo);
                    setmonth(student_universityOverview.month);
                    setmyyear(student_universityOverview.year);
                    setenglish(student_universityOverview.english);
                    setcgpa(student_universityOverview.cgpa);
                    setacceptanceRate(student_universityOverview.acceptanceRate);


                }
                else {

                }

            })
            .catch(error => {

            });
    }, [])


    function overview(event) {
        event.preventDefault();

        var foundedYearNo = foundedYear.toString().length;
       
        var yearNo = myyear.toString().length;
    
        if (foundedYearNo !== 4) {
            setfoundedYearMessage("Please Insert Four Digit")
        }
        else if (yearNo !== 4) {
            setyearMessage("Please Insert Four Digit")
        }
        else {

            const obj = {
                foundedYear: foundedYear,
                ranking: ranking,

                rate: rate,
                course: course,
                courseNo: courseNo,
                month: month,
                year: myyear,
                english: english,
                cgpa: cgpa,
                acceptanceRate: acceptanceRate

            };

            axios.put(process.env.REACT_APP_SERVER_URL + 'university/overview', obj, { headers: { 'Authorization': mounted } })
                .then(function (res) {

                    if (res.data.success === true) {
                        setsuccessMessage("Overview Updated")
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
            {submitSuccess === 1 ? <div className="Show_success_message">
                <strong>Success!</strong> {successMessage}
            </div> : null}
            <div className="card">

                <a className="card-header" data-bs-toggle="collapse" href="#collapseTwo"><strong>2</strong>
                    Overview
                </a>
                <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                    <form onSubmit={overview}>
                        <div className="card-body">

                            <div className="d-flex flex-wrap" id="Address">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="form-group">
                                        <label>Founded year </label>
                                        <input type="number" className="form-control"

                                            value={foundedYear}
                                            onChange={(e) => onChangefoundedYear(e.target.value)}
                                        />
                                        <span style={{ color: "red" }}> {foundedYearMessage}</span>



                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="State/Province">Ranking                                                             </label>
                                        <input type="number" className="form-control"

                                            value={ranking}
                                            onChange={(e) => setranking(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="form-group"><label htmlFor="City/Town">International Student Rate </label>
                                        <select
                                            value={rate}
                                            onChange={(e) => setrate(e.target.value)}
                                            className="form-control" name="city" required="">
                                            <option>Select Student Rate</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="form-group">
                                        <label>Popular Courses </label>
                                        <input type="text" name="city" className="form-control"
                                        placeholder="Master in Architecture"

                                            value={course}
                                            onChange={(e) => setcourse(e.target.value)}
                                        />

                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="Zipcode">No. of courses </label>
                                        <input type="number" name="courseNo" className="form-control"

                                            value={courseNo}
                                            onChange={(e) => setcourseNo(e.target.value)}
                                            placeholder="7"
                                        />

                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Add Month </label>
                                                <select

                                                    className="form-control"
                                                    placeholder="Month" name="Month"
                                                    value={month}
                                                    onChange={(e) => setmonth(e.target.value)}>
                                                    <option value='Jan'>Janaury</option>
                                                    <option value='Feb'>February</option>
                                                    <option value='March'>March</option>
                                                    <option value='April'>April</option>
                                                    <option value='May'>May</option>
                                                    <option value='June'>June</option>
                                                    <option value='July'>July</option>
                                                    <option value='Aug'>August</option>
                                                    <option value='Sep'>September</option>
                                                    <option value='Oct'>October</option>
                                                    <option value='Nov'>November</option>
                                                    <option value='Dec'>December</option>
                                                </select>

                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Year</label>
                                                <input type="number" className="form-control"
                                                    value={myyear}
                                                    onChange={(e) => onChangeYear(e.target.value)}
                                                />
                                              
                                                <span style={{ color: "red" }}> {yearMessage}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="State/Province"> English Proficiency  </label>
                                            <select

                                                className="form-control"
                                                placeholder="Month" name="Month"
                                                value={english}
                                                onChange={(e) => setenglish(e.target.value)}>
                                                <option value='IELTS'>IELTS</option>
                                                <option value='PTE'>PTE</option>

                                            </select>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="State/Province"> CGPA                                                            </label>
                                            <input type="text" className="form-control" placeholder="CGPA"

                                                value={cgpa}
                                                onChange={(e) => setcgpa(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="State/Province">  Acceptance rate                                                            </label>
                                            <input type="number" className="form-control" placholder=" acceptance rate"
                                                value={acceptanceRate}
                                                onChange={(e) => setacceptanceRate(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="clearfix"></div>

                            </div>

                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6 text-right">
                                        <button type="submit"

                                            className="btn btn-secondary">Save
                                        </button>
                                        <button type="button" data-bs-toggle="collapse" href="#collapse3" className="btn btn-success">Save &
                                            Next</button>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};


