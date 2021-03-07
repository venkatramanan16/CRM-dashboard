import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../DrawerToggle/DrawerToggle'
const toolbar = (props) => {
    return(
        <div className={classes.Toolbar}>
            <DrawerToggle clicked={props.toggleClicked} />
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav className={classes.desktopOnly}>  
                <NavigationItems isAuthenticate={props.isAuthenticated} />
            </nav>
        </div>
    )
}

export default toolbar