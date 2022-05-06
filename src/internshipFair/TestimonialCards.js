import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function TestimonialCards() {
  return (
    <Card sx={{ minWidth: 275 }} className="testimony">
      <CardContent>
        <Typography variant='h5' style={{color:'#187271'}} gutterBottom>
          Ankit Gupta
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize:'0.8rem'}} color="text.secondary">
          B.E. Computer Engineering
        </Typography>
        <Typography variant="body2">
        
        ACM's annual internship fair has been an incredible stepping stone to land an internship! There were opportunities in multiple domains to gain real world experience. Highly recommend!
              
        </Typography>
      </CardContent>
    </Card>
  );
}
