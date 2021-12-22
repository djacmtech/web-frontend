import React from 'react'
import './HomePage.css'
import OurEvents from "./Event";
import { Grid, Box } from "@mui/material";



function Events() {
    return (
        <div className='esd'>
            <div className="eventsForSmallDevices">
                <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 'bolder', marginBottom: '2%' }}>Our Events</h2>
                <Grid container sx={{ width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} spacing={5} >
                    {
                        OurEvents.map(event => {
                            return <>
                                <Grid item md={3} xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className="eventCard">
                                        <img src={event.image} className="eventImg" alt="eventImg" />
                                        <h4 className="eventName">{event.tag}</h4>
                                    </div>
                                </Grid>
                            </>
                        })
                    }
                </Grid>
            </div>
        </div>
    )
}

export default Events
