import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import {MdLocationPin} from "react-icons/md";
import {BiRupee} from "react-icons/bi";
import {AiFillClockCircle} from "react-icons/ai";

export default function JobCard(props) {

    return (
        <>
            <Paper className='job-card'>
                <div>
                    <div className='job-card-header'>
                        <span style={{color:'#187271', fontSize:'2rem', fontWeight:'600', fontFamily:'Poppins'}}> {props.role} </span>
                        <span style={{color:'#2D3748', fontSize:'1.2rem', fontWeight:'400', fontFamily:'Poppins'}}> {props.company_name} </span>
                        <span> Location </span>
                    </div>
                    <div className='job-card-details'>
                        <div className='job-details-condition'> 
                            <div className='job-details-headings'>
                                <MdLocationPin className='job-details-icon'/> <span style={{color:'#2D3748'}}> MODE </span>
                            </div>
                            <p style={{fontWeight:'500'}}> {props.WFH? "Online": "Offline"} </p> 
                        </div>
                        <div className='job-details-condition'> 
                            <div className='job-details-headings'>
                                <BiRupee className='job-details-icon'/> <span> MIN STIPEND </span>
                            </div>
                            <p style={{fontWeight:'500'}}> {props.stipend_low_range} </p> 
                        </div>
                        <div className='job-details-condition'>
                            <div className='job-details-headings'>
                                <AiFillClockCircle className='job-details-icon'/> <span> DURATION </span>
                            </div>
                            <p style={{fontWeight:'500'}}> {props.duration} </p>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <Button variant="contained" sx={{backgroundColor:'#187271', textTransform:'none', fontSize:'Poppins', height:'2.2rem'}}> Add to cart </Button>
                        <Button variant="text" href={`/jobposition/${props.id}`} style={{color:'#187271', fontWeight:'600'}}> View Details </Button>
                    </div>
                </div>
            </Paper>
        </>
    )
}