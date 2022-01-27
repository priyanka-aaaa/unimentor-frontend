import React, { Component } from 'react';

class Scholarship extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <a className="card-header" data-bs-toggle="collapse" href="#collapse8"><strong>8</strong>
                        Scholarship
                    </a>
                    <div id="collapse8" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked="" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    YES
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    NO
                                </label>
                            </div>


                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-xl-6 col-md-12 " >
                                            <div className="form-group ">
                                                <label htmlFor="comment">Documents:</label>
                                                <textarea className="form-control editarea" row="5" col="7"></textarea>
                                            </div>


                                        </div>
                                        <div className="col-xl-6  mt-2 d-none d-xl-block" >
                                            <div className="form-group">
                                                <div className="EditorSide">
                                                    <p>Choose your relevant pre-written examples. </p>
                                                </div>


                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="WriterPoints">
                                                            {/* <!--  --> */}
                                                            <div className="HelpPoint des_help " id="help">
                                                                <div className="rowx mt-3 ml-2 border border-secondary help_content" onClick="insert_text(this.id)" id="content_1">
                                                                    <div className="col-sm-2x ">
                                                                        <p className="VerticalText m-0"> ADD </p>
                                                                    </div>
                                                                    <div className="col-sm-10x p-0 ">
                                                                        <p className="m-0 help_text">I am keen to continue my career and prepared to work hard in order to achieve my organization objectives and I hereby declare that the information furnished above is true to the best of my knowledge.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="rowx mt-3 ml-2 border border-secondary help_content" onClick="insert_text(this.id)" id="content_2">
                                                                    <div className="col-sm-2x ">
                                                                        <p className="VerticalText m-0"> ADD </p>
                                                                    </div>
                                                                    <div className="col-sm-10x p-0 ">
                                                                        <p className="m-0 help_text">I hereby declare that all the above mentioned information given by me is true and correct to the best of my knowledge and belief.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="rowx mt-3 ml-2 border border-secondary help_content" onClick="insert_text(this.id)" id="content_3">
                                                                    <div className="col-sm-2x ">
                                                                        <p className="VerticalText m-0"> ADD </p>
                                                                    </div>
                                                                    <div className="col-sm-10x p-0 ">
                                                                        <p className="m-0 help_text">I do hereby declare that above particulars of information and facts stated are true, correct and complete to the best of my knowledge and belief.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="rowx mt-3 ml-2 border border-secondary help_content" onClick="insert_text(this.id)" id="content_4">
                                                                    <div className="col-sm-2x ">
                                                                        <p className="VerticalText m-0"> ADD </p>
                                                                    </div>
                                                                    <div className="col-sm-10x p-0 ">
                                                                        <p className="m-0 help_text">I do hereby declare that the above statements mentioned in my resume are true and correct to the best of my knowledge and belief.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="rowx mt-3 ml-2 border border-secondary help_content" onClick="insert_text(this.id)" id="content_5">
                                                                    <div className="col-sm-2x ">
                                                                        <p className="VerticalText m-0"> ADD </p>
                                                                    </div>
                                                                    <div className="col-sm-10x p-0 ">
                                                                        <p className="m-0 help_text">I solemnly declare that all the above furnished information is free from error to the best of my knowledge and belief.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="rowx mt-3 ml-2 border border-secondary help_content" onClick="insert_text(this.id)" id="content_6">
                                                                    <div className="col-sm-2x ">
                                                                        <p className="VerticalText m-0"> ADD </p>
                                                                    </div>
                                                                    <div className="col-sm-10x p-0 ">
                                                                        <p className="m-0 help_text">All the information mentioned in the resume are correct to the best of my knowledge and believe.</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
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
}

export default Scholarship;