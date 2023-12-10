import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LogIn } from '../widgets/LogIn';
import { Menu } from '../widgets/Menu';

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

export class Sitio extends React.Component {
    render() {
        return (
            <View style={styles.contenedor}>
                <LogIn msg="Apretar para Log In" />
                <Text style={styles.titulo}>TÍTULO DEL SITIO</Text>
                <Text style={styles.lugar}>DETALLE</Text>
            </View>
        );
    }
}