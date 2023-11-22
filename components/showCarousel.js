import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Image, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { storeContext } from '../store/StoreProvider'; // Importamos storeContext
import { useContext } from 'react'; // Importamos useContext

/* COMPONENTE DEL CARRUSEL. YA NO RECIBIMOS LOS DATOS COMO PROP, SINO EL TIPO (RESTAURANTE O SHOW)*/

const ShowCarousel = ({ navigation }) => {
  // Usamos el contexto para acceder a los datos (store)
  const [store] = useContext(storeContext); 
  // Extraemos los shows del store
  const { shows } = store;
    

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Show', { item })}>
      <View style={styles.restaurantContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={{ fontSize: 20,  fontFamily: 'Avenir-Medium', paddingTop:20 }}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Carousel
      data={shows}
      renderItem={renderItem}
      sliderWidth={400}
      itemWidth={160}
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

    // Para los contenedores de los shows
    restaurantContainer: {
      alignItems: 'center',
      marginVertical: 10,
    },
    image: {
      width: 150,
      height: 250,
      borderRadius: 10,
    }
});

export default ShowCarousel;