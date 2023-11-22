import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

/*PANTALLA DE DETALLES DE LOS RESTAURANTES*/

const RestaurantDetail = ({ route }) => {
  // Obtenemos los datos del restaurante (no hace falta volver a usar el useContext porque ya tenemos los datos)
  const { item } = route.params;
  const { location, phone, openingHours } = item.details;

  return (
    <View style={styles.screen}>

      {/* Le agregamos una imagen de encabezado */}
      <ImageBackground source={require('../assets/blurred.png')} style={styles.header}></ImageBackground>

      <View style={styles.container}>
          {/* Logo y titulo */}
          <Image source={item.image} style={styles.logo} />
          <Text style={styles.text}>{item.text}</Text>

          {/* Icono de info */}
          <View style={styles.infoIcon}>
              <Image source={require('../assets/info.png')} style={{ width: 23, height: 23}} />
          </View> 

        </View>

        {/* Detalles */}
        <Text style={{ fontSize: 22, fontWeight: 'bold',  fontFamily: 'Avenir-Medium', paddingTop:40, paddingLeft:20 }}>Detalles</Text>
        {/* Le agregamos los datos (ubicacion, telefono, etc) */}
        <View style={styles.detailsContainer}>
          <Text style={styles.detailTitle}>Ubicación:</Text>
          <Text style={styles.detailText}> {location}</Text>

          <Text style={styles.detailTitle}>Teléfono:</Text>
          <Text style={styles.detailText}>{phone}</Text>

          <Text style={styles.detailTitle}>Horario:</Text>
          <Text style={styles.detailText}>{openingHours}</Text>
        </View>

    </View>
    
  );
};

// DEFINIMOS LOS ESTILOS
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    height: 130,
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
  },
  logo: {
    width: 60,
    height: 60,
    marginLeft: 20,
    borderRadius: 10,
  },
  text: {
    fontFamily: 'Avenir',
    paddingLeft: 10,
    fontSize: 22,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  detailsContainer: {
    marginTop: 17,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    padding: 20,
    paddingTop: 20,
    backgroundColor: '#EE2D43',
  },
  detailTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 7,
  },
  detailText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  infoIcon: {
    position: 'absolute',
    top: 48,
    left: 320,
  },
});

export default RestaurantDetail;
