import React from 'react';
import classes from './Logo.css'
import DashBoardLogo from '../../assets/image/Dashboard_logo.png'

const logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={DashBoardLogo} alt="My Dashboard App" />
        </div>
    )
}

export default logo