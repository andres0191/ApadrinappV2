import {CARGAR_LISTA_RAPPI, CARGAR_LISTA_OK_RAPPI, CARGAR_LISTA_ERROR_RAPPI, CARGAR_LISTA_INFORMACION_RAPPI} from '../../../redux/const';
/* paylod es una palabra generica, es como un value  */
/* INDICADORES DE ESTADO  */
/* inicie el servicio */
export function cargarListaRappi(payload){
    return{
        type:CARGAR_LISTA_RAPPI, 
        payload
    }
}
/* indicar que el servicio esta ok */
export function cargarListaOkRappi(payload){
    return{
        type:CARGAR_LISTA_OK_RAPPI, 
        payload
    }
}
/* indica que el servicio fallo */
export function cargarListaErrorRappi(payload){
    return{
        type:CARGAR_LISTA_ERROR_RAPPI, 
        payload
    }
}

