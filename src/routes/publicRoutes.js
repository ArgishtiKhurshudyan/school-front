import {Navigate} from "react-router-dom";
import Home from "../pages/home/home";
import ContactUs from "../pages/contact/contactUs";
import AboutUs from "../pages/aboutUs/aboutUs";
import News from "../pages/news/news";

const routes = [
  {
    id: 1,
    key: "home",
    path: '/',
    component: <Home/>,
    permissions: []
  },
  {
    id: 2,
    key: "contact",
    path: '/contact',
    component: <ContactUs/>,
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
    path: '*',
    component: <Navigate to="/" replace/>,
    permissions: []
  },

]

export default routes