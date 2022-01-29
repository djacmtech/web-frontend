import { Grid } from '@mui/material'
import React from 'react'

function Sponsors() {
    return (
        <div id='Sponsors' style={{ backgroundColor: '#001521', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '4%' }}>
            <h1 style={{ fontFamily: 'Righteous', backgroundImage: 'linear-gradient(180deg, #FF8A50 22.99%, #F54951 79.15%)', backgroundClip: 'text', WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', marginTop: '4%' }}>Sponsors</h1>
            <div className="goldSponsors">
                <h5 style={{ textAlign: 'center' }}>Gold Sponsors</h5>
                <Grid container spacing={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item>
                        <a href='https://devfolio.co/' target='_blank' rel="noreferrer"><img src="https://drive.google.com/uc?export=download&id=1uOeQAKm5FdEnpN3ZVH7rUUllxwt7zXkd" alt="devfolio" style={{ width: '200px' }} /></a>
                    </Grid>
                    <Grid item>
                        <a href='https://polygon.technology/' target='_blank' rel="noreferrer"><img src="https://drive.google.com/uc?export=download&id=1q9AAOI40QJW1Fi5MaeYK3esfz1hhG8Zm" alt="polygon" style={{ width: '200px' }} /></a>
                    </Grid>
                </Grid>
            </div>
            <div className="silverSponsors" style={{ margin: '5%' }}>
                <h5 style={{ textAlign: 'center' }}>Silver Sponsors</h5>
                <Grid container spacing={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <Grid item>
                        <a href='https://celo.org/' target='_blank' rel="noreferrer"><img src="https://drive.google.com/uc?export=download&id=1sS7IG73jrpKUq8oLaTPsIcNeq4uzgSJS" alt="celo" style={{ width: '200px' }} /></a>
                    </Grid>
                    <Grid item>
                        <a href='https://tezos.com/' target='_blank' rel="noreferrer"><img src="https://drive.google.com/uc?export=download&id=1_LeBv0BPwHgCYiG3l2pH8db41pATZ32N" alt="tezos" style={{ width: '200px' }} /></a>
                    </Grid>
                    <Grid item>
                        <a href='https://filecoin.io/' target='_blank' rel="noreferrer"><img src="https://drive.google.com/uc?export=download&id=1LrLF1a4ROUJSklxJXSUU-gT6c17lrEbZ" alt="filecoin" style={{ width: '200px' }} /></a>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Sponsors
