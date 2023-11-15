import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyCarousel from './components/Carousel';
import SearchBar from './components/SearchBar';
import AllRestaurantsScreen from './components/AllRestaurants';
import Header from './components/Header';
import DetailScreen from './components/DetailScreen';
import { KeyboardAvoidingView, Platform } from 'react-native';
import StoreProvider from './store/StoreProvider'; // Importa StoreProvider
import AllShowsScreen from './components/AllShows';

// CONTEXT PARA MANTENER EL ESTADO GLOBAL DE LA APLICACION
// REDUCER PARA ACTUALIZAR EL ESTADO GLOBAL DE LA APLICACION (SE LE PASA COMO PARAMETRO EL ESTADO GLOBAL Y LA ACTION)
// PROVIDER PARA PROVEER EL ESTADO GLOBAL DE LA APLICACION
// TYPES PARA DEFINIR LOS TIPOS DE ACCIONES QUE SE PUEDEN REALIZAR SOBRE EL ESTADO GLOBAL DE LA APLICACION
// ACTIONS PARA DEFINIR LAS ACCIONES QUE SE PUEDEN REALIZAR SOBRE EL ESTADO GLOBAL DE LA APLICACION
// PAYLOAD PARA DEFINIR LOS DATOS QUE SE VAN A ENVIAR A LAS ACCIONES


/* CREAMOS EL STACK NAVIGATOR PARA IR DE UNA PANTALLA A OTRA*/
const Stack = createStackNavigator();

export default function App() {

  return (
    // ENVOLVEMOS EN STOREPROVIDER PARA QUE TODOS LOS COMPONENTES TENGAN ACCESO AL ESTADO GLOBAL (CONTEXTO)
    <StoreProvider> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailScreen} />
          {/* Ya no le pasamos props a AllRestaurants */}
          <Stack.Screen name="AllRestaurants" component={AllRestaurantsScreen} />
          <Stack.Screen name="AllShows" component={AllShowsScreen} />
        </Stack.Navigator>  
      </NavigationContainer>
    </StoreProvider>
  ); 

  /* DEFINIMOS LA PANTALLA PRINCIPAL DE LA APLICACIÓN */
  function HomeScreen({ navigation }) {
  
    return (
      // KeyboardAvoidingView para que el teclado no tape la barra de búsqueda
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"} 
        style={{ flex: 1 }}
      >
        {/* FlatList para que la pantalla sea scroleable */}
        <FlatList
        // Para que el header no baje al scrolear
          data={[{ key: 'unique' }]} 
          renderItem={() => (
            <>
              {/* Definimos la pantalla principal */}
              <View style={styles.container}>
                {/* Usamos el encabezado ya creado */}
                <Header />
                <Text style={styles.mainTitle}>Inicio</Text> 

                {/* Imagen que al apretarla nos lleva a la pantalla con todos los restaurantes */}
                <View style={styles.container2}>
                <TouchableOpacity onPress={() => navigation.navigate('AllRestaurants')}>
                  <Image source={require('./assets/allRestaurants.png')} style={styles.image1} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AllShows')}>
                  <Image source={require('./assets/allShows.png')} style={styles.image2} />
                </TouchableOpacity>
                </View>

                <View style={styles.container3}>
                  <Image source={require('./assets/promocion.png')} style={styles.image3} />
                </View>

                {/* Título de la sección de restaurantes */}
                <Text style={styles.title}>Restaurantes</Text> 
                {/* Carrusel para los restaurantes (ya no le pasamos los datos, sino el tipo para buscar en el store)*/}
                <MyCarousel style type='restaurants' navigation={navigation} />
                {/* Barra de búsqueda con todos los datos (restaurantes + shows) le pasamos la navegacion como prop */}
                <SearchBar navigation={navigation}/>
                {/* Título de la sección de shows */}
                <Text style={styles.title}>Shows</Text>
                {/* Carrusel para los shows */}
                <MyCarousel type='shows' navigation={navigation} />
                {/* Para que se adapte al celular */}
                <StatusBar style="auto" />
              </View>
            </>
          )}
        />
      </KeyboardAvoidingView>
    );
  }
}

// DEFINIMOS LOS ESTILOS

const styles = StyleSheet.create({
  // CONTENEDOR DE LA PANTALLA PRINCIPAL
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  container3: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  // ESTILO PARA LOS TITULOS DE LAS SECCIONES (RESTAURANTES Y SHOWS)
  title: {
    alignSelf: 'flex-start', // Alinea el título a la izquierda
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20, // Agrega un margen a la izquierda para separar el título del borde de la pantalla
    paddingTop: 40, // Ajusta el margen superior del título
  },
  // ESTILO PARA EL TITULO PRINCIPAL (INICIO)
  mainTitle: {
    alignSelf: 'flex-start', // Alinea el título a la izquierda
    fontSize: 50,
    fontWeight: 'bold',
    marginLeft: 20, // Agrega un margen a la izquierda para separar el título del borde de la pantalla
    paddingTop: 20, // Ajusta el margen superior del título
  },
  // ESTILO PARA LA IMAGEN DE "TODOS LOS RESTAURANTES"
  image1: {
    //marginTop: 20, // Para separarla del titulo
    //marginRight: 190, // Para que  quede alineada con el título (en la izquierda)
    height: 90, // Tamaño de la imagen
    width: 150, // Tamaño de la imagen
     // Para que se adapte unicamente al tamaño que le dijimos
    resizeMode: 'contain',
  },
  image2: {
    //marginTop: 20, // Para separarla del titulo
    //marginRight: 190, // Para que  quede alineada con el título (en la izquierda)
    height: 90, // Tamaño de la imagen
    width: 150, // Tamaño de la imagen
    marginLeft: 20,
     // Para que se adapte unicamente al tamaño que le dijimos
    resizeMode: 'contain',
  },
  image3: {
    //marginTop: 20, // Para separarla del titulo
    //marginRight: 190, // Para que  quede alineada con el título (en la izquierda)
    height: 90, // Tamaño de la imagen
    width: 320, // Tamaño de la imagen
     // Para que se adapte unicamente al tamaño que le dijimos
    resizeMode: 'contain',
  },
});


//PROBLEMA: QUEDA UN ESPACIO AL FINAL GRIS. POSIBLE SOLUCION, SEPARAR EL CARRUSEL EN DOS (SHOWS Y REST) Y AL
// ULTIMO PONERLE PADDING BOTTOM 