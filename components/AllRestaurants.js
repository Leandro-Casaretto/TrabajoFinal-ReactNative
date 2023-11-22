import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { storeContext } from '../store/StoreProvider'; 
import { useContext } from 'react'; 
import AllRestaurantsHeader from './AllRestauratnsHeader';

/*PANTALLA CON TODOS LOS RESTAURANTES. YA NO LE PASAMOS LOS DATOS CON PROPS, AHORA LOS SACAMOS DEL STORE (CONTEXT)*/ 

const AllRestaurantsScreen = ({ navigation }) => {
  // Usamos el contexto para acceder a los datos (store)
  const [store] = useContext(storeContext); 
  // Extraemos los restaurantes del store
  const { restaurants } = store; 

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Restaurant', { item })}>
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}> 
      <AllRestaurantsHeader />
      <FlatList
      // Ahora usamos los restaburantes del store en vez de restaurantData (prop)
        data={restaurants} 
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

// DEFINIMOS LOS ESTILOS
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10, 
  },
  image: {
    width: 120,
    height: 80,
    marginRight: 10,
    marginLeft: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Avenir-Medium',
    
  },
});

export default AllRestaurantsScreen;
