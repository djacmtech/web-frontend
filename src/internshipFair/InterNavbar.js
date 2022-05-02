// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import useScrollTrigger from "@mui/material/useScrollTrigger";
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// const pages = ['Dashboard', 'Applied Jobs', 'Cart'];
// // const settings = ['Profile', 'Logout'];

// const InterNavbar = () => {
//     const [anchorElNav, setAnchorElNav] = React.useState(null);
//     const [anchorElUser, setAnchorElUser] = React.useState(null);

// const navigate = useNavigate();


//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };
//     function ElevationScroll(props) {
//         const { children, window } = props;

//         // Note that you normally won't need to set the window ref as useScrollTrigger
//         // will default to window.
//         // This is only being set here because the demo is in an iframe.
//         const trigger = useScrollTrigger({
//             disableHysteresis: true,
//             threshold: 0,
//             target: window ? window() : undefined,
//         });

//         return React.cloneElement(children, {
//             elevation: trigger ? 4 : 0,
//             // color: trigger ? '#FFFFFF' : 'transparent', 
//         });
//     }
//     return (
//         <ElevationScroll>
//             <AppBar position="static" style={{ backgroundColor: 'white', color: 'black' }}>
//                 <Container maxWidth="xl">
//                     <Toolbar disableGutters>
//                         <Typography
//                             variant="h6"
//                             noWrap
//                             component="div"
//                             sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
//                             style={{ fontFamily: 'Alumni Sans', fontSize: '2rem' }}
//                         >
//                             DJSCE ACM INTERNSHIP FAIR
//                         </Typography>

//                         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                             <IconButton
//                                 size="large"
//                                 aria-label="account of current user"
//                                 aria-controls="menu-appbar"
//                                 aria-haspopup="true"
//                                 onClick={handleOpenNavMenu}
//                                 color="inherit"
//                             >
//                                 <MenuIcon />
//                             </IconButton>
//                             <Menu
//                                 id="menu-appbar"
//                                 anchorEl={anchorElNav}
//                                 anchorOrigin={{
//                                     vertical: 'bottom',
//                                     horizontal: 'left',
//                                 }}
//                                 keepMounted
//                                 transformOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'left',
//                                 }}
//                                 open={Boolean(anchorElNav)}
//                                 onClose={handleCloseNavMenu}
//                                 sx={{
//                                     display: { xs: 'block', md: 'none' },

//                                 }}
//                             >
//                                 {pages.map((page) => (
//                                     <Link to={`/${page}`} style={{ textDecoration: 'none' }}>
//                                         <MenuItem key={page} onClick={handleCloseNavMenu}>
//                                             <Typography textAlign="center" style={{ color: 'black' }}>{page}</Typography>
//                                         </MenuItem>
//                                     </Link>
//                                 ))}
//                             </Menu>
//                         </Box>
//                         <Typography
//                             variant="h6"
//                             noWrap
//                             component="div"
//                             sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
//                         >
//                             DJSCE ACM INTERNSHIP FAIR
//                         </Typography>
//                         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                             {pages.map((page) => (
//                                 <Link to={`/${page}`} style={{ textDecoration: 'none' }}>

//                                     <Button
//                                         key={page}
//                                         onClick={handleCloseNavMenu}
//                                         sx={{ my: 2, color: 'black', display: 'block' }}
//                                         style={{ fontFamily: 'Poppins' }}
//                                     >
//                                         {page}
//                                     </Button>
//                                 </Link>

//                             ))}
//                         </Box>

//                         <Box sx={{ flexGrow: 0 }}>
//                             <Tooltip title="Open settings">
//                                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
//                                     <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//                                 </IconButton>
//                             </Tooltip>
//                             <Menu
//                                 sx={{ mt: '45px' }}
//                                 id="menu-appbar"
//                                 anchorEl={anchorElUser}
//                                 anchorOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'left',
//                                 }}
//                                 keepMounted
//                                 transformOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'left',
//                                 }}
//                                 open={Boolean(anchorElUser)}
//                                 onClose={handleCloseUserMenu}
//                             >
//                                 <MenuItem onClick={handleCloseUserMenu}>
//                                     <Typography textAlign="center" onClick={() => {
//                                         navigate('/profilepage');
//                                     }}>Profile</Typography>
//                                 </MenuItem>
//                                 <MenuItem onClick={handleCloseUserMenu}>
//                                     <Typography textAlign="center" onClick={() => {
//                                         navigate('/internship-fair');
//                                         localStorage.removeItem('token-info');
//                                     }}>Logout</Typography>
//                                 </MenuItem>
//                             </Menu>
//                         </Box>
//                     </Toolbar>
//                 </Container>
//             </AppBar>
//         </ElevationScroll>
//     );
// };
// export default InterNavbar;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const pages = ['Dashboard', 'Applied Jobs', 'Cart'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const name = localStorage.getItem("name").charAt(0).toUpperCase();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const navigate = useNavigate();

    return (
        <AppBar position="static" style={{ backgroundColor: 'white', color: 'black' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        style={{ fontFamily: 'Alumni Sans', fontSize: '2rem' }}

                    >
                        DJSCE ACM INTERNSHIP FAIR
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <Link to={`/${page}`} style={{ textDecoration: 'none' }}>

                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" style={{ color: 'black' }}>{page}</Typography>
                                    </MenuItem>
                                </Link>

                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        DJSCE ACM INTERNSHIP FAIR

                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link to={`/${page}`} style={{ textDecoration: 'none' }}>

                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'black', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar>{name}</Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center" onClick={() => {
                                    navigate('/profilepage');
                                }}>Profile</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center" onClick={() => {
                                    navigate('/internship-fair');
                                    localStorage.removeItem('token');
                                    localStorage.removeItem('name');
                                    localStorage.removeItem('sap');
                                }}>Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
