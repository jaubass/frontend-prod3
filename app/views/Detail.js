import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
});

export class Detail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const day = this.props.route.params;
        this.props.navigation.setOptions({ title: day.numero_dia });

        return (
            <View>
                <Text>id {day.id}</Text>
                <Text>numero_dia {day.numero_dia}</Text>
                <Text>ciudad {day.ciudad}</Text>
                <Text>alojamiento {day.alojamiento}</Text>
                <Text>descripcion {day.descripcion}</Text>
                <Text>valoracion {day.valoracion}</Text>
                <Text>actividades {day.actividades} Esto se ha de ver en bucle porque es un array</Text>
                <Text>video_resumen {day.video_resumen}</Text>
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