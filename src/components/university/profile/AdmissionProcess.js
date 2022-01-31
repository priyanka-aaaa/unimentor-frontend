
import React, { useState, useEffect } from "react";
import axios from 'axios';
import AdmissionProcessAdd from './AdmissionProcessAdd';
import AdmissionProcessEdit from './AdmissionProcessEdit';

// import './my.css'
const AdmissionProcess = () => {
    const [formAdminValues, setformAdminValues] = useState([{
        application: ""

    }])
    const [FormValues, setFormValues] = useState([{
        point: ""

    }])

    const [editnewcomponent, seteditnewcomponent] = useState(0);

    const [addnewcomponent, setaddnewcomponent] = useState(0);
    const [mounted, setMounted] = useState();
    const [data, setdata] = useState([]);
    const [tempp, settempp] = useState("0");
    const [myapplication, setmyapplication] = useState();
    const [addWidth, setaddWidth] = useState("");
    const [editId, seteditId] = useState([]);
    const [width, setwidth] = useState("");
    const [editPoint, seteditPoint] = useState("");
    const [universityid, setuniversityid] = useState("");

    
    useEffect(() => {
        if (localStorage.getItem("universityData")) {
            var a = localStorage.getItem('universityData');
            var mydata = JSON.parse(a);

            var myuniversityid = mydata.data.university._id;

            var user_email = mydata.data.university.email;
            var mytoken = mydata.data.token;
        }
        setMounted(mytoken)
        setuniversityid(myuniversityid)
        //start for getting university 
        const url1 = process.env.REACT_APP_SERVER_URL + 'university/' + myuniversityid + '/admissions';
        fetch(url1, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {


                setFormValues(data.universityAdmissions)


            })
        //end for getting university 

       

    }, [])
    
    function closeaddbox(value) {

        setaddWidth("0px");
    }



    function closebox(value) {
        setwidth("0px");

    }
   

    //start for course
 


    //end for course
    //start for dummy
    function handleAdd() {
        setaddWidth("1600px");
        setaddnewcomponent(1);

    }
    function handleClick(value) {

        seteditId(value);
        setwidth("1600px");
        seteditnewcomponent(1)
        axios.get('/university/'+universityid+'/admissions/' + value, { headers: { 'Authorization': mounted } })
            .then(function (res) {

                console.log(res.data.universityCourse);
                var myuniversityAdmission = res.data.universityAdmission;
                if (res.data.success === true) {


                    seteditPoint(myuniversityAdmission.point);
                    // settuitionFee(myuniversityCourse.tuitionFee);
                    // setstudyField(myuniversityCourse.studyField);
                    // setfee(myuniversityCourse.fee);
                    // setcourseLevel(myuniversityCourse.courseLevel);
                    // setcgpa(myuniversityCourse.cgpa);
                    // seteligibility(myuniversityCourse.eligibility);
                    // setenglish(myuniversityCourse.english);
                    // setwebsite(myuniversityCourse.website);
                    // setdescription(myuniversityCourse.description);
                    // setexam(myuniversityCourse.exam);


                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });

    }
    let props = {
        editId: editId,
        // imageText:"food"
    }
    //end for delete 
    //start for view

    //end for dummy
    return (
        <div>
           
            <input id="x" type="hidden" />

            <div className="card">
                <a className="card-header" data-bs-toggle="collapse" href="#collapse4"><strong>4</strong>
                    Admissions Process
                </a>
                <div id="collapse4" className="collapse" data-bs-parent="#accordion">

                    <div className="card-body">
                        <div className="formbody">
                            <div className="row">
                                <div className="col-lg-12 col-12 ">
                                    <h3>Application Process</h3>
                                </div>
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800"></h1>
                                    <button type="button" onClick={() => handleAdd()} className="btn btn-outline-success"><span><i className="fas fa-plus"></i></span>Add New Application</button>

                                </div>

                                <div className="card shadow mb-4">
                                    <div className="table-responsive-sm">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>

                                                    <th>Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>




                                                {FormValues.map((element, index) => {

                                                    return (

                                                        <tr key={index}>
                                                            <td> {element.point}</td>

                                                            <td>


                                                                <button className="btn" onClick={() => handleClick(element._id)}><i className="fas fa-pen "></i></button>

                                                            </td>
                                                        </tr>

                                                    )
                                                })}
                                            </tbody>


                                        </table>
                                    </div>
                                </div>
                                {/* start for add */}
                                <div className="card-body sidenav" id="mySideAdd"
                                    style={{ width: addWidth }}
                                >

                                    <div className="student-view">
                                        <div className="row">
                                            <div className="col-md-6">

                                            </div>
                                            <div className="col-md-6">
                                                <a className="closebtn" onClick={closeaddbox} >&times;</a>
                                            </div>
                                        </div>



                                        {/* start for real */}

                                        {addnewcomponent ?
                                            <AdmissionProcessAdd />
                                            :
                                            <p>hh</p>
                                        }
                                        {/* end for real */}





















                                    </div>
                                </div>
                                {/* end for add */}
                                {/* start for view */}
                                <div className="card-body sidenav" id="mySidenav"
                                    style={{ width: width }}
                                >

                                    <div className="student-view">
                                        <div className="row">
                                            <div className="col-md-6">

                                            </div>
                                            <div className="col-md-6">
                                                <a className="closebtn" onClick={closebox} >&times;</a>
                                            </div>
                                        </div>

                                        {/* start for real */}

                                        {editnewcomponent ?
                                            <AdmissionProcessEdit {...props} />
                                           
                                            :
                                            <p>hh</p>
                                        }




                                        {/* end for real */}


                                    </div>
                                </div>
                                {/* end for view */}

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div >
    );
}

export default AdmissionProcess
