import React from 'react';
import { Text, View } from 'react-native';
import { LogIn } from '../widgets/LogIn';

export class Home extends React.Component {
    render() {
        return (
            <View>
                <LogIn msg="Apretar para Log In" />
                <Text>Elemento 1</Text>
                <Text>Elemento 2</Text>
            </View>
        );
    }
}