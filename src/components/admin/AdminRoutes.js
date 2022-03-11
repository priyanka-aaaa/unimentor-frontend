import Dashboard from './Dashboard';
import Student from './Student';
import Agent from './Agent';
import University from './University';
import Application from './Application';
import Document from './Document';
import Scholarship from './Scholarship';
import StudentApplication from './StudentApplication';
import ApplicationStep from './ApplicationStep';
import ViewApplication from './ViewStudentApplication'
import ApplicationView from './StudentApplicationView';





const AdminRoutes = [
  {
    upgrade: true,
    path: "/dashboard",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-alien-33",
    component: Dashboard,
    layout: "/admin",
  },

  {
    path: "/student",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Student,
    layout: "/admin",
  },
  {
    path: "/agent",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Agent,
    layout: "/admin",
  },
  {
    path: "/university",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: University,
    layout: "/admin",
  },
  {
    path: "/application",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Application,
    layout: "/admin",
  },
  {
    path: "/document",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Document,
    layout: "/admin",
  },
  {
    path: "/scholarship",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Scholarship,
    layout: "/admin",
  },
  {
    path: "/studentApplication",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: StudentApplication,
    layout: "/admin",
  }, 
  {
    path: "/applicationStep",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: ApplicationStep,
    layout: "/admin",
  }, 
  {
    path: "/viewApplication",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: ViewApplication,
    layout: "/admin",
  }, 
  {
    path: "/applicationView",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: ApplicationView,
    layout: "/admin",
  }, 

];
export default AdminRoutes;