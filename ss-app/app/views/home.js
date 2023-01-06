import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import Button from '../button';
import QRScanner from '../QRScanner';

export default function Home(props) {
  const {
    onStartClick,
    handleBarCodeScanned
  } = props;

  const [showScanner, setShowScanner] = useState(false);

  const onBarCodeScanned = value => {
    handleBarCodeScanned(value);
    setShowScanner(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Secret Santa</Text>
      <Button style={styles.start} title="Start" onPress={onStartClick} />
      <QRScanner
        onBarCodeScanned={onBarCodeScanned}
        show={showScanner}
      />
      <Button styles={styles.scan} title="Scan Results" onPress={() => setShowScanner(prev => !prev)} />
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