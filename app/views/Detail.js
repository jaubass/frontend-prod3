import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';
import TopMenu from '../widgets/TopMenu';

export class Detail extends React.Component {
    constructor(props) {
        super(props);
    }

    renderActivity = data => {
        return (
            <View>
                <Text>{data.item}</Text>
            </View>
        );
    }

    render() {

        const day = this.props.route.params;
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <TopMenu navigation={this.props.navigation}
                    video_resumen={day.video_resumen}
                />
                <View style={styles.detailLine}>
                    <Text>numero_dia {day.numero_dia}</Text>
                </View>
                <View style={styles.detailLine}>
                    <Text>ciudad {day.ciudad}</Text>
                </View>
                <View style={styles.detailLine}>
                    <Text>alojamiento {day.alojamiento}</Text>
                </View>
                <View style={styles.detailLine}>
                    <Text>descripcion {day.descripcion}</Text>
                </View>
                <View style={styles.detailLine}>
                    <Text>valoracion {day.valoracion}</Text>
                </View>
                <View style={styles.detailLine}>
                    <Text>Actividades</Text>
                    <FlatList
                        data={day.actividades}
                        renderItem={this.renderActivity}
                        keyExtractor={item => item}
                    />
                </View>
                <View style={styles.videoBtn}>
                    <TouchableOpacity
                        onPress={() => navigate('Player', { video_resumen: day.video_resumen })}
                    >
                        <Text>video_resumen {day.video_resumen}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.detailLine}>
                    <Text>imagen {day.imagen} esto es nuevo, quizá no haga falta</Text>
                </View>
                {/* <Text>{state.}</Text>
                <Text>{state.}</Text>
                <Text>{state.}</Text>
                <Text>{state.}</Text>
                <Text>{state.}</Text> */}
            </View>
        );
    }
}