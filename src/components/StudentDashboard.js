import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';
 
class StudentDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',

            errors: {},

            redirectToReferrer: false,
        }
    }
    componentWillMount() {

        if (localStorage.getItem("userData")) {
            var a = localStorage.getItem('userData');
            var b = JSON.parse(a);
            console.log(b);
            console.log(b.data.student.email);
            var user_email = b.data.student.email;
            this.setState({ email: user_email });
        }

        else {
            var user_email = "";
            this.setState({ redirectToReferrer: true });

        }
    }
    render() {

        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/Studentlogin'} />)
        }





        return (
            <div>
                studentdashboard
                <br />
                {this.state.email}


                <ul>
                    <li>
                        <Link to={'/StudentPersonalInformation'}>Personal information</Link>
                    </li>
                </ul>


            </div>
        );
    }
}

export default StudentDashboard;