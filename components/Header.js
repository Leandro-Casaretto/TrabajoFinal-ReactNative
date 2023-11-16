import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

/*ENCABEZADO DE LA PANTALLA PRINCIPAL*/

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>GuiaRest</Text>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
    </View>
  );
};

// DEFINIMOS LOS ESTILOS

const styles = StyleSheet.create({
  // EL BLOQUE DEL ENCABEZADO
  header: {
    backgroundColor: '#EE2D43',
    alignItems: 'flex-start',
    paddingLeft: 25,
    justifyContent: 'center',
    height: 90,
    width: '100%',
  },
  // EL TEXTO DEL ENCABEZADO
  headerText: {
    fontFamily: 'Avenir',
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 30,
  },
  // EL LOGO DEL ENCABEZADO
  logo: {
    position: 'absolute',
    width: 45,
    height: 45,
    top: 35,
    left: 325,
    zIndex: 1,
    borderRadius: 10,
  },
});

export default Header;
