import { Grid } from '@mui/material'
import React from 'react'
import './Loc.css'

function Timeline() {
    return (
        <div id='Timeline' style={{ backgroundColor: '#001521' }}>
            <div className="timeline" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column', marginBottom: '4%' }}>
                <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '5%', marginBottom: '2%', fontFamily: "Righteous" }} className='prizesHeading' data-aos="fade-right">Timeline</h1>
                <div className='timeStamps' >
                    <div style={{ width: '100%', marginTop: '15px' }}>
                        <div data-aos="fade-up">
                            <Grid container className='timelineGrid'  >
                                <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
                                    <div className='balls'>1</div>
                                </Grid>
                                <Grid item md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p>25th February</p></Grid>
                                <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p> - </p></Grid>
                                <Grid item md={5} ><p>Registrations open</p></Grid>
                            </Grid>
                        </div>
                    </div>
                    <div style={{ width: '100%', marginTop: '15px' }}>
                        <div data-aos="fade-up">
                            <Grid container className='timelineGrid' >
                                <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
                                    <div className='balls' >2</div>
                                </Grid>
                                <Grid item md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p>6th March</p></Grid>
                                <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p> - </p></Grid>
                                <Grid item md={5} ><p>Registrations end</p></Grid>
                            </Grid>
                        </div>
                    </div>
                    <div style={{ width: '100%', marginTop: '15px' }}>
                        <div data-aos="fade-up">
                            <Grid container className='timelineGrid' >
                                <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
                                    <div className='balls'>3</div>
                                </Grid>
                                <Grid item md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p>9th March</p></Grid>
                                <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p> - </p></Grid>
                                <Grid item md={5} ><p>Shortlisted teams announced</p></Grid>
                            </Grid>
                        </div>
                    </div>
                    <div style={{ width: '100%', marginTop: '15px' }}>
                        <div data-aos="fade-up">
                            <Grid container className='timelineGrid' >
                                <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
                                    <div className='balls'>4</div>
                                </Grid>
                                <Grid item md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p>12th March</p></Grid>
                                <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p> - </p></Grid>
                                <Grid item md={5} ><p>Hack Day</p></Grid>
                            </Grid>
                        </div>
                    </div>
                    <div style={{ width: '100%', marginTop: '15px', marginBottom: '7%' }}>
                        <div data-aos="fade-up">
                            <Grid container className='timelineGrid' >
                                <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
                                    <div className='balls'>5</div>
                                </Grid>
                                <Grid item md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p>13th March</p></Grid>
                                <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p> - </p></Grid>
                                <Grid item md={5} ><p>Judging and Closing Ceremony</p></Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline