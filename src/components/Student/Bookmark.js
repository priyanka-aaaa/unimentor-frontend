import React, { useState, useEffect } from "react";
import axios from 'axios';

import Sidebar from './Sidebar';
import Topbar from './Topbar';
import SweetAlert from 'react-bootstrap-sweetalert';


function Bookmark(props) {

  const [deleteId, setdeleteId] = useState();
  const [mounted, setMounted] = useState();
  const [UniveristyId, setUniveristyId] = useState("");
  const [firstName, setfirstName] = useState("");
  const [data, setdata] = useState([]);
  const [successMessage, setsuccessMessage] = useState("");
  const [submitSuccess, setsubmitSuccess] = useState("0");
  const [showSweetAlert, setshowSweetAlert] = useState("0");
  useEffect(() => {
    var mounted = localStorage.getItem("studentToken")
    setMounted(mounted)
    var myurl = process.env.REACT_APP_SERVER_URL;


    const url = process.env.REACT_APP_SERVER_URL + 'student/bookmarks';
    fetch(url, {
      method: 'GET',
      headers: { 'Authorization': mounted }
    })
      .then(response => response.json())
      .then(data => {
        setdata(data.studentBookmarks)
      })




  }, [])
  function onHandleUnBookmark(value) {
    setdeleteId(value)
    setshowSweetAlert("1")


  }
  return (
    <div id="page-top">


      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        <Sidebar />
        {/* there will be come sidebar */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">

          {/* <!-- Main Content --> */}
          <div id="content">

            {/* topbar will be come there */}
            <Topbar />
            {/* <!-- Begin Page Content --> */}
            {/* the content of each page will be come there */}
            {/* <ApplicationProfile /> */}
            {/* profile content come here */}



            <div className="container">
              {/* Page Heading */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">My Book Mark</h1>
              </div>
              {showSweetAlert === "1" ? <SweetAlert
                warning
                showCancel
                confirmBtnText="Yes, delete it!"
                confirmBtnBsStyle="danger"

                title="Are you sure?"
                onConfirm={(value) => {
                  setshowSweetAlert("0");





                  axios.delete(process.env.REACT_APP_SERVER_URL + 'student/bookmarks/' + deleteId, { headers: { 'Authorization': mounted } })
                    .then(function (res) {

                      if (res.data.success === true) {
                        setsuccessMessage("Unbookmark")
                        setTimeout(() => setsubmitSuccess(""), 3000);
                        setsubmitSuccess(1)

                        const url = process.env.REACT_APP_SERVER_URL + 'student/bookmarks';
                        fetch(url, {
                          method: 'GET',
                          headers: { 'Authorization': mounted }
                        })
                          .then(response => response.json())
                          .then(data => {
                            setdata(data.studentBookmarks)
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
              {/* Content Row */}
              <div className="row">
                {/* Area Chart */}
                <div className="col-xl-12 col-lg-7">
                  <div className="card shadow mb-4">
                    <div className="row">
                      {data.map((object, i) => {
                        return (
                          <div className="col-md-4" key={i}>
                            <div className="bookmark-block">
                              <span>
                                <img src={object.logo} alt="logo" />
                              </span>
                              <div className="bool-markcontent">
                                <h5>Unversity</h5>
                                <p>{object.name}</p>
                                <a onClick={() => onHandleUnBookmark(object._id)} >UnBookmark</a>
                                {/* <button className="button add" type="button" className="btn btn-success " onClick={() => addFormFields()}>Add New</button> */}

                              </div>
                            </div>
                          </div>




                        )
                      })}
                      {/* end for bookmark */}
                    </div>
                  </div>
                </div>
              </div>
            </div>




            {/* <!-- /.container-fluid --> */}

          </div>
          {/* <!-- End of Main Content --> */}

          {/* <!-- Footer --> */}

          {/* <!-- End of Footer --> */}

        </div>
        {/* <!-- End of Content Wrapper --> */}

      </div>
      {/* <!-- End of Page Wrapper --> */}

      {/* <!-- Scroll to Top Button--> */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      {/* <!-- Logout Modal--> */}
      <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div className="modal-footer">
              <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
              <a className="btn btn-primary" href="login.html">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </div >

  );
}

export default Bookmark;