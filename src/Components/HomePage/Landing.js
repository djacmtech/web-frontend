import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { useState } from "react";
import OurEvents from "./Event";
import { Paper } from "@mui/material";


export default function Landing() {
  const [events] = useState(OurEvents);
  return (<>
    <div style={{transform:'translateY(-10px)'}}>
        <span className='titleACM'>
        <h1>Association For Computing Machinery</h1>
        <h3>Dwarkadas J.Sanghvi College of Engineering</h3>
        </span>
        <img src="/Images/About.png" alt="About" className="Landing-image" />
      <div className="Events">
        {events.map((props, id) => {
          return (
            <div key={id}>
              <Paper elevation={4}>
                <Card sx={{ maxWidth: 300 }}>
                  <CardMedia
                    style={{ width: "300px", height: "300px" }}
                    component="img"
                    image={props.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {props.tag}
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}