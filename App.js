// Libraries imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Application imports
import { Home } from './app/views/Home';
import { Detail } from './app/views/Detail';
import { Player } from './app/views/Player';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}
          options={{title:"Mi viaje"}}
        />
        <Stack.Screen name="Detail" component={Detail}
          options={{title:"Detalle del día"}}
        />
        <Stack.Screen name="Player" component={Player}
          options={{title:"Vídeo resumen"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
