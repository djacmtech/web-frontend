import { Grid } from '@mui/material'
import React from 'react'
import './Loc.css'

function Timeline() {
    return (
        <div id='Timeline' style={{ backgroundColor: '#001521' }}>
            <div className="timeline" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column', marginBottom: '4%' }}>
                <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '5%', marginBottom: '2%', fontFamily:"Righteous" }} className='prizesHeading'>Timeline</h1>
                <div className='timeStamps' >
                    <div style={{ width: '100%', marginTop: '15px' }}>
                        <Grid container className='timelineGrid'  >
                            <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ padding: '2px', backgroundColor: '#3770FF', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>1</div>
                            </Grid>
                            <Grid item md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p>8th Feb</p></Grid>
                            <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p> - </p></Grid>
                            <Grid item md={5} ><p>Registration Begins</p></Grid>
                        </Grid>
                    </div>
                    <div style={{ width: '100%', marginTop: '15px' }}>
                        <Grid container className='timelineGrid' >
                            <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ padding: '2px', backgroundColor: '#3770FF', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</div>
                            </Grid>
                            <Grid item md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p>8th Feb</p></Grid>
                            <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p> - </p></Grid>
                            <Grid item md={5} ><p>Registration Ends</p></Grid>
                        </Grid>
                    </div>
                    <div style={{ width: '100%', marginTop: '15px' }}>
                        <Grid container className='timelineGrid' >
                            <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ padding: '2px', backgroundColor: '#3770FF', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>3</div>
                            </Grid>
                            <Grid item md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p>8th Feb</p></Grid>
                            <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p> - </p></Grid>
                            <Grid item md={5} ><p>Shortlisted Teams Out</p></Grid>
                        </Grid>
                    </div>
                    <div style={{ width: '100%', marginTop: '15px' }}>
                        <Grid container className='timelineGrid' >
                            <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ padding: '2px', backgroundColor: '#3770FF', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>4</div>
                            </Grid>
                            <Grid item md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p>8th Feb</p></Grid>
                            <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p> - </p></Grid>
                            <Grid item md={5} ><p>Hack Day</p></Grid>
                        </Grid>
                    </div>
                    <div style={{ width: '100%', marginTop: '15px', marginBottom: '7%' }}>
                        <Grid container className='timelineGrid' >
                            <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ padding: '2px', backgroundColor: '#3770FF', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>5</div>
                            </Grid>
                            <Grid item md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p>8th Feb</p></Grid>
                            <Grid item md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p> - </p></Grid>
                            <Grid item md={5} ><p>Price Distribution</p></Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline
