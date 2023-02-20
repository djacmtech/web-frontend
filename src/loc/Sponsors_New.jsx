import { Grid, Tooltip } from "@mui/material";
import React from "react";
// import logo1 from "../Assets/xyz.png";
// import logo2 from "../Assets/taskade-logo.png";
// import logo3 from "../Assets/SYBGEN.png";
// import logo4 from "../Assets/jb_beam.png";
// import logo5 from "../Assets/InterviewBuddy.png";
// import logo6 from "../Assets/clickup logo - white text@2x.png";
// import logo8 from "../Assets/cake_logo_white_on_blue.png";
// import logo9 from "../Assets/balsamiq-logo.png";
// import logo10 from "../Assets/1P-logo.png";
// import logo0 from "../Assets/arcana.png";
// import cutistic from "../Assets/CutisticLogo.jpg";
// import bakehouse from "../Assets/bakehouse.png";
// import GMC from "../Assets/GMC.png";

function Sponsors() {
  return (
    <div
      className='mobileview'
      id='Sponsors'
      style={{
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "4%",
      }}>
      <h1
        style={{
          fontFamily: "Righteous",
          color: "white",
          marginTop: "4%",
        }}
        data-aos='fade-right'>
        LOC 5.0 Sponsors
      </h1>

      <div className='platinumSponsors'>
        <h2 className='sponsor-header' data-aos='fade-up'>
          Platinum Sponsors
        </h2>
        <SponsorsContainer cols={2}>
          <SponsorsLogo
            link='https://devfolio.co/'
            img='https://drive.google.com/u/0/uc?id=1dlWFRAQ9btrZxXNO0DnbghJaOrfADMps&export=download'
            name='Devfolio'
          />
          <SponsorsLogo
            link='https://polygon.technology/'
            img='https://drive.google.com/uc?export=download&id=1oNsLi1garvuatbkdnMw2wR7MXOz5DzpV'
            name='Polygon'
          />
        </SponsorsContainer>
      </div>

      <div className='goldSponsors'>
        <h2 className='sponsor-header' data-aos='fade-up'>
          Gold Sponsors
        </h2>
        <SponsorsContainer cols={3}>
          <SponsorsLogo
            link='https://replit.com/'
            img='https://drive.google.com/uc?export=download&id=11-Pj4S6VrYt_rsx69GCULDnY5OOhPrz8'
            name='Replit'
          />
          <SponsorsLogo
            link='https://solana.com/'
            img='https://drive.google.com/uc?export=download&id=1-jMZlppknmCgMluHZP-fSHQWvb0V5R5e'
            name='Solana'
          />
          <SponsorsLogo
            link='https://filecoin.io/'
            img='https://drive.google.com/uc?export=download&id=10RYEzZnnRVJbFbX1anivfJ0yYvMP6jSv'
            name='FileCoin'
          />
          {/* <SponsorsLogo link='https://zeeve.io/' name='Zeeve' />
          <SponsorsLogo link='https://earnest-fintech.co.in/' name='Earnest Fintech' />
          <SponsorsLogo link='https://employeeforum.unc.edu/' name='Employee Forums' /> */}
        </SponsorsContainer>
      </div>

      {/* <div className='silverSponsors'>
        <h2 className='sponsor-header' data-aos='fade-up'>
          Silver Sponsors
        </h2>
        <SponsorsContainer>
          <SponsorsLogo link='https://www.coursefinder.ai/' name='CourseFinder' />
        </SponsorsContainer>
      </div> */}

      {/* <div className='partners'>
        <h2 className='sponsor-header' data-aos='fade-up'>
          Educational Partner
        </h2>

        <SponsorsContainer>
          <SponsorsLogo link='https://soegis.com/' name='Satguru Overseas Education' />
        </SponsorsContainer>

        <h2 className='sponsor-header' data-aos='fade-up'>
          Health Partner
        </h2>
        <SponsorsContainer>
          <SponsorsLogo link='https://lifehealthfoods.co.in/' name='Life health foods' />
        </SponsorsContainer>

        <h2 className='sponsor-header' data-aos='fade-up'>
          Other Sponsors
        </h2>
        <SponsorsContainer cols={3}>
          <SponsorsLogo link='https://www.threeway.studio/' name='Threeway studio' />
          <SponsorsLogo link='https://www.instagram.com/trays.eatery/' name='Trays eatery' />
          <SponsorsLogo link='http://www.urbantrekkers.org/home' name='Urban Trekkers' />
        </SponsorsContainer>
      </div> */}
    </div>
  );
}

export default Sponsors;

export const SponsorsLogo = ({ name, link, img }) => {
  return (
    <Grid
      item
      md={3}
      xs={6}
      data-aos='fade-up' /*data-aos-delay="400"*/
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <a href={link} target='_blank' rel='noreferrer' style={{ textDecoration: "none" }}>
        <Tooltip title={name} arrow placement='top'>
          {img ? (
            <img src={img} alt={name} style={{ width: "200px" }} />
          ) : (
            <h1 style={{ color: "#dbdbdb", fontSize: "2rem", textShadow: "none", margin: 0 }}>
              {name}
            </h1>
          )}
        </Tooltip>
      </a>
    </Grid>
  );
};

export const SponsorsContainer = ({ children, style, cols }) => {
  return (
    <Grid
      container
      spacing={6}
      data-aos='fade-up' /*data-aos-delay="400"*/
      style={{
        ...style,
        display: "grid",
        placeItems: "center",
        gap: "1rem",
      }}
      sx={{
        gridTemplateColumns: { md: `repeat(${cols || 1},1fr)` },
      }}>
      {children}
    </Grid>
  );
};
