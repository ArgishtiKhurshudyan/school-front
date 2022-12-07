import React from 'react';
import "./news.scss"
import Button from 'react-bootstrap/Button';
import  imgBoy from "../../assets/Capture.PNG"

const News = () => {
  return (
    <div className="news-container" id="news">
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="news">
        <h3>News</h3>
        <h1>Best Pre School Education!</h1>
        <div className="info-news">
          <div className="item item1">
            <div className="text">
              <h2>Funny and Happy</h2>
              <span>We are group of teachers who really love children and enjoy every moment</span>
            </div>
            <div className="text">
              <h2>Fulfill With Love</h2>
              <span>We are group of teachers who really love children and enjoy every moment</span>
            </div>
            <div className="text">
              <h2>Special Education</h2>
              <span>We are group of teachers who really love children and enjoy every moment</span>
            </div>
          </div>
          <div className="item">
            <img style={{width: "390px"}}
                 src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/25653f39d33452fc8389e6c0/561dd25d5211ef5968fea940105750c6.jpg"/>
          </div>
          <div className="item item2">
            <div className="text">
              <h2>Professional Teaching</h2>
              <span>We are group of teachers who really love children and enjoy every moment</span>
            </div>
            <div className="text">
              <h2>Fully Equipped</h2>
              <span>We are group of teachers who really love children and enjoy every moment</span>
            </div>
            <div className="text">
              <h2>Transportation</h2>
              <span>We are group of teachers who really love children and enjoy every moment</span>
            </div>
          </div>
        </div>
      </div>
      <div className="facility-container">
        <h2>Facility</h2>
        <h1>Make your Children's life Special</h1>
        <div className="info">
          <div className="item item-img">
            {/*<img src="https://www.freeiconspng.com/thumbs/kids-png/kids-girl-png-4.png"/>*/}
            <img src={imgBoy}/>
          </div>
          <div className="item item-text">
           <div className="title-text">
             <h1>Relaxation and comfort</h1>
             <p>
               Set up in 2000, Medicare is arranged in a wonderfully protected, Landmark Building.
               Phallus sceneries sed leo quits gravid. Fuse loris libero ut arc bandit praetor.
             </p>
             <Button variant="secondary">Secondary</Button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;