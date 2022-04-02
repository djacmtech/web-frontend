import React from 'react'
import "../Header/Header.css";
import NavBar from './NavBar'
const Header = (activePage) => {
    return (
        <>
            {/* <HeadSocial/> */}
            <NavBar activePage={activePage}/>
        </>
    )
}

export default Header
