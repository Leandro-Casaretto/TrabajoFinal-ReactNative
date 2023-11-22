import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { storeContext } from '../store/StoreProvider'; 
import { useContext } from 'react'; 
import AllItemsHeader from './AllItemsHeader';

/*PANTALLA CON TODOS LOS RESTAURANTES Y SHOWS*/ 

const AllItems = ({ navigation }) => {
  // Usamos el contexto para acceder a los datos (store)
  const [store] = useContext(storeContext); 
  // Extraemos los restaurantes y shows del store
  const { restaurants, shows } = store; 

  // Juntamos todos los datos en un solo array
  const allItems = [...restaurants, ...shows];

  const renderItem = ({ item }) => (
    // Si el item es un restaurante, navegamos a la pantalla de restaurante, si es un show, a la de show
    <TouchableOpacity onPress={() => navigation.navigate(item.type === 'restaurant' ? 'Restaurant' : 'Show', { item })}>
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    // Flex 1 porque si no el ulitmo elemento no se ve (que ocupe toda la pantalla)
    <View style={{ flex: 1 }}> 
    <AllItemsHeader />
      <FlatList
        data={allItems} 
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

export default AllItems;
