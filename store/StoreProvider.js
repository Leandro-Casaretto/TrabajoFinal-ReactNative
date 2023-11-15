import { createContext, useReducer } from "react";
import storeReducer, { initialStore } from "./StoreReducer";
import React from "react";


/* PROVIDER: PARA CREAR EL CONTEXTO Y EL PROVEEDOR DEL STORE, LO QUE SIGNIFICA 
QUE TODOS LOS COMPONENTES QUE ESTEN DENTRO DEL PROVEEDOR VAN A TENER ACCESO AL ESTADO GLOBAL (CONTEXTO)*/

// Creamos el contexto
const storeContext = createContext();
// Con initialData nicializamos el estado global (store)
const initialData = initialStore();

// Creamos el proveedor del store. Chilidren = los que esten adentro
const StoreProvider = ({ children }) => {
  // useReducer recibe el reducer y el estado inicial, es como useState pero para estados globales
  const [store, dispatch] = useReducer(storeReducer, initialData);
  return (
    //
    <storeContext.Provider value={[store, dispatch]}>
      {children}
    </storeContext.Provider>
  );
};

export { storeContext };
export default StoreProvider;
