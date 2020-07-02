import {CARGAR_LISTA, CARGAR_LISTA_OK, CARGAR_LISTA_ERROR, CARGAR_LISTA_INFORMACION} from '../../redux/const';
/* paylod es una palabra generica, es como un value  */
/* INDICADORES DE ESTADO  */
/* inicie el servicio */
export function cargarLista(payload){
    return{
        type:CARGAR_LISTA, 
        payload
    }
}
/* indicar que el servicio esta ok */
export function cargarListaOk(payload){
    return{
        type:CARGAR_LISTA_OK, 
        payload
    }
}
/* indica que el servicio fallo */
export function cargarListaError(payload){
    return{
        type:CARGAR_LISTA_ERROR, 
        payload
    }
}
