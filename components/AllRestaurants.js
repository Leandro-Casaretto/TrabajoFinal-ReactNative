import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AllRestaurantsHeader from './AllRestauratnsHeader';
import { storeContext } from '../store/StoreProvider'; 
import { useContext } from 'react'; 

/*PANTALLA CON TODOS LOS RESTAURANTES. YA NO LE PASAMOS LOS DATOS COM PROPS, AHORA LOS SACAMOS DEL STORE (CONTEXT)*/ 

const AllRestaurantsScreen = ({ navigation }) => {
  const [store] = useContext(storeContext); // Usamos useContext para acceder al store
  const { restaurants } = store; // Extraemos los restaurantes del store

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { item })}>
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
        data={restaurants} // Ahora usamos los restaburantes del store en vez de restaurantData (prop)
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

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
