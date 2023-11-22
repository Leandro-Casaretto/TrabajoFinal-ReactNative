# Trabajo final - Desarrollo Web y Mobile


[![React-native][React-native]][React-url] 

[![Expo][Expo]][Expo-url]


# Contenidos
1. [Descripción](#descripción)
2. [Requerimientos a desarrollar](#requerimientos-a-desarrollar)
3. [Ejecución del proyecto](#ejecución-del-proyecto)
4. [Componentes](#componentes)
5. [App.js](#app.js)
6. [Store](#store)

## Descripción
Aplicar los conocimientos adquiridos en React / React Native para el desarrollo de una
aplicación móvil. El enfoque principal será la implementación de la navegación entre pantallas y el
mantenimiento de un estado global utilizando Context.

## Requerimientos a Desarrollar:
#### 1. Pantalla de Home:
- Dos sliders de restaurantes y shows.
- Campo de texto para búsqueda por nombre.
- Menú desplegable (select list) con las opciones de búsqueda disponibles.
#### 2. Pantalla de Listado General:
- Mostrar todos los restaurantes y shows.
#### 3. Pantalla de Detalle:
- Mostrar detalles de un restaurante/show seleccionado desde el menú de búsqueda o
desde la pantalla de listado.



## Ejecución del proyecto
1. Clonamos el repositorio
   ```bash
   https://github.com/Leandro-Casaretto/TrabajoFinal-ReactNative.git
   ```
2. Nos posicionamos en el directorio raíz
4. Abrimos el directorio del proyecto en nuestro editor
   >"code ." en caso de Visual Studio Code

1. Para ejecutar el proyecto, en la consola ejecutamos el siguiente comando:
   ```bash
   expo start
   ```


## Componentes
Este proyecto cuenta con 9 componentes: 

- **AllRestaurants.js:** *Lista de todos los restaurantes, accede al contexto global de la aplicación para poder mostrar los datos necesarios.*
- **AllRestaurantsHeader.js:**  *Encabezado utilizado en el componente anterior. Muestra el titulo de la ventana (Todos los restaurantes).*
 - **AllShows.js:**  *Lista de todos los shows, accede al contexto global de la aplicación para poder mostrar los datos (Data.js) necesarios.*
- **AllShowsHeader.js:**  *Encabezado utilizado en el componente "AllShows.js". Muestra el titulo de la ventana (Todos los shows).*
- **AllItems.js:** *Lista de todos los restaurantes + shows, accede al contexto global de la aplicación para poder mostrar los datos necesarios. Lo usamos únicamente al apretal la lupa en la barra de búsqueda*
- **AllItemsHeader.js:**  *Encabezado utilizado en el componente "AllItems.js". Muestra el titulo de la ventana (Restaurantes y shows).*
- **RestaurantCarousel.js:**  *Componente donde se crea el carrusel, el cual mostrará todas las imágenes con los respectivos nombres de cada restaurante debajo. También accede a los datos mediante el contexto.*
- **ShowCarousel.js:**  *Componente donde se crea el carrusel, el cual mostrará todas las imágenes con los respectivos nombres de cada show debajo. También accede a los datos mediante el contexto.*
- **RestaurantDetail.js:**  *Ventana encargada de mostrar los detalles de los restaurantes (Dirección, teléfono y horario)*
- **ShowsDetail.js:**  *Ventana encargada de mostrar los detalles de los shows (Dirección, teléfono y horario).*
- **Header.js:**  *Es el encabezado de la ventana principal de la aplicación (Home), contiene el nombre "GuiaRest.*
- **Searchbar.js:**  *Componente que crea la barra de búsqueda. La misma cuenta con autocompletado y nos permite clickear la opción deseada y acceder a la ventana de detalles, ya sea de restaurantes o shows.*

[React-native]: https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactnative.dev/
[Expo]:https://img.shields.io/badge/Expo-000020.svg?style=for-the-badge&logo=Expo&logoColor=white
[Expo-url]: https://expo.dev/

## App.js
Es el archivo principal, donde hacemos uso de todos los componentes. Definimos la navegación de la aplicación con todas las ventanas necesarias con React-Navigation (Home, Details, AllRestaurants, AllShows). A su vez, es donde se encuentra la ventana principal (Home).

## Store
El store en funciona como una solución para la gestionar el estado de la aplicación, permitiendonos acceder y manejar los datos globales. Lo implementamos utilizando el contexto de React (API Context). El store contiene información tanto sobre restaurantes como sobre shows, brindándonos una única  fuente para estas entidades en toda la aplicación.

- **Data.js:**
Define los datos de los restaurantes y shows. Incluye lo siguiente: Imágenes, nombres, ubicaciones,  contacto y horarios de apertura.

- **StoreProvider.js**
Este componente es el que crea el contexto y lo provee al resto de la aplicación. Todos los componentes envueltos dentro del provider obtienen acceso al estado global (contexto), facilitando la gestión y el acceso a los datos. (Lo usamos en el App.js, envolviendo a toda la navegación)

- **StoreReducer.js**
Este componente maneja la lógica para actualizar el estado global. Define el store inicial, los tipos de acciones y la función del reducer. El mismo responde a las acciones que queremos realizar (enviadas por el dispatch), permitiéndonos modificar el estado según el tipo de acción.
