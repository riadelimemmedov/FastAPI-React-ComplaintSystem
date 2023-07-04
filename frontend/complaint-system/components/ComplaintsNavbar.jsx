
//!React
import * as React from 'react';
import { useState,useEffect } from 'react'


//!MateriUI React
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { InputBase } from '@mui/material';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import LoginIcon from '@mui/icons-material/Login';

//!React Router
import {Link} from 'react-router-dom'


//!Third Party Package
import { useNavigate } from "react-router-dom";
import axios from 'axios'

//!Custom Component
// import LoginModal from './Register.jsx';
// import SignIn from '../routes/SignIn.jsx'
// import SignUp from '../routes/SignUp.jsx'

//!Css class variables
import {Search,SearchIconWrapper,StyledInputBase} from '../style/style.jsx'





//*Navbar
const Navbar = () => {
    //navigate
    const navigate = useNavigate(); 


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const [userToken,setUserToken] = React.useState({
        token:'',
    })

    const [isAuthenticated,setIsAuthenticated] = React.useState(false)


    //handleProfileMenuOpen
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    //handleMobileMenuClose
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    //handleMenuClose
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    //handleMobileMenuOpen
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };


    //hanleAuthentication
    const hanleAuthentication = (event) => {
        if(window.localStorage.getItem('token')){
            setUserToken({token:window.localStorage.getItem('token')})
            setIsAuthenticated(true)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + userToken.token
        }
        else{
            setUserToken({token:''})
            setIsAuthenticated(false)
            axios.defaults.headers.common['Authorization'] = ""
        }
    }


    //logoutUser
    const logoutUser = (event) => {
        axios.defaults.headers.common['Authorization'] = ""
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('isLoggedIn')
        setUserToken({token:''})
        setIsAuthenticated(false)
        window.location.href = `${window.location.href}login`
    }


    //!?useEffect
    useEffect(()=>{
        hanleAuthentication()
    },[])


    //menuId
    const menuId = 'primary-search-account-menu';
    
    //renderMenu
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );
    
    //mobileMenuId
    const mobileMenuId = 'primary-search-account-menu-mobile';
    
    //renderMobileMenu
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
        <MenuItem>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
                <MailIcon />
            </Badge>
            </IconButton>
            <p>Messages</p>
        </MenuItem>
        <MenuItem>
            <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            >
            <Badge badgeContent={17} color="error">
                <NotificationsIcon />
            </Badge>
            </IconButton>
            <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            >
            <AccountCircle />
            </IconButton>
            <p>Profile</p>
        </MenuItem>
        </Menu>
    );
    

    //?return jsx
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >
            <Link to="/" style={{textDecoration:'none',color:'#fff',fontSize:'20px'}}>Complaint System</Link>
            </Typography>
            <Search>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                {
                    userToken.token !== null && isAuthenticated.toString() == "true" ? (
                        <>
                            <IconButton size='large' color='inherit'>
                                <Badge>
                                    <Link to="/" style={{textDecoration:'none',color:'#fff',fontSize:'20px'}} onClick={logoutUser}>Logout</Link>
                                </Badge>
                            </IconButton>

                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">     
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                            </IconButton>
            
                            <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                                <Badge badgeContent={17} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
        
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                            <AccountCircle />
                            </IconButton>
                        </>
                    )
                    :
                    (
                        <>
                            <IconButton size='large' color='inherit'>
                                <Badge>
                                    <Link to="/login" style={{textDecoration:'none',color:'#fff',fontSize:'20px'}}>Login</Link>
                                </Badge>
                            </IconButton>
                            <IconButton size='large' color='inherit'>
                                <Badge>
                                    <Link to="/register" style={{textDecoration:'none',color:'#fff',fontSize:'20px'}}>Register</Link>
                                </Badge>
                            </IconButton>
                        </>
                    )
                }

            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                >
                <MoreIcon />
                </IconButton>
            </Box>
            </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        </Box>
    );
}
export default Navbar