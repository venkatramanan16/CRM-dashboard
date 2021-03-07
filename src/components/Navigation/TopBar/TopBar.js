import React from 'react';
import classes from './TopBar.css'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Mail from '../../../assets/image/mail.svg'
import Notification from '../../../assets/image/bell.svg'

const topBar = () => {
    return(
        <Aux>
            <div className={classes.TopBar}>
                <div className={classes.TopBarleft}>
                    <form id="demo-2">
                        <input type="search" placeholder="Search" />
                    </form>
                </div>
                <div className={classes.TopBarright}>
                <ul>
                   <li>
                       + Add
                   </li>
                   <li>
                    <img src={Mail} alt="Email" />
                   </li>
                   <li>
                   <select name="name" id="name" className={classes.NameSelect}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                    </select>
                   </li>
                   <li>
                       <span className={classes.alert}>.</span>
                    <img src={Notification} alt="Notification" />
                   </li>
               </ul>
                </div>
               
            </div>
        </Aux>
      
    );
}

export default topBar