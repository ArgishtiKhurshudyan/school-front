import React from 'react';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/aboutUs/aboutUs";
import News from "./pages/news/news";
import ContactUs from "./pages/contact/contactUs";
import Home from "./pages/home/home";

const Public = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <AboutUs/>
      <News/>
      <ContactUs/>
      <Footer/>
    </>
  );
};

export default Public;