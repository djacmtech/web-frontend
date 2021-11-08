import './EventPage.css'

export default function EventCard(props) {
    const baseUrl = "http://djacmdev.pythonanywhere.com/"
    return (
        <div className="Card">
            <div className="Event-Image" key={props.id}>
                <img src={baseUrl.concat(props.image)} alt="Event name" className="Images"/>
            </div>
            <div className="Event-Content">
                <p className="Content"> 
                    <div className="event_title"><center>{props.title}</center></div> <br/>
                    {props.description} <br/>
                    {/* {props.about} <br/> */}
                    {props.date} <br/>
                    <div className="event_knowmore">KNOW MORE</div>
                </p>
            </div>
        </div>
    )
}