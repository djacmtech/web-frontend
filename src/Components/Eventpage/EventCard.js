import './EventPage.css'

export default function EventCard(props) {
    const baseUrl = "http://djacmdev.pythonanywhere.com/"
    return (
        <div className="Card">
        <div className="event_img_div">
            <div className="Event-Image" key={props.id}>
                <img src={baseUrl.concat(props.image)} alt="Event name" className="Images"/>
            </div>
        </div>
            <div className="Event-Content">
                <p className="Content"> 
                    <div className="event_title"><center className='event_title_center'>{props.title}</center></div>
                    <p className='event_description'>{props.description}</p>
                    {/* {props.about} <br/> */}
                    <p className="event_date">{props.date}</p>
                    <button className="event_knowmore">KNOW MORE</button>
                </p>
            </div>
        </div>
    )
}