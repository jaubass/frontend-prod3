import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const styles = StyleSheet.create({
    contenedor: {
        flex: 0.4,
        backgroundColor: '#353535',
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
        width: '33%',
        height: '45%',
        backgroundColor: "#353535",
        justifyContent: 'space-between',
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

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.contenedor}>
                <View style={styles.fila}>
                    <TouchableOpacity style={styles.boton}
                        onPress={()=>navigate('Sitio')}>
                        <Text style={styles.textoBoton}>INICIO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} 
                        onPress={()=>navigate('Detalle')}>
                        <Text style={styles.textoBoton}>DETALLE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} 
                        onPress={()=>navigate('Video')}>
                        <Text style={styles.textoBoton}>VIDEO</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}