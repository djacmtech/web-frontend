import {
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
const NavBar = (activePage) => {
  let value = {
    home: false,
    events: false,
    Committee: false,
    Resources: false,
    Blogs: false,
    contactUs: false,
  };
  let page = activePage.activePage.activePage;
  if (page === "Home") value.home = true;
  else if (page === "Events") value.events = true;
  else if (page === "Committee") value.Committee = true;
  else if (page === "Resources") value.Resources = true;
  else if (page === "Blogs") value.Blogs = true;
  else if (page === "ContactUs") value.contactUs = true;

  return (
    <div className="navBar">
      <Paper elevation={3}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="sticky"
            style={{ backgroundColor: "#000324", color: "#dbdbdb" }}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <img
                  width="60"
                  src="https://djacm.co.in/static/images/acm-white-logo.png"
                  alt="acmIcon"
                />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                DJACM
              </Typography>
              <span>
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
                <Link
                  disabled={value.Resources}
                  className="headerLinks"
                  to="/Resources"
                >
                  <button disabled={value.Resources} className="btn">
                    Resources
                  </button>
                </Link>
                <Link
                  disabled={value.Blogs}
                  className="headerLinks"
                  to="/Blogs"
                >
                  <button disabled={value.Blogs} className="btn">
                    Blogs
                  </button>
                </Link>
                <Link
                  disabled={value.contactUs}
                  className="headerLinks"
                  to="/ContactUs"
                >
                  <button disabled={value.contactUs} className="btn">
                    Contact Us
                  </button>
                </Link>
              </span>
            </Toolbar>
          </AppBar>
        </Box>
      </Paper>
    </div>
  );
};

export default NavBar;
