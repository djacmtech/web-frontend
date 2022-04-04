import React from 'react'
import "../Header/Header.css";
import NavBar from './NavBar'
const Header = (activePage) => {
    return (
        <>
            <NavBar activePage={activePage}/>
        </>
    )
}

export default Header
