import { Box, Grid, Button, Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import axios from "axios";
import { useEffect } from "react";

const INITIAL_FORM_STATE = {
  email: "",
  sapId: "",
  year: "",
  branch: "",
  resume: "",
  domains: "",
  skills: "",
  project: "",
  phone: "",
};

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("This field is Required"),
  sapId: Yup.number()
    .min(11, "Invalid Sap ID")
    .integer()
    .typeError("Please enter a valid SapId")
    .required("This field is Required"),
  year: Yup.number().required("This field is Required"),
  branch: Yup.string().required("This field is Required"),
  resume: Yup.string().required("This field is Required"),
  domains: Yup.string().required("This field is Required"),
  skills: Yup.string().required("This field is Required"),
  project: Yup.string().required("This field is Required"),
  phone: Yup.string().required("This field is Required"),
  // .matches(/^[6-9]\d{9}$/, "Phone number is not valid"),
});

const Profilepage = () => {

  const [profile, setProfile] = useState([]);

  var config = {
    method: 'get',
    url: 'https://djacmdev.pythonanywhere.com/if/student',
    headers: { 
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  };
  
  useEffect(()=> {
    axios(config)
    .then(function (response) {
      console.log(response.data);
      setProfile(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [])

  return (
    <div style={{ backgroundColor: "#F8F8F8" }}>
      <center>
        <div
          style={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "36px",
            color: "black",
            paddingTop: "40px",
          }}
        >
          Profile Page
        </div>
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
                    fontWeight: "600",
                    letterSpacing: "1%",
                    fontSize: "36px",
                    // lineHeight:"25.4px",
                    color: "#187271",
                  }}
                >
                  SAYLI PEDNEKAR
                </p>
              </Grid>
              <Grid item sx={{ width: "100%", marginTop: "3%" }}>
                <Formik
                  initialValues={{ ...INITIAL_FORM_STATE }}
                  validationSchema={FORM_VALIDATION}
                  // onSubmit={(values) => {
                  //   // console.log(values);
                  //   var FormData = require("form-data");
                  //   var data = new FormData();
                  //   data.append("email_id", `${values.email}`);
                  //   data.append("phone_no", `${values.phone}`);
                  //   data.append("sap_id", `${values.sapId}`);
                  //   data.append("current_year", `${values.year}`);
                  //   data.append("department", `${values.branch}`);
                  //   data.append("domains", `${values.domains}`);
                  //   data.append("skills", `${values.skills}`);
                  //   data.append("resume_drive_link", `${values.resume}`);
                  //   data.append("project_drive_link", `${values.project}`);

                  //   var config = {
                  //     method: "get",
                  //     url: "http://djacmdev.pythonanywhere.com/if/student",
                  //     headers: {
                  //       // Authorization: `Token ${token}`,
                  //       'Authorization': `Token ${localStorage.getItem('token')}`,
                  //     },
                  //     data: data,
                  //   };

                  //   axios(config)
                  //     .then(function (response) {
                  //       console.log(JSON.stringify(response.data));
                  //     })
                  //     .catch(function (error) {
                  //       console.log(error);
                  //     });
                  // }}
                >
                  <Form>
                    <Grid container spacing={4} rowSpacing={4}>
                      <Grid item md={6} xs={12}>
                        <div>Email address</div>
                        <TextField
                          name="email"
                          placeholder={profile.email_id}
                          InputProps={{
                            readOnly:true
                          }}
                          // type="email"
                          // required
                          style={{ color: "#187271" }}
                        />
                      </Grid>

                      <Grid item md={6} xs={12}>
                        <div>Phone Number</div>
                        <TextField
                          name="phone"
                          placeholder={profile.phone_no}
                          InputProps={{
                            readOnly:true
                          }}
                          // required
                        />
                      </Grid>

                      <Grid item md={6} xs={12}>
                        <div>SAP ID</div>
                        <TextField 
                          name="sapId" 
                          placeholder={profile.sap_id}
                          InputProps={{
                            readOnly:true
                          }}
                        />
                      </Grid>

                      <Grid item md={6} xs={0} className="extraGrid"></Grid>

                      <Grid item md={6} xs={12}>
                        <div>Year</div>
                        <TextField
                          name="year"
                          placeholder={profile.graduation_year}
                          InputProps={{
                            readOnly:true
                          }}
                        />
                      </Grid>

                      <Grid item md={6} xs={12}>
                        <div>Branch</div>
                        <TextField
                          name="branch"
                          placeholder={profile.department}
                          InputProps={{
                            readOnly:true
                          }}
                        />
                      </Grid>

                      <Grid item md={6} xs={12}>
                        <div>Domains</div>
                        <TextField
                          name="domains"
                          placeholder={profile.domains}
                          InputProps={{
                            readOnly:true
                          }}
                          // required
                        />
                      </Grid>

                      <Grid item md={6} xs={0} className="extraGrid"></Grid>

                      <Grid item md={6} xs={12}>
                        <div>Skills</div>
                        <TextField
                          name="skills"
                          placeholder={profile.skills}
                          InputProps={{
                            readOnly:true
                          }}
                          // required
                        />
                      </Grid>

                      <Grid item md={6} xs={0} className="extraGrid"></Grid>

                      <Grid item md={6} xs={12}>
                        <div>Resume Link</div>
                        <TextField
                          name="resume"
                          placeholder={profile.resume_drive_link}
                          InputProps={{
                            readOnly:true
                          }}
                          // type="url"
                          // required
                        />
                      </Grid>

                      <Grid item md={6} xs={0} className="extraGrid"></Grid>

                      <Grid item md={6} xs={12}>
                        <div>Project Link</div>
                        <TextField
                          name="project"
                          placeholder={profile.project_drive_link}
                          InputProps={{
                            readOnly:true
                          }}
                          type="url"
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
