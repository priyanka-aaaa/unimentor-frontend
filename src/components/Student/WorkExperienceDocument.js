
import React from 'react'



import WorkExperienceForm from './WorkExperienceForm';
class WorkExperienceDocument extends React.Component {

    render() {
        return (
            <div className="row pl-4 pr-4 mt-3">
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
            return <div className="row pl-4 pr-4 mt-3">
            </div>;
        }
        else {
            return <div className="row pl-4 pr-4 mt-3">

                <div className="col-8 col-sm-8 col-md-8 col-lg-10">

                    <div className="form form_doc marksheet">

                        <WorkExperienceForm />

                    </div>

                </div>

            </div>;
        }
    }
    render() {
        return (


            <div className="row pl-4 pr-4 mt-3">
                <div className="col-8 col-sm-8 col-md-8 col-lg-10">
                    <p>I don't have any work experience</p>
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-right pr-0">
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round" onClick={() => this.ToggleButton()}></span>
                    </label>

                </div>
                {this.renderElementcounter()}
            </div>
        )
    }
}

export default WorkExperienceDocument;