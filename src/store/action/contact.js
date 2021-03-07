import * as actionTypes from './actionTypes';


export const setContacts = (contacts) => {
    return {
        type : actionTypes.SET_CONTACTS,
        contacts : contacts
    }
}

// export const fetchContacts = () => {
//     return {
//         type : actionTypes.CONTACTS,
//     }
// }

// export const initContacts = () => {
//     return {
//         type : actionTypes.INITIAL_CONTACTS
//     }
// }