import React, { useState, useEffect } from 'react'
import { Divider, Grid, TextField } from '@mui/material'
import SquareIcon from '@mui/icons-material/Square';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Button } from '@mui/material';
// import { Input } from '@mui/material';
import './InternshipFair.css'
const StudentCart = () => {
    const Input = styled('input')({
        display: 'none',
    });
    const [items, setItems] = useState([[{ 'company_name': 'hi', 'role': 'hi', 'price': 50 }]])

    const data = [
        {
            name: 'company name',
            role: 'internship role',
            price: '50',
        },
        {
            name: 'company name',
            role: 'internship role',
            price: '50',
        },
        {
            name: 'company name',
            role: 'internship role',
            price: '50',
        }
    ]

    const comp = JSON.parse(localStorage.getItem('CartCompanies'))
    // console.log(comp[0][0])
    useEffect(() => {
        setItems(comp)
    }, [])

    return (
        <div style={{ backgroundColor: 'white', color: 'black', fontFamily: 'Poppins', padding: '3% 3% 3% 9%', height: '100vh' }}>
            <Grid container spacing={4} style={{ padding: '5%' }}>
                <Grid item sm={8} xs={12} className='resCart'>
                    <p style={{ fontSize: '1.5rem' }}>IF Cart</p>
                    <Divider></Divider>
                    <div style={{ padding: '2% 6%' }} className='resCartdiv'>
                        <span style={{ color: 'grey' }}>IF Interview list</span>
                        <span style={{ color: 'grey', float: 'right' }}>Price</span>
                        {items.map((x) => {
                            return <Grid container spacing={0} >
                                {/* <Grid item xs={2}> */}
                                {/* <SquareIcon style={{ fontSize: '2rem' }} /> */}
                                {/* </Grid> */}
                                <Grid item xs={12} style={{ transform: 'translateY(30px)' }}>
                                    <span style={{ color: '#187271', fontWeight: '700', padding: '20px 0' }}>{x[0].company_name}</span>
                                    <br />
                                    <span style={{ color: 'grey' }}>{x[0].role}</span>
                                    <span style={{ color: 'grey', float: 'right' }}>{x[0].price}</span>
                                </Grid>
                            </Grid>
                        })}
                    </div>
                </Grid>
                <Grid item sm={4} xs style={{ backgroundColor: '#187271', color: 'white', padding: '2%' }}>
                    <p style={{ fontSize: '1.3rem', fontWeight: '600' }}>Summary</p>
                    <Divider />
                    <p style={{ fontWeight: '600' }}>Interviews <span style={{ float: 'right' }}>50</span></p>
                    <p style={{ fontWeight: '600' }}>Total <span style={{ float: 'right' }}>50</span></p>
                    <Divider />
                    <p style={{ fontWeight: '600' }}>Grand Total <span style={{ float: 'right' }}>50</span></p>
                    <p style={{ fontSize: '.8rem' }}>Note:<br />
                        Please pay the above amount through gpay to
                        <br />
                        <b> UPID: 34235346536</b>
                    </p>
                    <br />
                    <label htmlFor="icon-button-file">
                        Screenshot :
                        <Input accept="image/*" id="icon-button-file" type="file" />
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera style={{padding:'5px',color:'white',border:'1px white dotted',borderRadius:'50%'}} />
                        </IconButton>
                    </label>
                    <center>

                        <Button variant='contained' style={{ backgroundColor: '#2D3748', padding: '3% 32%' }}>Submit</Button>
                    </center>
                </Grid>
            </Grid></div>
    )
}

export default StudentCart