import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AllShowsHeader from './AllShowsHeader';
import { storeContext } from '../store/StoreProvider'; 
import { useContext } from 'react'; 

/*PANTALLA CON TODOS LOS SHOWS. YA NO LE PASAMOS LOS DATOS COM PROPS, AHORA LOS SACAMOS DEL STORE (CONTEXT)*/ 

const AllShowsScreen = ({ navigation }) => {
  // Usamos el contexto para acceder a los datos (store)
  const [store] = useContext(storeContext); 
  // Extraemos los shows del store
  const { shows } = store; 

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Show', { item })}>
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}> 
      <AllShowsHeader/>
      <FlatList
      // Ahora usamos los shows del store en vez de showData (prop)
        data={shows} 
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
    width: 100,
    height: 166,
    marginRight: 10,
    marginLeft: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Avenir-Medium',
    
  },
});

export default AllShowsScreen;
