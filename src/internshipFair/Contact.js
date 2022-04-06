import { Grid } from "@mui/material"
import './InternshipFair.css';
import {MdLocationOn} from 'react-icons/md';

export default function Contact() {
    return (
        <>
          <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            style={{
                display: "flex",
                flexDirection:'column',
                justifyContent: "center",
            }}
            >
            <h1 className="heading">   
                -------- CONTACT US
            </h1>
            <iframe
                className="map"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.002340483474!2d72.83433341393042!3d19.10755325594757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sDwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1638180891128!5m2!1sen!2sin"
                loading="lazy"
                style={{height: "350px", width: "650px", padding: "5% 10% 5% 15%"}}
            />
            <div className="address">
            <MdLocationOn style={{fontSize:'60px', color:'#187271'}}/>
            <p className="addressContact"> No. U, 15, Bhaktivedanta Swami Rd, opp. Cooper Hospital, Navpada, JVPD Scheme,
                Vile Parle, Mumbai, Maharashtra 400056 
            </p>
            </div>
            </Grid>
            <Grid
            item
            xs={12}
            sm={12}
            md={5}
            columnGap={2}
            style={{
                padding: "10% 20% 8% 0%",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
            >
            <div
                style={{
                fontFamily: "montserrat",
                fontSize: "17px",
                color: "black",
                }}
            >
                <div>
                <a
                    style={{color: "#fff", textDecoration: "none"}}
                    rel="noreferrer"
                    href="mailto:coreacm@gmail.com"
                    target="_blank"
                >
                </a>
                </div>
                <div style={{textAlign: "left"}}>
                <h2 className="phoneHeading"> Co-organizers </h2>
                <a
                    style={{color: "#fff", textDecoration: "none"}}
                    href="tel:+91 9987748170"
                >
                    <p style={{fontSize: "20px", color:'black'}}>
                    Richa Shah
                    </p>
                </a>
                <a
                    style={{color: "#fff", textDecoration: "none"}}
                    href="tel:+91 9819705248"
                >
                    <p style={{fontSize: "20px", color: "black"}}>
                    Richa Shah
                    </p>
                </a>
                </div>
                <div style={{textAlign: "left"}}>
                <h2 className="phoneHeading"> Contact Us </h2>

                <div style={{textAlign: "left"}}>
                <a
                    style={{color: "#fff", textDecoration: "none"}}
                    href="tel:+91 9987748170"
                >
                    <p style={{fontSize: "20px", color:'black'}}>
                    Richa Shah - 9892993784
                    </p>
                </a>
                <a
                    style={{color: "#fff", textDecoration: "none"}}
                    href="tel:+91 9819705248"
                >
                    <p style={{fontSize: "20px", color: "black"}}>
                    Richa Shah - 9892993784
                    </p>
                </a>
                </div>
                </div>
            </div>
            </Grid>
        </Grid>
        </>
    )
}