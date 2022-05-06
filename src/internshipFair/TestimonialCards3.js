import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function TestimonialCards3() {
  return (
    <Card sx={{ minWidth: 275 }} className="testimony">
      <CardContent>
        <Typography variant='h5' style={{color:'#187271'}} gutterBottom>
          Nishay Madhani
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize:'0.8rem'}} color="text.secondary">
          B.E. Computer Engineering
        </Typography>
        <Typography variant="body2">
        My first internship was with ACM's IF. The experience I gained there
        is what I leveraged to move forward professionally- do not underestimate
        the power of contributing to a relevant  real world project.
        </Typography>
      </CardContent>
    </Card>
  );
}