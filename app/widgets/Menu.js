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
            .then(() => {
                days.sort((a, b) => a.value.numero_dia - b.value.numero_dia);
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