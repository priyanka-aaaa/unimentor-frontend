
import React, { useState, useEffect } from "react";
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import Loader from '../../Home/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus, faTrash, faPen,  faAngleDown,faAngleUp

} from '@fortawesome/free-solid-svg-icons';


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
    const [universityId, setuniversityId] = useState("");

    const [MYpoint, setMYpoint] = useState();

    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [showSweetAlert, setshowSweetAlert] = useState("0");
    const [deleteId, setdeleteId] = useState("");
    const [myTable, setTable] = useState("false");
    const [loader, setmyloader] = useState("false");
    const [ApplicationError, setApplicationError] = useState("");
    const [down, setdown] = useState("1");
    const [up, setup] = useState("0");
    useEffect(() => {

        var universityId = localStorage.getItem('universityId');
        var mounted = localStorage.getItem('universityToken');
        setMounted(mounted)
        setuniversityId(universityId)

        const url1 = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/documents';
        fetch(url1, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                var myresults = data.universityDocuments;

                if (Object.keys(myresults).length === 0) {
                    setTable("true");
                }


                setFormValues(data.universityDocuments)
            })

        const url = process.env.REACT_APP_SERVER_URL + 'admin/documents/';
        fetch(url, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                setformAdminValues(data.adminDocuments)
            })

    }, [])
    function handleClick() {
        if(down==="1"){
             setdown("0");
             setup("1")
         }
         else{
             setdown("1");
             setup("0")
         }
    }
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
        setApplicationError("")
        const url1 = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/documents/' + value;

        fetch(url1, {
            method: 'GET',
            headers: { 'Authorization': mounted }
        })
            .then(response => response.json())
            .then(data => {
                setMYpoint(data.universityDocument.document)
            })


    }
    let props = {
        editId: editId,

    }
    let clickAddHandler = (datum) => {

        if (tempp !== 1) {

            var datum = "<ul><li>" + datum + "</li></ul>";
            settempp(1);
        }
        else {
            var datum = "<ul><li></li><li>" + datum + "</li></ul>";
        }
        var element = document.querySelector(".helpadd")
        element.editor.insertHTML(datum);
        setmyapplication(datum)

    }
    let handleAddSubmit = () => {
        setApplicationError("")


        let originalString = document.getElementById("x").value;

        var div = document.createElement("div");
        div.innerHTML = originalString;

        var InsetApplication = div.innerText;
        if (InsetApplication === "") {

            setApplicationError("Please Enter Document")
        }
        else {
            setaddWidth(0)
            setTable("false")

            setmyloader("true")
            const obj = {
                document: InsetApplication
            };

            axios.post(process.env.REACT_APP_SERVER_URL + 'university/documents', obj, { headers: { 'Authorization': mounted } })
                .then(function (res) {
                    setmyloader("false")

                    if (res.data.success === true) {

                        setsuccessMessage("Document Add")
                        setTimeout(() => setsubmitSuccess(""), 3000);
                        setsubmitSuccess(1)

                        const url1 = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/documents';
                        fetch(url1, {
                            method: 'GET'
                        })
                            .then(response => response.json())
                            .then(data => {
                                setFormValues(data.universityDocuments)
                            })

                    }
                    else {

                    }
                })
                .catch(error => {

                });
        }
    }
    let clickEditAddHandler = (datum) => {

        if (tempp !== 1) {

            var datum = "<ul><li>" + datum + "</li></ul>";
            settempp(1);
        }
        else {
            var datum = "<ul><li></li><li>" + datum + "</li></ul>";
        }
        var element = document.querySelector(".helpedit")
        element.editor.insertHTML(datum);
        setmyapplication(datum)

    }
    let handleDeleteClick = (value) => {
        setshowSweetAlert("1")
        setdeleteId(value)
    }
    let handleEditSaveSubmit = () => {
        setApplicationError("")

        let originalString = document.getElementById("editx").value;

        var div = document.createElement("div");
        div.innerHTML = originalString;

        var InsetApplication = div.innerText;
        if (InsetApplication === "") {

            setApplicationError("Please Enter Document")
        }
        else {

            setwidth(0)
            setmyloader("true")
            const obj = {
                document: InsetApplication


            };



            axios.put(process.env.REACT_APP_SERVER_URL + 'university/documents/' + editId, obj, { headers: { 'Authorization': mounted } })
                .then(function (res) {
                    setmyloader("false")

                    if (res.data.success === true) {
                        setsuccessMessage("Document Updated")
                        setTimeout(() => setsubmitSuccess(""), 3000);
                        setsubmitSuccess(1)


                        const url1 = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/documents';
                        fetch(url1, {
                            method: 'GET'
                        })
                            .then(response => response.json())
                            .then(data => {
                                setFormValues(data.universityDocuments)
                            })


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
            {loader === "true" ?

                <Loader />

                : null}
            {submitSuccess === 1 ? <div className="Show_success_message">
                <strong>Success!</strong> {successMessage}
            </div> : null}

            <input id="x" type="hidden" />

            <div className="card">
                {showSweetAlert === "1" ? <SweetAlert
                    warning
                    showCancel
                    confirmBtnText="Yes, delete it!"
                    confirmBtnBsStyle="danger"

                    title="Are you sure?"
                    onConfirm={(value) => {
                        setshowSweetAlert("0");
                        setmyloader("true")

                        axios.delete(process.env.REACT_APP_SERVER_URL + 'university/documents/' + deleteId, { headers: { 'Authorization': mounted } })
                            .then(function (res) {
                                setmyloader("false")

                                if (res.data.success === true) {
                                    setsuccessMessage("Document deleted")
                                    setTimeout(() => setsubmitSuccess(""), 3000);
                                    setsubmitSuccess(1)
                                    
                                    const url1 = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/documents';
                                    fetch(url1, {
                                        method: 'GET'
                                    })
                                        .then(response => response.json())
                                        .then(data => {
                                            var myresults=data.universityDocuments
                                            if (Object.keys(myresults).length === 0) {
                                                setTable("true");
                                            }
                                            setFormValues(data.universityDocuments)
                                        })

                                }
                                else {

                                }
                            })
                            .catch(error => {

                            });

                    }}
                    onCancel={() =>
                        setshowSweetAlert("0")

                    }
                    focusCancelBtn
                >

                </SweetAlert>
                    : null
                }
                <a className="card-header" data-bs-toggle="collapse" href="#collapse5"  onClick={() => handleClick()}><strong>5</strong>
                    Document
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
                <div id="collapse5" className="collapse" data-bs-parent="#accordion">

                    <div className="card-body">
                        <div className="formbody">


                            <div className=" mt-4 mb-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5>Document</h5>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <button type="button" 
                                            data-toggle="tooltip" data-placement="right" title="Add New Document"
                                        onClick={() => handleAdd()} className="btn btn-outline-success"><span>
                                        <FontAwesomeIcon icon={faPlus} />

                                            </span>Add New Document</button>
                                    </div>
                                </div>

                                <div className="card shadow mb-4 mt-4">
                                    {myTable === "true" ?
                                        null
                                        :
                                        <div className="table-responsive-sm">
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                    <th>No.</th>
                                                        <th>Document</th>
                                                        <th>Action</th>

                                                    </tr>
                                                </thead>
                                                <tbody>




                                                    {FormValues.map((element, index) => {

                                                        return (
                                                           
                                                            <tr key={index}>
                                                                    <td> {index+1}</td>
                                                                <td> {element.document}</td>

                                                                <td>


                                                                    <button title="Edit" className="btn btn-success btn-sm " onClick={() => handleEditClick(element._id)}>
                                                                    
                                        <FontAwesomeIcon icon={faPen} />
                                                                        
                                                                        </button>
                                                                    <button title="Delete" className="btn btn-danger btn-sm vbtn" onClick={() => handleDeleteClick(element._id)}>                                        <FontAwesomeIcon icon={faTrash} />
</button>
                                                                </td>
                                                            </tr>

                                                        )
                                                    })}
                                                </tbody>


                                            </table>
                                        </div>
                                    }
                                </div>
                                {/* start for add */}
                                <div className="card-body course-sidenav" id="mySideAdd"
                                    style={{ width: addWidth }}
                                >

                                    <div className="student-view">
                                        <div className="row">
                                            <div className="col-md-6">

                                            </div>
                                            <div className="col-md-6">
                                                <a title="Close"  data-toggle="tooltip" data-placement="right" className="closebtn" onClick={closeaddbox} >&times;</a>
                                            </div>
                                        </div>


                                        {/* start for add document */}
                                        <div className="row mt-3">
                                            <div className="col-lg-12 col-12 ">
                                                <h3>Add Document</h3>
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
                                                                        onChange={event => this.changeHandler(event)} class="form-control editarea helpadd"
                                                                        input="x"
                                                                    >
                                                                    </trix-editor>
                                                                    <span style={{ color: "red" }}> {ApplicationError}</span>

                                                                </div>
                                                            </div>
                                                            <div className="col-xl-6  mt-2 d-none d-xl-block" >
                                                                <div className="form-group textarea">
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
                                                                                                className="vert-btn"
                                                                                                onClick={() => clickAddHandler(element.document)}
                                                                                            > <span className="VerticalText m-0">Add</span> </button>
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

                                    </div>
                                </div>

                                <div className="card-body course-sidenav" id="mycourse-sidenav"
                                    style={{ width: width }}
                                >

                                    <div className="student-view">
                                        <div className="row">
                                            <div className="col-md-6">

                                            </div>
                                            <div className="col-md-6">
                                                <a title="Close"  data-toggle="tooltip" data-placement="right" className="closebtn" onClick={closebox} >&times;</a>
                                            </div>
                                        </div>

                                        {/* start for edit document */}

                                        <div className="row mt-3">
                                            <div className="col-lg-12 col-12 ">
                                                <h3>Edit Document Process</h3>
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
                                                                    <span style={{ color: "red" }}> {ApplicationError}</span>

                                                                </div>
                                                            </div>
                                                            <div className="col-xl-6  mt-2 d-none d-xl-block" >
                                                                <div className="form-group textarea">
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
                                                                                                className="vert-btn"
                                                                                                onClick={() => clickEditAddHandler(element.document)}


                                                                                            > <span className="VerticalText m-0">Add</span> </button>
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
