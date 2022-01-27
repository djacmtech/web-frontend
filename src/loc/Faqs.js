import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { BsChevronDown } from 'react-icons/bs'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

function Faqs() {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div id='FAQS' style={{ color: 'black', backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontSize: '18px' }}>
            <h1 style={{ color: '#3770FF' }}> Frequently asked questions </h1>
            <h3 style={{ fontFamily: 'montserrat', fontWeight: '900' }}> Can&#39;t find the answers to what you are looking for? <span style={{ color: '#FF8A50' }}> Reach out to our Team </span> </h3>
            <div style={{ width: '60%', padding: '2% 5% 5% 5%' }}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<BsChevronDown />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography style={{ fontWeight: 'bold' }}>What is a hackathon?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ textAlign: 'left' }}>
                            A hackathon is a social coding event where programmers, designers and developers collaborate to solve a problem and compete for prizes.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<BsChevronDown />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography style={{ fontWeight: 'bold' }}>What are the problem statements for the hackathon?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ textAlign: 'left' }}>
                            The problem statements will be declared soon. Once you’ve registered we’ll keep you posted with all details.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<BsChevronDown />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography style={{ fontWeight: 'bold' }}>What will be the mode and location of the hackathon?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ textAlign: 'left' }}>
                            LoC 4.0 will be conducted in hybrid mode. Primarily held offline at SVKM's Dwarkadas J. Sanghvi College of Engineering campus, Vile Parla, Mumbai, India; with an online presence on Discord, being live braodcasted to participants attending online from throughout the world.

                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<BsChevronDown />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography style={{ fontWeight: 'bold' }}>What are the eligibility criteria? Are there any prerequisites or</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ textAlign: 'left' }}>
                            This competition is open to all university students so do send in your application to attend ! While experience in programming and software development is beneficial, this can be a great opportunity to network and learn.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Item style={{ padding: '5%' }}> Each team would comprise of 2-4 members including the team leader.
                    All team members should be from same college; no inter-college
                    teams are allowed. However, members from different branches of the
                    same college institute can form a team. </Item>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<BsChevronDown />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography style={{ fontWeight: 'bold' }}>How many members are allowed in one team for this Hackathon?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ textAlign: 'left' }}>
                            LoC allows 2 to 4 members per team.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<BsChevronDown />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography style={{ fontWeight: 'bold' }}>How much does this cost?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ textAlign: 'left' }}>
                            LoC is FREE for all participants if your team is selected!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<BsChevronDown />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography style={{ fontWeight: 'bold' }}>Can I start working on my submission before the event or use something that I have built previously?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ textAlign: 'left' }}>
                            The submission for LoC has to be made during the duration of the event in its entirety. Using prior work can lead to disqualification.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default Faqs