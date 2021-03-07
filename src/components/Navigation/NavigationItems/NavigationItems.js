import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
import NavigationList from '../../../constant'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        {NavigationList.map(item => {
            return(
                <NavigationItem link={item.link} exact><img src={item.icon} alt={item.name} /></NavigationItem>
            )
        })}
    </ul>
);

export default navigationItems