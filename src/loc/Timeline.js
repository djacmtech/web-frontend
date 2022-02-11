import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import './Loc.css'
import Aos from "aos";
import "aos/dist/aos.css";

function Timeline() {

    useEffect(() => {
        Aos.init({ duration: 1000, once:true });
      }, []);

    return (
        <div id='Timeline' style={{ backgroundColor: '#001521' }}>
            <div className="timeline" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column', marginBottom: '4%' }}>
                <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '5%', marginBottom: '2%', fontFamily:"Righteous" }} className='prizesHeading' data-aos="fade-left">Timeline</h1>
                <div className='timeStamps' >
                    <div style={{ width: '100%', marginTop: '15px' }}>
                        <div data-aos="fade-right">
                        <Grid container className='timelineGrid'  >
                            <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ padding: '2px', backgroundColor: '#3770FF', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>1</div>
                            </Grid>
                            <Grid item md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p>24th Feb</p></Grid>
                            <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p> - </p></Grid>
                            <Grid item md={5} ><p>Registrations open</p></Grid>
                        </Grid>
                        </div>
                    </div>
                    <div style={{ width: '100%', marginTop: '15px' }}>
                    <div data-aos="fade-left">
                        <Grid container className='timelineGrid' >
                            <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ padding: '2px', backgroundColor: '#3770FF', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</div>
                            </Grid>
                            <Grid item md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p>5th March</p></Grid>
                            <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p> - </p></Grid>
                            <Grid item md={5} ><p>Registrations end</p></Grid>
                        </Grid>
                        </div>
                    </div>
                    <div style={{ width: '100%', marginTop: '15px' }}>
                    <div data-aos="fade-right">
                        <Grid container className='timelineGrid' >
                            <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ padding: '2px', backgroundColor: '#3770FF', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>3</div>
                            </Grid>
                            <Grid item md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p>9th March</p></Grid>
                            <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p> - </p></Grid>
                            <Grid item md={5} ><p>Shortlisted Teams announced</p></Grid>
                        </Grid>
                        </div>
                    </div>
                    <div style={{ width: '100%', marginTop: '15px' }}>
                    <div data-aos="fade-left">
                        <Grid container className='timelineGrid' >
                            <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ padding: '2px', backgroundColor: '#3770FF', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>4</div>
                            </Grid>
                            <Grid item md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p>12th March</p></Grid>
                            <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p> - </p></Grid>
                            <Grid item md={5} ><p>Hack Day</p></Grid>
                        </Grid>
                        </div>
                    </div>
                    <div style={{ width: '100%', marginTop: '15px', marginBottom: '7%' }}>
                    <div data-aos="fade-right">
                        <Grid container className='timelineGrid' >
                            <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ padding: '2px', backgroundColor: '#3770FF', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>5</div>
                            </Grid>
                            <Grid item md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p>13th March</p></Grid>
                            <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p> - </p></Grid>
                            <Grid item md={5} ><p>Judging and closing cerermony</p></Grid>
                        </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline
