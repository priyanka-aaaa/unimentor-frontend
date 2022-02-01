
import React, { useState, useEffect } from "react";
import axios from 'axios';
import RankingAdd from './RankingAdd';
import RankingEdit from './RankingEdit';

import Faq from './Faq';
const UniversityCourses = () => {
    const [courseName, setcourseName] = useState("");
    const [duration, setduration] = useState("");
    const [tuitionFee, settuitionFee] = useState("");
    const [studyField, setstudyField] = useState("");
    const [fee, setfee] = useState("");
    const [courseLevel, setcourseLevel] = useState("");
    const [cgpa, setcgpa] = useState("");
    const [eligibility, seteligibility] = useState("");
    const [english, setenglish] = useState("");
    const [website, setwebsite] = useState("");
    const [description, setdescription] = useState("");
    const [exam, setexam] = useState("");
    const [courseId, setcourseId] = useState("");

    const [width, setwidth] = useState("");
    const [viewWidth, setviewWidth] = useState("");
    const [addWidth, setaddWidth] = useState("");
    const [mounted, setMounted] = useState();
    const [data, setdata] = useState([]);
    const [editId, seteditId] = useState([]);
    const [universityId, setuniversityId] = useState([]);
    const [addnewcomponent, setaddnewcomponent] = useState("");
    const [editnewcomponent, seteditnewcomponent] = useState("");



    //START FOR
    useEffect(() => {
        if (localStorage.getItem("universityData")) {
            var a = localStorage.getItem('universityData');
            var mydata = JSON.parse(a);
            console.log(mydata);
            var user_email = mydata.data.university.email;
            var universityId = mydata.data.university._id;

            var mytoken = mydata.data.token;
        }
        setMounted(mytoken)
        setuniversityId(universityId)

        // const url = "university/courses";
        const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/rankings';

        fetch(url, {
            method: 'GET',
            headers: { 'Authorization': mytoken }
        })
            .then(response => response.json())
            .then(data => {
                setdata(data.universityRankings)
                // this.setState({ data: data.universityCourses })
            })



    }, [])
    function handleClick(value) {


        seteditId(value);
        setwidth("1600px");
        seteditnewcomponent(1);


    }
    function handleAdd() {
        // alert("fhgf")
        setaddWidth("1600px");

        setaddnewcomponent(1);

    }
    //start for delete


    //end for delete 
    //start for view


    //end for view

    function closebox(value) {
        setwidth("0px");

    }
    function closeviewbox(value) {

        setviewWidth("0px");
    }
    function closeaddbox(value) {
        setwidth("0px");
        setaddWidth("0px");
    }

    //END FOR

    let props = {
        editId: editId,
       
    }


    return (
        <div id="page-top">
            <div className="card">
                <a className="card-header" data-bs-toggle="collapse" href="#collapse7"><strong>7</strong>
                    Ranking
                </a>
                <div id="collapse7" className="collapse" data-bs-parent="#accordion">
                    <div className="container">

                        {/* <!-- Page Heading --> */}
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Ranking</h1>
                            <button type="button" onClick={() => handleAdd()} className="btn btn-outline-success"><span><i className="fas fa-plus"></i></span>Add New Ranking</button>

                        </div>


                        {/* <!-- Content Row --> */}

                        <div className="row">

                            {/* <!-- Area Chart --> */}
                            <div className="col-xl-12 col-lg-7">
                                <div className="card shadow mb-4">
                                    {/* <!-- Card Header - Dropdown --> */}
                                    <div className="card shadow mb-4">
                                        <div className="table-responsive-sm">
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Agency Name</th>
                                                        <th>Rank</th>
                                                        <th>Year</th>
                                                        <th>Image</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>




                                                    {data.map((object, i) => {

                                                        return (

                                                            <tr key={i}>
                                                                <td>{object._id}</td>
                                                                <td>{object.agencyName}</td>
                                                                <td>{object.rank}</td>
                                                                <td>{object.year}</td>
                                                                <td>  <img src={object.certificate} alt="passportback" /> </td>

                                                                <td>


                                                                    <button className="btn" onClick={() => handleClick(object._id)}><i className="fas fa-pen "></i></button>

                                                                </td>
                                                            </tr>

                                                        )
                                                    })}
                                                </tbody>


                                            </table>
                                        </div>
                                    </div>



                                    {/* start for add ranking */}
                                    <div className="card-body sidenav" id="mySideAdd"
                                        style={{ width: addWidth }}>

                                        <div className="student-view">
                                            <div className="row">
                                                <div className="col-md-6">

                                                </div>
                                                <div className="col-md-6">
                                                    <a className="closebtn" onClick={closeaddbox} >&times;</a>
                                                </div>
                                            </div>

                                            {addnewcomponent ?
                                              
                                                <RankingAdd />
                                                :
                                                <p></p>
                                            }
                                        </div>
                                    </div>
                                    {/* end for add ranking */}

                                    {/* start for edit ranking */}
                                    <div className="card-body sidenav" id="mySideAdd"
                                        style={{ width: width }}>

                                        <div className="student-view">
                                            <div className="row">
                                                <div className="col-md-6">

                                                </div>
                                                <div className="col-md-6">
                                                    <a className="closebtn" onClick={closeaddbox} >&times;</a>
                                                </div>
                                            </div>

                                            {editnewcomponent ?
                                                <RankingEdit {...props}/>
                                                :
                                                <p></p>
                                            }
                                        </div>
                                    </div>
                                    {/* end for edit ranking */}





                                    {/* end for edit */}
                                </div>
                            </div>


                        </div>
                        {/* <!-- Card Body --> */}

                    </div>
                </div>
            </div>
        </div>

    );
}

export default UniversityCourses;
