import React, { useState, useEffect } from "react";
import axios from 'axios';
const AdminApplication = () => {
    const [formValues, setFormValues] = useState([{
        application: "",
        _id: "null"

    }])
    const [mounted, setMounted] = useState();
    const [data, setdata] = useState([]);
    useEffect(() => {
        var mounted = localStorage.getItem("adminToken")
        setMounted(mounted)
        const url = process.env.REACT_APP_SERVER_URL + "admin/applications/";
        fetch(url, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setFormValues(data.adminApplications)
            })
    }, [])
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }
    let addFormFields = () => {
        setFormValues([...formValues, {
            application: "",
            _id: "null"
        }])
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        formValues.map(async (item) => {
            if (item._id === "null") {
                await axios.post(process.env.REACT_APP_SERVER_URL + 'admin/applications', item, { headers: { 'Authorization': mounted } })
                    .then(function (res) {
                        if (res.data.success === true) {
                        }
                    })
                    .catch(error => {
                    });
            }
            else {
                await axios.put(process.env.REACT_APP_SERVER_URL + 'admin/applications/' + item._id, item, { headers: { 'Authorization': mounted } })
                    .then(function (res) {
                        if (res.data.success === true) {
                        }
                    })
                    .catch(error => {

                    });
            }
        })

    }
    return (
        <div className="card">
            <a className="card-header" data-bs-toggle="collapse" href="#collapse1"><strong>1</strong>
                Application
            </a>
            <div id="collapse1" className="collapse" data-bs-parent="#accordion">
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
                                                        <div className="form-group">
                                                            <label className="form-label">Application
                                                                <span className="text-danger"> *</span></label>
                                                            <input type="text" className="form-control"
                                                                placeholder="application" name="application"
                                                                value={element.application || ""} onChange={e => handleChange(index, e)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col-md-6"></div>
                                            <div className="col-md-6 text-right">

                                                <button title="Add New" type="button" className="btn btn-success " onClick={() => addFormFields()}>Add New</button>

                                                <button title="Save" type="submit" className="btn btn-secondary ml-2">Save
                                                </button>
                                                <button title="Save & Next" type="submit" data-bs-toggle="collapse" href="#collapse4" className="btn btn-success ">Save &
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

export default AdminApplication