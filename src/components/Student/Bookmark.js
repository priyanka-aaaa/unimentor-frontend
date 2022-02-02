import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
// import './components/css/dashboard.css';
import Footer from './Footer';
function Bookmark(props) {
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
        {/* Content Row */}
        <div className="row">
          {/* Area Chart */}
          <div className="col-xl-12 col-lg-7">
            <div className="card shadow mb-4">
              <div className="row">
                <div className="col-md-4">
                  <div className="bookmark-block">
                    <span><img src="img/waterloouniversity.jpg" /></span>
                    <div className="bool-markcontent">
                      <h5>Unversity</h5>
                      <p>Waterloo University</p>
                      <a href="#">UnBookmark</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bookmark-block">
                    <span><img src="img/rimt.jpg" /></span>
                    <div className="bool-markcontent">
                      <h5>Unversity</h5>
                      <p>Rimt University</p>
                      <a href="#">UnBookmark</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bookmark-block">
                    <span><img src="img/waterloouniversity.jpg" /></span>
                    <div className="bool-markcontent">
                      <h5>Unversity</h5>
                      <p>Rimt University</p>
                      <a href="#">UnBookmark</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 



                        {/* <!-- /.container-fluid --> */}

                    </div>
                    {/* <!-- End of Main Content --> */}

                    {/* <!-- Footer --> */}
                    <Footer />
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