import "./App.css";
import FinalEvent from "./Assets/FinalEvent";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";
import Committee from "./Components/Committee/Committee";
import MainEvent from "./Components/Eventpage/MainEvent";
import ContactUS from "./Components/contactUS/ContactUS";
import Loc from "./loc/Loc"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    Aos.init({ duration: 1000, once:true });
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/events" element={<FinalEvent />}></Route>
          <Route path="/contact-us" element={<ContactUS />}></Route>
          <Route path="/committee" element={<Committee />}></Route>
          <Route path={`/events/:mainEvent`} element={<MainEvent />} />
          <Route path="/LOC" element={<Loc />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
