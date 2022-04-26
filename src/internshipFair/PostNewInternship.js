import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { Button } from "@mui/material";
import JobProfileCards from "./JobProfileCards.js";
import { Link } from 'react-router-dom';
const PostNewInternship = () => {
  return (
    <div
      style={{ padding: "4% 11%", backgroundColor: "white", color: "black" }}
    >
      <h2 className="aplHead">Post new job profile</h2>
      <ul style={{ marginBlockStart: "0" }}>
        <li>
          The internship can be scheduled between June and July for one month of
          full-time work. The internship can be scheduled between June and July
          for one month of full-time work.
        </li>
        <li>
          The internship can be scheduled between June and July for one month of
          full-time work. The internship can be scheduled between June and July
          for one month of full-time work.
        </li>
      </ul>
      <Link to='/postinternship'>

        <Button
          style={{
            backgroundColor: "#187271",
            color: "#FFFFFF",
            fontSize: "18px",
            marginTop: "20px",
            padding: "10px",
            textTransform: "none",
            fontFamily: "Poppins",
            paddingLeft: "28px",
            paddingRight: "28px",
          }}
        >
          Post new{" "}
          <CgArrowLongRight style={{ fontSize: "1.8rem", paddingLeft: "1rem" }} />
        </Button>
      </Link>
      <h2 className="aplHead">Post new job profile</h2>
      <JobProfileCards />
    </div>
  );
};

export default PostNewInternship;
