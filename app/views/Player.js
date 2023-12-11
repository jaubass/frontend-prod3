import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { Video, ResizeMode } from 'expo-av';

import { styles } from '../styles/styles';

export class Player extends React.Component {

    state = {
        video_resumen: '',
        videoPath: '',
    };

    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }

    componentDidMount() {
        const { video_resumen } = this.props.route.params;
        this.setState({ video_resumen });

        if (video_resumen !== '') {
            // Obtenemos de firebase la URL completa del vídeo
            const storage = getStorage();
            const storageRef = ref(storage, video_resumen);
            getDownloadURL(storageRef)
                .then(url => {
                    this.setState({ videoPath: url });
                })
        }
    }

    render() {

        if (this.state.videoPath === '') {
            return (
                <View style={styles.container}>
                    <View style={styles.loader}>
                        <ActivityIndicator size="large" />
                    </View>

                </View>
            );
        }

        return (
            <View style={styles.container}>
                <Text>AQUÍ EL REPRODUCTOR</Text>
                <Text>He recibido esta string: {this.state.video_resumen}</Text>
                <View style={styles.videoBox}>
                    <Text>VIDEOBOX, aquí la url: {this.state.videoPath}</Text>
                    <Video
                        ref={this.videoRef}
                        style={styles.video}
                        source={{ uri: this.state.videoPath }}
                        useNativeControls
                        resizeMode={ResizeMode.CONTAIN}
                    />
                </View>
                <Text>BOTÓN 1</Text>
                <Text>BOTÓN 2</Text>
                <Text>BOTÓN 3</Text>
                <Text>BOTÓN 4</Text>
                <Text>BOTÓN 5</Text>
            </View>
        );
    }
}