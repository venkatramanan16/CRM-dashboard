import React,{useState} from "react";
import Aux from '../../hoc/Auxiliary/Auxiliary'
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from '../../axios-order'
import classes from './Contact.css'
import contactIcon from '../../assets/image/notebook-of-contacts.svg'
import Button from '../../components/UI/Button/Button'
import Modal from '../../components/UI/Modal/Modal'
import AddContact from './AddContact/AddContact'

const contacts = () => {
  const [addContact, setAddContact] = useState(false);

        return(
            <Aux>
              <Modal show={addContact} cancel={() => setAddContact(false)}>
                  {<AddContact cancelClicked={() => setAddContact(false)} />}
              </Modal>
              <div className={classes.Contacts}>
               <div className={classes.ContactsTop}>
                  <img src={contactIcon} alt="contact book" />
                  <div className={classes.contactHeaderDiv}>
                    <h1>Contacts</h1>
                    <p>Welcome to FlatCRM contact page</p>
                  </div>
                  <div className={classes.contactSortDiv}>
                    <span>Sort by : </span>
                    <select name="sort" id="sort">
                      <option value="Date created">Date created</option>
                      <option value="Name">Name</option>
                      <option value="Company">Company</option>
                    </select>
                  </div>
               </div>
               <div className={classes.AddContact}>
                  <input type="search" placeholder="Search Contacts" />
                  <Button clicked={() => setAddContact(true)}>Add Contact</Button>
               </div>
              </div>
            </Aux>
        )
    }


export default WithErrorHandler(contacts,axios)