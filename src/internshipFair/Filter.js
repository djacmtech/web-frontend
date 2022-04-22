import { Checkbox, FormControlLabel } from '@mui/material';
import Paper from '@mui/material/Paper';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export default function Filter() {
    return (
        <>
            <Paper className="filter-card">
                <div className='filter-heading'>
                <FilterAltIcon style={{color:'#187271'}}/>
                <p style={{paddingInline:'2%'}}> Filters </p>
                </div>
                <FormGroup>
                    <FormControlLabel control={<Checkbox style={{color:'#187271'}}/>} label="As per my preferences"></FormControlLabel>
                    <TextField label="Category" margin='normal' variant="outlined"/>
                    <TextField label="Company" margin='normal' variant="outlined"/>
                    <FormControlLabel control={<Checkbox />} label="Online"></FormControlLabel>
                    <FormControlLabel control={<Checkbox />} label="Offline"></FormControlLabel>
                    <p style={{color:'#2ABEA2'}}>Clear all</p>
                </FormGroup>
            </Paper>
        </>
    )
}