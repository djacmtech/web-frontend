import "./EventPage.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MdExpandMore } from "react-icons/md";
export default function EventCard(props) {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const baseUrl = "https://djacmdev.pythonanywhere.com/media";
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ padding: "40px" }}
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
          <Accordion style={{ backgroundColor: "#000324" }}>
            <AccordionSummary
              expandIcon={<MdExpandMore style={{color:'white'}} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
                  <p className="event_title_center">{props.title}</p>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="event_description">{props.description}</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <p className="event_date">{props.date}</p>
          <Link
            style={{ textDecoration: "none" }}
            to={`/events/${props.title}`.toLowerCase()}
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
    </Grid>
  );
}
