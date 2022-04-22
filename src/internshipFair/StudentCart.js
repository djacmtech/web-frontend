import React from 'react'
import { Divider, Grid } from '@mui/material'
import SquareIcon from '@mui/icons-material/Square';
import { Button } from '@mui/material';
const StudentCart = () => {

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


    return (
        <div style={{ backgroundColor: 'white', color: 'black', fontFamily: 'Poppins', padding: '3% 3% 3% 9%' }}>
            <Grid container spacing={1} style={{ padding: '5%' }}>
                <Grid item sm={8}>
                    <p style={{ fontSize: '1.5rem' }}>IF Cart</p>
                    <Divider></Divider>
                    <div style={{ padding: '2% 6%' }}>
                        <span style={{ color: 'grey' }}>IF Interview list</span>
                        <span style={{ color: 'grey', float: 'right', transform: 'translateX(-110px)' }}>Price</span>
                        {data.map((x) => {
                            return <Grid container spacing={0}>
                                <Grid item xs={2}>
                                    <SquareIcon style={{ fontSize: '7rem' }} />
                                </Grid>
                                <Grid item xs={8} style={{ transform: 'translateY(30px)' }}>
                                    <span style={{ color: '#187271', fontWeight: '700', padding: '20px 0' }}>{x.name}</span>
                                    <br />
                                    <span style={{ color: 'grey' }}>{x.role}</span>
                                    <span style={{ color: 'grey', float: 'right' }}>{x.price}</span>
                                </Grid>
                            </Grid>
                        })}
                    </div>
                </Grid>
                <Grid item sm={4} style={{ backgroundColor: '#187271', color: 'white', padding: '2%' }}>
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
                    <br/>
                    <center>

                        <Button variant='contained' style={{ backgroundColor: '#2D3748',padding:'3% 32%' }}>Submit</Button>
                    </center>
                </Grid>
            </Grid></div>
    )
}

export default StudentCart