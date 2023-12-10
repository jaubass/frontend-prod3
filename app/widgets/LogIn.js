import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textoCabecera: {
        textAlign: 'right',
        color: 'white',
        fontSize: 20,
    },
    cabecera: {
        paddingTop: 30,
        paddingBottom: 10,
        paddingRight: 10,
        backgroundColor: "#35605a",
    },
});

export class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { logged: false};
    }

    changeLog = () => {
        this.setState({ logged: !this.state.logged });
    }

    render() {
        const text = this.state.logged ? 'Usuario Anónimo' : this.props.msg;
        return (
            <View style={styles.cabecera}>
                <Text style={styles.textoCabecera} onPress={this.changeLog}>{text}</Text>
            </View>
        );
    }
}