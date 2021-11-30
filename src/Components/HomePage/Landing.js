import { useState } from "react";
import OurEvents from "./Event";
import "./HomePage.css"

export default function Landing() {
  const [events] = useState(OurEvents);
  return (<>
  <div className="landingScreen">
    <div className="landingScreenImg">
    <div className="landingOverlay landingTitleWrapper">
    <h1 class="typewriter">
          Association For Computing Machinery
        </h1>
        <h4>Dwarkadas J.Sanghvi College of Engineering</h4>
    </div>
      <img src="/Images/About.png" className='landingImage'/>
        <div class="landingTitleWrapper">
        
    </div>
    
    </div>
    <div className="events">
      {
        OurEvents.map(event => {
          return<>
          <div className="eventCard">
            <img src={event.image} className="eventImg"/>
            <h4 className="eventName">{event.tag}</h4>
          </div>
          </>
        })
      }
    </div>
    </div>
    </>
  );
}
