import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import "./HomePage.css";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function About() {
    return (
        <Grid container mb={10} sx={{ justifyContent: "center", alignItems: "center" }}>
            <Grid item xs={12} md={8} p={5} py={10} sx={{ borderRadius: "4px", textAlign: "left" }}>
                <div>
                    <h2> About Us </h2>
                    <p className="aboutPara">
                        ACM, the world's largest educational and scientific computing society,
                        delivers resources that advance computing as a science and a profession.
                        Since its inception in our college in 2007-2008, DJSCOE-ACM has established
                        itself as a successful committee, not only in terms of the number of members
                        who have become a part of the ACM family but also in terms of the activities
                        and seminars/workshops that have been conducted.
                    </p>
                    <p className="aboutPara">
                        Don't let us convince you about our success.
                        Let our three consecutive Best Student Chapter
                        of the Year awards do the talking.
                    </p>
                </div>
            </Grid>
            <Grid md={3} xs={12}>
                <Item sx={{ backgroundColor: 'transparent' }}>
                    <img src="https://drive.google.com/uc?export=download&id=1Iq-QR5_ojRc9c9e4vkzjrSdU0jvjMDki" className="aboutImg" alt="aboutImg" />
                </Item>
            </Grid>
        </Grid>
    )
}