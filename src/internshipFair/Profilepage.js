import { Box, Grid, Button, Card, CardContent } from "@mui/material";
import React from "react";
import { Formik, Form } from "formik";
// import * as Yup from "yup";
import TextField from "./TextField";

const Profilepage = () => {
  return (
    <div style={{backgroundColor:"#F8F8F8"}}>
      <center>
        <div style={{fontFamily:"Poppins", fontWeight:"600", fontSize:"36px", color:"black", paddingTop:"40px"}}>Profile Page</div>
      </center>
      <Box
        sx={{
          backgroundColor: "#F8F8F8",
          fontFamily: "Poppins",
          padding: { md: "4% 15%", sx: "2% 8%", xs: "1% 5%" },
        }}
      >
        <Card sx={{ padding: "0% 2%" }}>
          <CardContent>
            <Grid container>
              <Grid item>
                <p
                  style={{
                    fontFamily: "Alumni Sans",
                    fontWeight:"600",
                    letterSpacing: "1%",
                    fontSize: "36px",
                    // lineHeight:"25.4px",
                    color:"#187271"
                  }}
                >
                  SAYLI PEDNEKAR
                </p>
              </Grid>
              <Grid item sx={{ width: "100%", marginTop: "3%" }}>
                <Formik
                  // initialValues={{ ...INITIAL_FORM_STATE }}
                  // validationSchema={FORM_VALIDATION}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  <Form>
                    <Grid container spacing={4} rowSpacing={4}>
                      <Grid item md={6} xs={12}>
                        <div>Email address</div>
                        <TextField
                          name="emailaddress"
                          placeholder="Email address"
                          type="email"
                          required
                          style={{color:"#187271"}}
                        />
                      </Grid>

                      <Grid item md={6} xs={12}>
                        <div>Phone Number</div>
                        <TextField
                          name="stipend"
                          placeholder="Phone Number"
                          required
                        />
                      </Grid>

                      <Grid item md={6} xs={12}>
                        <div>SAP ID</div>
                        <TextField name="sapid" placeholder="SAP ID" required />
                      </Grid>

                      <Grid item md={6} xs={0} sm={{display:"none"}}></Grid>

                      <Grid item md={6} xs={12}>
                        <div>Year</div>
                        <TextField
                          name="year"
                          placeholder="Add year"
                          required
                        />
                      </Grid>

                      <Grid item md={6} xs={12}>
                        <div>Branch</div>
                        <TextField
                          name="branch"
                          placeholder="Add branch"
                          required
                        />
                      </Grid>

                      <Grid item md={6} xs={12}>
                        <div>Domains</div>
                        <TextField
                          name="domains"
                          placeholder="Select domains"
                          required
                        />
                      </Grid>

                      <Grid item md={6} xs={0} sm={{display:"none"}}></Grid>

                      <Grid item md={6} xs={12}>
                        <div>Skills</div>
                        <TextField
                          name="skills"
                          placeholder="Add skills"
                          required
                        />
                      </Grid>

                      <Grid item md={6} xs={0} sm={{display:"none"}}></Grid>

                      <Grid item md={6} xs={12}>
                        <div>Resume Link</div>
                        <TextField
                          name="resume"
                          placeholder="Add resume link"
                          type="url"
                          required
                        />
                      </Grid>

                      <Grid item md={6} xs={{display:"none"}} sm={{display:"none"}}></Grid>

                      <Grid item md={6} xs={12}>
                        <div>Project Link</div>
                        <TextField
                          name="project"
                          label="Add project link"
                          type="url"
                          required
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Button
                          sx={{
                            width: "100%",
                            backgroundColor: "rgba(24, 114, 113, 1)",
                            borderRadius: "4px",
                            color: "white",
                            border: "2px solid white",
                            height: "50px",
                            textTransform: "none",
                            fontWeight: "bold",
                            "&:hover": {
                              color: "rgba(24, 114, 113, 1)",
                              backgroundColor: "rgba(24, 114, 113, 0.4)",
                              border: "2px solid rgba(24, 114, 113, 1)",
                            },
                          }}
                          type="submit"
                        >
                          SAVE CHANGES
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                </Formik>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Profilepage;
