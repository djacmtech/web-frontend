import React from "react";
import "./InternshipFair.css";
import stipend from "../Assets/stipend.png";

const FeaturesFair = () => {
  return (
    <div style={{paddingBottom:"20px"}}>
      <div style={{ paddingLeft: "50px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="featuresHead">OPPORTUNITIES</div>
          <span className="featuresSpan"></span>
        </div>
        <div className="featuresContent">
          The internship can be scheduled between June and July for one month of
          full-time work.
        </div>
      </div>
      <div style={{ justifyContent: "right", paddingLeft: "750px" }}>
        <div className="featuresHead">GROWTH</div>
        <div className="featuresContent">
          The internship can be scheduled between June and July for one month of
          full-time work.
        </div>
      </div>
      <div style={{ paddingLeft: "50px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
         <img src={stipend} style={{height:"150px", width:"150px"}}alt=""/>
          <div className="featuresHead" style={{paddingLeft:"50px"}}>STIPEND</div>
        </div>
        <div className="featuresContent" style={{paddingLeft:"200px"}}>
          The internship can be scheduled between June and July for one month of
          full-time work.
        </div>
      </div>
    </div>
  );
};

export default FeaturesFair;
