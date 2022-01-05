
import './App.css';
import Studentlogin from './components/Studentlogin';
import Studentregister from './components/Studentregister';
import StudentDashboard from './components/StudentDashboard';
import Home from './components/Home';
import StudentForgotPassword from './components/StudentForgotPassword';
import StudentPersonalInformation from './components/StudentPersonalInformation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>





      <Router>
        <div>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/Studentlogin'} className="nav-link">Student Login</Link></li>
              <li><Link to={'/Studentregister'} className="nav-link">Student Register</Link></li>
              <Link to={'/StudentDashboard'}></Link>
              {/* <Link to={'/StudentPersonalInformation'}></Link> */}
              
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Studentlogin' component={Studentlogin} />
            <Route path='/Studentregister' component={Studentregister} />
            <Route path='/StudentDashboard' component={StudentDashboard} />
            <Route path='/StudentPersonalInformation' component={StudentPersonalInformation} />
            <Route path='/StudentForgotPassword' component={StudentForgotPassword} />
          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
