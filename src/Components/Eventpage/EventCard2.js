import "./EventPage.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
export default function EventCard2(props) {
  const baseUrl = "http://djacmdev.pythonanywhere.com/";

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      style={{ padding: "100px" }}
    >
      <Grid item xs={12} sm={12} md={6}>
        <Item style={{ backgroundColor: "#0A0E2A" }}>
          <p className="event_title_center">{props.title}</p>
          <p className="event_description">{props.description}</p>
          {/* {props.about} <br/> */}
          <p className="event_date">{props.date}</p>
          <Link
            style={{ textDecoration: "none" }}
            to={`/Events/${props.title}`}
          >
            <Button
              variant="contained"
              size="large"
              style={{ backgroundColor: "#BA2808" }}
            >
              Know More
            </Button>
          </Link>
        </Item>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <center>
          {" "}
          <img
            src={baseUrl.concat(props.image)}
            alt="Event name"
            className="Images"
          />{" "}
        </center>
        {/* <Item style={{backgroundColor:'#201E45'}}>  </Item>   */}
      </Grid>
    </Grid>
  );
}
