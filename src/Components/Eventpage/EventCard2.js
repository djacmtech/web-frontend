import "./EventPage.css";
import { Grid } from "@mui/material";

export default function EventCard2(props) {
  const baseUrl = "http://djacmdev.pythonanywhere.com/";
  return (
    <div className="Card">
      <Grid container spacing={0}>
        <Grid item md={8} xs={12}>
          <div className="Event2-Content">
            <p className="Content2">
              <div className="event_title">
                <center className="event_title_center">{props.title}</center>
              </div>
              <p className="event_description">{props.description}</p>
              {/* {props.about} <br/> */}
              <p className="event_date">{props.date}</p>
              <button className="event_knowmore">KNOW MORE</button>
            </p>
          </div>
        </Grid>
        <Grid item md xs={12}>
          <div className="event2_img_div">
            <div className="Event2-Image" key={props.id}>
              <img
                src={baseUrl.concat(props.image)}
                alt="Event name"
                className="Images"
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
