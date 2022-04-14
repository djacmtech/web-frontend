import { Dialog, DialogContent } from '@mui/material'
import React from 'react'
import { Grid, Button } from '@mui/material'
import { DialogTitle } from '@material-ui/core';

function Popup(props) {
    const { children, openPopup, setOpenPopup } = props;
    return (
        <>
            <Dialog open={openPopup}>
                <DialogTitle>
                    <Grid container sx={{ display: 'flec', justifyContent: 'space-between', alignItems: 'center' }}>

                        <Grid item>
                            <h2 style={{ textTransform: 'uppercase', fontFamily: 'Alumni Sans, sans-serif', color: 'rgba(24, 114, 113, 1)', margin: '0' }}>Login</h2>
                            <p style={{ color: 'black', fontFamily: 'Poppins', fontSize: '10px', margin: '0' }}>Don't have a account?<span style={{ color: 'rgba(24, 114, 113, 1)', cursor: 'pointer' }}> SignUp </span></p>
                        </Grid>
                        <Grid item onClick={() => setOpenPopup(false)} sx={{ cursor: 'pointer' }}>
                            x
                        </Grid>
                    </Grid>
                </DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>
                <Grid item xs={12} sx={{ padding: '3% 5%' }}>
                    <Button sx={{ width: '100%', backgroundColor: 'rgba(24, 114, 113, 1)', borderRadius: '4px', color: 'white', border: '2px solid white', height: '50px', textTransform: 'none', fontWeight: 'bold', "&:hover": { color: "rgba(24, 114, 113, 1)", backgroundColor: "rgba(24, 114, 113, 0.4)", border: '2px solid rgba(24, 114, 113, 1)' } }} type='submit'>Login</Button>
                </Grid>
            </Dialog>
        </>
    )
}

export default Popup