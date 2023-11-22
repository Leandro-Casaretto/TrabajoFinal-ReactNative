import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantCarousel from './components/RestaurantCarousel';
import SearchBar from './components/SearchBar';
import AllRestaurantsScreen from './components/AllRestaurants';
import Header from './components/Header';
import RestaurantDetail from './components/RestaurantDetail';
import { KeyboardAvoidingView, Platform } from 'react-native';
import StoreProvider from './store/StoreProvider'; 
import AllShowsScreen from './components/AllShows';
import ShowCarousel from './components/ShowCarousel';
import ShowDetail from './components/ShowDetail';
import AllItems from './components/AllItems';

/*Archivo principal, donde hacemos uso de todos los componentes. 
Definimos la navegación de la aplicación con todas las ventanas necesarias con React-Navigation 
(Home, Details, AllRestaurants, AllShows). A su vez, es donde se encuentra la ventana principal (Home).*/

// StackNavigator para ir de una pantalla a otra
const Stack = createStackNavigator();

export default function App() {

  return (
    // Envuelvemos toda la aplicación en el provider para que todos los componentes tengan acceso al estado global
    <StoreProvider> 
      <NavigationContainer>
        {/* Definimos todas las pantallas */}
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantDetail} />
          <Stack.Screen name="Show" component={ShowDetail} />
          <Stack.Screen name="AllItems" component={AllItems} />
          {/* Ya no le pasamos props a AllRestaurants porque tenemos el estado global */}
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
                  <Image source={require('./assets/allRestaurants.png')} style={styles.allRestaurants} />
                </TouchableOpacity>

                {/* Imagen que al apretarla nos lleva a la pantalla con todos los shows */}
                <TouchableOpacity onPress={() => navigation.navigate('AllShows')}>
                  <Image source={require('./assets/allShows.png')} style={styles.allShows} />
                </TouchableOpacity>
                </View>

                {/* Imagen de promocion */}
                <View style={styles.container3}>
                  <Image source={require('./assets/promocion.png')} style={styles.promo} />
                </View>

                {/* Título de la sección de restaurantes */}
                <Text style={styles.title}>Restaurantes</Text> 
                {/* Carrusel para los restaurantes (ya no le pasamos los datos, sino el tipo para buscar en el store)*/}
                <RestaurantCarousel navigation={navigation} />
                {/* Barra de búsqueda con todos los datos (restaurantes + shows) le pasamos la navegacion como prop */}
                <SearchBar navigation={navigation}/>
                {/* Título de la sección de shows */}
                <Text style={styles.title}>Shows</Text>
                {/* Carrusel para los shows */}
                <ShowCarousel navigation={navigation} />
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
  // Contenedor principal
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
  // Para el título de las secciones (restaurantes y shows)
  title: {
    alignSelf: 'flex-start', // Alinea el título a la izquierda
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20, 
    paddingTop: 25, 
  },
  // Para el título principal (Inicio)
  mainTitle: {
    alignSelf: 'flex-start', 
    fontSize: 50,
    fontWeight: 'bold',
    marginLeft: 20, 
    paddingTop: 20, 
  },
  // Para la imágen de todos los restaurantes
  allRestaurants: {
    height: 90, 
    width: 160, 
    // Para que se adapte unicamente al tamaño que le dijimos
    resizeMode: 'contain',
  },
  // Para la imágen de todos los shows
  allShows: {
    height: 90, 
    width: 160,
    marginLeft: 20,
    resizeMode: 'contain',
  },
  // Para la imágen de promoción
  promo: {
    height: 90,
    width: 340, 
    resizeMode: 'contain',
  },
});
