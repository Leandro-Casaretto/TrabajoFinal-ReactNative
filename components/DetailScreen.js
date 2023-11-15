import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import MyCarousel from './Carousel';
import { AntDesign } from '@expo/vector-icons';
import { CaretDownFilled } from '@ant-design/icons'

/*PANTALLA DE DETALLES DE LOS RESTAURANTES Y SHOWS (PENDIENTE: PASARLE LOS DETALLES DE CADA RESTAURANTE)*/

const DetailScreen = ({ route, navigation }) => {
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

          <View style={styles.lupa2}>
              <TouchableOpacity onPress={() => {navigation.navigate('AllRestaurants');}}>
                <AntDesign name="search1" size={24} color="black" />
              </TouchableOpacity>  
          </View>
          
        </View>
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
  menuContainer: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    padding: 20,
    paddingTop: 20,
    backgroundColor: '#ffe1e4',
  },
  menuText: {
    color: 'EE2D43',
    fontSize: 16,
    marginLeft: 10,
  },
  menuTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  detailTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  detailText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  lupa: {
    position: 'absolute',
    top: 48,
    left: 290,
    zIndex: 1,
    borderRadius: 10,
  },
  lupa2: {
    position: 'absolute',
    top: 48,
    left: 320,
    zIndex: 1,
    borderRadius: 10,
  },
  lupa3: {
    position: 'absolute',
    top: 48,
    left: 350,
    zIndex: 1,
    borderRadius: 10,
  }
});

export default DetailScreen;
