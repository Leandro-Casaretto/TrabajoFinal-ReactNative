import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/* ENCABEZADO DE LA PANTALLA DE TODOS LOS RESTAURANTES (IGUAL QUE EL DE homeScreen)*/

const AllShowsHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Todos los shows</Text>
    </View>
  );
};

// DEFINIMOS LOS ESTILOS
const styles = StyleSheet.create({
  // BLOQUE DEL ENCABEZADO
  header: {
    backgroundColor: '#EE2D43',
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    width: '100%',
  },

  // TEXTO DEL ENCABEZADO
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 30,
  },
});

export default AllShowsHeader;
