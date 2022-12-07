import React from 'react';
import './home.scss'
import IndividualIntervalsExample from "../../bootstrap/carousel/carousel";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import SignLanguageIcon from '@mui/icons-material/SignLanguage';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

const Home = () => {
  return (
    <div id="home">
      <div className="home-container">
        <div className="carousel-home">
          <IndividualIntervalsExample/>
        </div>
        <div className="education-container">
          <div className="education-section">
            <div className="item1">
              <div className="text-education">
                <h1>WHO SAID EDUCATION WAS BORING?</h1>
                <h4>We play and learn</h4>
              </div>
            </div>
            <div className="item2">
              {/*<img*/}
              {/*  src="https://images.unsplash.com/photo-1527384025924-f30fc2ac98e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>*/}
            </div>
          </div>
          <div className="info-items">
            <div className="item item2">
              <AutoStoriesIcon style={{color: "white", fontSize: "50px"}}/>
              <h3>Learning</h3>
            </div>
            <div className="item item3">
              <TipsAndUpdatesIcon style={{color: "white", fontSize: "50px"}}/>
              <h3>Philosophy</h3>
            </div>
            <div className="item item4">
              <SignLanguageIcon style={{color: "white", fontSize: "50px"}}/>
              <h3>Practice</h3>
            </div>
            <div className="item item5">
              <SportsBasketballIcon style={{color: "white", fontSize: "50px"}}/>
              <h3>Games</h3>
            </div>
          </div>
        </div>
        <div className="kids-container">
          <h1>Kids Loved How We Treat Them</h1>
          <div className="black-line"></div>
          <p className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>

  );
};

export default Home;