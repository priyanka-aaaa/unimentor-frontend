import React, { Component } from 'react';
import SelectEnglishProficiency from './SelectEnglishProficiency';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/style.css';
import '../css/dashboard.css';


import SelectEnglish from './SelectEnglish';
class EnglishProficiency extends Component {
    render() {
        return (
            <div>
                <Button text="Hello from GFG"> </Button>
            </div>
        )
    }
}
class Button extends React.Component {
    state = {
        textflag: false,
    }
    ToggleButton() {
        this.setState(
            { textflag: !this.state.textflag }
        );
    }
    renderElementcounter() {
        if (!this.state.textflag) {
            return <div className="">
            </div>;
        }
        else {
            return <div className="">



                <div className="form form_doc marksheet">


                    <SelectEnglish />


                </div>



            </div>;
        }
    }
    render() {
        return (



            <div className="card">
                <a className="card-header" data-bs-toggle="collapse" href="#collapse4">
                    <strong>4</strong>  English Proficiency Test Document
                </a>
                <div id="collapse4" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">

                        <div className="row">
                            <div className="col-md-8">
                                <p>I haven't taken any English Proficiency Test</p>
                            </div>
                            <div className="col-md-4 text-right">
                                <label className="switch3">
                                    <input type="checkbox" />
                                    {/* <span className="slider3 round3"></span> */}
                                    <span className="slider3 round3" onClick={() => this.ToggleButton()}></span>
                                </label>
                            </div>
                        </div>
                        <div className="form form_doc document">

                        </div>
                    </div>
                    {this.renderElementcounter()}
                </div>

            </div>

        );
    }
}

export default EnglishProficiency;