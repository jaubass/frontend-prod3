import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
    },
    titulo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lugar: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export class Player extends React.Component {
    render() {
        return (
            <View>
                <Text>AQUÍ EL REPRODUCTOR</Text>
                <Text>REPRODUCTOR</Text>
                <Text>BOTÓN 1</Text>
                <Text>BOTÓN 2</Text>
                <Text>BOTÓN 3</Text>
                <Text>BOTÓN 4</Text>
                <Text>BOTÓN 5</Text>
            </View>
        );
    }
}