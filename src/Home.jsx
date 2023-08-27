import React from "react";
import { BsEye, BsCart, BsChatDots, BsPeople } from "react-icons/bs";
import Areachart from './assets/single-area.png'
import Linechart from './assets/linechart.jpg'

const Home = () => {
  return (
    <main className="main-container">
      <div className="home-header">
        <p>
          DashBoard <span>Summary of your App</span>
        </p>
      </div>
      <div className="home-path">
        <p>
          <span>Home</span>/ <span>Library</span>/Data
        </p>
      </div>
      <div className="home-list">
        <div className="home-list-container">
          <div className="home-icon-div firstDiv">
            <BsEye className="home-icon" />
          </div>
          <p>8,457</p>
          daily Visit
        </div>
        <div className="home-list-container">
          <div className="home-icon-div secondDiv">
            <BsCart className="home-icon" />
          </div>
          <p>52,160</p>
          sales
        </div>
        <div className="home-list-container">
          <div className="home-icon-div thirdDiv">
            <BsChatDots className="home-icon" />
          </div>
          <p>15,832</p>
          comments
        </div>
        <div className="home-list-container">
          <div className="home-icon-div fourthDiv">
            <BsPeople className="home-icon"/>
          </div>
          <p>36,753</p>
          No. of visits
        </div>
      </div>
      <div className="imageContainer">
        <div className="images">
            Area chart
            <img src={Areachart} alt="" />
        </div>
        <div className="images">
            Line Chart
            <img src={Linechart} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Home;
