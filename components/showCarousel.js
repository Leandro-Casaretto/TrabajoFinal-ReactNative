import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Image, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { storeContext } from '../store/StoreProvider'; // Importamos storeContext
import { useContext } from 'react'; // Importamos useContext

/* COMPONENTE DEL CARRUSEL. YA NO RECIBIMOS LOS DATOS COMO PROP, SINO EL TIPO (RESTAURANTE O SHOW)*/

const MyShowCarousel = ({ navigation, type }) => {
  // Usamos useContext para acceder al store (el estado global)
  const [store] = useContext(storeContext); 
  let data = store.shows;
    

  const renderItem = ({ item }) => (
    
    <TouchableOpacity onPress={() => navigation.navigate('Details', { item })}>
      <View style={styles.restaurantContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={{ fontSize: 20,  fontFamily: 'Avenir-Medium', paddingTop:20 }}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Carousel
      data={data}
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
    // ESTILO PARA AJUSTAR LOS MARGENES
    carouselMargin: {
      marginBottom: 0, // Ajusta el margen inferior entre los carruseles
      marginTop: 10, // Ajusta el margen superior entre los carruseles
    },

    // ESTILO PARA LOS CONTENEDORES DE LOS ELEMENTOS (SHOWS, RESTAURANTES)
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

export default MyShowCarousel;