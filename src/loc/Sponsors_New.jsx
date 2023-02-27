import { Grid, Tooltip } from "@mui/material";
import React from "react";
import xyz_logo from "../Assets/xyz.png";
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
  const drive_url = "https://drive.google.com/uc?export=download&id=";
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
            img={`${drive_url}1oNsLi1garvuatbkdnMw2wR7MXOz5DzpV`}
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
            img={`${drive_url}11-Pj4S6VrYt_rsx69GCULDnY5OOhPrz8`}
            name='Replit'
          />
          <SponsorsLogo
            link='https://solana.com/'
            img={`${drive_url}1-jMZlppknmCgMluHZP-fSHQWvb0V5R5e`}
            name='Solana'
          />
          <SponsorsLogo
            link='https://filecoin.io/'
            img={`${drive_url}10RYEzZnnRVJbFbX1anivfJ0yYvMP6jSv`}
            name='FileCoin'
          />
          <SponsorsLogo
            link='https://zeeve.io/'
            img={`${drive_url}1NljZ7l9FMpH6KI367FInhIJ__3wzowiF`}
            name='Zeeve'
          />
          <SponsorsLogo
            link='https://earnest-fintech.co.in/'
            img={`${drive_url}1TSaiKo1fqcgYZRJi5BlKEnxZSQt_QJgc`}
            name='Earnest Fintech'
          />
          <SponsorsLogo
            link='https://employeeforums.com/'
            img={`${drive_url}1CVjTImksTBhZ6kgzwiEfqDZjdlgX1gDu`}
            name='Employee Forums'
          />
        </SponsorsContainer>
      </div>

      <div className='silverSponsors'>
        <h2 className='sponsor-header' data-aos='fade-up'>
          Silver Sponsors
        </h2>
        <SponsorsContainer>
          <SponsorsLogo
            link='https://www.coursefinder.ai/'
            img={`${drive_url}16q45tQs_5QBW0pWIK4kJwQdMZSgRHKd4`}
            name='CourseFinder'
          />
        </SponsorsContainer>
      </div>

      <div className='partners'>
        <h2 className='sponsor-header' data-aos='fade-up'>
          Educational Partner
        </h2>

        <SponsorsContainer>
          <SponsorsLogo
            link='https://soegis.com/'
            img={`${drive_url}1QAJX461s3OuEyjMUyL-NxLOqAcVaGbqz`}
            name='Satguru Overseas Education'
          />
        </SponsorsContainer>

        <h2 className='sponsor-header' data-aos='fade-up'>
          Health Partner
        </h2>
        <SponsorsContainer>
          <SponsorsLogo
            link='https://lifehealthfoods.co.in/'
            img={`${drive_url}1qwbCNKdDUWnPlInWz_2Gfs2FGGF0tEa1`}
            name='Life health foods'
          />
        </SponsorsContainer>

        <h2 className='sponsor-header' data-aos='fade-up'>
          Energy Partner
        </h2>
        <SponsorsContainer>
          <SponsorsLogo
            link='https://www.jouleshealth.com/'
            img={`${drive_url}1VLhqvqmNEfMtoQTNEzcztGUitdFIQhJG`}
            name='NOCD'
          />
        </SponsorsContainer>

        <h2 className='sponsor-header' data-aos='fade-up'>
          Media Partner
        </h2>
        <SponsorsContainer>
          <SponsorsLogo
            link='https://bere.al/en'
            img={`${drive_url}1Ok8ehmLA-Izp3SwJxaZzCWpF4Bz24zJv`}
            name='BeReal.'
          />
        </SponsorsContainer>

        <h2 className='sponsor-header' data-aos='fade-up'>
          Other Sponsors
        </h2>
        <SponsorsContainer cols={3}>
          <SponsorsLogo
            link='https://www.threeway.studio/'
            img={`${drive_url}1pfcJALTR3H6gBvQvGEb8Gke9EFsvWjOm`}
            name='Threeway studio'
          />
          <SponsorsLogo
            link='https://www.instagram.com/trays.eatery/'
            img={`${drive_url}1ojfBYE4TjJILuA30ABu382uNimY5x0M0`}
            name='Trays eatery'
          />
          <SponsorsLogo
            link='https://www.echo3d.com/'
            img={`${drive_url}1CfIUTEVDGlEDlVo8cA1pBCjVXuxg-1kz`}
            name='Echo 3D'
          />
          <SponsorsLogo
            link='https://www.axure.com/'
            img={`${drive_url}1YR7cnbq-G_3Vj0ln5AM0qHg_UI51rSIN`}
            name='Axure'
          />
          <SponsorsLogo link='https://gen.xyz/' img={xyz_logo} name='.xyz' />
          <SponsorsLogo
            link='https://1password.com/'
            img={`${drive_url}1zFxwFgkuP40gfOlLjgFLY6tYrX05V-Wk`}
            name='1Password'
          />
          <SponsorsLogo
            link='https://www.interviewcake.com/'
            img={`${drive_url}1ugrt1jpF3QKND_Ya7ru1K77FJekhwNQF`}
            name='Interview Cake'
          />
          <SponsorsLogo
            link='https://interviewbuddy.in/'
            img={`${drive_url}1ux9Uird5rPNdM4LvHHEgna3eZfB9akoR`}
            name='interview Buddy'
          />
          <SponsorsLogo
            link='https://givemycertificate.com/'
            img={`${drive_url}1cXVym9-vUOqoew8lKhyWhEGpoyCaf2mz`}
            name='Give My Certificate'
          />
        </SponsorsContainer>
      </div>
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
            <img src={img} alt={name} style={{ width: "200px", objectFit: "cover" }} />
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
        gap: "3rem",
        gridAutoRows: "1fr",
      }}
      sx={{
        gridTemplateColumns: { md: `repeat(${cols || 1},1fr)` },
      }}>
      {children}
    </Grid>
  );
};
