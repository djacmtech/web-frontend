import './EventPage.css'

export default function EventCard(props) {
    return (
        <div className="Card">
            <div className="Event-Image" key={props.id}>
                <img src={props.image} alt="Event name" className="Image"/>
            </div>
            <div className="Event-Content">
                <p className="Content"> 
                    {props.title} <br/>
                    {props.description} <br/>
                    {props.about} <br/>
                    {props.date} <br/>
                </p>
            </div>
        </div>
    )
}