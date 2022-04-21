import InterNavbar from "./InterNavbar";
import JobCard from "./JobCard";
import Grid from '@mui/material/Grid';

export default function Dashboard () {
    return (
        <div>
            <InterNavbar/>
            <h2 style={{paddingInline:'10%'}}> Student Dashboard </h2>
            <Grid container spacing={0} style={{padding:'10%'}}>
                <Grid md={6}> 
                 yo
                </Grid>
                <Grid item md={6}>
                    <JobCard/>
                </Grid>
            </Grid>
        </div>
    )
}