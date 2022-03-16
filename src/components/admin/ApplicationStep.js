import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus, faTrash, faPen, faAngleDown, faAngleUp,

} from '@fortawesome/free-solid-svg-icons';
export default function ApplicationStep() {

    const [viewWidth, setviewWidth] = useState("0px");
    const [countryId, setcountryId] = useState("0px");
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [universityApplication, setuniversityApplication] = useState(
        []
    )
    const [data, setdata] = useState([]);
    const [mounted, setMounted] = useState();
    function handleCloseView() {
        setviewWidth("0px");
    }
    function handleEdit(value) {

        setcountryId(value)

        setviewWidth("1600px");



        const url2 = process.env.REACT_APP_SERVER_URL + 'admin/countries/' + value;
        fetch(url2, {
            method: 'GET',
            headers: { 'Authorization': mounted }
        })
            .then(response => response.json())
            .then(data => {
                setuniversityApplication(data.adminCountry.countrySteps)

            })

    }

    let addFormFields = () => {

        let person = prompt("Enter string");


        if (person) {
            setuniversityApplication([...universityApplication, person]
            )
        }




    }
    let handleChange = (i, e) => {
        let newFormValues = [...universityApplication];
        newFormValues[i] = e.target.value;
        setuniversityApplication(newFormValues);
    }
    useEffect(() => {
        if (localStorage.getItem("adminData")) {
            var a = localStorage.getItem('adminData');
            var mydata = JSON.parse(a);
            var mounted = mydata.data.token;
            var adminId = mydata.data.admin._id;

        }
        setMounted(mounted)
        const url = process.env.REACT_APP_SERVER_URL + 'admin/countries';
        fetch(url, {
            method: 'GET',
            headers: { 'Authorization': mounted }
        })
            .then(response => response.json())
            .then(data => {
                setdata(data.adminCountrys)

            })

    }, [])


    let handleSubmit = (event) => {
        event.preventDefault();
        const item = {
            countrySteps: universityApplication,
        };
        axios.put(process.env.REACT_APP_SERVER_URL + 'admin/countries/' + countryId, item, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    setsuccessMessage("Courses Updated")
                    setTimeout(() => setsubmitSuccess(""), 3000);
                    setsubmitSuccess(1)
                }
                else {

                }
            })
            .catch(error => {

            });
    }

    return (
        <div className="container admin-dashboard">
                            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 class="h3 mb-0 text-gray-800">Application Step</h1>
                                {submitSuccess === 1 ? <div className="Show_success_message">
                                    <strong>Success!</strong> {successMessage}
                                </div> : null}

                            </div>
                            <div class="row">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Country Name</th>

                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((object, i) => {

                                            return (

                                                <tr key={i}>
                                                    <td>{i + 1}</td>
                                                    <td>{object.country}</td>


                                                    <td>



                                                        <button className="btn btn-success btn-sm" onClick={() => handleEdit(object._id)}>
                                                            <FontAwesomeIcon icon={faPen} />


                                                        </button>
                                                    </td>
                                                </tr>

                                            )
                                        })}

                                    </tbody>


                                </table>
                                {/* start for sideview */}
                                <div id="mySidenav" className="sidenav" style={{ width: viewWidth }}>

                                    

                                    <div class="card-body">
                                        <div class="form-block">
                                            <div class="card-body">
                                            <a onClick={() => handleCloseView()} className="closebtn mt-50" >×</a>
                                                <h1 class="h3 mb-3 text-gray-800">Add Application Step</h1>
                                                <div class="col-sm-12">


                                                    <div class="row">
                                                        <div class="col-sm-12">
                                                            <form onSubmit={handleSubmit}>

                                                                <div class="row">
                                                                    <div class="col-sm-12 ">

                                                                        {universityApplication.map((object, i) => {

                                                                            return (
                                                                                <div class="form-group" key={i}>
                                                                                    <label for="password"> Steps</label>
                                                                                    <input required="" name="countrySteps"
                                                                                        type="text"
                                                                                        class="form-control"
                                                                                        value={object}
                                                                                        onChange={e => handleChange(i, e)}

                                                                                    />
                                                                                </div>




                                                                            )
                                                                        })}



                                                                    </div>

                                                                    <div class="col-sm-12 text-danger"></div>

                                                                </div>
                                                                <div className="mb-3">
                                                                    <div className="row">
                                                                        <div className="col-md-6"></div>
                                                                        <div className="col-md-6 text-right">

                                                                            <button type="button" className="btn btn-success " onClick={() => addFormFields()}>Add New</button>

                                                                            <button type="submit" className="btn btn-secondary ml-2">Save
                                                                            </button>

                                                                        </div>

                                                                    </div>

                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    );
}