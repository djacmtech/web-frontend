import { Grid } from '@mui/material'
import React from 'react'
import Button from "@mui/material/Button";
import CountUp from 'react-countup';

// import { motion } from 'framer-motion';

const HeroFair = () => {
    return (
        <div style={{ padding: '3%' }}>
            <Grid container spacing={1}>
                <Grid item sm={8} style={{ padding: '0% 1% 0% 4%' }}>
                    <span className='heroSub'>Land your <br />
                        First Internship <br />
                        At DJSCE ACM's</span>
                    <br />
                    <span className='heroFair'>INTERNSHIP FAIR</span>
                    <p className='extraHero'>Sign In to get yourself registered and know more about the Job Profiles</p>
                    <Button className='heroFairButton' variant='contained' size='large' style={{ backgroundColor: '#187271' }}>Let's get Started</Button>

                </Grid>
                <Grid item sm={4} style={{ backgroundColor: '#2ABEA2' }}>
                    {/* <div style={{backgroundColor:'#2ABEA2'}}></div> */}
                </Grid>
            </Grid>
            <div className='fairCount'>
                <Grid container spacing={0} >
                    <Grid item xs={4}>COMPANIES <br />
                        <span>
                            <CountUp end={30} duration={2} />+</span>
                    </Grid>
                    <Grid item xs={4}>INTERVIEWS ORGANISED <br />
                        <span>
                            <CountUp end={200} duration={2} />+</span>
                    </Grid>
                    <Grid item xs={4}>INTERNSHIPS LANDED<br />          <span>
                        <CountUp end={80} duration={2} />+</span></Grid>
                </Grid>
            </div></div >
    )
}

export default HeroFair