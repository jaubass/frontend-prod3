// InicioComponent.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../styles/styles'; // Ajusta la ruta según tu estructura

const InicioComponent = () => {
  // Datos de ejemplo para el FlatList
  const data = Array.from({ length: 50 }, (_, index) => ({ key: `${index}`, title: `Item ${index + 1}` }));

  return (
    <View>
      {/* Zona del título superior */}
      <View style={styles.tituloSuperior}>
        <Text style={styles.tituloSuperiorTexto}>Code 67</Text>
      </View>
      <View style={styles.subtituloSuperior}>
        <Text style={styles.subtituloSuperiorTexto}>Mi viaje</Text>
      </View>

      {/* Zona del listado infinito mediante FlatList */}
      <FlatList
        data={data}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default InicioComponent;
