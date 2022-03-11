import Dashboard from './Dashboard';


import ApplicationProfile from './ApplicationProfile';
import Profile from './Profile';
import Document from './Document';
import Bookmark from './Bookmark';
import Setting from './Setting';
const StudentRoutes = [
  {
    upgrade: true,
    path: "/dashboard",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-alien-33",
    component: Dashboard,
    layout: "/student",
  },

  {
    path: "/applicationProfile",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: ApplicationProfile,
    layout: "/student",
  },
 
  {
    path: "/profile",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Profile,
    layout: "/student",
  },
  {
    path: "/document",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Document,
    layout: "/student",
  },
  {
    path: "/bookmark",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Bookmark,
    layout: "/student",
  }, 
  {
    path: "/setting",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Setting,
    layout: "/student",
  }, 
];
export default StudentRoutes;