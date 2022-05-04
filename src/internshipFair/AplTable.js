import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: theme.palette.common.black,
        color: '#187271',
        fontWeight: '700',
        fontSize: '1rem'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const token  = localStorage.getItem("token");

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const current = new Date();
const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
console.log(date);
var config = {
    method: 'get',
    url: 'https://djacmdev.pythonanywhere.com/if/job-create',
    headers: {
        'Authorization': `Token ${token}`,
    },
};



export default function CustomizedTables() {
    const [value, setValue] = React.useState([]);

    useEffect(() => {
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setValue(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])

    
    return (
        <TableContainer  >
            <Table sx={{ minWidth: 700, maxWidth: 1050 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell >Profile</StyledTableCell>
                        <StyledTableCell >Mode</StyledTableCell>
                        <StyledTableCell >No. of Applicants </StyledTableCell>
                        <StyledTableCell >Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {value.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component="th" scope="row">
                                {row.deadline}
                            </StyledTableCell>
                            <StyledTableCell >{row.role}</StyledTableCell>
                            <StyledTableCell >{row.WFH ? "Online" : "Offline"}</StyledTableCell>
                            <Link to="/applicant"><StyledTableCell >{row.num_of_applications}</StyledTableCell></Link>
                            <StyledTableCell >{row.deadline >= date ? "Active" : "Not Active"}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
