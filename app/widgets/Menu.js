import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, FlatList } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/db';

const days = [];

const styles = StyleSheet.create({
});

export class Menu extends React.Component {

    state = {
        days: [],
        loading: true,
    }

    constructor(props) {
        super(props);
    }

    viewMsg = (data) => {
        console.log("Data: ", data);
        Alert.alert("Has apretado un botón: " + data.item.value.ciudad);
    }

    componentDidMount() {
        getDocs(collection(db, "data"))
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    days.push({ key: doc.id, value: doc.data() });
                });
            })
            .then(()=>{
                this.setState({ days, loading: false });
            })
    }

    renderItem = data =>
        <View>
            <TouchableOpacity onPress={() => this.viewMsg(data)}>
                <Text>{data.item.value.numero_dia} {data.item.value.ciudad}</Text>
            </TouchableOpacity>
        </View>

    render() {

        const { navigate } = this.props.navigation;

        if (this.state.loading) {
            return (<View><Text>Loading...</Text></View>);

        } else {
            return (
                <View>
                    <FlatList
                        data={this.state.days}
                        renderItem={item => this.renderItem(item)}
                        keyExtractor={item => item.key}
                    />
                </View>);
        }


        // return (
        //     <View style={styles.contenedor}>
        //         <View style={styles.filaDestacada}>
        //             <TouchableOpacity style={styles.boton}
        //                 onPress={() => navigate('Sitio')}>
        //                 <Text style={styles.textoBoton}>SITIO DESTACADO</Text>
        //             </TouchableOpacity>
        //         </View>
        //         <View style={styles.fila}>
        //             <TouchableOpacity style={styles.boton}
        //                 onPress={() => navigate('Detail', { numero_dia: 33 })}>
        //                 <Text style={styles.textoBoton}>DETAIL</Text>
        //             </TouchableOpacity>
        //             <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
        //                 <Text style={styles.textoBoton}>SITIO 3</Text>
        //             </TouchableOpacity>
        //         </View>
        //         <View style={styles.fila}>
        //             <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
        //                 <Text style={styles.textoBoton}>SITIO 4</Text>
        //             </TouchableOpacity>
        //             <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
        //                 <Text style={styles.textoBoton}>SITIO 5</Text>
        //             </TouchableOpacity>
        //         </View>
        //     </View>
        // );
    }
}