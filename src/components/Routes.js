import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Studentregister from './Studentregister';
import Studentlogin from './Studentlogin';
import StudentDashboard from './StudentDashboard';
import StudentForgotPassword from './StudentForgotPassword';
import Dashboard from './Student/Dashboard';
import ApplicationProfile from './Student/ApplicationProfile';
import Profile from './Student/Profile';
import Document from './Student/Document';
import AddStudent from './agent/AddStudent';

import StudentPersonalInformation from './Student/StudentPersonalInformation';
import Bookmark from './Student/Bookmark';
function Routes(props) {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/Studentlogin' component={Studentlogin} />
                    <Route path='/Studentregister' component={Studentregister} />
                    <Route path='/StudentDashboard' component={StudentDashboard} />
                    <Route path='/StudentForgotPassword' component={StudentForgotPassword} />
                    <Route path='/Dashboard' component={Dashboard} />
                    <Route path='/ApplicationProfile' component={ApplicationProfile} />
                    <Route path='/Profile' component={Profile} />
                    <Route path='/Document' component={Document} />
                    <Route path='/StudentPersonalInformation' component={StudentPersonalInformation} />
                    <Route path='/Bookmark' component={Bookmark} />
                    <Route path='/AddStudent' component={AddStudent} />
                </Switch>
            </Router>
        </div>
    );
}

export default Routes;