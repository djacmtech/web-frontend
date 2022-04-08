import React from 'react'
import CustomizedTables from './AplTable'

const Applicants = () => {
    return (
        <div style={{ padding: '4% 11%', backgroundColor: 'white', color: 'black' }}>
            <h2 className='aplHead'>UI/ UX Design Intern</h2>
            <h2 className='aplData'>No. of Applicants: 12</h2>

            <br />
            <CustomizedTables />
        </div>
    )
}

export default Applicants