import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, FlatList } from 'react-native';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../config/db';

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

    // viewMsg = (data) => {
    //     console.log("Data: ", data);
    //     Alert.alert("Has apretado un botón: " + data.item.value.ciudad);
    // }

    componentDidMount() {
        const days = [];  // Variable provisional para los días. Acabará en state
        const coll = collection(db, "data");
        const q = query(coll, orderBy("numero_dia"));
        getDocs(q)
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    days.push({ key: doc.id, value: doc.data() });
                });
            })
            .then(() => {
                this.setState({ days, loading: false });
            })
    }

    renderItem = data => {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <TouchableOpacity
                    onPress={() => navigate('Detail', { ...data.item.value })}
                >
                    <Text>{data.item.value.numero_dia} {data.item.value.ciudad}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {

        if (this.state.loading) {
            return (
                <View>
                    <Text>Cargando...</Text>
                </View>
            );
        }

        return (
            <View>
                <FlatList
                    data={this.state.days}
                    renderItem={item => this.renderItem(item)}
                    keyExtractor={item => item.key}
                />
            </View>
        );

    }
}