import initialState from '../../../../redux/reducer';
import { createStructuredSelector } from 'reselect';
export const ObtenerListaIncial=() => initialState.lista
export const ObtenerListaRappi=(state) => state.lista
export const ObtenerListaInformacion=(state) => state.listaInformation
export const SelectorCompleto=createStructuredSelector({
    lista: ObtenerListaRappi,
    listaInformation: ObtenerListaInformacion
})

