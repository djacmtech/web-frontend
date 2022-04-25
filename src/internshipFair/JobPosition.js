import React, { useEffect, useState } from "react";
import { Box, Grid, Button, Divider, Card, CardContent } from "@mui/material";
import { VscGlobe } from "react-icons/vsc";
import "./InternshipFair.css";
import { MdLocationPin } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { AiFillClockCircle } from "react-icons/ai";

const JobPosition = () => {

  var url = window.location.pathname.split('/')[2]
  const [jobDetails, setJobDetails] = useState([])

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
      setJobDetails(result)
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
          {jobDetails.role}
        </div>
      </center>
      <Box
        sx={{
          backgroundColor: "#F8F8F8",
          fontFamily: "Poppins",
          padding: { md: "4% 15%", sx: "2% 8%", xs: "1% 5%" },
        }}
      >
        <Card sx={{ padding: "0% 2%" }}>
          <CardContent>
            <div>
              <div className="job-card-header">
                <span
                  style={{
                    color: "#187271",
                    fontSize: "2rem",
                    fontWeight: "600",
                    fontFamily: "Poppins",
                    lineHeight:"40px",
                    paddingTop:"1.5rem"
                  }}
                >
                  {jobDetails.role}
                </span>
                <span
                  style={{
                    color: "#2D3748",
                    fontSize: "1.2rem",
                    fontWeight: "400",
                    fontFamily: "Poppins",
                  }}
                >
                  {jobDetails.company_name}
                </span>
                <span> Location </span>
              </div>
              <div className="job-card-details" style={{justifyContent:"left"}}>
                <div className="job-details-condition">
                  <div className="job-details-headings">
                    <MdLocationPin className="job-details-icon" />{" "}
                    <span style={{ color: "#2D3748" }}> MODE </span>
                  </div>
                  <p style={{ fontWeight: "500" }}> {jobDetails.WFH? "Online":"Offline"} </p>
                </div>
                <div className="job-details-condition">
                  <div className="job-details-headings">
                    <BiRupee className="job-details-icon" />{" "}
                    <span> MIN STIPEND </span>
                  </div>
                  <p style={{ fontWeight: "500" }}> {jobDetails.stipend_low_range} </p>
                </div>
                <div className="job-details-condition">
                  <div className="job-details-headings">
                    <AiFillClockCircle className="job-details-icon" />{" "}
                    <span> DURATION </span>
                  </div>
                  <p style={{ fontWeight: "500" }}> {jobDetails.duration} </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
              </div>
            </div>
            <Divider style={{ paddingTop: "2rem" }}></Divider>
            <div>
              <div className="jobtitle" style={{ paddingTop: "2rem" }}>
                About the Company
              </div>
              <div>
                {jobDetails.job_description}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                padding: "1.5rem 1.5rem 1rem 1.5rem",
                color: "#187271",
                fontWeight: "600",
              }}
            >
              <div style={{ display: "flex", paddingRight: "1.5rem" }}>
                <div style={{ padding: "0.3rem" }}>
                  <VscGlobe style={{ fontSize: "1.5rem" }} />
                </div>
                <div style={{ paddingTop: "0.3rem" }}>www.abcd.com</div>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ padding: "0.3rem" }}>
                  <VscGlobe style={{ fontSize: "1.5rem" }} />
                </div>
                <div style={{ paddingTop: "0.3rem" }}>linkedin?</div>
              </div>
            </div>
            <div style={{ paddingBottom: "1.5rem" }}>
              <div className="jobtitle">Job Description</div>
              <div>
                {jobDetails.job_description}
              </div>
            </div>
            <div style={{ paddingBottom: "1rem" }}>
              <div className="jobtitle">Who can apply?</div>
              <div>Only those candidates can apply who:</div>
              <ol type="1" style={{ paddingInlineStart: "18px" }}>
                <li>are available for the work from home job/internship</li>
                <li>
                  can start the work from home job/internship between 1st Apr'22
                  and 6th May'22
                </li>
                <li>are available for duration of 2 months</li>
                <li>have relevant skills and interests</li>
              </ol>
            </div>
            <div style={{ paddingBottom: "1rem" }}>
              <div className="jobtitle">Skills</div>
              <div className="skills">abcd</div>
            </div>
            <div style={{ paddingBottom: "1rem" }}>
              <div className="jobtitle">Perks</div>
              <ol
                type="1"
                style={{ paddingInlineStart: "18px", marginBlockStart: "0" }}
              >
                <li>are available for the work from home job/internship</li>
                <li>
                  can start the work from home job/internship between 1st Apr'22
                  and 6th May'22
                </li>
                <li>are available for duration of 2 months</li>
                <li>have relevant skills and interests</li>
              </ol>
            </div>
            <Grid item xs={12}>
              <Button
                sx={{
                  width: "100%",
                  backgroundColor: "rgba(24, 114, 113, 1)",
                  borderRadius: "4px",
                  color: "white",
                  border: "2px solid white",
                  height: "50px",
                  textTransform: "none",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "rgba(24, 114, 113, 1)",
                    backgroundColor: "rgba(24, 114, 113, 0.4)",
                    border: "2px solid rgba(24, 114, 113, 1)",
                  },
                }}
                type="submit"
              >
                ADD TO CART
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default JobPosition;