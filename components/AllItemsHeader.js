import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/* ENCABEZADO DE LA PANTALLA DE TODOS LOS RESTAURANTES (IGUAL QUE EL DE homeScreen)*/

const AllItemsHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Restaurantes y shows</Text>
    </View>
  );
};

// DEFINIMOS LOS ESTILOS
const styles = StyleSheet.create({
  
  // Bloque del encabezado
  header: {
    backgroundColor: '#EE2D43',
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    width: '100%',
  },

  // Texto
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 30,
  },
});

export default AllItemsHeader;
