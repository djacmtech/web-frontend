import { Grid } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function ContactUs() {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
        <div style={{  background: "linear-gradient(179.94deg, #FF8A50 -1.24%, #F54951 64.13%)" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5} columnGap={2} style={{padding:"50px", textAlign:"center"}}>
                    <div> <h2 style={{color:"black"}}> Contact Us </h2> </div>
                    <div>
                        <p> <b> EMAIL </b> <br/> <EmailOutlinedIcon/> coreacm@gmail.com </p>
                        <p> <b> PHONE </b> <br/> Richa Shah | 9892993784 <br/> Richa Shah | 9892993784 </p>
                        <p> <b> SOCIALS </b> </p> 
                    </div>
                </Grid>
                <Grid item xs={12} md={7} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <iframe
                    className="map"
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.002340483474!2d72.83433341393042!3d19.10755325594757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sDwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1638180891128!5m2!1sen!2sin"
                    loading="lazy"
                    style={{height:"400px", width:'500px', padding:'5% 10% 5% 0'}}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default ContactUs
