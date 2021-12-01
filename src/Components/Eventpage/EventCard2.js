import { Link } from 'react-router-dom'
import './EventPage.css'

export default function EventCard2(props) {
    const baseUrl = "http://djacmdev.pythonanywhere.com/"
    return (
        <div className="Card">
            <div className="Event2-Content">
                <p className="Content2"> 
                    <div className="event_title"><center className='event_title_center'>{props.title}</center></div>
                    <p className='event_description'>{props.description}</p>
                    {/* {props.about} <br/> */}
                    <p className="event_date">Join us on {props.date}</p>
                    <Link to={props.title}> <button className="event_knowmore">KNOW MORE</button> </Link>
                </p>
            </div>
            <div className="event2_img_div">
            <div className="Event2-Image" key={props.id}>
                <img src={baseUrl.concat(props.image)} alt="Event name" className="Images"/>
            </div>
        </div>
        </div>
    )
}