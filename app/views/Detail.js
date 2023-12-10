import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
});

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
            <View>
                {/* <Text>id {day.id}</Text> */}
                <Text>numero_dia {day.numero_dia}</Text>
                <Text>ciudad {day.ciudad}</Text>
                <Text>alojamiento {day.alojamiento}</Text>
                <Text>descripcion {day.descripcion}</Text>
                <Text>valoracion {day.valoracion}</Text>
                <View>
                    <Text>Actividades</Text>
                    <FlatList
                        data={day.actividades}
                        renderItem={this.renderActivity}
                        keyExtractor={item=>item}
                    />
                </View>
                <TouchableOpacity
                    onPress={()=>navigate('Player', {video_resumen: day.video_resumen})}
                >
                    <Text>video_resumen {day.video_resumen}</Text>
                </TouchableOpacity>
                <Text>imagen {day.imagen} esto es nuevo, quizá no haga falta</Text>
                {/* <Text>{state.}</Text>
                <Text>{state.}</Text>
                <Text>{state.}</Text>
                <Text>{state.}</Text>
                <Text>{state.}</Text> */}
            </View>
        );
    }
}