import "./EventPage.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function EventCard(props) {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const baseUrl = "http://137.135.78.87:8080/media";
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ padding: "100px" }}
      spacing={2}
    >
      <Grid item xs={12} sm={12} md={6}>
        <Item style={{ backgroundColor: "#0A0E2A" }}>
          <img
            src={baseUrl.concat(props.image)}
            alt="Event name"
            width="70%"
            // className="Images"
          />{" "}
        </Item>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Item style={{ backgroundColor: "#0A0E2A" }}>
          <p className="event_title_center">{props.title}</p>
          <p className="event_description">{props.description}</p>
          {/* {props.about} <br/> */}
          <p className="event_date">{props.date}</p>
          <Link style={{textDecoration:'none'}} to={`/Events/${props.title}`}>
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
    </Grid>
  );
}
