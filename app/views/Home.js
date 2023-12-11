import React from 'react';
import { Text, View } from 'react-native';
import { Menu } from '../widgets/Menu';
import { styles } from '../styles/styles';

export class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.pageTitle}>
                    <Text style={styles.pageTitleText}>MI VIAJE</Text>
                    <Text style={styles.pagesubtitleText}>Y alguna cosita más aquí</Text>
                </View>
                <Menu style={styles.menu}
                navigation={this.props.navigation} />
            </View>
        );
    }
}