import {takeEvery} from 'redux-saga/effects'
import {initContactSaga} from './contacts'
import * as actionTypes from '../action/actionTypes'

export function* watchContacts(){
    yield takeEvery(actionTypes.SET_CONTACTS, initContactSaga)
}
