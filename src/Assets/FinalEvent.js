import EventCard from "../Components/Eventpage/EventCard";
import { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import EventCard2 from "../Components/Eventpage/EventCard2"
import { useLocation } from 'react-router-dom';

export default function FinalEvent() {
  const [offset] = useState(0);
  const [data, setData] = useState([
    {
      id: "0",
      title: "Title",
      image: "/Images/mission1.png",
      description: "Minim laborum in nulla do non nulla.",
      about:
        "Reprehenderit dolor occaecat ad ad in enim tempor aute nulla sit excepteur quis laborum irure. Nulla velit velit ex doexercitation. Velit nisi culpa enim reprehenderit exercitation mollit nulla minim ipsum consectetur qui.",
      when: "Minim laborum in nulla do non nulla.",
      date: "2021-08-24",
    },
  ]);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    fetch("http://137.135.78.87:8080/api/events/", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);
  const routePath = useLocation();
    const onTop = () => {
      window.scrollTo(0, 0);
    }
    useEffect(() => {
      onTop()
    }, [routePath]);
  return (
    <div style={{height:'max-content'}}>
    <Header activePage='Events'/>

      {
        data.map((items, index) => (
        ((index)%2 ===0)?<EventCard
            id={items.id}
            image={items.image}
            title={items.title}
            description={items.description}
            about={items.about}
            date={new Date(items.date).toDateString()}
            /> : <EventCard2
            id={items.id}
            image={items.image}
            title={items.title}
            description={items.description}
            about={items.about}
            date={new Date(items.date).toDateString()}
            />
      ))}
    </div>
  );
}
