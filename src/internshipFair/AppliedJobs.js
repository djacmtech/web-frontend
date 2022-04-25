import React, { useEffect, useState } from "react";
import { Button, Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { MdLocationPin } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { AiFillClockCircle } from "react-icons/ai";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const AppliedJobs = () => {

  var url = window.location.pathname.split('/')[2]
  const [jobApplied, setJobApplied] = useState([])

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Token 2f241d7c99fdd2ef5c8baf3417db8701abe53254");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  useEffect(()=> {
    fetch(`https://djacmdev.pythonanywhere.com/if/jobs/${url}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      setJobApplied(result)
    })
    .catch(error => console.log('error', error));
  }, [])

  return (
    <div style={{ backgroundColor: "#F8F8F8" }}>
      <center>
        <div
          style={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "36px",
            color: "black",
            paddingTop: "40px",
          }}
        >
          Applied Jobs : 3
        </div>
        <Box
          sx={{
            backgroundColor: "#F8F8F8",
            fontFamily: "Poppins",
            padding: { md: "4% 15%", sx: "2% 8%", xs: "1% 5%" },
          }}
        >
          {/* <Card sx={{ padding: "0% 2%" }}> */}
          {/* <CardContent> */}
          <Paper className="job-card" style={{ width: "100%" }}>
            <div>
              <div className="job-card-header">
                <span
                  style={{
                    color: "#187271",
                    fontSize: "2rem",
                    fontWeight: "600",
                    fontFamily: "Poppins",
                    lineHeight: "40px",
                  }}
                >
                  {" "}
                  {jobApplied.role}
                </span>
                <span
                  style={{
                    color: "#2D3748",
                    fontSize: "1.2rem",
                    fontWeight: "400",
                    fontFamily: "Poppins",
                  }}
                >
                  {" "}
                  {jobApplied.company_name}
                </span>
                <span> Location </span>
              </div>
              <div className="job-card-details">
                <div className="job-details-condition">
                  <div className="job-details-headings">
                    <MdLocationPin className="job-details-icon" />{" "}
                    <span style={{ color: "#2D3748" }}> MODE </span>
                  </div>
                  <p style={{ fontWeight: "500" }}>{jobApplied.WFH? "Online":"Offline"}</p>
                </div>
                <div className="job-details-condition">
                  <div className="job-details-headings">
                    <BiRupee className="job-details-icon" />{" "}
                    <span> MIN STIPEND </span>
                  </div>
                  <p style={{ fontWeight: "500" }}> {jobApplied.stipend_low_range} </p>
                </div>
                <div className="job-details-condition">
                  <div className="job-details-headings">
                    <AiFillClockCircle className="job-details-icon" />{" "}
                    <span> DURATION </span>
                  </div>
                  <p style={{ fontWeight: "500" }}>{jobApplied.duration}</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ color: "#187271", fontWeight: "600" }}>
                  {" "}
                  View details {">"}
                </p>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#187271",
                    textTransform: "none",
                    fontSize: "Poppins",
                    height: "2.2rem",
                  }}
                >
                  {" "}
                  <IoCheckmarkDoneCircleOutline
                    style={{ fontSize: "1.5rem", paddingRight: "0.5rem" }}
                  />
                  Applied
                </Button>
              </div>
            </div>
          </Paper>
          {/* </CardContent> */}
          {/* </Card> */}
        </Box>
      </center>
    </div>
  );
};

export default AppliedJobs;
