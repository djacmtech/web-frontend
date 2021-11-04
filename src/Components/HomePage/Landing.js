import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import { useState } from 'react'
import OurEvents from './Event'

export default function Landing() {
    const [events] = useState(OurEvents)
    return (
        <div>
            <div>
                <img src="/Images/About.png" alt="About" className="Landing-image"/>
            </div>
            <div className="Events">
            {
                events.map((props, id) => {
                    return (
                        <div key={id}>
                            <Card sx={{ maxWidth: 300 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={props.image}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {props.tag}
                                </Typography>
                            </CardContent>
                            </Card>
                            </div>
                    )
                })
            }
            </div>
        </div>
    )
}