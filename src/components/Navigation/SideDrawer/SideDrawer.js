import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import Aux from '../../../hoc/Auxiliary/Auxiliary'

const sideDrawer = (props) => {
    return(
        <Aux>
            <div className={classes.SideDrawer}>
                <Logo />
                <NavigationItems />
            </div>
        </Aux>
      
    );
}

export default sideDrawer