import './EventPage.css'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { Grid, Paper } from '@mui/material'

export default function EventCard(props) {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    const baseUrl = "http://djacmdev.pythonanywhere.com/"
    return (
        <div className="Card">
            <Grid container rowspacing={1} columnSpacing={{xs:0, sm:0}}>
                <Grid item xs={6}>
                    <Item>
                        <img src={baseUrl.concat(props.image)} alt="Event name" className="Images"/>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                    <div className="event_title"><center className='event_title_center'>{props.title}</center></div>
                    <p className='event_description'>{props.description}</p>
                    <p className="event_date">Join us on {props.date}</p>
                    <Link to={props.title}> <button className="event_knowmore">KNOW MORE</button> </Link>
                    </Item>
                </Grid>
            </Grid>
        </div>
    )
}