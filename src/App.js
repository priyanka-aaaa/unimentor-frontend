
import './App.css';
import Studentregister from './components/Studentregister';
import Studentlogin from './components/Studentlogin';
import './components/css/dashboard.css';
import './components/css/style.css';
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
import UniversityDashboard from './components/university/Dashboard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UniversityCourses from './components/university/UniversityCourses';
import UniversityProfile from './components/university/UniversityProfile';
import Universitylogin from './components/Universitylogin';
import Universityregister from './components/Universityregister';

// import Counter from './components/Student/Counter';
function App() {
  return (
    <div>

      {/* <Counter /> */}


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


            <Route path='/Universitylogin' component={Universitylogin} />
            <Route path='/Universityregister' component={Universityregister} />
            {/* start for university dashboard */}

            <Route path='/UniversityDashboard' component={UniversityDashboard} />
            <Route path='/UniversityCourses' component={UniversityCourses} />
            <Route path='/UniversityProfile' component={UniversityProfile} />

            
            {/* end for university dashboard */}

          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
