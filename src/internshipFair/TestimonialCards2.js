import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function TestimonialCards2() {
  return (
    <Card sx={{ minWidth: 275 }} className="testimony">
      <CardContent>
        <Typography variant='h5' style={{color:'#187271'}} gutterBottom>
          Harshil Jhaveri
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize:'0.8rem'}} color="text.secondary">
          B.E. Computer Engineering
        </Typography>
        <Typography variant="body2">
        I am genuinely grateful to the ACM Team for organizing the IF that helped me land an internship
        at a Global Payments Company that I wouldn't have had a chance at if I would have applied to them
        directly. The process was so effective that each student got at least one internship offer and 
        could boost their profile.    
        </Typography>
      </CardContent>
    </Card>
  );
}