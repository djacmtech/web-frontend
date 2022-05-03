import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { MdLocationPin } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { AiFillClockCircle } from "react-icons/ai";

export default function JobCard() {
  return (
    <>
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
              Job Position{" "}
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
              Company Name{" "}
            </span>
            <span> Location </span>
          </div>
          <Grid container>
            <Grid item md={8}>
              <div className="job-card-details">
                <div className="job-details-condition">
                  <div className="job-details-headings">
                    <MdLocationPin className="job-details-icon" />{" "}
                    <span style={{ color: "#2D3748" }}> MODE </span>
                  </div>
                  <p style={{ fontWeight: "500", paddingLeft:"3rem" }}> Online </p>
                </div>
                <div className="job-details-condition">
                  <div className="job-details-headings">
                    <BiRupee className="job-details-icon" />{" "}
                    <span> MIN STIPEND </span>
                  </div>
                  <p style={{ fontWeight: "500" }}> 3000 </p>
                </div>
                <div className="job-details-condition">
                  <div className="job-details-headings">
                    <AiFillClockCircle className="job-details-icon" />{" "}
                    <span> DURATION </span>
                  </div>
                  <p style={{ fontWeight: "500", paddingLeft:"2.5rem" }}> 3 months </p>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid item md={4}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  color: "#187271",
                  fontWeight: "600",
                  textAlign: "right",
                }}
              >
                {" "}
                View Details{" "}
              </p>
            </div>
          </Grid>
        </div>
      </Paper>
    </>
  );
}
