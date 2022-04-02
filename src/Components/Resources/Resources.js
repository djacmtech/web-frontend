import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { Tabs, Tab, Divider } from "@mui/material";
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Resources = () => {
  const [value, setValue] = React.useState(0);
  const [resources, setResources] = useState([]);
  const theme = useTheme();
  const color="3CF7FB";
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  useEffect(() => {
    (async () => {
      let resData;
      try {
        let response = await fetch(
          "https://djacmdev.pythonanywhere.com/api/resources/?format=json",
          {
            method: "GET",
          }
        );
        resData = await response.json();
        console.log(resData);
        setResources(resData);
        console.log(resources);
      } catch (error) {
        console.log("Error" + error);
        resData = [];
      }
    })();
  }, []);

  return (
    <div>
      <Header activePage="Resources" />
        <h1 style={{ padding: "2%" }}>Resources</h1>
        <center>
        <Box sx={{ backgroundColor:"#0A0E2A" }} fullWidth>
          <AppBar position="static" style={{backgroundColor:"#0A0E2A"}}>
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#3CF7FB",
                 }
                }}
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="OS" {...a11yProps(0)} style={{fontSize:"25px"}}/>
              <Tab label="DBMS" {...a11yProps(1)} style={{fontSize:"25px"}}/>
              {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={3}
                  alignContent="flex-start"
                  justifyContent="center"
                  marginleft={40}
                  marginright={40}
                >
                  {resources.map((card, index) => {
                    if (card.subject_name == "Operating System") {
                      return (
                        <Grid item xs={12} sm={4} md={4} key={index}>
                          <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea href={card.file} target="_blank">
                              <CardMedia
                                component="img"
                                height="140"
                                image="https://store.hp.com/app/assets/images/uploads/prod/what-is-my-operating-system-hero1573502075719107.jpg"
                                alt="file"
                              />
                              <CardContent>
                                <Typography
                                  gutterBottom
                                  variant="h5"
                                  component="span"
                                >
                                  {card.topic_name}
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Grid>
                      );
                    }
                  })}
                </Grid>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={3}
                  alignContent="flex-start"
                  justifyContent="center"
                  marginleft={40}
                  marginright={40}
                >
                  {resources.map((card, index) => {
                    if (card.subject_name == "Database Management System") {
                      return (
                        <Grid item xs={12} sm={4} md={4} key={index}>
                          <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea href={card.file} target="_blank">
                              <CardMedia
                                component="img"
                                height="140"
                                image="https://www.itsguru.com/wp-content/uploads/2020/05/The-Considerations-And-Perks-Of-Choosing-A-DBMS-ITs-Guru.png"
                                alt="file"
                              />
                              <CardContent>
                                <Typography
                                  gutterBottom
                                  variant="h5"
                                  component="div"
                                >
                                  {card.topic_name}
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Grid>
                      );
                    }
                  })}
                </Grid>
              </Box>
            </TabPanel>
            {/* <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel> */}
          </SwipeableViews>
        </Box>
      </center>
      <Divider></Divider>
    </div>
  );
};

export default Resources;
