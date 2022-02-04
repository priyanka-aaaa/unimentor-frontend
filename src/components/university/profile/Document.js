
import React, { useState, useEffect } from "react";
import axios from 'axios';


// import './my.css'
const Document = () => {
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

    const [MYpoint, setMYpoint] = useState();

    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");

    useEffect(() => {
        if (localStorage.getItem("universityData")) {
            var a = localStorage.getItem('universityData');
            var mydata = JSON.parse(a);

            var universityid = mydata.data.university._id;

            var user_email = mydata.data.university.email;
            var mytoken = mydata.data.token;
        }
        setMounted(mytoken)
        setuniversityid(universityid)
        //start for fetch all document
        const url1 = process.env.REACT_APP_SERVER_URL + 'university/' + universityid + '/documents';
        fetch(url1, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                setFormValues(data.universityDocuments)
            })
        //end for fetch all document
        //start for getting admin 
        const url = process.env.REACT_APP_SERVER_URL + 'admin/documents/';
        fetch(url, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                setformAdminValues(data.adminDocuments)
            })
        //end for getting admin 
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
    function handleEditClick(value) {

        seteditId(value);
        setwidth("1600px");
        seteditnewcomponent(1)
        //start for getting university 
        const url1 = process.env.REACT_APP_SERVER_URL + 'university/' + universityid + '/documents/' + value;

        fetch(url1, {
            method: 'GET',
            headers: { 'Authorization': mounted }
        })
            .then(response => response.json())
            .then(data => {
                setMYpoint(data.universityDocument.document)
            })
        //end for getting university 

    }
    let props = {
        editId: editId,

    }
    let clickAddHandler = (datum) => {

        if (tempp !== 1) {

            var datum = "<ul><li>" + datum + "</li></ul>"; //<li></li>
            settempp(1);
        }
        else {
            var datum = "<ul><li></li><li>" + datum + "</li></ul>"; //<li></li>   
        }
        var element = document.querySelector(".helpadd")
        element.editor.insertHTML(datum);
        setmyapplication(datum)
        //  this.setState(prevState => ({ valueArr: [...prevState.valueArr, mydatumvalue] }));
    }
    let handleAddSubmit = () => {
        let originalString = document.getElementById("x").value;
        console.log("originalString");
        console.log(originalString)
        var div = document.createElement("div");
        div.innerHTML = originalString;

        var InsetApplication = div.innerText;

        const obj = {
            document: InsetApplication
        };
        console.log(obj);
        axios.post(process.env.REACT_APP_SERVER_URL + 'university/documents', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {

                if (res.data.success === true) {
                    setaddWidth(0)
                    setsuccessMessage("Document Add")
                    setTimeout(() => setsubmitSuccess(""), 3000);
                    setsubmitSuccess(1)
                    //start for fetch all document
                    const url1 = process.env.REACT_APP_SERVER_URL + 'university/' + universityid + '/documents';
                    fetch(url1, {
                        method: 'GET'
                    })
                        .then(response => response.json())
                        .then(data => {
                            setFormValues(data.universityDocuments)
                        })
                    //end for fetch all document
                }
                else {
                    alert("error");
                }
            })
            .catch(error => {
                console.log(error.response)
            });
    }
    let clickEditAddHandler = (datum) => {

        if (tempp !== 1) {

            var datum = "<ul><li>" + datum + "</li></ul>"; //<li></li>
            settempp(1);
        }
        else {
            var datum = "<ul><li></li><li>" + datum + "</li></ul>"; //<li></li>   
        }
        var element = document.querySelector(".helpedit")
        element.editor.insertHTML(datum);
        setmyapplication(datum)
        //  this.setState(prevState => ({ valueArr: [...prevState.valueArr, mydatumvalue] }));
    }
    let handleDeleteClick = (value) => {
       axios.delete(process.env.REACT_APP_SERVER_URL + 'university/documents/' + value, { headers: { 'Authorization': mounted } })
            .then(function (res) {

                if (res.data.success === true) {
                    setsuccessMessage("Document deleted")
                    setTimeout(() => setsubmitSuccess(""), 3000);
                    setsubmitSuccess(1)
                    setwidth(0);
                    //start for fetch all document
                    const url1 = process.env.REACT_APP_SERVER_URL + 'university/' + universityid + '/documents';
                    fetch(url1, {
                        method: 'GET'
                    })
                        .then(response => response.json())
                        .then(data => {
                            setFormValues(data.universityDocuments)
                        })
                    //end for fetch all document

                }
                else {
                    alert("error");
                }
            })
            .catch(error => {
                console.log(error.response)
            });
    }
    let handleEditSaveSubmit = () => {
        let originalString = document.getElementById("editx").value;
        console.log("originalString");
        console.log(originalString)
        var div = document.createElement("div");
        div.innerHTML = originalString;

        var InsetApplication = div.innerText;

        const obj = {
            document: InsetApplication
            // point: originalString

        };

        console.log(obj);

        axios.put(process.env.REACT_APP_SERVER_URL + 'university/documents/' + editId, obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {

                if (res.data.success === true) {
                    setsuccessMessage("Document Updated")
                    setTimeout(() => setsubmitSuccess(""), 3000);
                    setsubmitSuccess(1)
                    setwidth(0);
                    //start for fetch all document
                    const url1 = process.env.REACT_APP_SERVER_URL + 'university/' + universityid + '/documents';
                    fetch(url1, {
                        method: 'GET'
                    })
                        .then(response => response.json())
                        .then(data => {
                            setFormValues(data.universityDocuments)
                        })
                    //end for fetch all document

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
        <div>
            {submitSuccess === 1 ? <div className="Show_success_message">
                <strong>Success!</strong> {successMessage}
            </div> : null}
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


                                                                <button className="btn" onClick={() => handleEditClick(element._id)}><i className="fas fa-pen "></i></button>
                                                                <button className="btn" onClick={() => handleDeleteClick(element._id)}><i class="fas fa-trash-alt"></i></button>
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


                                        {/* start for add document */}
                                        <div className="row">
                                            <div className="col-lg-12 col-12 ">
                                                <h3>Document</h3>
                                            </div>
                                            <div className="trix_form_adjustement" >
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-md-12 " >
                                                                <div className="form-group ">
                                                                    <label htmlFor="comment">Add Document:</label>
                                                                    <input id="x" type="hidden" />
                                                                    <trix-editor
                                                                        name="universityApplication"
                                                                        onChange={event => this.changeHandler(event)} class="helpadd"
                                                                        input="x"
                                                                    >
                                                                    </trix-editor>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-6  mt-2 d-none d-xl-block" >
                                                                <div className="form-group">
                                                                    <div className="EditorSide">
                                                                        <p>Choose your relevant pre-written examples. </p>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="WriterPoints">
                                                                                {formAdminValues.map((element, index) => (
                                                                                    <div key={index} className="rowx mt-3 ml-2 border border-secondary help_content" id="content_1">
                                                                                        <div className="col-sm-2x ">
                                                                                            <button
                                                                                                className="VerticalText m-0"
                                                                                                onClick={() => clickAddHandler(element.document)}
                                                                                            >  add</button>
                                                                                        </div>
                                                                                        <div className="col-sm-10x p-0 ">
                                                                                            <p className="m-0 help_text">{element.document || ""}.</p>
                                                                                        </div>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> </div>
                                                </div>


                                            </div>


                                        </div>

                                        <div className="mb-3">
                                            <div className="row">
                                                <div className="col-md-6"></div>
                                                <div className="col-md-6 text-right">

                                                    <button type="button"
                                                        onClick={() => handleAddSubmit()}
                                                        className="btn btn-secondary">Save
                                                    </button>

                                                </div>

                                            </div>
                                        </div>
                                        {/* //end for add docyument */}





















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

                                        {/* start for edit document */}

                                        <div className="row">
                                            <div className="col-lg-12 col-12 ">
                                                <h3>Document Process</h3>
                                            </div>
                                            <div className="trix_form_adjustement" >
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-md-12 " >
                                                                <div className="form-group ">
                                                                    <label htmlFor="comment">Edit Document:</label>
                                                                    <input id="editx" type="hidden" />
                                                                    <trix-editor
                                                                        name="universityApplication"
                                                                        onChange={event => this.changeHandler(event)} class="form-control editarea helpedit"
                                                                        input="editx"
                                                                    >
                                                                        {MYpoint}
                                                                    </trix-editor>

                                                                </div>
                                                            </div>
                                                            <div className="col-xl-6  mt-2 d-none d-xl-block" >
                                                                <div className="form-group">
                                                                    <div className="EditorSide">
                                                                        <p>Choose your relevant pre-written examples. </p>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="WriterPoints">
                                                                                {formAdminValues.map((element, index) => (


                                                                                    <div key={index} className="rowx mt-3 ml-2 border border-secondary help_content" id="content_1">
                                                                                        <div className="col-sm-2x ">
                                                                                            <button
                                                                                                className="VerticalText m-0"
                                                                                                onClick={() => clickEditAddHandler(element.document)}


                                                                                            >  add</button>
                                                                                        </div>
                                                                                        <div className="col-sm-10x p-0 ">
                                                                                            <p className="m-0 help_text">{element.document || ""}.</p>
                                                                                        </div>
                                                                                    </div>


                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                </div>
                                                            </div>
                                                        </div> </div>
                                                </div>


                                            </div>


                                        </div>

                                        <div className="mb-3">
                                            <div className="row">
                                                <div className="col-md-6"></div>
                                                <div className="col-md-6 text-right">

                                                    <button type="button"
                                                        onClick={() => handleEditSaveSubmit()}
                                                        className="btn btn-secondary">Save
                                                    </button>

                                                </div>

                                            </div>
                                        </div>


                                        {/* end for edit document */}


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
