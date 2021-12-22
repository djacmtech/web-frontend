import OurEvents from "./Event";
import "./HomePage.css"
import image from '../Images/About.png'
export default function Landing() {
  class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }

    type() {
      const current = this.wordIndex % this.words.length;
      const fullTxt = this.words[current];
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
      let typeSpeed = 300;

      if (this.isDeleting) {
        typeSpeed /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 500;
      }

      setTimeout(() => this.type(), typeSpeed);
    }
  }
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
  }

  return (
    <>
      <div className="landingScreen">
        <div className="landImg">
          <div class="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 className="typewriterACM" style={{ marginTop: '10%', padding: '0' }}>
              <span class="txt-type" data-wait="3000" data-words='["Association of Computer Machinery"]'></span>
            </h1>
            <h3 style={{ margin: '0', padding: '0' }}>Dwarkadas J Sanghvi College of Engineering</h3>
          </div>
        </div>
        <div className="events">
          {
            OurEvents.map(event => {
              return <>
                <div className="eventCard">
                  <img src={event.image} className="eventImg" alt="eventImg" />
                  <h4 className="eventName">{event.tag}</h4>
                </div>
              </>
            })
          }
        </div>
      </div>
    </>
  );
}