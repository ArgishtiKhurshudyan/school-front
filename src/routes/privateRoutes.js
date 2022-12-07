import {Navigate} from "react-router-dom";
import AboutUs from "../pages/aboutUs/aboutUs";
import News from "../pages/news/news";
import Teacher from "../newpages/teacher/teacher";
import Dashboard from "../newpages/dashboard/dashboard";
import Room from "../pages/class/room";

const routes = [
  {
    id: 1,
    key: "dashboard",
    path: '/dashboard',
    component: <Dashboard/>,
    permissions: []
  },
  {
    id: 2,
    key: "teacher",
    path: '/teacher',
    component: <Teacher/>,
    permissions: []
  },
  {
    id: 3,
    key: "about",
    path: '/about',
    component: <AboutUs/>,
    permissions: []
  },
  {
    id: 4,
    key: 'news',
    path: '/news',
    component: <News/>,
    permissions: []
  },
  {
    id: 5,
    key: 'room',
    path: '/room',
    component: <Room/>,
    permissions: []
  },

  {
    id: 6,
    path: '*',
    component: <Navigate to="/" replace/>,
    permissions: []
  },

]

export default routes