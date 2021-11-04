import './App.css';
import About from './Components/HomePage/About';
import Video from './Components/HomePage/Video';
import Vision from './Components/HomePage/Vision';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header';
import Mission2 from './Components/HomePage/Mission2';
import WhatWeDo from './Components/HomePage/WhatWeDo';
import Landing from './Components/HomePage/Landing';
function App() {
  return (
    <div>
      <Header/>
      <Landing/>
      <Video/>
      <About/>
      <Vision/>
      <Mission2/>
      <WhatWeDo/>
      <Footer/>
    </div>
  );
}

export default App;
