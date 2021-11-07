import React from 'react'
import HeadSocial from './HeadSocial'
import NavBar from './NavBar'
const Header = (activePage) => {
    return (
        <>
            <HeadSocial/>
            <NavBar activePage={activePage}/>
        </>
    )
}

export default Header
