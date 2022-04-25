import React from "react";
import "./InternshipFair.css";
import stipend from "../Assets/stipend.png";

const FeaturesFair = () => {
  return (
    <div style={{padding:"50px 0 150px 60px"}} className="featuresfair">
      <div style={{ paddingLeft: "50px" }} className="feature">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="featuresHead">OPPORTUNITIES</div>
          <span className="featuresSpan"></span>
        </div>
        <div className="featuresContent">
          The internship can be scheduled between June and July for one month of
          full-time work.
        </div>
      </div>
      <div className="growth">
        <div className="featuresHead">GROWTH</div>
        <div className="featuresContent">
          The internship can be scheduled between June and July for one month of
          full-time work.
        </div>
      </div>
      <div style={{ paddingLeft: "50px" }} className="feature">
        <div style={{ display: "flex", alignItems: "center" }}>
         <img src={stipend} alt="" className="stipendImg"/>
          <div className="StipendHead">STIPEND</div>
        </div>
        <div className="StipendContent">
          The internship can be scheduled between June and July for one month of
          full-time work.
        </div>
      </div>
    </div>
  );
};

export default FeaturesFair;
