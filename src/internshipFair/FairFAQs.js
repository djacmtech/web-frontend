import React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { BsChevronDown } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";

const FairFAQs = () => {
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    borderBottom: `1px solid #16bdff`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  return (
    <>
      <div className="pastCompanies">--------- FAQ's</div>
      <div
        id="FAQS"
        className="mobileview"
        style={{
          color: "black",
          backgroundColor: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          fontSize: "18px",
        }}
      >
        <div
          style={{
            width: "80%",
            paddingBottom: "5%",
            paddingTop: "2%",
            margin: "40px",
          }}
        >
          <div data-aos="fade-up">
            <Accordion
              defaultExpanded={true}
              className="accordionFair"
              style={{ borderBottom: "#FFFFFF" }}
            >
              <AccordionSummary
                expandIcon={
                  <BsChevronDown style={{ color: "#2ABEA2", padding: "5px" }} />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "rgb(49, 47, 47, 0.12) 2px 2px 2px 2px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "#585E62",
                    textAlign: "left",
                  }}
                  variant="h6"
                >
                  University and Course Selection
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: "#F2FCFB" }}>
                <Typography
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    color: "#585E62",
                    fontSize: "20px",
                  }}
                >
                  With 7000+ students studying in 13 different countries, our
                  experience speaks volumes about the diversity and capability
                  of our counsellors to find you the right student-univesity
                  fit. A systematic process with comprehensive list of schools
                  opens many poosibilites for you.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up">
            <Accordion
              className="accordionFair"
              style={{ borderBottom: "#FFFFFF" }}
            >
              <AccordionSummary
                expandIcon={
                  <BsChevronDown style={{ color: "#2ABEA2", padding: "5px" }} />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "rgb(49, 47, 47, 0.12) 2px 2px 2px 2px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "#585E62",
                    textAlign: "left",
                  }}
                  variant="h6"
                >
                  SOP/Essay and LOR Assistance
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: "#F2FCFB" }}>
                <Typography
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    color: "#585E62",
                    fontSize: "20px",
                  }}
                >
                  With 7000+ students studying in 13 different countries, our
                  experience speaks volumes about the diversity and capability
                  of our counsellors to find you the right student-univesity
                  fit. A systematic process with comprehensive list of schools
                  opens many poosibilites for you.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up">
            <Accordion
              className="accordionFair"
              style={{ borderBottom: "#FFFFFF" }}
            >
              <AccordionSummary
                expandIcon={
                  <BsChevronDown style={{ color: "#2ABEA2", padding: "5px" }} />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "rgb(49, 47, 47, 0.12) 2px 2px 2px 2px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "#585E62",
                    textAlign: "left",
                  }}
                  variant="h6"
                >
                  Form Filling
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: "#F2FCFB" }}>
                <Typography
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    color: "#585E62",
                    fontSize: "20px",
                  }}
                >
                  With 7000+ students studying in 13 different countries, our
                  experience speaks volumes about the diversity and capability
                  of our counsellors to find you the right student-univesity
                  fit. A systematic process with comprehensive list of schools
                  opens many poosibilites for you.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up">
            <Accordion
              className="accordionFair"
              style={{ borderBottom: "#FFFFFF" }}
            >
              <AccordionSummary
                expandIcon={
                  <BsChevronDown style={{ color: "#2ABEA2", padding: "5px" }} />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "rgb(49, 47, 47, 0.12) 2px 2px 2px 2px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "#585E62",
                    textAlign: "left",
                  }}
                  variant="h6"
                >
                  Financial Counselling and Loans
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: "#F2FCFB" }}>
                <Typography
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    color: "#585E62",
                    fontSize: "20px",
                  }}
                >
                  With 7000+ students studying in 13 different countries, our
                  experience speaks volumes about the diversity and capability
                  of our counsellors to find you the right student-univesity
                  fit. A systematic process with comprehensive list of schools
                  opens many poosibilites for you.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up">
            <Accordion
              className="accordionFair"
              style={{ borderBottom: "#FFFFFF" }}
            >
              <AccordionSummary
                expandIcon={
                  <BsChevronDown style={{ color: "#2ABEA2", padding: "5px" }} />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "rgb(49, 47, 47, 0.12) 2px 2px 2px 2px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "#585E62",
                    textAlign: "left",
                  }}
                  variant="h6"
                >
                  Visa Counselling
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: "#F2FCFB" }}>
                <Typography
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    color: "#585E62",
                    fontSize: "20px",
                  }}
                >
                  With 7000+ students studying in 13 different countries, our
                  experience speaks volumes about the diversity and capability
                  of our counsellors to find you the right student-univesity
                  fit. A systematic process with comprehensive list of schools
                  opens many poosibilites for you.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default FairFAQs;
