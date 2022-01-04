import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import image from "./DJACMLOGO.png";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from "@mui/material/Container";

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

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const anchor = "left";
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: "#000324",height:'100%' }}
    >
      <List>
        <Link className="mobileDrawer" to={`/`}>
          <ListItem button key="home">
            <ListItemIcon>
              <HiOutlineArrowNarrowRight className="mobileDrawer" />
            </ListItemIcon>
            <ListItemText>
            <span className="mobileDrawer">Home</span>
            </ListItemText>
          </ListItem>
        </Link>
        {["events", "committee", "contact-us"].map((text, index) => (
          <Link className="mobileDrawer" to={`/${text}`}>
            <ListItem button key={text}>
              <ListItemIcon>
                <HiOutlineArrowNarrowRight className="mobileDrawer" />
              </ListItemIcon>
              <ListItemText>
              <span className="mobileDrawer">{text}</span></ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
      {/* <hr style={{color:"white"}}/> */}
    </Box>
  );

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
          <Link to="/"> <img width="89" style={{ marginLeft: '15px' }} src={image} alt="acmIcon" /> </Link>  
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <GiHamburgerMenu />
            </IconButton> */}
            <React.Fragment key={anchor}>
              <Button
                style={{ fontSize: "2rem" }}
                size="large"
                color="inherit"
                onClick={toggleDrawer(anchor, true)}
              >
                <GiHamburgerMenu />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
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
              {/* <span>
                <Link disabled={value.home} className="headerLinks" to="/">
                  <MenuItem
                    style={{}}
                    className="mobileNav"
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">Home</Typography>
                  </MenuItem>
                </Link>
                <Link
                  disabled={value.events}
                  className="headerLinks"
                  to="/events"
                >
                  <MenuItem className="mobileNav" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Events</Typography>
                  </MenuItem>
                </Link>
                <Link
                  disabled={value.Committee}
                  className="headerLinks"
                  to="/committee"
                >
                  <MenuItem className="mobileNav" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Committee</Typography>
                  </MenuItem>
                </Link> */}
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
              {/* <Link
                  disabled={value.contactUS}
                  className="headerLinks"
                  to="/contact-us"
                >
                  <MenuItem className="mobileNav" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Contact Us</Typography>
                  </MenuItem>
                </Link>
              </span> */}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img width="89" style={{ marginLeft: '207px' }} src={image} alt="acmIcon" />
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
                to="/events"
              >
                <button disabled={value.events} className="btn">
                  Events
                </button>
              </Link>
              <Link
                disabled={value.Committee}
                className="headerLinks"
                to="/committee"
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
                to="/contact-us"
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
