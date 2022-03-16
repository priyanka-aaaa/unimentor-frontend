import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default function AllUniversity() {
   const [formValues, setFormValues] = useState([{
        name: ""
    }])
    useEffect(() => {
        const url = process.env.REACT_APP_SERVER_URL + "universities";
        fetch(url, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
               setFormValues(data.universities)
            })
    }, [])
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="table-responsive-sm">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>University Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formValues.map((object, i) => {
                                return (
                                    <tr key={i}>
                                        <td>
                                            <Link to={'/institute/' + object.slug} className="nav-link" >{object.name}</Link>
                                        </td>
                                    </tr>

                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


