import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrash, faPen, faEye, faUserSlash,faCloudDownload

} from '@fortawesome/free-solid-svg-icons';

export default function AdminAgent() {
    return (
        <div className="container">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Agent</h1>
        </div>
        <div class="row">
            <div class="col-xl-12 col-lg-7">
                <div class="card shadow mb-4">
                    <div class="card shadow mb-4">
                        <div class="table-responsive-sm">
                        <table class="table table-bordered">
                                <thead>
                                    <tr>
                                 
                                        <th>ID</th>
                                        <th> Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>priyanka</td>
                                        <td>priyanka.calinfo500@gmail.com</td>
                                        <td>9817961998</td>

                                        <td>
                                            <button className="btn btn-danger btn-sm " >
                                                <FontAwesomeIcon icon={faTrash} />

                                            </button>
                                            <button className="btn btn-success btn-sm">
                                                <FontAwesomeIcon icon={faPen} />

                                            </button>
                                            <button className="btn btn-primary btn-sm vbtn" >
                                                <FontAwesomeIcon icon={faEye} />

                                            </button>
                                            <button className="btn btn-info  btn-sm ml-2" >
                                                <FontAwesomeIcon icon={faUserSlash} />

                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>priyanka</td>
                                        <td>priyanka.calinfo500@gmail.com</td>
                                        <td>9817961998</td>

                                        <td>
                                            <button className="btn btn-danger btn-sm " >
                                                <FontAwesomeIcon icon={faTrash} />

                                            </button>
                                            <button className="btn btn-success btn-sm">
                                                <FontAwesomeIcon icon={faPen} />

                                            </button>
                                            <button className="btn btn-primary btn-sm vbtn" >
                                                <FontAwesomeIcon icon={faEye} />

                                            </button>
                                            <button className="btn btn-info  btn-sm ml-2" >
                                                <FontAwesomeIcon icon={faUserSlash} />

                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>priyanka</td>
                                        <td>priyanka.calinfo500@gmail.com</td>
                                        <td>9817961998</td>

                                        <td>
                                            <button className="btn btn-danger btn-sm " >
                                                <FontAwesomeIcon icon={faTrash} />

                                            </button>
                                            <button className="btn btn-success btn-sm">
                                                <FontAwesomeIcon icon={faPen} />

                                            </button>
                                            <button className="btn btn-primary btn-sm vbtn" >
                                                <FontAwesomeIcon icon={faEye} />

                                            </button>
                                            <button className="btn btn-info  btn-sm ml-2" >
                                                <FontAwesomeIcon icon={faUserSlash} />

                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>priyanka</td>
                                        <td>priyanka.calinfo500@gmail.com</td>
                                        <td>9817961998</td>

                                        <td>
                                            <button className="btn btn-danger btn-sm " >
                                                <FontAwesomeIcon icon={faTrash} />

                                            </button>
                                            <button className="btn btn-success btn-sm">
                                                <FontAwesomeIcon icon={faPen} />

                                            </button>
                                            <button className="btn btn-primary btn-sm vbtn" >
                                                <FontAwesomeIcon icon={faEye} />

                                            </button>
                                            <button className="btn btn-info  btn-sm ml-2" >
                                                <FontAwesomeIcon icon={faUserSlash} />

                                            </button>
                                        </td>
                                    </tr>
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