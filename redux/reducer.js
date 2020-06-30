import {CARGAR_LISTA, CARGAR_LISTA_OK, CARGAR_LISTA_ERROR, CARGAR_LISTA_INFORMACION, CARGAR_LISTA_RAPPI, CARGAR_LISTA_OK_RAPPI, CARGAR_LISTA_ERROR_RAPPI, CARGAR_LISTA_INFORMACION_RAPPI } from './const';
/* Crear objeto que cambia de estados y se actualiza cada que haga un cambio de servicio o accion. Este objeto lo voy a mostrar en pantalla */
export const initialState={ lista:false , listaInformation:false}

const reducer=(state=initialState, action) => {
  /* ... es reconstruir el objeto, saca un nuevo objeto con las mismas propiedades del viejo. Copiar un objeto */
  const newState={...state}
  /* del objeto action saco la propiedad payload => retiene la informacion que le voy a pasar a la accion */
  const {payload}=action
  /* validar que este funcionando, existe un plugin que se llama reduxDevTools para navegador y hace el console.log */
  /* console.log('ListaReducer: ',JSON.stringify(payload)) */

  //publicacionesrappi/Publicacionesrappi
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
    
    //Rappitendero/PublicacionesR
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