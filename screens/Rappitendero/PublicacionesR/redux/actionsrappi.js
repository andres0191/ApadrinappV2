import {CARGAR_LISTA_RAPPI, CARGAR_LISTA_OK_RAPPI, CARGAR_LISTA_ERROR_RAPPI } from '../../../../redux/const';
export function cargarListaRappi(payload){
    return{
        type:CARGAR_LISTA_RAPPI, 
        payload
    }
}
export function cargarListaOkRappi(payload){
    return{
        type:CARGAR_LISTA_OK_RAPPI, 
        payload
    }
}
export function cargarListaErrorRappi(payload){
    return{
        type:CARGAR_LISTA_ERROR_RAPPI, 
        payload
    }
}

