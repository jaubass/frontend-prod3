// Libraries imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

// Application imports
import { Home } from './app/views/Home';
import { Detail } from './app/views/Detail';
import { Player } from './app/views/Player';
import { Component } from 'react';

const Stack = createNativeStackNavigator();
const getToken = async () => {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

  if (status !== 'granted') {
    return;
  }

  const token = await Notifications.getExpoPushTokenAsync();
  console.log(token);
  return token;
};


export default class  App extends React.Component {
  ComponentDidMount(){
    getToken();
  }
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Detail" component={Detail}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Player" component={Player}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }

/*
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Detail" component={Detail}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Player" component={Player}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
*/

}
