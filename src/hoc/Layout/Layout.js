import React from 'react'
import Aux from '../Auxiliary/Auxiliary'
import classes from './Layout.css'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import TopBar from '../../components/Navigation/TopBar/TopBar'

const layout = props => {

   
        return(
            <Aux>
                <TopBar />
                <SideDrawer />
                <main className={classes.content}>
                    {props.children}
                </main>
            </Aux>
        );

}

export default layout