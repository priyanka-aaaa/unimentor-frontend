import React, { useState, useEffect } from "react";
import axios from 'axios';
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
    <div className="container">
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
          })
          .catch(error => {
          });
      }}
      onCancel={() =>
        setshowSweetAlert("0")
      }
      focusCancelBtn  >
    </SweetAlert>
      : null
    }
    <div className="row">
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
                      <a href="" onClick={() => onHandleUnBookmark(object._id)} >UnBookmark</a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}

export default Bookmark;