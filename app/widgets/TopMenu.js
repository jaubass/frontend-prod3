import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from '../styles/styles';
import { Icon } from '@rneui/themed';

export default class TopMenu extends React.Component {
    render() {
        const { navigate, goBack } = this.props.navigation;
        const video_resumen = this.props.video_resumen;

        // Preparamos los dos botones centrales
        const centerButtonVideo = (
            <View style={styles.topMenuItem}>
                <TouchableOpacity
                    onPress={() => navigate('Player', { video_resumen })}
                >
                    <Icon name="videocam" color="white" />
                </TouchableOpacity>
            </View>
        );
        const centerButtonDetail = (
            <View style={styles.topMenuItem}>
                <TouchableOpacity onPress={() => goBack()}>
                    <Icon name="event-note" color="white" />
                </TouchableOpacity>
            </View>
        );

        // Decidimos qué botón central mostrar
        const centerButton = video_resumen ?
            centerButtonVideo : centerButtonDetail;

        return (
            <View style={styles.topMenuBox}>
                <View style={styles.topMenuItem}>
                    <TouchableOpacity onPress={() => goBack()}>
                        <Icon name="arrow-back" color="white" />
                    </TouchableOpacity>
                </View>
                {centerButton}
                <View style={styles.topMenuItem}>
                    <TouchableOpacity onPress={() => navigate('Home')}>
                        <Icon name="home" color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}