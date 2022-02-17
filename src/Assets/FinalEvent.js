import EventCard from "../Components/Eventpage/EventCard";
import { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import { useLocation } from 'react-router-dom';

export default function FinalEvent() {
  const [offset] = useState(0);
  const [data, setData] = useState([
  ]);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    fetch("https://djacmdev.pythonanywhere.com/api/events/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result)
        console.log(result[0].image.slice(0,-15))
      })
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
        <EventCard
          id={items.id}
          key={index}
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
