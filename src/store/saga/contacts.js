import { put } from 'redux-saga/effects'
import * as actions from '../action/index'
import axios from '../../axios-order'

export function* initContactSaga (action){

    try {
        const response = yield axios.get('contacts.json')
        yield put(actions.setContacts(response.data))
    } catch(error) {
        yield put(actions.fetchContacts())
    }
}
