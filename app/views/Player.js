import React from 'react';
import { ActivityIndicator, Text, View, TouchableOpacity } from 'react-native';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { Video, ResizeMode } from 'expo-av';
import { Icon } from '@rneui/themed';

import TopMenu from '../widgets/TopMenu';
import { styles } from '../styles/styles';

export class Player extends React.Component {

    state = {
        video_resumen: '',
        videoPath: '',
    };
    playbackObject = null;

    constructor(props) {
        super(props);
        // this.videoRef = React.createRef();
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

    handleVideoRef = component => {
        this.playbackObject = component;
        // if (this.playbackObject) {
        //     const status = this.playbackObject.getStatusAsync();
        //     console.log("Status: ", status);
        // }
    }

    handleVideo = status => {
        if (this.playbackObject) {
            console.log("Status: ", status);
            this.playbackObject.setStatusAsync(status);
        }
    }

    handleFullScreen = () => {
        if (this.playbackObject) {
            console.log("FullScreen");
            this.playbackObject.presentFullscreenPlayer();
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
                <TopMenu navigation={this.props.navigation}
                    video_resumen={null}
                />
                <Text>AQUÍ EL REPRODUCTOR</Text>
                <Text>He recibido esta string: {this.state.video_resumen}</Text>
                <View style={styles.videoBox}>
                    <Text>VIDEOBOX, aquí la url: {this.state.videoPath}</Text>
                    <Video
                        ref={this.handleVideoRef}
                        style={styles.video}
                        source={{ uri: this.state.videoPath }}
                        useNativeControls={false}
                        resizeMode={ResizeMode.CONTAIN}
                    />
                </View>
                <View style={styles.playerButtonsBox}>
                    <View style={styles.playerButton}>
                        <TouchableOpacity onPress={() => this.handleVideo({shouldPlay: true})}>
                            <Icon name="play-circle-fill" color="white" size={30} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.playerButton}>
                        <TouchableOpacity onPress={() => this.handleVideo({shouldPlay: false})}>
                            <Icon name="pause-circle-filled" color="white" size={30} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.playerButton}>
                        <TouchableOpacity onPress={() => this.handleVideo({isMuted: true})}>
                            <Icon name="volume-off" color="white" size={30} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.playerButton}>
                        <TouchableOpacity onPress={() => this.handleVideo({isMuted: false})}>
                            <Icon name="volume-up" color="white" size={30} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.playerButton}>
                        <TouchableOpacity onPress={() => this.handleVideo({positionMillis: 0})}>
                            <Icon name="loop" color="white" size={30} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.playerButton}>
                        <TouchableOpacity onPress={() => this.handleFullScreen()}>
                            <Icon name="fullscreen" color="white" size={30} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}