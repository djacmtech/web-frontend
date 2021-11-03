import { Paper,AppBar,Toolbar,IconButton,Typography,Box,Button } from "@mui/material";
import React from "react";

const NavBar = () => {
  return (
    <div className='navBar'>
      <Paper elevation={3}>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" style={{backgroundColor:'#000324',color:'#dbdbdb'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
              <img width='60' src='https://djacm.co.in/static/images/acm-white-logo.png' alt='acmIcon'/>

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DJACM
          </Typography>
          <span>
          <Button color="inherit">Events</Button>
          <Button color="inherit">Committee</Button>
          <Button color="inherit">Resources</Button>
          <Button color="inherit">Blogs</Button>
          <Button color="inherit">Contact Us</Button>
          </span>
        </Toolbar>
      </AppBar>
    </Box>
      </Paper>
    </div>
  );
};

export default NavBar;
