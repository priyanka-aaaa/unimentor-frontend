import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
     faTrash, faPen,  faEye, faUserSlash

} from '@fortawesome/free-solid-svg-icons';
export default function AdminUniversity() {

    const [mounted, setMounted] = useState();


    const [data, setdata] = useState([]);

    const [foundedYear, setfoundedYear] = useState("");
    const [formValues, setFormValues] = useState([{
        name: ""
    }])

    useEffect(() => {
        if (localStorage.getItem("universityData")) {
            var a = localStorage.getItem('universityData');
            var mydata = JSON.parse(a);
            var myuniversityid = mydata.data.university._id;

            var user_email = mydata.data.university.email;
            var mytoken = mydata.data.token;

        }
        setMounted(mytoken)



        const url = process.env.REACT_APP_SERVER_URL + "universities";

        fetch(url, {
            method: 'GET',
            headers: { 'Authorization': mytoken }
        })
            .then(response => response.json())
            .then(data => {

                setdata(data.universities);
                setFormValues(data.universities)
            })




    }, [])
    return (
        <div className="container">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">University</h1>
                            </div>
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
                                                            <th>No.</th>
                                                            <th>Id</th>
                                                            <th>Name</th>

                                                            <th>Email</th>
                                                            <th>Phone</th>
                                                            <th>Action</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {formValues.map((object, i) => {
                                                            return (
                                                                <tr key={i}>
                                                                    <td>{i + 1}</td>
                                                                    <td>{object._id}</td>
                                                                    <td> {object.name}</td>
                                                                    <td>priyanka.calinfo500@gmail.com</td>
                                                                    <td>9817961998</td>


                                                                    <td>
                                                                        <button className="btn btn-danger btn-sm" >
                                                                            <FontAwesomeIcon icon={faTrash} />


                                                                        </button>
                                                                        <button className="btn btn-success btn-sm">
                                                                            <FontAwesomeIcon icon={faPen} />


                                                                        </button>
                                                                        <button className="btn btn-primary btn-sm vbtn" ><Link to={'/institute/' + object._id} className="nav-link" >
                                                                            <FontAwesomeIcon icon={faEye} />


                                                                        </Link></button>
                                                                        <button className="btn btn-info  btn-sm ml-2" >
                                                                            <FontAwesomeIcon icon={faUserSlash} />


                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            )

                                                        })}


                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    );
}