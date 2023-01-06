import { View, StyleSheet } from 'react-native';
import SS from './app/ss';

export default function App() {
  return (
    <View style={styles.container}>
      <SS />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9eceb',
    alignItems: 'center',
    justifyContent: 'center',
  }
});