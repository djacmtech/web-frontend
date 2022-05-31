import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { MdLocationPin } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { AiFillClockCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function JobCard(props) {

    const [companies, setCompanies] = useState([])
    const [count, setCount] = useState(0)

    const job = props.job

    const addCompany = (id) => {
        let filteredCompany = job.filter((singleJob) => singleJob.id === id)
        setCount(count + 1)
        setCompanies([...companies, filteredCompany])
    }
    console.log(count)
    console.log(companies)



    return (
        <>
            <h2>Not Of Use</h2>
        </>
    )
}