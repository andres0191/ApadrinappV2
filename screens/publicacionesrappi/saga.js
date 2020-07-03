/* Este archivo va a cargar la lista de datos, contiene la llamada a todos los servicios */

import {CARGAR_LISTA} from '../../redux/const';
import {cargarListaOk, cargarListaError} from './actions';
import { takeLatest, put, delay, call } from "redux-saga/effects";
import * as firebase from 'firebase';
import 'firebase/firebase-firestore';
/* llamar los datos de lista , o toda la data de la db*/
/* yield se utiliza para las funciones con *, es lo mmismo del await */
function* cargarListaSaga(action){
    let vector =[];
    try{
        const fire = firebase.firestore();
        const snapshot = yield fire.collection('publications').get()
        snapshot.forEach((doc) => {
            let obj = {id:doc.id, name:doc.data().name, monto:doc.data().monto, description:doc.data().description};
            vector.push(obj)
        });
        /* hace un llamado a funcion dentro del reducer, el cargarListaOk se declaro en actions.js */
        yield put(cargarListaOk(vector));
    } catch (error) {
        yield put(cargarListaError(error));
    }
}


/* indica cuando cabmia el estado del objeto */
export function* watchSaga() {
    yield takeLatest(CARGAR_LISTA, cargarListaSaga);
}