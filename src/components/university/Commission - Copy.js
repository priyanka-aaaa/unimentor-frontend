import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

import Footer from './Footer';

export default function Commission() {
    const [mounted, setMounted] = useState();
    const [Percentage, setPercentage] = useState();
    const [commissionChecked, setcommissionChecked] = useState("");
    const [commissionTimeChecked, setcommissionTimeChecked] = useState("");
    const [displayAmount, setdisplayAmount] = useState("none");
    const [displayPercentage, setdisplayPercentage] = useState("none");
    const [displayone, setdisplayone] = useState("none");
    const [displaymany, setdisplaymany] = useState("none");

    const [data, setdata] = useState([]);
    useEffect(() => {
        if (localStorage.getItem("universityData")) {
            var a = localStorage.getItem('universityData');
            var mydata = JSON.parse(a);
            console.log(mydata);
            var user_email = mydata.data.university.email;
            var mytoken = mydata.data.token;
        }
        setMounted(mytoken)
        const url = process.env.REACT_APP_SERVER_URL + "university/61dab27e05671a193cca5f81/courses";
        fetch(url, {
            method: 'GET',
            headers: { 'Authorization': mytoken }
        })
            .then(response => response.json())
            .then(data => {
                setdata(data.universityCourses)
            })
    }, [])


    function setcommission(value) {

        if (value === "fixed") {
            setdisplayAmount("inline");
            setdisplayPercentage("none");
        }
        else {
            setdisplayPercentage("inline");
            setdisplayAmount("none");
        }
    }
    function setCommissionTime(value) {

        if (value === "one time") {
            setdisplayone("inline");
            setdisplaymany("none");
        }
        else {
            setdisplayone("none");
            setdisplaymany("inline");
        }
    }
    function handleClick(value) {
    }
    function handlePercentage(percentageValue) {
        var number1 = fee;
        var number2 = percentageValue;
        var value = (number1 / number2); //w00t!
        setPercentage(value)
    }
    function handleChange(value, q) {
        const myArray = value.split("&&");
        setfee(myArray[1])
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
                                <h1 className="h3 mb-0 text-gray-800">Set Commission</h1>


                            </div>


                            {/* <!-- Content Row --> */}

                            <div className="row">

                                {/* <!-- Area Chart --> */}
                                <div className="col-xl-12 col-lg-7">
                                    <div className="card shadow mb-4">
                                        {/* <!-- Card Header - Dropdown --> */}
                                        <div className="card shadow mb-4">
                                            <div id="accordion">
                                                <div className="card">
                                                    <a className="card-header" data-bs-toggle="collapse" href="#collapseOne">
                                                        Set Commision
                                                    </a>
                                                    <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                                                        <div className="card-body">

                                                            <div className="from-block">
                                                                <form>
                                                                    <div className="mb-3">
                                                                        <div className="row">
                                                                            <div className="col-md-6">
                                                                                <label className="form-label">Course Name</label>


                                                                                <select className="form-control" onChange={(e) => handleChange(e.target.value)}>

                                                                                    <option value="" >Select course name</option>
                                                                                    {data.map((object, i) => {
                                                                                        return (

                                                                                            <option
                                                                                                onClick={(e) => handleClick(object.fee)}

                                                                                                // onClick={() => {
                                                                                                //     setfee(object.fee)
                                                                                                // }}


                                                                                                value={object.courseName + "&&" + object.fee} key={i}>{object.courseName}</option>
                                                                                        )
                                                                                    })}
                                                                                </select>
                                                                            </div>

                                                                            <div className="col-md-6">
                                                                                <label className="form-label">Select Fee</label>
                                                                                <select className="form-control">
                                                                                    <option> {fee}</option>

                                                                                </select>
                                                                            </div>
                                                                        </div>

                                                                        <div className="row mt-3">


                                                                            <div className="col-md-6">
                                                                                <fieldset
                                                                                    onChange={(e) => setcommission(e.target.value)}

                                                                                >
                                                                                    <label className="form-label">Commision</label><br />
                                                                                    <div className="form-check form-check-inline">


                                                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                                                                            value="fixed"
                                                                                            checked={commissionChecked === "fixed"}
                                                                                            onChange={(e) => setcommissionChecked(e.target.value)}
                                                                                        />
                                                                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                                            Fixed
                                                                                        </label>
                                                                                    </div>
                                                                                    <div className="form-check form-check-inline">
                                                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                                                                            value="variable"
                                                                                            checked={commissionChecked === "variable"}
                                                                                            onChange={(e) => setcommissionChecked(e.target.value)}

                                                                                        />
                                                                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                                            Variable
                                                                                        </label>
                                                                                    </div>
                                                                                </fieldset>
                                                                            </div>



                                                                            <div className="col-md-6">
                                                                                <div style={{ display: displayAmount }}>
                                                                                    <label className="form-label" >Enter Amount</label>
                                                                                    <input type="text" className="form-control" placeholder="" name="enteramount" />
                                                                                </div>
                                                                                <div style={{ display: displayPercentage }}>
                                                                                    <label className="form-label" >Enter Percentage(%)</label>
                                                                                    <input type="text" className="form-control" placeholder="" name="enter Percentage"
                                                                                        onChange={e => handlePercentage(e.target.value)}
                                                                                    />
                                                                                </div>
                                                                                <span>The Total commission is {Percentage}</span>
                                                                            </div>
                                                                        </div>


                                                                        <div className="row mt-3">
                                                                            <div className="col-md-6">
                                                                                <fieldset
                                                                                    onChange={(e) => setCommissionTime(e.target.value)}>
                                                                                    <label className="form-label">Commision Set is</label><br />
                                                                                    <div className="form-check form-check-inline">
                                                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
                                                                                            value="one time"
                                                                                            checked={commissionTimeChecked === "one time"}
                                                                                            onChange={(e) => setcommissionTimeChecked(e.target.value)}
                                                                                        />
                                                                                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                                                            Only One time
                                                                                        </label>
                                                                                    </div>
                                                                                    <div className="form-check form-check-inline">
                                                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"
                                                                                            value="every time"
                                                                                            checked={commissionTimeChecked === "every time"}
                                                                                            onChange={(e) => setcommissionTimeChecked(e.target.value)}
                                                                                        />
                                                                                        <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                                                            On Every Time
                                                                                        </label>
                                                                                    </div>
                                                                                </fieldset>
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <div style={{ display: displayone }}>
                                                                                    <label htmlFor="lname" className="form-label">Enter Commission For One Time</label>
                                                                                    <input type="text" className="form-control" placeholder="Enter Fee" name="percentage " />
                                                                                </div>
                                                                                <div style={{ display: displaymany }}>
                                                                                    <label htmlFor="lname" className="form-label">Enter Commission For Every Semester </label>
                                                                                    <input type="text" className="form-control" placeholder="Enter Fee" name="percentage " />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <button type="button" className="btn btn-success">Submit</button>
                                                                    </div>
                                                                </form>
                                                            </div>




                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    {/* <!-- Card Body --> */}

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



            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>

            {/* <!-- Logout Modal--> */}

        </div >
    );
}