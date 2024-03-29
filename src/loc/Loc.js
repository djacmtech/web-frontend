import React from "react";
import Domain from "./Domain";
import About from "./About";
import Hero from "./Hero";
import Prizes from "./Prizes";
import Timeline from "./Timeline";
import Guidelines from "./Guidelines";
import Sponsors from "./Sponsors_New";
import PastSponsers from './Sponsors';
import Faqs from "./Faqs";
import ContactUs from "./ContactUs";
import NavLoc from "./navLoc";
import { Link } from "react-scroll";
import LocFooter from "./locFooter";

function Loc() {
  return (
    <>
      <div style={{ backgroundColor: "#000" }}>
        <NavLoc />
        <Link style={{ textDecoration: "none" }} to='heroTop' spy={true} smooth={true}>
          {/* <Fab
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
          </Fab> */}
        </Link>
        {/* </Link> */}
        <Hero />
        {/* <div ref={ref}> */}
        <About />
        <Prizes />
        <Domain />
        <Timeline />
        <Guidelines />
        <Sponsors />
        <PastSponsers />
        <Faqs />
        <ContactUs />
        <LocFooter />
      </div>
    </>
  );
}

export default Loc;
