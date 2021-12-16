import "./EventPage.css";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function EventCard(props) {

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  const baseUrl = "http://djacmdev.pythonanywhere.com/";
  return (
      <Grid container justifyContent="center" alignItems="center" style={{padding:'100px'}} spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
            <Item style={{backgroundColor:'#0A0E2A'}}> <img src={baseUrl.concat(props.image)} alt="Event name" className="Images"/> </Item>  
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Item style={{backgroundColor:'#0A0E2A'}}>
              <p className="event_title_center">{props.title}</p>
              <p className="event_description">{props.description}</p>
              {/* {props.about} <br/> */}
              <p className="event_date">{props.date}</p>
              {/* <button className="event_knowmore">KNOW MORE</button> */}
          </Item>
        </Grid>
      </Grid>
);
}

