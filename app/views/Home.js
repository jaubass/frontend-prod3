import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Menu } from '../widgets/Menu';
import { styles } from '../styles/styles';

export class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Menu navigation={this.props.navigation} />
            </View>
        );
    }
}