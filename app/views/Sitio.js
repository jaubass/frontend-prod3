import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
                <Menu navigation={this.props.navigation} />
                <Text style={styles.titulo}>Code 067</Text>
                <Text style={styles.lugar}>MI VIAJE</Text>
            </View>
        );
    }
}