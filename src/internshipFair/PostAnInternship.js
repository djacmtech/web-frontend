import { Box, Grid, Button, Card, CardContent } from '@mui/material'
import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextField from './TextField'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { withStyles } from "@material-ui/core/styles";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function PostAnInternship() {

    const FORM_VALIDATION = Yup.object().shape({
        jobposition: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid Email').required('Required'),
        sapId: Yup.number().min(11, 'Invalid Sap ID').integer().typeError('Please enter a valid SapId').required('Required'),
        password: Yup.string().min(8, 'Password should atleast contain 8 characters').required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password should match').required('Required')
    });
    const [tick, setTick] = useState(false)
    const [alignment, setAlignment] = useState('online');

    const INITIAL_FORM_STATE = {
        jobposition: '',
        onOff: alignment,

    }
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <>
            <Box sx={{ backgroundColor: 'white', fontFamily: 'Poppins', padding: { md: '4% 15%', sx: '2% 8%', xs: '1% 5%' } }}>
                <Card sx={{ padding: '0% 2%' }}>
                    <CardContent>
                        <Grid container>
                            <Grid item>
                                <p style={{ fontFamily: 'Poppins', letterSpacing: '0', fontSize: '150%' }}>
                                    Post new job profile
                                </p>
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
                                            <Grid item md={12} xs={12}>
                                                <TextField
                                                    name="jobposition"
                                                    label='Job Position'
                                                    required
                                                />
                                            </Grid>



                                            <Grid item md={12} xs={12}>
                                                <ToggleButtonGroup
                                                    name="onOff"
                                                    color="success"
                                                    value={alignment}
                                                    exclusive
                                                    onChange={handleChange}
                                                >
                                                    <ToggleButton name="onOff" value="online">Online</ToggleButton>
                                                    <ToggleButton name="onOff" value="offline">Offline</ToggleButton>
                                                </ToggleButtonGroup>
                                            </Grid>

                                            <Grid item md={6} xs={12}>
                                                <TextField
                                                    name="stipend"
                                                    label='Minimum Stipend'
                                                    type='number'
                                                />
                                            </Grid>

                                            <Grid item md={6} xs={12}>
                                                <TextField
                                                    name="duration"
                                                    label='Minimum Duration'
                                                />
                                            </Grid>

                                            <Grid item md={12} xs={12}>
                                                <TextField
                                                    name="aboutthecompany"
                                                    id="outlined-multiline-static"
                                                    label="About the Company"
                                                    multiline
                                                    rows={4}
                                                />
                                            </Grid>
                                            <Grid item md={12} xs={12}>
                                                <TextField
                                                    name="aboutthecompany"
                                                    id="outlined-multiline-static"
                                                    label="Job description"
                                                    multiline
                                                    rows={4}
                                                />
                                            </Grid>

                                            <Grid item md={12} xs={12}>
                                                <TextField
                                                    name="aboutthecompany"
                                                    id="outlined-multiline-static"
                                                    label="Who can apply?"
                                                    multiline
                                                    rows={4}
                                                />
                                            </Grid>

                                            <Grid item md={6} xs={12}>
                                                <TextField
                                                    name="skills"
                                                    label='Skills'
                                                />
                                            </Grid>

                                            <Grid item md={6} xs={12}>
                                                <TextField
                                                    name="category"
                                                    label='Category'
                                                />
                                            </Grid>

                                            <Grid item md={12} xs={12}>
                                                <FormControlLabel
                                                    value="end"
                                                    control={<Checkbox />}
                                                    label="Does the candidates require to attempt a task before the interview?"
                                                    onClick={() => setTick(!tick)}
                                                    labelPlacement="end"
                                                />
                                            </Grid>

                                            {
                                                tick ? <Grid item md={12} xs={12}>
                                                    <TextField
                                                        name="aboutthecompany"
                                                        id="outlined-multiline-static"
                                                        label="Task Description"
                                                        multiline
                                                        rows={4}
                                                    />
                                                </Grid> : ''
                                            }

                                            <Grid item md={12} xs={12}>
                                                <TextField
                                                    name="aboutthecompany"
                                                    id="outlined-multiline-static"
                                                    label="Perks"
                                                    multiline
                                                    rows={4}
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
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default PostAnInternship