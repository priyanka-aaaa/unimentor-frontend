import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

import Footer from './Footer';
const AdminDocument = () => {
    const [formValues, setFormValues] = useState([{
        document: "",
        _id: "null"

    }])
    const [mounted, setMounted] = useState();
    const [myAdminId, setAdminId] = useState();


    const [data, setdata] = useState([]);
    useEffect(() => {
        if (localStorage.getItem("adminData")) {
            var a = localStorage.getItem('adminData');
            var mydata = JSON.parse(a);

            // console.log(mydata);

            var mytoken = mydata.data.token;
            var adminId = mydata.data.admin._id;
            // setAdminId(adminId)
        }
        setMounted(mytoken)

        setAdminId(adminId)

        //start for select course
        const url = process.env.REACT_APP_SERVER_URL+"admin/documents/";
 
        fetch(url, {
            method: 'GET',

        })
            .then(response => response.json())
            .then(data => {
                setFormValues(data.adminDocuments)
                // this.setState({ data: data.universityCourses })
            })

    }, [])
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, {
            document: "",
            _id: "null"
        }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log("formvalues");
        console.log(formValues);
        formValues.map(async (item) => {
            if (item._id === "null") {
                await axios.post(process.env.REACT_APP_SERVER_URL + 'admin/documents', item, { headers: { 'Authorization': mounted } })
                    .then(function (res) {
                        console.log(res.data);
                        if (res.data.success === true) {
                            console.log("courses update successfully");
                        }
                        else {
                            console.log("error");
                        }
                    })
                    .catch(error => {
                        console.log(error.response)
                    });

            }
            else {
                await axios.put(process.env.REACT_APP_SERVER_URL + 'admin/documents/' + item._id, item, { headers: { 'Authorization': mounted } })
                    .then(function (res) {
                        console.log(res.data);
                        if (res.data.success === true) {
                            alert("courses update successfully");
                        }
                        else {
                            alert("error");
                        }
                    })
                    .catch(error => {
                        console.log(error.response)
                    });

            }
        })

    }


    return (



        <div className="card">
        <a className="card-header" data-bs-toggle="collapse" href="#collapse2"><strong>2</strong>
            Document
        </a>
        <div id="collapse2" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
                <div className="form-block">
                <form onSubmit={handleSubmit}>
                                <div className="card-body" >

                                    <div className="from-block" >



                                        {formValues.map((element, index) => (

                                            <div className="row" key={index}>
                                                <div className="mb-3">
                                                    <div className="row">
                                                        <div className="col">
                                                            <label className="form-label">document
                                                                *</label>
                                                            <input type="text" className="form-control"
                                                                placeholder="document" name="document"
                                                                value={element.document || ""} onChange={e => handleChange(index, e)}

                                                            // value={courseName}
                                                            // onChange={(e) => setcourseName(e.target.value)}
                                                            />
                                                        </div>


                                                    </div>
                                                </div>



                                            </div>
                                        ))}

                                        <div className="mb-3">
                                            <div className="row">
                                                <div className="col-md-6"></div>
                                                <div className="col-md-6 text-right">

                                                    <button className="button add" type="button" className="btn btn-success " onClick={() => addFormFields()}>Add New</button>

                                                    <button type="submit" className="btn btn-secondary">Save
                                                    </button>
                                                    <button type="submit" data-bs-toggle="collapse" href="#collapse4" className="btn btn-success ">Save &
                                                        Next</button>
                                                </div>

                                            </div>

                                        </div>



                                    </div>
                                </div>
                            </form>

                    <div className="row pl-4 pr-4 mt-3">


                        <div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AdminDocument