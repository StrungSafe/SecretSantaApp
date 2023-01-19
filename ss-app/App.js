import { StyleSheet } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './app/screens/homeScreen';
import SettingsScreen from './app/screens/settingsScreen';
import AddScreen from './app/screens/addScreen';
import ShareScreen from './app/screens/shareScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} option={{ title: 'Hello World' }} />
        <Stack.Screen name='Settings' component={SettingsScreen} />
        <Stack.Screen name='Add' component={AddScreen} />
        <Stack.Screen name='Share' component={ShareScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#f9eceb',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});