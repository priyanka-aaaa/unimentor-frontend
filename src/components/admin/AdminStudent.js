import React, { useState, useEffect } from "react";

import Sidebar from './Sidebar';
import Topbar from './Topbar';
export default function AdminStudent() {
    return (
        <div id="page-top">
            <div id="wrapper">
                <Sidebar/>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar/>
                        <div className="container">
                            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 class="h3 mb-0 text-gray-800">Student</h1>

                            </div>
                            <div class="row">

                                {/* <!-- Area Chart --> */}
                                <div class="col-xl-12 col-lg-7">
                                    <div class="card shadow mb-4">
                                        {/* <!-- Card Header - Dropdown --> */}
                                        <div class="card shadow mb-4">
                                            <div class="table-responsive-sm">
                                                <table class="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>ID</th>
                                                            <th> Name</th>
                                                            <th>Email</th>
                                                            <th>Phone</th>
                                                            <th></th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>priyanka</td>
                                                            <td>priyanka.calinfo500@gmail.com</td>
                                                            <td>9817961998</td>

                                                            <td>
                                                                <button className="btn" ><i className="fas fa-trash-alt"></i></button>
                                                                <button className="btn"><i className="fas fa-pen "></i></button>
                                                                <button className="btn" ><i className="fas fa-eye"></i></button>
                                                                <button className="btn" ><i class="fas fa-user-slash"></i></button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>priyanka</td>
                                                            <td>priyanka.calinfo500@gmail.com</td>
                                                            <td>9817961998</td>

                                                            <td>
                                                                <button className="btn" ><i className="fas fa-trash-alt"></i></button>
                                                                <button className="btn"><i className="fas fa-pen "></i></button>
                                                                <button className="btn" ><i className="fas fa-eye"></i></button>
                                                                <button className="btn" ><i class="fas fa-user-slash"></i></button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>priyanka</td>
                                                            <td>priyanka.calinfo500@gmail.com</td>
                                                            <td>9817961998</td>

                                                            <td>
                                                                <button className="btn" ><i className="fas fa-trash-alt"></i></button>
                                                                <button className="btn"><i className="fas fa-pen "></i></button>
                                                                <button className="btn" ><i className="fas fa-eye"></i></button>
                                                                <button className="btn" ><i class="fas fa-user-slash"></i></button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>priyanka</td>
                                                            <td>priyanka.calinfo500@gmail.com</td>
                                                            <td>9817961998</td>

                                                            <td>
                                                                <button className="btn" ><i className="fas fa-trash-alt"></i></button>
                                                                <button className="btn"><i className="fas fa-pen "></i></button>
                                                                <button className="btn" ><i className="fas fa-eye"></i></button>
                                                                <button className="btn" ><i class="fas fa-user-slash"></i></button>
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
                    </div>
                </div>
            </div>
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>
        </div >
    );
}