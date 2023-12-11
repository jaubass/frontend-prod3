import React from 'react';
import { Text, View } from 'react-native';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { Video, ResizeMode } from 'expo-av';

import { styles } from '../styles/styles';

export class Player extends React.Component {

    // video = React.useRef(null);
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
            .then(url => {
                console.log("URL: ", url);
                this.setState({ videoPath: url });
            })
    }

    // VideoBox = () => {
    //     return (
    //         <View style={styles.videoBox}>
    //             <Text>VIDEOBOX, aquí la url: {this.state.videoPath}</Text>
    //             {/* <Image
    //                 source={{
    //                     uri: this.state.videoPath,
    //                     method: 'GET'
    //                  }}
    //                 style={styles.video}
    //             /> */}
    //             <Video
    //                 // source={{ uri: this.state.videoPath }}
    //                 source={{ url: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }}

    //                 // ref={(ref) => { this.player = ref }}
    //                 controls={true}
    //                 // onBuffer={this.onBuffer}                // Callback when remote video is buffering
    //                 // onError={this.videoError}               // Callback when video cannot be loaded
    //                 style={styles.video}
    //             />
    //         </View>
    //     );
    // }

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
                <View style={styles.videoBox}>
                    <Text>VIDEOBOX, aquí la url: {this.state.videoPath}</Text>
                    {/* <Video
                        source={{ uri: this.state.videoPath }}
                        controls={true}
                        style={styles.video}
                    /> */}
                    <Video
                        // ref={this.video}
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