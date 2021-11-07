import EventCard from "../Components/Eventpage/EventCard";
import { useState } from "react";

export default function FinalEvent() {

    const [data, setData] = useState(
        [{
            'id':'0',
            'title':'Title',
            'image':'/Images/mission1.png', 
            'description':'Minim laborum in nulla do non nulla.',
            'about':'Reprehenderit dolor occaecat ad ad in enim tempor aute nulla sit excepteur quis laborum irure. Nulla velit velit ex doexercitation. Velit nisi culpa enim reprehenderit exercitation mollit nulla minim ipsum consectetur qui.',
            'when':'Minim laborum in nulla do non nulla.',
            'date':'2021-08-24',
        }])

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://djacmdev.pythonanywhere.com/api/events/", requestOptions)
        .then(response => response.text())
        .then(result => setData(result))
        .catch(error => console.log('error', error));

    return (
        <div>
            {
                data.map((items)=> 
                    <EventCard id={items.id} image={items.image} title={items.title} description={items.description} about={items.about} date={items.date}/>
                )
            }
        </div>
    )
}