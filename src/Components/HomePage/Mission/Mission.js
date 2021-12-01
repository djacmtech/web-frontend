import React from "react";
import OurMission from './Mission_array';
import '../HomePage.css'

const Mission = () => {

  return <>
  <div className="ourMission">
  <h2>Our Mission</h2>
    <div className="ourMissionContainer">
      {
        OurMission.map(mission => {
          return <div className="mission">
            <div className="missionImgContainer">
              <img src={mission.image} className="missionImg" alt="missionImg"/>
            </div>
            <i>{mission.description}</i>
          </div>
        })
      }
    </div>
    </div>
  </>;
};

export default Mission;