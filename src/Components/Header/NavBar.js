import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import image from "./DJACMLOGO.png";

// import MenuIcon from '@mui/icons-material/Menu';
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

const NavBar = (activePage) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  let value = {
    home: false,
    events: false,
    Committee: false,
    Resources: false,
    Blogs: false,
    contactUS: false,
  };
  let page = activePage.activePage.activePage;
  if (page === "Home") value.home = true;
  else if (page === "Events") value.events = true;
  else if (page === "Committee") value.Committee = true;
  else if (page === "Resources") value.Resources = true;
  else if (page === "Blogs") value.Blogs = true;
  else if (page === "contactUS") value.contactUS = true;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      style={{
        backgroundColor: "#0A0E2A",
        // transform: "translateY(-12px)",
        color: "#dbdbdb",
      }}
      position="sticky"
    >
      <Container maxWidth="l">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img width="60" src={image} alt="acmIcon" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <GiHamburgerMenu />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <span>
                <Link disabled={value.home} className="headerLinks" to="/">
                  <MenuItem
                    style={{
                   
                    }}
                    className="mobileNav"
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">Home</Typography>
                  </MenuItem>
                </Link>
                <Link
                  disabled={value.events}
                  className="headerLinks"
                  to="/Events"
                >
                  <MenuItem
                  
                    className="mobileNav"
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">Events</Typography>
                  </MenuItem>
                </Link>
                <Link
                  disabled={value.Committee}
                  className="headerLinks"
                  to="/Committee"
                >
                  <MenuItem
                  
                    className="mobileNav"
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">Committee</Typography>
                  </MenuItem>
                </Link>
                {/* <Link
                  disabled={value.Resources}
                  className="headerLinks"
                  to="/Resources"
                >
                  <MenuItem
                    style={{
                      backgroundColor: "#000324",
                      color: "white",
                      borderBottom: "3px solid rgb(60, 247, 251)",
                    }}
                    className="mobileNav"
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">Resources</Typography>
                  </MenuItem>
                </Link>
                <Link
                  disabled={value.Blogs}
                  className="headerLinks"
                  to="/Blogs"
                >
                  <MenuItem
                    style={{
                      backgroundColor: "#000324",
                      color: "white",
                      borderBottom: "3px solid rgb(60, 247, 251)",
                    }}
                    className="mobileNav"
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">Blogs</Typography>
                  </MenuItem>
                </Link> */}
                <Link
                  disabled={value.contactUS}
                  className="headerLinks"
                  to="/contactUS"
                >
                  <MenuItem
                    
                    className="mobileNav"
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">Contact Us</Typography>
                  </MenuItem>
                </Link>
              </span>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img width="60" src={image} alt="acmIcon" />
          </Typography>
          <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
            <span className="navLinks">
              <Link disabled={value.home} className="headerLinks" to="/">
                <button disabled={value.home} className="btn">
                  Home
                </button>
              </Link>
              <Link
                disabled={value.events}
                className="headerLinks"
                to="/Events"
              >
                <button disabled={value.events} className="btn">
                  Events
                </button>
              </Link>
              <Link
                disabled={value.Committee}
                className="headerLinks"
                to="/Committee"
              >
                <button disabled={value.Committee} className="btn">
                  Committee
                </button>
              </Link>
              {/* <Link
                disabled={value.Resources}
                className="headerLinks"
                to="/Resources"
              >
                <button disabled={value.Resources} className="btn">
                  Resources
                </button>
              </Link> */}
              {/* <Link disabled={value.Blogs} className="headerLinks" to="/Blogs">
                <button disabled={value.Blogs} className="btn">
                  Blogs
                </button>
              </Link> */}
              <Link
                disabled={value.contactUS}
                className="headerLinks"
                to="/contactUS"
              >
                <button disabled={value.contactUS} className="btn">
                  Contact Us
                </button>
              </Link>
            </span>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
