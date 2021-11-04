import './App.css';
import About from './Components/HomePage/About';
import Video from './Components/HomePage/Video';
import Vision from './Components/HomePage/Vision';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header';
import Mission from './Components/HomePage/Mission';
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
      <Mission/>
      <WhatWeDo/>
      <Footer/>
    </div>
  );
}

export default App;
