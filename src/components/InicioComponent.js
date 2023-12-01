// InicioComponent.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const InicioComponent = () => {
  // Datos de ejemplo para el FlatList
  const data = Array.from({ length: 50 }, (_, index) => ({ key: `${index}`, title: `Item ${index + 1}` }));

  return (
    <View>
      {/* Zona del título superior */}
      <View>
        <Text>Título Superior</Text>
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
