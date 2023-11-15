import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

/*ENCABEZADO DE LA PANTALLA PRINCIPAL*/

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>GuiaRest</Text>
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
});

export default Header;
