import { Grid } from '@mui/material'
import React from 'react'

const HeroFair = () => {
    return (
        <div style={{padding:'3%'}}><Grid container spacing={1}>
            <Grid item sm={8}>
                <span className='heroSub'>Land your
                    First Internship
                    At DJSCE ACM's</span>
                    <br/>
                <span className='heroFair'>INTERNSHIP FAIR</span>
                <p className='extraHero'>Sign In to get yourself registered and know more about the Job Profiles</p>

            </Grid>
            <Grid item sm={4}></Grid>
        </Grid></div>
    )
}

export default HeroFair