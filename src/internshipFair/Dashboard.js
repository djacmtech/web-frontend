import InterNavbar from "./InterNavbar";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import { MdLocationPin } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { AiFillClockCircle } from "react-icons/ai";
import axios from "axios";
import Swal from "sweetalert2";

export default function Dashboard() {
  const [job, setJob] = useState([]);

  const [companies, setCompanies] = useState([]);
  const [count, setCount] = useState(0);

  const token = localStorage.getItem("token");

  const addCompany = (id) => {
    Swal.fire({
      icon: 'success',
      title: 'ADDED TO THE CART',
      footer: `<a href="/cart">Check out the cart</a>`
    })
    let filteredCompany = job.filter((singleJob) => singleJob.id === id)
    setCount(count + 1)
    setCompanies([...companies, filteredCompany])
    var FormData = require('form-data');
    var data = new FormData();
    data.append('job', `${id}`);

    var config = {
      method: 'post',
      url: 'https://djacmdev.pythonanywhere.com/if/cart',
      headers: {
        'Authorization': `Token ${token}`
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  localStorage.setItem("CartCompanies", JSON.stringify(companies));

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${token}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    fetch("https://djacmdev.pythonanywhere.com/if/list", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setJob(result);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <InterNavbar />

      <Grid
        container
        spacing={0}
        style={{ padding: "4% 10% 20% 10%", backgroundColor: "#E5E5E5" }}
      >
        <center>

          <p
            style={{
              textAlign: 'center',
              backgroundColor: "#E5E5E5",
              color: "#2D3748",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >

            Student Dashboard
          </p>
        </center>
        <Grid md={0} style={{ paddingInline: "3%" }}>
          <p
            style={{
              paddingInline: "10%",
              backgroundColor: "#E5E5E5",
              color: "#2D3748",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >

            {/* Student Dashboard */}
          </p>
          {/* <Filter /> */}
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          {job.map((items) => (
            <Paper className="job-card">
              <div>
                <div className="job-card-header">
                  <span
                    style={{
                      color: "#187271",
                      fontSize: "1.8rem",
                      fontWeight: "600",
                      fontFamily: "Poppins",
                    }}
                  >
                    {items.role}
                  </span>
                  <span
                    style={{
                      color: "#2D3748",
                      fontSize: "1rem",
                      fontWeight: "400",
                      fontFamily: "Poppins",
                    }}
                  >
                    {items.company_name}
                  </span>
                  {/* <span> Location </span> */}
                </div>
                <div className="job-card-details">
                  <div className="job-details-condition">
                    <div className="job-details-headings">
                      <MdLocationPin className="job-details-icon" />
                      <span style={{ color: "#2D3748" }}> MODE </span>
                    </div>
                    <p style={{ fontWeight: "500" }}>
                      {items.WFH ? "Online" : "Offline"}
                    </p>
                  </div>
                  <div className="job-details-condition">
                    <div className="job-details-headings">
                      <BiRupee className="job-details-icon" />
                      <span> MIN STIPEND </span>
                    </div>
                    <p style={{ fontWeight: "500" }}>
                      {items.stipend_low_range}
                    </p>
                  </div>
                  <div className="job-details-condition">
                    <div className="job-details-headings">
                      <AiFillClockCircle className="job-details-icon" />
                      <span> DURATION </span>
                    </div>
                    <p style={{ fontWeight: "500" }}> {items.duration} </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#187271",
                      textTransform: "none",
                      fontSize: "Poppins",
                      height: "2.2rem",
                      "&:hover": {
                        color: "rgba(24, 114, 113, 1)",
                        backgroundColor: "rgba(24, 114, 113, 0.4)",
                        border: '2px solid rgba(24, 114, 113, 1)'
                      }
                    }}
                    onClick={() => addCompany(items.id)}
                  >
                    Add to cart
                  </Button>
                  {/* </Link> */}
                  <Button
                    variant="text"
                    href={`/jobposition/${items.id}`}
                    style={{ color: "#187271", fontWeight: "600" }}
                  >

                    View Details
                  </Button>
                </div>
              </div>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
