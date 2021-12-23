import "./App.css";
import FinalEvent from "./Assets/FinalEvent";
// import FinalHome from './Assets/FinalHome'
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";
import { ContactUS } from "./Components/contactUS/ContactUS";
import Committee from "./Components/Committee/Committee";
import MainEvent from "./Components/Eventpage/MainEvent";

function App() {
  return (
    <Router>
      <div>
        {/* <Header/> */}
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/Events" element={<FinalEvent />}></Route>
          <Route path="/contactus" element={<ContactUS />}></Route>
          <Route path="/Committee" element={<Committee />}></Route>
          <Route path={`/Events/:mainEvent`} element={<MainEvent/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
