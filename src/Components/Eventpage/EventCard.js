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
                    {props.title} <br/>
                    {props.description} <br/>
                    {/* {props.about} <br/> */}
                    {props.date} <br/>
                </p>
            </div>
        </div>
    )
}