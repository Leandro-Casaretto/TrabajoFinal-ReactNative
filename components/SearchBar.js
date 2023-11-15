// Importamos los componentes necesarios de React y React Native
import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import { storeContext } from '../store/StoreProvider'; // Importa storeContext
import { useContext } from 'react'; // Importa useContext
import { AntDesign } from '@expo/vector-icons'; // Importa el icono de búsqueda desde @expo/vector-icons


/* BARRA DE BUSQUEDA, A MEDIDA QUE ESCRIBIMOS NOS DA POSIBLES RESULTADOS*/

const SearchBar = ({navigation}) => {
  const [store] = useContext(storeContext); // Usa useContext para acceder a tus datos
  const { restaurants, shows } = store; // Extrae los datos de restaurantes y shows del store


  // Inicializamos el estado para la búsqueda y los datos (restaurantes y shows) filtrados

  /* Creamos el estado searchQuery y la función setSearchQuery para actualizarlo. 
  Este estado nos sirve para almacenar la búsqueda actual del usuario. 
  Al principio, lo inicializamos con un string vacío porque no hay ninguna búsqueda 
  cuando montamos el componente por primera vez.*/

  const [searchQuery, setSearchQuery] = useState('');

  /* Creamos el estado filteredData y la función setFilteredData para actualizarlo . 
  Este estado nos sirve para almacenar los datos (restaurantes y shows) que coinciden
  con la búsqueda del usuario. Al principio, lo inicializamos con un array vacío
  porque no hay ningún dato filtrado*/

  const [filteredData, setFilteredData] = useState([]);

  // Juntamos los datos de restaurantes y shows en un solo array
  const allData = [...restaurants, ...shows];

  // Definimos la función que maneja la búsqueda
  const handleSearch = (text) => {
    // Actualizamos la búsqueda con el texto ingresado por el usuario
    setSearchQuery(text);

    // Si el usuario escibió (hay texto) filtramos los datos basándonos en esa búsqueda
    if (text) {
      // Creamos un array que contiene solo los elementos que coinciden con  de búsqueda
      const newData = allData.filter(item => {
        const itemData = item.text.toUpperCase();
        const textData = text.toUpperCase();
        
        // Verificamos si textData (la búsqueda en mayúsculas) está en itemData (los datos en mayúsculas).
        return itemData.indexOf(textData) > -1;
      });

      // Actualizamos los datos filtrados con los nuevos datos
      setFilteredData(newData);
    } else {
      // Si la búsqueda está vacía, limpiamos los resultados de la búsqueda (volvemos al principio)
      setFilteredData([]);
    }
  };
  
  useEffect(() => {
    // Limpiamos los resultados de la búsqueda cuando el componente se desmonta
    return () => setFilteredData([]);
  }, []);

  // Renderizamos el componente
  return (
    <View style={styles.container}>
      
      <View> 
      {/* Acá es donde el usuario realiza la búsqueda */}
      <TextInput
        value={searchQuery}
        // Cada vez que el usuario escribe, llamamos a la función handleSearch
        onChangeText={handleSearch}
        placeholder="Buscar restaurantes o shows..."
        placeholderTextColor="black" 
        style={styles.input}
      />
      
      </View>
      <View style={styles.lupa}>
      <TouchableOpacity onPress={() => {
              // Navega a la pantalla "Details" y pasa el elemento como parámetro
              navigation.navigate('AllRestaurants');
            }}>
            <AntDesign name="search1" size={24} color="white" />
            </TouchableOpacity>
        </View>

      {/* Acá listamos los datos filtrados */}
      {/* Verifica si searchQuery (la búsqueda actual) tiene algún valor. (si es verdadero se ejecuta lo q esta adentro de los parentiesis)*/}
      {searchQuery ? (
        <FlatList
        // Le pasamos al FlatList los datos que debe renderizar (los filtrados)
          data={filteredData}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {
              // Navega a la pantalla "Details" y pasa el elemento como parámetro
              navigation.navigate('Details', { item });
            }}>
              <Text style={styles.item}>{item.text}</Text>
            </TouchableOpacity>
          )}
        />
      ) : null}
    </View>
  );
};

// DEFINIMOS LOS ESTILOS

const styles = StyleSheet.create({
  // CONTENEDOR DE LA BARRA
  container: {
    marginTop: 25, 
    backgroundColor: '#EE2D43', 
    width: '100%', // Para que ocupe todo el ancho
  },
  // LA BARRA DE BUSQUEDA
  input: {
    marginBottom: 20,
    marginTop: 20,
    height: 40,
    width: 320,
    margin: 12,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white', // Color de fondo del TextInput
  },
  // LOS RESULTADOS DE LA BUSQUEDA
  item: {
    fontFamily: 'Avenir-Medium',
    textAlign: 'center', // Centra el texto horizontalmente
    color: 'white', // Color del texto
    fontSize: 18,
    paddingBottom: 20,
    fontWeight: '600',
  },
  lupa: {
    position: 'absolute',
    marginLeft: 8,
    top: 30,
    left: 340,
    zIndex: 1,
    backgroundColor: '#EE2D43',
    borderRadius: 10,
  }
});

export default SearchBar;
