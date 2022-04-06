import { Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import img from '../Assets/LoginFair.png'
import logo from '../Assets/DJACMLOGODARK.png'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextField from './TextField'
import Popup from './Popup'
import Login from './Login'

const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    sapId: '',
    password: '',
    confirmPassword: ''
}

const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid Email').required('Required'),
    sapId: Yup.number().min(11, 'Invalid Sap ID').integer().typeError('Please enter a valid SapId').required('Required'),
    password: Yup.string().min(8, 'Password should atleast contain 8 characters').required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password should match').required('Required')
});

function SignUp() {

    const [openPopup, setOpenPopup] = useState(false)

    return (
        <>
            <Grid container sx={{ height: { md: '100vh', sm: '100vh', xs: '100vh' }, backgroundColor: 'white' }}>
                <Grid item md={3.5} sx={{ display: { md: 'inline', sm: 'none', xs: 'none' } }}>
                    <img src={img} style={{ width: '100%', height: '100%' }} />
                </Grid>
                <Grid item md={8.5} sx={{ height: '100%' }}>
                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5% 10%', flexDirection: 'column', height: '95%' }}>
                        <Grid item style={{ width: '100%', textAlign: 'left' }}>
                            <img src={logo} />
                        </Grid>
                        <Grid item style={{ width: '100%', textAlign: 'left' }}>
                            <h2 style={{ textTransform: 'uppercase', fontFamily: 'Alumni Sans, sans-serif', color: 'rgba(24, 114, 113, 1)', margin: '5px 0px' }}>Create Account</h2>
                            <p style={{ margin: '0', padding: '0', color: '#2D3748', fontFamily: 'Poppins', fontWeight: 'light', fontSize: '12px' }}>If there is any note to add then here</p>
                        </Grid>
                        <Grid item sx={{ width: '100%', marginTop: '3%' }}>

                            <Formik
                                initialValues={{ ...INITIAL_FORM_STATE }}
                                validationSchema={FORM_VALIDATION}
                                onSubmit={(values) => {
                                    console.log(values);
                                }}
                            >
                                <Form>

                                    <Grid container spacing={4} rowSpacing={4}>
                                        <Grid item xs={6}>
                                            <TextField
                                                name="firstName"
                                                label='First Name'
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <TextField
                                                name="lastName"
                                                label='Last Name'
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <TextField
                                                name="email"
                                                label='Email'
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <TextField
                                                name="sapId"
                                                label='Sap ID'
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <TextField
                                                name="password"
                                                label='Password'
                                                type='password'
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <TextField
                                                name="confirmPassword"
                                                label='Confirm Password'
                                                type='password'
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Button sx={{ width: '100%', backgroundColor: 'rgba(24, 114, 113, 1)', borderRadius: '4px', color: 'white', border: '2px solid white', height: '50px', textTransform: 'none', fontWeight: 'bold', "&:hover": { color: "rgba(24, 114, 113, 1)", backgroundColor: "rgba(24, 114, 113, 0.4)", border: '2px solid rgba(24, 114, 113, 1)' } }} type='submit'>Create Account</Button>
                                        </Grid>

                                    </Grid>

                                </Form>
                            </Formik>

                        </Grid>
                        <Grid item>
                            <p style={{ color: 'black', fontFamily: 'Poppins', fontSize: '10px' }}>Already have an account?<span style={{ color: 'rgba(24, 114, 113, 1)', cursor: 'pointer' }} onClick={() => setOpenPopup(true)}> Login </span></p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Popup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <Login />
            </Popup>
        </>
    )
}

export default SignUp