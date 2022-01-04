import OurEvents from "./Event";
import "./HomePage.css"
export default function Landing() {

  return (
    <>
      <div className="landingScreen">
        <div className="landImg">
          <div class="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div class="wrapper">
              <p class="word"><span>Association of Computer Machinery</span></p>
            </div>
            <h3 style={{ margin: '0', padding: '0' }}>Dwarkadas Jivanlal Sanghvi College of Engineering</h3>
          </div>
        </div>
        <div className="events">
          {
            OurEvents.map(event => {
              return <>
                <div className="eventCard">
                  <img src={event.image} className="eventImg" alt="eventImg" />
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