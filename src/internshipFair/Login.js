import { Grid } from '@mui/material'
import React, {useState} from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextField from './TextField'

const INITIAL_FORM_STATE = {
    firstName: '',
    sapId: '',
    password: '',
}

const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    sapId: Yup.number().min(11, 'Invalid Sap ID').integer().typeError('Please enter a valid SapId').required('Required'),
    password: Yup.string().min(8, 'Password should atleast contain 8 characters').required('Required'),
});

function Login() {

    const [openPopup, setOpenPopup] = useState(true)

    return (
        <>
            <Grid container>
                <Grid item>
                    <h2 style={{ textTransform: 'uppercase', fontFamily: 'Alumni Sans, sans-serif', color: 'rgba(24, 114, 113, 1)', margin: '0' }}>Login</h2>
                    <p style={{ color: 'black', fontFamily: 'Poppins', fontSize: '10px' }}>Don't have a account?<span style={{ color: 'rgba(24, 114, 113, 1)', cursor: 'pointer' }}> SignUp </span></p>
                </Grid>
                <Grid item>
                    <Formik
                        initialValues={{ ...INITIAL_FORM_STATE }}
                        validationSchema={FORM_VALIDATION}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        <Form>

                            <Grid container spacing={4} rowSpacing={2} sx={{ marginTop: '5px' }}>
                                <Grid item xs={12}>
                                    <TextField
                                        name="firstName"
                                        label='First Name'
                                    />
                                </Grid>


                                <Grid item xs={12}>
                                    <TextField
                                        name="sapId"
                                        label='Sap ID'
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
                                    <p style={{ 
                                        color: 'black',
                                        fontFamily: 'Poppins', 
                                        fontSize: '12px', 
                                        textAlign: 'right', 
                                        fontWeight: 'bold', 
                                        margin: '0' 
                                        }}>
                                        <span style={{ color: 'rgba(24, 114, 113, 1)', cursor: 'pointer' }}>
                                            Forgot Password? 
                                        </span>
                                    </p>
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