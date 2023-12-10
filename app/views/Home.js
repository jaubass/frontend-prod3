import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { LogIn } from '../widgets/LogIn';
import { Menu } from '../widgets/Menu';

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
    },
});

export class Home extends React.Component {
    render() {
        return (
            <View style={styles.contenedor}>
                {/* <LogIn msg="Apretar para Log In" /> */}
                <Menu navigation={this.props.navigation} />
            </View>
        );
    }
}