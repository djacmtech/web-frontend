import React, { useState, useEffect } from 'react'
import './HomePage.css'
import { Grid } from "@mui/material";
import axios from 'axios';


function Events() {
    const baseUrl = "https://djacmdev.pythonanywhere.com/media";
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
    })

    return (
        <div className='esd'>
            <div className="eventsForSmallDevices">
                <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 'bolder', marginBottom: '2%' }}>Our Events</h2>
                <Grid container sx={{ width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} spacing={5} >
                    {
                        OurEvents2.map(event => {
                            return <>
                                <Grid item md={3} xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className="eventCard">
                                        <img src={baseUrl.concat(event.image)} className="eventImg" alt="eventImg" />
                                        <h4 className="eventName">{event.title}</h4>
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
