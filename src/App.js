import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import './components/css/dashboard.css';
import './components/css/style.css';
import Home from './components/Home';

import Studentregister from './components/Studentregister';
import Studentlogin from './components/Studentlogin';
import StudentDashboard from './components/StudentDashboard';
import StudentForgotPassword from './components/StudentForgotPassword';
import Dashboard from './components/Student/Dashboard';
import ApplicationProfile from './components/Student/ApplicationProfile';
import Profile from './components/Student/Profile';
import Document from './components/Student/Document';
import StudentPersonalInformation from './StudentPersonalInformation';

import UniversityPassword from './components/university/UniversityPassword';
import UniversityIntake from './components/university/UniversityIntake';
import UniversityDashboard from './components/university/Dashboard';
import UniversityCourses from './components/university/UniversityCourses';
import UniversityProfile from './components/university/UniversityProfile';
import Universitylogin from './components/Universitylogin';
import Universityregister from './components/Universityregister';
import Commission from './components/university/Commission';
import Summary from './components/university/Summary';
import AllUniversity from './components/university/AllUniversity';
import UniveristyPage from './components/university/UniveristyPage';

import AdminDashboard from './components/admin/AdminDashboard';
import AdminLogin from './components/AdminLogin';
import AdminStudent from './components/admin/AdminStudent';
import AdminAgent from './components/admin/AdminAgent';
import AdminUniversity from './components/admin/AdminUniversity';
import AdminCountry from './components/admin/AdminCountry';
import AdminStudy from './components/admin/AdminStudy';
import AdminApplication from './components/admin/AdminApplication';
import AdminDocument from './components/admin/AdminDocument';
import AdminScholarship from './components/admin/AdminScholarship';




import AgentLogin from './components/AgentLogin';
import AgentRegister from './components/AgentRegister';
import AgentDashboard from './components/agent/AgentDashboard';
import AgentTeam from './components/agent/AgentTeam';
import AgentStudent from './components/agent/AgentStudent';
import AgentEvaluate from './components/agent/AgentEvaluate';
import AgentCertificate from './components/agent/AgentCertificate';



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


            <Route path='/AgentRegister' component={AgentRegister} />
            <Route path='/AgentLogin' component={AgentLogin} />
            <Route path='/AgentDashboard' component={AgentDashboard} />
            <Route path='/AgentTeam' component={AgentTeam} />
            <Route path='/AgentStudent' component={AgentStudent} />
            <Route path='/AgentEvaluate' component={AgentEvaluate} />
            <Route path='/AgentCertificate' component={AgentCertificate} />




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
            <Route path='/UniversitySetcommission' component={Commission} />
            <Route path='/UniversityDashboard' component={UniversityDashboard} />
            <Route path='/UniversityCourses' component={UniversityCourses} />
            <Route path='/UniversityPassword' component={UniversityPassword} />
            <Route path='/UniversityIntake' component={UniversityIntake} />
            <Route path='/UniversityProfile' component={UniversityProfile} />
            <Route path='/UniversitySummary' component={Summary} />
            <Route path='/AllUniversity' component={AllUniversity} />

            <Route path='/UniveristyPage/:id' component={UniveristyPage} />

            <Route path='/AdminLogin' component={AdminLogin} />
            <Route path='/AdminDashboard' component={AdminDashboard} />
            <Route path='/AdminStudent' component={AdminStudent} />
            <Route path='/AdminAgent' component={AdminAgent} />
            <Route path='/AdminUniversity' component={AdminUniversity} />
            <Route path='/AdminCountry' component={AdminCountry} />
            <Route path='/AdminCountry' component={AdminCountry} />
            <Route path='/AdminStudy' component={AdminStudy} />
            <Route path='/AdminDashboard' component={AdminDashboard} />
            <Route path='/AdminApplication' component={AdminApplication} />
            <Route path='/AdminDocument' component={AdminDocument} />
            <Route path='/AdminScholarship' component={AdminScholarship} />

             


          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
