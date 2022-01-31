
import React, { useState, useEffect } from "react";
import axios from 'axios';
import DocumentProcessAdd from './DocumentProcessAdd';
import DocumentProcessEdit from './DocumentProcessEdit';

// import './my.css'
const Document = () => {
 
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
        const url1 = process.env.REACT_APP_SERVER_URL + 'university/' + myuniversityid + '/documents';
        console.log("url1")
        console.log(url1)
        fetch(url1, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {


                setFormValues(data.universityDocuments)


            })
        //end for getting university 
 }, [])
    
    function closeaddbox(value) {

        setaddWidth("0px");
    }
  function closebox(value) {
        setwidth("0px");

    }

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
       
    }
  
    return (
        <div>
           
            <input id="x" type="hidden" />

            <div className="card">
                <a className="card-header" data-bs-toggle="collapse" href="#collapse5"><strong>5</strong>
                   Document
                </a>
                <div id="collapse5" className="collapse" data-bs-parent="#accordion">

                    <div className="card-body">
                        <div className="formbody">
                            <div className="row">
                                <div className="col-lg-12 col-12 ">
                                    <h3>Document</h3>
                                </div>
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800"></h1>
                                    <button type="button" onClick={() => handleAdd()} className="btn btn-outline-success"><span><i className="fas fa-plus"></i></span>Add New Document</button>

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
                                                            <td> {element.document}</td>

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
                                            <DocumentProcessAdd />
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
                                            <DocumentProcessEdit {...props} />
                                           
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

export default Document
