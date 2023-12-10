import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#353535',
    },
    filaDestacada: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#ffffff",
        borderBottomWidth: 1,
        backgroundColor: "#353535",
    },
    fila: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: "#ffffff",
        borderBottomWidth: 1,
        backgroundColor: "#353535",
    },
    boton: {
        width: '50%',
        height: '50%',
        backgroundColor: "#353535",
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBoton: {
        color: "#ffffff",
        fontSize: 18,
    },
});

export class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    viewMsg = () => {
        Alert.alert("Has apretado un botón");
    }

    render() {
        return (
            <View style={styles.contenedor}>
                <View style={styles.filaDestacada}>
                    <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
                        <Text style={styles.textoBoton}>SITIO DESTACADO</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.fila}>
                    <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
                        <Text style={styles.textoBoton}>SITIO 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
                        <Text style={styles.textoBoton}>SITIO 3</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.fila}>
                    <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
                        <Text style={styles.textoBoton}>SITIO 4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
                        <Text style={styles.textoBoton}>SITIO 5</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}