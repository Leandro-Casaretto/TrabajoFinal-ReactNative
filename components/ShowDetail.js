import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

/*PANTALLA DE DETALLES DE LOS SHOWS*/

const ShowDetail = ({ route }) => {
  const { item } = route.params;
  const { description, location, date, phone } = item.details;

  return (
    <View style={styles.screen}>

      {/* Le agregamos una imagen de encabezado */}
      <ImageBackground source={require('../assets/blurred.png')} style={styles.header}></ImageBackground>

      {/* Logo y titulo */}
      <View style={styles.container}>
          <Image source={item.image} style={styles.logo} />
          <Text style={styles.text}>{item.text}</Text>
      </View>

      {/* Descripcion */}
      <Text style={{ fontSize: 20, fontWeight: 'bold',  fontFamily: 'Avenir-Medium', paddingTop:40, paddingLeft:20 }}>Descripción</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}> {description}</Text>
      </View>

      {/* Detalles */}
      <Text style={{ fontSize: 20, fontWeight: 'bold',  fontFamily: 'Avenir-Medium', paddingTop:40, paddingLeft:20 }}>Detalles</Text>
      {/* Le agregamos los datos (ubicacion, telefono, etc) */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailTitle}>Ubicación:</Text>
        <Text style={styles.detailText}> {location}</Text>

        <Text style={styles.detailTitle}>Fecha:</Text>
        <Text style={styles.detailText}> {date}</Text>

        <Text style={styles.detailTitle}>Contacto:</Text>
        <Text style={styles.detailText}>{phone}</Text>
          
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
    width: 80,
    height: 133,
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
  descriptionContainer: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    padding: 20,
    paddingTop: 20,
    backgroundColor: '#ffe1e4',
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
  descriptionText: {
    color: 'black',
    fontSize: 16,
    marginLeft: 10,
    textAlign: 'left',
  },
});

export default ShowDetail;
