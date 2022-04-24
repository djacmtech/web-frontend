import { Grid } from "@mui/material";
import React from "react";
import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";

const INITIAL_FORM_STATE = {
  email: "",
  sapId: "",
  password: "",
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  sapId: Yup.number()
    .min(11, "Invalid Sap ID")
    .integer()
    .typeError("Please enter a valid SapId")
    .required("Required"),
  // password: Yup.string()
  //   .min(8, "Password should atleast contain 8 characters")
  //   .required("Required"),
});

function Login(props) {
  let axios = require("axios");

  return (
    <>
      <Grid container>
        <Grid item>
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              // console.log(values)
              var data = JSON.stringify({
                "email": `${values.email}`,
                "password": `${values.password}`,
              });

              var config = {
                method: "post",
                url: "https://djacmdev.pythonanywhere.com/if/login",
                headers: {
                  "Content-Type": "application/json",
                },
                data: data
              };

              axios(config)
                .then(function (response) {
                  console.log('HI')
                  console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                  console.log(error);
                });
            }}
          >
            <Form>
              <Grid
                container
                spacing={4}
                rowSpacing={2}
                sx={{ marginTop: "5px" }}
              >
                <Grid item xs={12}>
                  <TextField name="email" label="Email" />
                </Grid>

                <Grid item xs={12}>
                  <TextField name="sapId" label="Sap ID" />
                </Grid>

                <Grid item xs={12}>
                  <TextField name="password" label="Password" type="password" />
                </Grid>
                <Grid item xs={12}>
                  <p
                    style={{
                      color: "black",
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      textAlign: "right",
                      fontWeight: "bold",
                      margin: "0",
                    }}
                  >
                    <span
                      style={{
                        color: "rgba(24, 114, 113, 1)",
                        cursor: "pointer",
                      }}
                    >
                      Forgot Password?
                    </span>
                  </p>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ padding: "3% 0%" }}>
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
                  // onClick={props.openPopup?console.log('HI'):console.log('Hello')}
                >
                  Login
                </Button>
              </Grid>
            </Form>
          </Formik>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
