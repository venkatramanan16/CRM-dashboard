import React from 'react'
import Input from '../../../components/UI/Input/Input'
import classes from './AddContact.css'

const addContact = (props) => {
    return(
            <div className={classes.AddContactModal}>
               <Input elementType="input" label="Name" placeholder="Name"  />
               <Input elementType="input" label="Email" placeholder="Email" />
               <Input elementType="input" label="Company" placeholder="Company" />
               <Input elementType="input" label="Phone Number" placeholder="phoneNumber" />
               <Input elementType="textarea" label="Address" />
               <div className={classes.actionButtons}>
                    <button className={classes.cancelBtn} onClick={props.cancelClicked}>Cancel</button>
                    <button className={classes.saveBtn} >Save</button>
                </div>
            </div>
    );
}

export default addContact