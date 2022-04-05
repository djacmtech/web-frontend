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
    branch: '',
    skills: '',
    year: '',
    resume: '',
    domain: '',
}

const FORM_VALIDATION = Yup.object().shape({
    branch: Yup.string().required('Required'),
    skills: Yup.string().required('Required'),
    year: Yup.number().max(4, 'Enter correct year').integer().required('Required'),
    domain: Yup.string().required('Required'),
});

function OnBoarding() {

    const [openPopup, setOpenPopup] = useState(false)

    return (
        <>
            <Grid container sx={{ height: '100vh', backgroundColor: 'white', overflow: 'hidden' }}>
                <Grid item md={3.5}>
                    <img src={img} style={{ width: '100%', height: '100%' }} />
                </Grid>
                <Grid item md={8.5} sx={{ height: '100%' }}>
                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5% 10%', flexDirection: 'column', height: '95%' }}>
                        <Grid item style={{ width: '100%', textAlign: 'left' }}>
                            <img src={logo} />
                        </Grid>
                        <Grid item style={{ width: '100%', textAlign: 'left' }}>
                            <h2 style={{ textTransform: 'uppercase', fontFamily: 'Alumni Sans, sans-serif', color: 'rgba(24, 114, 113, 1)', margin: '5px 0px' }}>OnBoarding</h2>
                            <p style={{ margin: '0', padding: '0', color: '#2D3748', fontFamily: 'Poppins', fontWeight: 'light', fontSize: '12px' }}>Fill in your profile details here</p>
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
                                                name="branch"
                                                label='Branch'
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <TextField
                                                name="skills"
                                                label='Skills'
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <TextField
                                                name="year"
                                                label='Year'
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <TextField
                                                name="resume"
                                                label='Upload Resume'
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <TextField
                                                name="domain"
                                                label='Top 3 Domains'
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Button sx={{ width: '100%', backgroundColor: 'rgba(24, 114, 113, 1)', borderRadius: '4px', color: 'white', border: '2px solid white', height: '50px', textTransform: 'none', fontWeight: 'bold', "&:hover": { color: "rgba(24, 114, 113, 1)", backgroundColor: "rgba(24, 114, 113, 0.4)", border: '2px solid rgba(24, 114, 113, 1)' } }} type='submit'>Submit</Button>
                                        </Grid>

                                    </Grid>

                                </Form>
                            </Formik>

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

export default OnBoarding