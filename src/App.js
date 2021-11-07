import "./App.css";
import FinalEvent from "./Assets/FinalEvent";
// import FinalHome from './Assets/FinalHome'
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
        <Route exact path="/" element={<HomePage/>}>
        </Route>
        <Route path="/Events" element={<FinalEvent/>} >
        </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
