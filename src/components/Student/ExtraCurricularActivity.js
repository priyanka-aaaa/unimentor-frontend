
import React from 'react'



import ExtraActivityForm from './ExtraActivityForm';
class ExtraCurricularActivity extends React.Component {

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

                        <ExtraActivityForm />

                    </div>

                </div>

            </div>;
        }
    }
    render() {
        return (


            <div className="row pl-4 pr-4 mt-3">
                <div className="col-8 col-sm-8 col-md-8 col-lg-10">
                    <p>I haven't done any extra curricular activites</p>
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

export default ExtraCurricularActivity;