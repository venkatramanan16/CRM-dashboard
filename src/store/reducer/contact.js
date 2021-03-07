import * as actionTypes from '../action/actionTypes'
import {updateObject} from '../../shared/Utility'

const intialState = {
    contacts: null,
    error : false,
    loading: false
}



const setContacts = (state, action) => {
    return updateObject(state,{contacts : {
                    name : action.contacts.name,
                    email : action.contacts.email,
                    phone : action.contacts.phone,
                    company : action.contacts.company,
                    address : action.contacts.address
                },
               error : false,
               loading: false})
}

const reducer = (state =intialState,action) => {
    switch(action.type) {
        case actionTypes.SET_CONTACTS:return setContacts(state, action)
        default:return state;
    }
}

export default reducer