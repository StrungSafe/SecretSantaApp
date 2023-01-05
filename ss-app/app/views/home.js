import { Text, View, StyleSheet } from 'react-native';
import Button from '../button';
import QRScanner from '../QRScanner';

export default function Home(props) {
  const {
    onStartClick
  } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Secret Santa</Text>
      <Button style={styles.start} title="Start" onPress={onStartClick} />
      <QRScanner />
      <Button styles={styles.scan} title="Scan Results" onPress={() => { }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  header: {
  },
  start: {
  },
  scan: {
  }
});