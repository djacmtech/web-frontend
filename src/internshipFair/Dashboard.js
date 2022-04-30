import InterNavbar from "./InterNavbar";
import JobCard from "./JobCard";
import Grid from '@mui/material/Grid';
import Filter from "./Filter";
import { useEffect, useState } from "react";

export default function Dashboard () {

    const [job, setJob] = useState([]);

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token 2f241d7c99fdd2ef5c8baf3417db8701abe53254");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    useEffect(()=>{
        fetch("https://djacmdev.pythonanywhere.com/if/list", requestOptions)
    .then(response => response.json())
    .then(result => {
        setJob(result)
        console.log(result)
    })
    .catch(error => console.log('error', error));
    }, [])

    return (
        <div>
            <InterNavbar/>
            <Grid container spacing={0} style={{padding:'10%', backgroundColor:'#E5E5E5'}}>
                <Grid xs={12} sm={12} md={6} style={{paddingInline:'3%'}}> 
                    <p style={{paddingInline:'10%', backgroundColor:'#E5E5E5', color:'#2D3748', fontSize:'2rem', fontWeight:'bold'}}> Student Dashboard </p>
                    <Filter/>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    {
                        job.map((items)=>
                            <JobCard 
                                key={items.id}
                                company={items.company_name}
                                role={items.role}
                                WFH={items.WFH}
                                stipend_low_range={items.stipend_low_range}
                                duration={items.duration}
                                id={items.id}
                            />
                        )
                    }
                </Grid>
            </Grid>
        </div>
    )
}