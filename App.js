// Libraries imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Application imports
import { Home } from './app/views/Home';
import { Sitio } from './app/views/Sitio';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sitio" component={Sitio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
