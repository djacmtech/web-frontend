import { Grid } from '@mui/material'
import React from 'react'
import './Loc.css'
import { FaUserGraduate } from 'react-icons/fa'

function Domain() {
    return (
        <div id='Domain' style={{ color: 'black', backgroundColor: 'white' }}>
            <div className="domain" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column' }}>
                <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '5%', marginBottom: '4%', color: '#3770FF' }} className='domainHeading'>Domain</h2>
                <Grid container sx={{ width: '100%' }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', width: '100%', marginBottom: '5%', rowGap: '70px' }}>
                    <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column' }}>
                        <div class="flip-card">
                            <div class="flip-card-inner" >
                                <div class="flip-card-front" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', height: '100%' }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <FaUserGraduate style={{ color: 'white', width: '40px', height: '40px' }} />
                                        <h3 style={{ color: 'white', margin: '0px', padding: '0px', marginTop: '10px' }}> AI/ML </h3>
                                    </div>
                                </div>
                                <div class="flip-card-back" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', height: '100%' }}>
                                    <p>Lorem ipsum dolor sit amet, consectur adipiscing elit. Feugiat porttitor duis aliquet arcu. Feugiat porttitor duis aliquet arcu. Feugiat porttior duis aliquet arcu. Feugiat porttitor duis aliquet arcu. Feugiat duis aliquet. </p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column' }}>
                        <div class="flip-card">
                            <div class="flip-card-inner" >
                                <div class="flip-card-front" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', height: '100%' }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <FaUserGraduate style={{ color: 'white', width: '40px', height: '40px' }} />
                                        <h3 style={{ color: 'white', margin: '0px', padding: '0px', marginTop: '10px' }}> AI/ML </h3>
                                    </div>
                                </div>
                                <div class="flip-card-back" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', height: '100%' }}>
                                    <p>Lorem ipsum dolor sit amet, consectur adipiscing elit. Feugiat porttitor duis aliquet arcu. Feugiat porttitor duis aliquet arcu. Feugiat porttior duis aliquet arcu. Feugiat porttitor duis aliquet arcu. Feugiat duis aliquet. </p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column' }}>
                        <div class="flip-card">
                            <div class="flip-card-inner" >
                                <div class="flip-card-front" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', height: '100%' }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <FaUserGraduate style={{ color: 'white', width: '40px', height: '40px' }} />
                                        <h3 style={{ color: 'white', margin: '0px', padding: '0px', marginTop: '10px' }}> AI/ML </h3>
                                    </div>
                                </div>
                                <div class="flip-card-back" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', height: '100%' }}>
                                    <p>Lorem ipsum dolor sit amet, consectur adipiscing elit. Feugiat porttitor duis aliquet arcu. Feugiat porttitor duis aliquet arcu. Feugiat porttior duis aliquet arcu. Feugiat porttitor duis aliquet arcu. Feugiat duis aliquet. </p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column' }}>
                        <div class="flip-card">
                            <div class="flip-card-inner" >
                                <div class="flip-card-front" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', height: '100%' }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <FaUserGraduate style={{ color: 'white', width: '40px', height: '40px' }} />
                                        <h3 style={{ color: 'white', margin: '0px', padding: '0px', marginTop: '10px' }}> AI/ML </h3>
                                    </div>
                                </div>
                                <div class="flip-card-back" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', height: '100%' }}>
                                    <p>Lorem ipsum dolor sit amet, consectur adipiscing elit. Feugiat porttitor duis aliquet arcu. Feugiat porttitor duis aliquet arcu. Feugiat porttior duis aliquet arcu. Feugiat porttitor duis aliquet arcu. Feugiat duis aliquet. </p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Domain
