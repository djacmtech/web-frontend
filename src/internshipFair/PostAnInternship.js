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
import axios from 'axios';

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
        stipend: '',
        duration: '',
        aboutthecompany: '',
        jobDescription: '',
        whoCanApply: '',
        skills: '',
        category: '',
        taskDescription: '',
        perks: ''
    }
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    // const [role, setRole] = useState("");
    // const [formData, setFormData] = useState({
    //     // branch: '',
    //     // job_description: '',
    //     jobPosition: "",
    //     // mandatory_skills: '',
    //     // stipend_low_range: '',
    //     // stipend_high_range: '',
    //     // perks: '',
    //     // num_of_applications: '',
    //     // duration: '',
    //     // WFH: '',
    //     // company_name: '',
    //     // deadline: '',
    // });

    //   functions
    // const handleChanges = (event) => {
    //     setValues({
    //         ...values,
    //         [event.target.name]: event.target.value,
    //     });
    //     console.log(values);
    // };

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
                                    // validationSchema={FORM_VALIDATION}
                                    onSubmit={(values) => {
                                        console.log(values);

                                        var data = JSON.stringify({
                                            "role": `${values.jobPosition}`,
                                            "stipend_low_range": `${values.stipend_low_range}`,
                                            "stipend_high_range": `${values.stipend_high_range}`,
                                            "company_name": `${values.company_name}`,
                                            "job_description": `${values.job_description}`,
                                            "mandatory_skills": `${values.mandatory_skills}`,
                                            "perks": `${values.perks}`,
                                            "duration": `${values.duration}`,
                                            "branch": `${values.branch}`,
                                            "WFH": `${values.WFH}`,
                                            "num_of_applications": `${values.num_of_applications}`,



                                        });
                                        var config = {
                                            method: 'post',
                                            url: 'https://djacmdev.pythonanywhere.com/if/job-create',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            data: data
                                        };
                                        axios(config)
                                            .then(function (response) {
                                                console.log(JSON.stringify(response.data));
                                            })
                                            .catch(function (error) {
                                                console.log(error);
                                            });
                                    }}


                                >
                                    <Form>

                                        <Grid container spacing={4} rowSpacing={4}>
                                            <Grid item md={12} xs={12}>
                                                <TextField
                                                    name="jobposition"
                                                    // name='jobPosition'
                                                    label='Job Position'
                                                    required
                                                // value={formData.jobPosition}
                                                // onClick={(e) => setFormData({ ...formData, jobPosition: e.target.value })}
                                                // onChange={handleChanges}
                                                />
                                            </Grid>



                                            <Grid item md={12} xs={12}>
                                                <ToggleButtonGroup
                                                    name="onOff"
                                                    color="success"
                                                    value={alignment}
                                                    onChange={handleChange}
                                                    exclusive
                                                >
                                                    <ToggleButton name="onoff" value="online" >Online</ToggleButton>
                                                    <ToggleButton name="onoff" value="offline" >Offline</ToggleButton>
                                                </ToggleButtonGroup>
                                            </Grid>

                                            <Grid item md={6} xs={12}>
                                                <TextField
                                                    name="stipend_low_range"
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
                                                    name="company_name"
                                                    id="outlined-multiline-static"
                                                    label="About the Company"
                                                    multiline
                                                    rows={4}
                                                />
                                            </Grid>
                                            <Grid item md={12} xs={12}>
                                                <TextField
                                                    name="jobDescription"
                                                    id="outlined-multiline-static"
                                                    label="Job description"
                                                    multiline
                                                    rows={4}
                                                />
                                            </Grid>

                                            <Grid item md={12} xs={12}>
                                                <TextField
                                                    name="whoCanApply"
                                                    id="outlined-multiline-static"
                                                    label="Who can apply?"
                                                    multiline
                                                    rows={4}
                                                />
                                            </Grid>

                                            <Grid item md={6} xs={12}>
                                                <TextField
                                                    name="mandatory_skills"
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
                                                        name="taskDescription"
                                                        id="outlined-multiline-static"
                                                        label="Task Description"
                                                        multiline
                                                        rows={4}
                                                    />
                                                </Grid> : ''
                                            }

                                            <Grid item md={12} xs={12}>
                                                <TextField
                                                    name="perks"
                                                    id="outlined-multiline-static"
                                                    label="Perks"
                                                    multiline
                                                    rows={4}
                                                />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Button sx={{ width: '100%', backgroundColor: 'rgba(24, 114, 113, 1)', borderRadius: '4px', color: 'white', border: '2px solid white', height: '50px', textTransform: 'none', fontWeight: 'bold', "&:hover": { color: "rgba(24, 114, 113, 1)", backgroundColor: "rgba(24, 114, 113, 0.4)", border: '2px solid rgba(24, 114, 113, 1)' } }} type='submit' >Submit</Button>
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
