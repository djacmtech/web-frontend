import React, { useState } from "react";
import OurMission from "./Mission_array";
import "../HomePage.css";

const Mission = () => {
  return (
    <>
      <div className="ourMission">
        <h2>Our Mission</h2>
        <div className="ourMissionContainer">
          {OurMission.map((mission) => {
            if (mission.id < 4) {
              return (
                <div className="mission">
                  <div className="missionImgContainer">
                    <img src={mission.image} className="missionImg" />
                  </div>
                  <i>{mission.description}</i>
                </div>
              );
            } else {
              return (
                <div className="mission">
                  <div className="missionImgContainer">
                    <img src={mission.image} className="missionImg" />
                  </div>
                  <i>{mission.description}</i>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};
export default Mission;
