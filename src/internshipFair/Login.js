import { Grid, Button } from '@mui/material'
import React, { useState } from 'react'
import Popup from './Popup'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextField from './TextField'

const INITIAL_FORM_STATE = {
    email: "",
    password: ""
}

const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Required"),
    password: Yup.string()
        .min(8, "Password should atleast contain 8 characters")
        .required("Required")
});

function Login() {

    const [openPopup, setOpenPopup] = useState(true)
    var axios = require('axios');

    return (
        <>
            <Grid container>
                <Grid item>
                    <Formik
                        initialValues={{ ...INITIAL_FORM_STATE }}
                        validationSchema={FORM_VALIDATION}
                        onSubmit={(values) => {
                            var FormData = require('form-data');
                            var data = new FormData();
                            data.append('email', `${values.email}`);
                            data.append('password', `${values.password}`);

                            var config = {
                                method: 'post',
                                url: 'https://djacmdev.pythonanywhere.com/if/login',
                                data: data
                            };

                            axios(config)
                                .then(function (response) {
                                    localStorage.setItem('token', response.data.token)
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });

                        }}
                    >
                        <Form>

                            <Grid container spacing={4} rowSpacing={2} sx={{ marginTop: '5px' }}>
                                <Grid item xs={12}>
                                    <TextField
                                        name="email"
                                        label='Email'
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        name="password"
                                        label='Password'
                                        type='password'
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <p style={{ color: 'black', fontFamily: 'Poppins', fontSize: '12px', textAlign: 'right', fontWeight: 'bold', margin: '0' }}><span style={{ color: 'rgba(24, 114, 113, 1)', cursor: 'pointer' }}> Forgot Password? </span></p>

                                </Grid>
                                <Grid item xs={12} sx={{ padding: '0% 0%' }}>
                                    <Button sx={{ width: '100%', backgroundColor: 'rgba(24, 114, 113, 1)', borderRadius: '4px', color: 'white', border: '2px solid white', height: '50px', textTransform: 'none', fontWeight: 'bold', "&:hover": { color: "rgba(24, 114, 113, 1)", backgroundColor: "rgba(24, 114, 113, 0.4)", border: '2px solid rgba(24, 114, 113, 1)' } }} type='submit'>Login</Button>
                                </Grid>

                            </Grid>

                        </Form>
                    </Formik>

                </Grid>
            </Grid>
        </>
    )
}

export default Login