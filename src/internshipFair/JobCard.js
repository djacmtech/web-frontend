import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import {MdLocationPin} from "react-icons/md";
import {BiRupee} from "react-icons/bi";
import {AiFillClockCircle} from "react-icons/ai";

export default function JobCard() {

    return (
        <>
            <Paper className='job-card'>
                <div>
                    <div className='job-card-header'>
                        <span style={{color:'#187271', fontSize:'2rem', fontWeight:'600', fontFamily:'Poppins'}}> Job Position </span>
                        <span style={{color:'#2D3748', fontSize:'1.2rem', fontWeight:'400', fontFamily:'Poppins'}}> Company Name </span>
                        <span> Location </span>
                    </div>
                    <div className='job-card-details'>
                        <div className='job-details-condition'> 
                            <div className='job-details-headings'>
                                <MdLocationPin className='job-details-icon'/> <span style={{color:'#2D3748'}}> MODE </span>
                            </div>
                            <p style={{fontWeight:'500'}}> Online </p> 
                        </div>
                        <div className='job-details-condition'> 
                            <div className='job-details-headings'>
                                <BiRupee className='job-details-icon'/> <span> MIN STIPEND </span>
                            </div>
                            <p style={{fontWeight:'500'}}> 3000 </p> 
                        </div>
                        <div className='job-details-condition'>
                            <div className='job-details-headings'>
                                <AiFillClockCircle className='job-details-icon'/> <span> DURATION </span>
                            </div>
                            <p style={{fontWeight:'500'}}> 3 months </p>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <Button variant="contained" sx={{backgroundColor:'#187271', textTransform:'none', fontSize:'Poppins', height:'2.2rem'}}> Add to cart </Button>
                        <p style={{color:'#187271', fontWeight:'600'}}> View Details </p>
                    </div>
                </div>
            </Paper>
        </>
    )
}