import { restaurantData, showData } from "./Data.js";


// EL STORE REDUCER NOS SIRVE PARA ACTUALIZAR EL ESTADO GLOBAL DE LA APLICACION

// El initialStore nos sirve para inicializar ese estado  
const initialStore = () => {
  const store = {
    restaurants: restaurantData,
    shows: showData,
  };
  return store;
};

/* Definimos los tipos de acciones que se pueden realizar sobre el estado global, es decir, 
los tipos de acciones que puede manejar el  reducer (no los vamos a usar en este proyecto) */
const types = {
  setRestaurant: "setRestaurant",
  setShows: "setShows",
};

// Definimos el reducer (recibe el estado actual y la acción a realizar sobre el estado)
const storeReducer = (state, action) => {
  switch (action.type) {
    case types.setRestaurant:
      return {
        ...state,
        restaurants: state.restaurants.push(action.payload),
      };
    case types.setShows:
      return {
        ...state,
        shows: state.shows.push(action.payload),
      };
    default:
      return state;
  }
};

export { types };
export { initialStore };
export default storeReducer;
