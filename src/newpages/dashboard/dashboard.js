import React from 'react';
import './dashboard.scss'
import Chart from "../../components/chart/Chart";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h3 style={{paddingLeft:"15px"}}>
        Dashboard
      </h3>
      <Chart  title="Last 6 Months (Revenue)" aspect={6/ 1}/>
      <div className="notification-div">
        <div className="title-info">
          <h1>Welcome back Anna</h1>
          <p>You've learned 80% of your goal this week!<br/>Keep it up and improve your results!</p>
        </div>
        <img src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/main-banner/ai-development.png"/>
      </div>
<div className="courses1">
  <h4>Your courses</h4>
  <div className="item item4">
  <div className="item1">
    <h1>B2</h1>
  </div>
   <div className="text">
     <small>Business English</small>
     <div className="grammar">
       <span>Grammar</span>
     </div>
   </div>
  </div>

  <div className="item item2">
    <div className="item1 ">
      <h1>B2</h1>
    </div>
    <div className="text">
      <small>Business English</small>
      <div className="grammar">
        <span>Grammar</span>
      </div>
    </div>

  </div>
  <div className="item item3">
    <div className="item1 ">
      <h1>B2</h1>
    </div>
    <div className="text">
      <small>Business English</small>
      <div className="grammar">
        <span>Grammar</span>
      </div>
    </div>

  </div>

</div>
    </div>
  );
};

export default Dashboard;