import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './app/screens/homeScreen';
import SettingsScreen from './app/screens/settingsScreen';
import AddScreen from './app/screens/addScreen';
import ShareScreen from './app/screens/shareScreen';
import ScanScreen from './app/screens/scanScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Secret Santa App' }} />
        <Stack.Screen name='Settings' component={SettingsScreen} />
        <Stack.Screen name='Add' component={AddScreen} options={{ title: 'Add Gifters' }} />
        <Stack.Screen name='Share' component={ShareScreen} />
        <Stack.Screen name='Scan' component={ScanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}