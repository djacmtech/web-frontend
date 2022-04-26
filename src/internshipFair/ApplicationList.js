import React from "react";
import CustomizedTables from "./AplTable";

const ApplicationList = () => {
  return (
    <div
      style={{ padding: "4% 11%", backgroundColor: "white", color: "black" }}
    >
      <h2 className="aplHead">IF Application List</h2>

      <div className="aplWarn">
        Note: The internship can be scheduled between June and July for one
        month of full-time work. The internship can be scheduled between June
        and July for one month of full-time work.{" "}
      </div>
      <br />
      <CustomizedTables />
    </div>
  );
};

export default ApplicationList;
