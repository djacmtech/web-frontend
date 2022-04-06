import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function TestimonialCards() {
  return (
    <Card sx={{ minWidth: 275 }} className="testimony">
      <CardContent>
        <Typography variant='h5' style={{color:'#187271'}} gutterBottom>
          Name
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize:'0.8rem'}} color="text.secondary">
          Info about person like branc or company position if company person
        </Typography>
        <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Venenatis quam ultricies eu, cursus vestibulum vitae. 
        Quam feugiat tempus, vestibulum eu aliquam ultricies. 
        Massa integer viverra ac risus gravida. Felis tempor et
        sem vitae commodo elit sit. Libero.
        </Typography>
      </CardContent>
    </Card>
  );
}
