import {CARGAR_LISTA, CARGAR_LISTA_OK, CARGAR_LISTA_ERROR, CARGAR_LISTA_INFORMACION} from '../../../redux/const';
export function cargarLista(payload){
    return{
        type:CARGAR_LISTA, 
        payload
    }
}
export function cargarListaOk(payload){
    return{
        type:CARGAR_LISTA_OK, 
        payload
    }
}
export function cargarListaError(payload){
    return{
        type:CARGAR_LISTA_ERROR, 
        payload
    }
}
