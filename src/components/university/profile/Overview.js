import React, { useState, useEffect } from "react";
import axios from 'axios';
import Loader from '../../Home/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown, faAngleUp
} from '@fortawesome/free-solid-svg-icons';
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
    const [loader, setmyloader] = useState("false");
    const [FoundedYearNoError, setFoundedYearNoError] = useState("");
    const [RankingNoError, setRankingNoError] = useState("");
    const [PopularCourseNoError, setPopularCourseNoError] = useState("");
    const [YearNoError, setYearNoError] = useState("");
    const [AcceptanceNoError, setAcceptanceNoError] = useState("");
    const [down, setdown] = useState("1");
    const [up, setup] = useState("0");
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
        if(universityId!==null){
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
            })
            .catch(error => {
            });
        }
    }, [])
    function handleClick() {
        if (down === "1") {
            setdown("0");
            setup("1")
        }
        else {
            setdown("1");
            setup("0")
        }
    }
    function handleFormSubmit(event) {
        event.preventDefault();
        var myPattern = /^[0-9_.]*$/;
        var foundedYearNo = foundedYear.toString().length;
        var yearNo = myyear.toString().length;
        setFoundedYearNoError("")
        setRankingNoError("")
        setPopularCourseNoError("")
        setYearNoError("")
        setAcceptanceNoError("")
        if (myPattern.test(foundedYear) === false) {
            setFoundedYearNoError("Please Enter Only Number")
        }
        else if (foundedYearNo !== 4) {
            setfoundedYearMessage("Please Insert Four Digit")
        }
        else if (myPattern.test(ranking) === false) {
            setRankingNoError("Please Enter Only Number")

        }
        else if (myPattern.test(courseNo) === false) {
            setPopularCourseNoError("Please Enter Only Number")

        }
        else if (myPattern.test(myyear) === false) {
            setYearNoError("Please Enter Only Number")

        }
        else if (myPattern.test(acceptanceRate) === false) {
            setAcceptanceNoError("Please Enter Only Number")

        }
        else if (yearNo !== 4) {
            setyearMessage("Please Insert Four Digit")
        }
        else {
            setmyloader("true")
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
                    setmyloader("false")
                    if (res.data.success === true) {
                        setsuccessMessage("Overview Updated")
                        setTimeout(() => setsubmitSuccess(""), 3000);
                        setsubmitSuccess(1)
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
            {submitSuccess === 1 ? <div className="Show_success_message">
                <strong>Success!</strong> {successMessage}
            </div> : null}
            <div className="card">
                <a className="card-header" data-bs-toggle="collapse" href="#collapseTwo" onClick={() => handleClick()} ><strong>2</strong>
                    Overview
                    {down === "0" ?
                        null
                        :
                        <FontAwesomeIcon icon={faAngleDown} style={{
                            position: "absolute",
                            fontWeight: 900,
                            fontFamily: 'Font Awesome 5 Free',
                            marginRight: "0.1rem",
                            right: "16px",

                        }} />
                    }
                    {up === "0" ?
                        null
                        :
                        <FontAwesomeIcon icon={faAngleUp} style={{
                            position: "absolute",
                            fontWeight: 900,
                            fontFamily: 'Font Awesome 5 Free',
                            marginRight: "0.1rem",
                            right: "16px",
                        }} />
                    }
                </a>
                <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                    <form onSubmit={handleFormSubmit}>
                        <div className="card-body">
                            <div className="d-flex flex-wrap" id="Address">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="form-group">
                                        <label>Founded year <span className="req-star">*</span></label>
                                        <input type="number" className="form-control"
                                            required
                                            value={foundedYear}
                                            onChange={(e) => onChangefoundedYear(e.target.value)}
                                        />
                                        <span style={{ color: "red" }}> {foundedYearMessage}</span>
                                        <div style={{ color: "red" }}> {FoundedYearNoError}</div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="State/Province">Ranking <span className="req-star">*</span></label>
                                        <input type="number" className="form-control"
                                            required
                                            value={ranking}
                                            onChange={(e) => setranking(e.target.value)}
                                        />
                                        <div style={{ color: "red" }}> {RankingNoError}</div>

                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="form-group"><label htmlFor="City/Town">International Student Rate <span className="req-star">*</span></label>
                                        <select
                                            value={rate}
                                            onChange={(e) => setrate(e.target.value)}
                                            className="form-control" name="city" required>
                                            <option value="">Select Student Rate</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="form-group">
                                        <label>Popular Courses <span className="req-star">*</span></label>
                                        <input type="text" name="city" className="form-control"
                                            placeholder="Master in Architecture"
                                            required
                                            value={course}
                                            onChange={(e) => setcourse(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="Zipcode">No. of courses <span className="req-star">*</span></label>
                                        <input type="number" name="courseNo" className="form-control"
                                            required
                                            value={courseNo}
                                            onChange={(e) => setcourseNo(e.target.value)}
                                            placeholder="7"
                                        />
                                        <div style={{ color: "red" }}> {PopularCourseNoError}</div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Add Month <span className="req-star">*</span></label>
                                                <select
                                                    required
                                                    className="form-control"
                                                    placeholder="Month" name="Month"
                                                    value={month}
                                                    onChange={(e) => setmonth(e.target.value)}>
                                                    <option value=''>Select Month</option>
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
                                                <label>Year <span className="req-star">*</span></label>
                                                <input type="number" className="form-control"
                                                    value={myyear}
                                                    onChange={(e) => onChangeYear(e.target.value)}
                                                    required
                                                />

                                                <span style={{ color: "red" }}> {yearMessage}</span>
                                                <div style={{ color: "red" }}> {YearNoError}</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="State/Province"> English Proficiency <span className="req-star">*</span></label>
                                                <select
                                                    required
                                                    className="form-control"
                                                    placeholder="Month" name="Month"
                                                    value={english}
                                                    onChange={(e) => setenglish(e.target.value)}
                                                >
                                                    <option value=''>Select English Proficiency</option>
                                                    <option value='IELTS'>IELTS</option>
                                                    <option value='PTE'>PTE</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="State/Province"> CGPA  </label>
                                                <input type="number" className="form-control" placeholder="CGPA"
                                                    value={cgpa}
                                                    onChange={(e) => setcgpa(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="State/Province">  Acceptance rate(%) <span className="req-star">*</span> </label>
                                                <input type="number" className="form-control" placholder=" acceptance rate"
                                                    required value={acceptanceRate}
                                                    onChange={(e) => setacceptanceRate(e.target.value)}
                                                />
                                                <div style={{ color: "red" }}> {AcceptanceNoError}</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6 text-right">
                                        <button type="submit" className="btn btn-secondary" title="Save"
                                            data-toggle="tooltip" data-placement="right"
                                        >Save</button>
                                        <button type="button" data-bs-toggle="collapse" href="#collapse3" className="btn btn-success" title="Save & Next">Save & Next</button>
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


