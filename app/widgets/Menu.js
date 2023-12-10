import React from 'react';
import { View, Text, Alert, TouchableOpacity, FlatList } from 'react-native';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../config/db';
import { styles } from '../styles/styles';

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
            <View style={styles.dayButton}>
                <TouchableOpacity
                    onPress={() => navigate('Detail', { ...data.item.value })}
                >
                    <Text style={styles.dayButtonText}>
                        {data.item.value.numero_dia} {data.item.value.ciudad}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {

        if (this.state.loading) {
            return (
                <View style={styles.container}>
                    <View style={styles.loader}>
                        <Text>Cargando...</Text>
                    </View>
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <View style={styles.pageTitle}>
                    <Text style={styles.pageTitleText}>MI VIAJE</Text>
                    <Text style={styles.pagesubtitleText}>Y alguna cosita más aquí</Text>
                </View>
                <FlatList
                    data={this.state.days}
                    renderItem={item => this.renderItem(item)}
                    keyExtractor={item => item.key}
                />
            </View>
        );

    }
}