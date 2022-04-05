import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'
import { Grid, Button } from '@mui/material'

function Popup(props) {
    const { title, children, openPopup, setOpenPopup } = props;
    return (
        <>
            <Dialog open={openPopup}>
                <DialogContent>
                    {children}
                </DialogContent>
                <Grid item xs={12} sx={{ padding: '3% 5%' }}>
                    <Button sx={{ width: '100%', backgroundColor: 'rgba(24, 114, 113, 1)', borderRadius: '4px', color: 'white', border: '2px solid white', height: '50px', textTransform: 'none', fontWeight: 'bold', "&:hover": { color: "rgba(24, 114, 113, 1)", backgroundColor: "rgba(24, 114, 113, 0.4)", border: '2px solid rgba(24, 114, 113, 1)' } }} type='submit' onClick={() => setOpenPopup(false)}>Login</Button>
                </Grid>
            </Dialog>
        </>
    )
}

export default Popup