import React, { useState, useEffect } from "react";
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrash, faPen, faEye, faUserSlash

} from '@fortawesome/free-solid-svg-icons';
import Loader from '../Home/Loader';
export default function AdminUniversity() {
    const [mounted, setMounted] = useState();
    const [data, setdata] = useState([]);
    const [foundedYear, setfoundedYear] = useState("");
    const [formValues, setFormValues] = useState([{
        name: "", email: "", phone: "", _id: ""
    }])
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [loader, setmyloader] = useState("false");
    const [showSweetAlert, setshowSweetAlert] = useState("0");
    const [deleteId, setdeleteId] = useState("");
    useEffect(() => {
        var mounted = localStorage.getItem("adminToken")
        setMounted(mounted)
        const url = process.env.REACT_APP_SERVER_URL + "universities";
        fetch(url, {
            method: 'GET',
            headers: { 'Authorization': mounted }
        })
            .then(response => response.json())
            .then(data => {
                setdata(data.universities);
                setFormValues(data.universities)
            })
    }, [])
    let handleDeleteClick = (value) => {
        setshowSweetAlert("1")
        setdeleteId(value)
    }
    return (
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">University</h1>
            </div>
            {submitSuccess === 1 ? <div className="Show_success_message">
                <strong>Success!</strong> {successMessage}
            </div> : null}
            {loader === "true" ?
                <Loader />
                : null}
            {showSweetAlert === "1" ? <SweetAlert
                warning
                showCancel
                confirmBtnText="Yes, delete it!"
                confirmBtnBsStyle="danger"
                title="Are you sure?"
                onConfirm={(value) => {
                    setshowSweetAlert("0");
                    setmyloader("true")
                    axios.delete(process.env.REACT_APP_SERVER_URL + 'admin/deleteUniversity/' + deleteId, { headers: { 'Authorization': mounted } })
                        .then(function (res) {
                            setmyloader("false")
                            if (res.data.success === true) {
                                setsuccessMessage("University deleted")
                                setTimeout(() => setsubmitSuccess(""), 3000);
                                setsubmitSuccess(1)
                                const url = process.env.REACT_APP_SERVER_URL + "universities";
                                fetch(url, {
                                    method: 'GET',
                                    headers: { 'Authorization': mounted }
                                })
                                    .then(response => response.json())
                                    .then(data => {
                                        setdata(data.universities);
                                        setFormValues(data.universities)
                                    })
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
            <div className="row">
                <div className="col-xl-12 col-lg-7">
                    <div className="card shadow mb-4">
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
                                                    <td>{object.email}</td>
                                                    <td>{object.phone}</td>


                                                    <td>
                                                        <button className="btn btn-danger btn-sm" onClick={() => handleDeleteClick(object._id)}>
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </button>
                                                        <button className="btn btn-primary btn-sm vbtn" ><Link to={'/institute/' + object.slug} className="nav-link" >
                                                            <FontAwesomeIcon icon={faEye} />
                                                        </Link></button>
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