
import './App.css';
import Studentregister from './components/Studentregister';
import Studentlogin from './components/Studentlogin';

import StudentDashboard from './components/StudentDashboard';
import Home from './components/Home';
import StudentForgotPassword from './components/StudentForgotPassword';


import Dashboard from './components/Student/Dashboard';
import ApplicationProfile from './components/Student/ApplicationProfile';
import Profile from './components/Student/Profile';
import Document from './components/Student/Document';
import StudentPersonalInformation from './StudentPersonalInformation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>





      <Router>
        <div>

          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/Studentlogin'} className="nav-link">Student Login</Link></li>
              <li><Link to={'/Studentregister'} className="nav-link">Student Register</Link></li>
              <Link to={'/StudentDashboard'}></Link>
              <Link to={'/Example'}></Link>
              <Link to={'/Dashboard'}></Link>
           

            </ul>
          </nav>
          <hr /> */}





          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Studentlogin' component={Studentlogin} />
            <Route path='/Studentregister' component={Studentregister} />
            <Route path='/StudentDashboard' component={StudentDashboard} />

            <Route path='/StudentForgotPassword' component={StudentForgotPassword} />
            <Route path='/Dashboard' component={Dashboard} />
            <Route path='/ApplicationProfile' component={ApplicationProfile} />
            <Route path='/Profile' component={Profile} />
            <Route path='/Document' component={Document} />
            <Route path='/StudentPersonalInformation' component={StudentPersonalInformation} />





          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
