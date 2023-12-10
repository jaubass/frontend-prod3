import React from 'react';
import { Text, View, Image } from 'react-native';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { styles } from '../styles/styles';

export class Player extends React.Component {

    state = {
        video_resumen: '',
        videoPath: '',
    };

    componentDidMount() {
        const { video_resumen } = this.props.route.params;
        this.setState({ video_resumen });

        // Obtenemos de firebase la URL completa del vídeo
        const storage = getStorage();
        const storageRef = ref(storage, video_resumen);
        getDownloadURL(storageRef)
            .then(url=>{
                console.log("URL: ", url);
                this.setState({ videoPath: url });
            })
    }

    VideoBox = () => {
        return (
            <View style={styles.videoBox}>
                <Text>VIDEOBOX, aquí la url: {this.state.videoPath}</Text>
                <Image
                    source={{
                        uri: this.state.videoPath,
                        method: 'GET'
                     }}
                    style={styles.video}
                />
            </View>
        );
    }

    render() {

        if (this.state.videoPath === '') {
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
                <Text>AQUÍ EL REPRODUCTOR</Text>
                <Text>He recibido esta string: {this.state.video_resumen}</Text>
                <this.VideoBox />
                <Text>BOTÓN 1</Text>
                <Text>BOTÓN 2</Text>
                <Text>BOTÓN 3</Text>
                <Text>BOTÓN 4</Text>
                <Text>BOTÓN 5</Text>
            </View>
        );
    }
}