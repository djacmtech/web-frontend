import React, { useState, useEffect } from 'react'
import './HomePage.css'
import { Grid } from "@mui/material";
import axios from 'axios';


function Events() {
    const [OurEvents2, setOurEvents2] = useState([]);

    useEffect(() => {
        axios
            .get("https://djacmdev.pythonanywhere.com/api/events/")
            .then((res) => {
                // console.log(res.data);
                setOurEvents2(res.data.slice(0, 4))
                console.log(OurEvents2);
            })
            .catch((e) => {
                console.log(e);
            });
            // eslint-disable-next-line
    }, [])

    return (
        <div className='esd'>
            <div className="eventsForSmallDevices">
                <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 'bolder', marginBottom: '2%' }}>Our Events</h2>
                <Grid container sx={{ width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} spacing={5} >
                    {
                        OurEvents2.map((event, index) => {
                            return <div key={index}>
                                <Grid item md={3} xs={12} sm={12} key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div key={index} className="eventCard">
                                        <img src={event.image.slice(0,-15)} className="eventImg" alt={index} />
                                        <h4 className="eventName" key={index}>{event.title}</h4>
                                    </div>
                                </Grid>
                            </div>
                        })
                    }
                </Grid>
            </div>
        </div>
    )
}

export default Events
