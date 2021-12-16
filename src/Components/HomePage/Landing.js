import OurEvents from "./Event";
import "./HomePage.css"
import image from '../Images/About.png'
export default function Landing() {
  return (
  <>
  <div className="landingScreen">
    <div className="landingScreenImg">
    <div className="landingOverlay landingTitleWrapper">
    <h1 class="typewriter">
          Association For Computing Machinery
        </h1>
        <h4>Dwarkadas J.Sanghvi College of Engineering</h4>
    </div>
      {/* <img src={image} className='landingImage' alt="landingImg"/> */}
        <div class="landingTitleWrapper">
        
    </div>
    
    </div>
    <div className="events">
      {
        OurEvents.map(event => {
          return<>
          <div className="eventCard">
            <img src={event.image} className="eventImg" alt="eventImg"/>
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