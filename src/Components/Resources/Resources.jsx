import React from 'react'
import Header from '../Header/Header'
import { Tabs, Tab, Divider } from '@mui/material'
function LinkTab(props) {
    return (
        <Tab
            component="a"
            style={{ color: 'white',fontSize:'1.2rem' }}
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}
const Resources = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Header activePage="Resources" />
            <h1 style={{ padding: '2%' }}>Resources</h1>
            <Tabs value={value} onChange={handleChange} centered>
                <LinkTab label="DBMS" href="/drafts" />
                <LinkTab label="OS" href="/trash" />
                <LinkTab label="CN" href="/spam" />
                <LinkTab label="Python" href="/spam" />
                <LinkTab label="Java" href="/spam" />
            </Tabs>
            <Divider></Divider>
        </div>
    )
}

export default Resources