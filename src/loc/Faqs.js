import React, { useEffect } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { BsChevronDown } from 'react-icons/bs';
import Aos from "aos";
import "aos/dist/aos.css";

function Faqs() {

    useEffect(() => {
        Aos.init({ duration: 1000, once:"true" });
      }, []);

    return (
        <div id='FAQS' style={{ color: 'black', backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontSize: '18px' }}>
            <h1 style={{ color: '#3770FF', fontFamily: 'Righteous', padding:'0 2% 0 2%'}} data-aos="fade-left"> Frequently Asked Questions </h1>
            <h3 style={{ fontFamily: 'montserrat', fontWeight: '900', padding:'2% 4% 2% 4%'}}> Can&#39;t find the answers to what you are looking for? <span style={{ color: '#FF8A50' }}> Reach out to our Team </span> </h3>
            <div style={{ width: '70%', paddingBottom:'5%', paddingTop:'2%'}}>
                <div data-aos="fade-right">
                <Accordion defaultExpanded={true}>
                    <AccordionSummary
                        expandIcon={<BsChevronDown style={{ color: '#3770FF' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography style={{ fontWeight: 'bold', fontFamily: 'Montserrat' }} >What is a hackathon?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ textAlign: 'left', fontFamily: 'Montserrat' }}>
                            A hackathon is a social coding event where programmers, designers and developers collaborate to solve a problem and compete for prizes.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
                <div data-aos="fade-left">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<BsChevronDown style={{ color: '#3770FF' }} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography style={{ fontWeight: 'bold', fontFamily: 'Montserrat'}}>What are the problem statements for the hackathon?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ textAlign: 'left', fontFamily: 'Montserrat'}}>
                            The problem statements will be declared soon. Once you&#39;ve registered we&#39;ll keep you posted with all details.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
                <div data-aos="fade-right">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<BsChevronDown style={{ color: '#3770FF' }} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography style={{ fontWeight: 'bold', fontFamily: 'Montserrat' }}>What will be the mode and location of the hackathon?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ textAlign: 'left', fontFamily: 'Montserrat' }}>
                            LoC 4.0 will be conducted in hybrid mode. Primarily held offline at SVKM's Dwarkadas J. Sanghvi College of Engineering campus, Vile Parla, Mumbai, India; with an online presence on Discord, being live braodcasted to participants attending online from throughout the world.

                        </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
                <div data-aos="fade-left">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<BsChevronDown style={{ color: '#3770FF' }} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography style={{ fontWeight: 'bold', fontFamily: 'Montserrat' }}>What are the eligibility criteria? Are there any prerequisites or</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ textAlign: 'left', fontFamily: 'Montserrat' }}>
                            This competition is open to all university students so do send in your application to attend ! While experience in programming and software development is beneficial, this can be a great opportunity to network and learn.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
                <div data-aos="fade-right">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<BsChevronDown style={{ color: '#3770FF' }} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography style={{ fontWeight: 'bold', fontFamily: 'Montserrat' }}>How many members are allowed in one team for this Hackathon?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ textAlign: 'left', fontFamily: 'Montserrat' }}>
                            LoC allows 2 to 4 members per team.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
                <div data-aos="fade-left">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<BsChevronDown style={{ color: '#3770FF' }} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography style={{ fontWeight: 'bold', fontFamily: 'Montserrat' }}>How much does this cost?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ textAlign: 'left', fontFamily: 'Montserrat' }}>
                            LoC is FREE for all participants if your team is selected!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
                <div data-aos="fade-right">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<BsChevronDown style={{ color: '#3770FF' }} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography style={{ fontWeight: 'bold', fontFamily: 'Montserrat', textAlign: 'left' }}>Can I start working on my submission before the event or use something that I have built previously?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ textAlign: 'left', fontFamily: 'Montserrat' }}>
                            The submission for LoC has to be made during the duration of the event in its entirety. Using prior work can lead to disqualification.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Faqs