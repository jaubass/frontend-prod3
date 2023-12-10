import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

export class Player extends React.Component {

    state = {
        video_resumen: '',
    }

    componentDidMount() {
        const { video_resumen } = this.props.route.params;
        this.setState({ video_resumen });
    }

    render() {
        return (
            <View>
                <Text>AQUÍ EL REPRODUCTOR</Text>
                <Text>He recibido esta string: {this.state.video_resumen}</Text>
                <Text>BOTÓN 1</Text>
                <Text>BOTÓN 2</Text>
                <Text>BOTÓN 3</Text>
                <Text>BOTÓN 4</Text>
                <Text>BOTÓN 5</Text>
            </View>
        );
    }
}