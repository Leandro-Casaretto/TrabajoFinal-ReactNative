import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Image, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { storeContext } from '../store/StoreProvider';
import { useContext } from 'react'; 

/* CARRUSEL DE LOS RESTAURANTES (USAMOS UNO YA CREADO)*/

const RestaurantCarousel = ({ navigation }) => {
  // Usamos el contexto para acceder a los datos (store)
  const [store] = useContext(storeContext); 
  // Extraemos los restaurantes del store
  const { restaurants } = store;

  // Función para renderizar cada elemento del carrusel (con logo y nombre)
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Restaurant', { item })}>
      <View style={styles.restaurantContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={{ fontSize: 20,  fontFamily: 'Avenir-Medium', paddingTop:20 }}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Carousel
      data={restaurants}
      renderItem={renderItem}
      sliderWidth={400}
      itemWidth={180}
      itemHeight={150}
      layout={'default'}
      containerCustomStyle={styles.carouselMargin}
    />
  );
};

// DEFINIMOS LOS ESTILOS
const styles = StyleSheet.create({
    // Para ajustar los margenes 
    carouselMargin: {
      marginBottom: 0, 
      marginTop: 10, 
    },

    // Contenedores de los restaurantes
    restaurantContainer: {
      alignItems: 'center',
      marginVertical: 10,
    },
    
    // Imagenes de los restaurantes
    image: {
      width: 180,
      height: 110,
      borderRadius: 10,
    }
});

export default RestaurantCarousel;