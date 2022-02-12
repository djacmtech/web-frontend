import React, { useEffect, useRef, useState } from "react";
import Domain from "./Domain";
import About from "./About";
import Hero from "./Hero";
import Prizes from "./Prizes";
import Timeline from "./Timeline";
import Guidelines from "./Guidelines";
import Sponsors from "./Sponsors";
import Faqs from "./Faqs";
import ContactUs from "./ContactUs";
import NavLoc from "./navLoc";
import { Link } from "react-scroll";
import Fab from "@mui/material/Fab";
import { BsArrowUpCircleFill } from "react-icons/bs";
// import LocFooter from "./locFooter";

function Loc() {
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  function useOnScreen(options) {
    useEffect(() => {
      onTop();

      const observer = new IntersectionObserver(([entry]) => {
        // setVisible(entry.isIntersecting);
      }, options);
      console.log(visible);

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref, options]);

    return [ref, visible];
  }
  const [elev, setElev] = useState(false);

  // const [ref, visible] = useOnScreen({ threshold: 0.9 });
  console.log(ref);
  console.log(visible);
  return (
    <>
      <div style={{backgroundColor:"white"}}>
        {visible ? <NavLoc elevation={0} /> : <NavLoc elevation={3} />}
        {/* <Link
          style={{ textDecoration: "none" }}
          to="heroTop"
          spy={true}
          smooth={true}
        > */}
          <Fab
            variant="extended"
            style={{
              backgroundColor: "#001521",
              float: "right",
              margin: "35% 2%",
              // zIndex: "0",
            }}
            onClick={()=>onTop()}
          >
            <BsArrowUpCircleFill
              style={{
                fontSize: "4rem",
                position: "fixed",
                color: "#f54951",
                cursor: "pointer",
              }}
              className='backTop'
            />
          </Fab>
        {/* </Link> */}
        <Hero />
        {/* <div ref={ref}> */}
        <div onMouseOver={() => setVisible(!visible)}>
          <About />
        </div>
        <Prizes />
        <Domain />
        <Timeline />
        <Guidelines />
        <Sponsors />
        <Faqs />
        <ContactUs />
        {/* <LocFooter/> */}
      </div>
    </>
  );
}

export default Loc;
