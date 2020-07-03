/* las variables dentro del estado no se obtienen normalmente, por medio de estas constantes se obtiene en que se encuentra el estado  */
import initialState from '../../../redux/reducer';
import { createStructuredSelector } from 'reselect';
/* lista es la del reducer */
export const ObtenerListaIncial=() => initialState.lista
/*  */
export const ObtenerListaRappi=(state) => state.lista
export const ObtenerListaInformacion=(state) => state.listaInformation
/* Se obtienen todos los selectres en un mismo objeto */
export const SelectorCompleto=createStructuredSelector({
    lista: ObtenerListaRappi,
    listaInformation: ObtenerListaInformacion
})

