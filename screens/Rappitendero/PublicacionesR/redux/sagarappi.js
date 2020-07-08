import {CARGAR_LISTA_RAPPI} from '../../../../redux/const';
import {cargarListaOkRappi, cargarListaErrorRappi} from './actionsrappi';
import { takeLatest, put, delay, call } from "redux-saga/effects";
import * as firebase from 'firebase';
import 'firebase/firebase-firestore';

function* cargarListaSaga(action){
    let vector =[];
    try{
        const fire = firebase.firestore();
        const snapshot = yield fire.collection('publications').get()
        snapshot.forEach((doc) => {
            let obj = {id:doc.id, name:doc.data().name, monto:doc.data().monto, description:doc.data().description};
            vector.push(obj)
        });
        yield put(cargarListaOkRappi(vector));
    } catch (error) {
        yield put(cargarListaErrorRappi(error));
    }
}
export function* watchSaga() {
    yield takeLatest(CARGAR_LISTA_RAPPI, cargarListaSaga);
}