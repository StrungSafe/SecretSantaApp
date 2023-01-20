import { StyleSheet, SafeAreaView } from 'react-native';
import Button from '../components/button';

import defaultStyles from './styles';

export default function HomeScreen(props) {
  const {
    navigation
  } = props;

  return (
    <SafeAreaView style={styles.container}>
      <Button
        style={styles.start}
        title='Start'
        onPress={() => navigation.navigate('Settings')}
      />
      <Button
        style={styles.toggleScannerBtn}
        title='Open Camera'
        onPress={() => navigation.navigate('Scan')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...defaultStyles.container,
    flex: 1,
    justifyContent: 'center'
  },
  start: {
    ...defaultStyles.button,
    paddingBottom: 20,
  },
  toggleScannerBtn: {
    ...defaultStyles.button,
  },
});