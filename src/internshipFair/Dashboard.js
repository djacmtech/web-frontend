import InterNavbar from "./InterNavbar";
import JobCard from "./JobCard";
import Grid from '@mui/material/Grid';
import Filter from "./Filter";

export default function Dashboard () {
    return (
        <div>
            <InterNavbar/>
            <Grid container spacing={0} style={{padding:'10%', backgroundColor:'#E5E5E5'}}>
                <Grid md={6} style={{paddingInline:'3%'}}> 
                    <p style={{paddingInline:'10%', backgroundColor:'#E5E5E5', color:'#2D3748', fontSize:'2rem', fontWeight:'bold'}}> Student Dashboard </p>
                    <Filter/>
                </Grid>
                <Grid item md={6}>
                    <JobCard/>
                    <JobCard/>
                    <JobCard/>
                </Grid>
            </Grid>
        </div>
    )
}