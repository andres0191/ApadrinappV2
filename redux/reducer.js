import {CARGAR_LISTA, CARGAR_LISTA_OK, CARGAR_LISTA_INFORMACION, CARGAR_LISTA_RAPPI, CARGAR_LISTA_OK_RAPPI,CARGAR_LISTA_INFORMACION_RAPPI } from './const';
export const initialState={ lista:false , listaInformation:false}

const reducer=(state=initialState, action) => {
  const newState={...state}
  const {payload}=action
  switch (action.type) {
    case CARGAR_LISTA:
      newState.lista=false
      newState.listaInformation=false
      return{...newState};

    case CARGAR_LISTA_OK:
      newState.lista=payload
      newState.listaInformation=false
      return{...newState};

    case CARGAR_LISTA_INFORMACION:
        newState.lista=false
        newState.listaInformation=true
        return{...newState};

    case CARGAR_LISTA_RAPPI:
      newState.lista=false
      newState.listaInformation=false
      return{...newState};

    case CARGAR_LISTA_OK_RAPPI:
      newState.lista=payload
      newState.listaInformation=false
      return{...newState};

    case CARGAR_LISTA_INFORMACION_RAPPI:
        newState.lista=false
        newState.listaInformation=true
        return{...newState};
    
  
    default:
      return{...newState}
  }
}

export default reducer