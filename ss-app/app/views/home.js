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

  const toggleScannerButtonTitle = showScanner ? "Hide": "Open Camera";

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Secret Santa</Text>
      <Button style={styles.start} title="Start" onPress={onStartClick} />
      <Button
        style={styles.toggleScannerBtn}
        title={toggleScannerButtonTitle}
        onPress={() => setShowScanner(prev => !prev)}
      />
      <QRScanner
        onBarCodeScanned={onBarCodeScanned}
        show={showScanner}
        style={styles.qrScanner}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  header: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 20,
    textAlign: 'center',
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold',
  },
  start: {
    flex: 1,
    paddingBottom: 20,
    width: '66%',
    alignSelf: 'center',
    color: 'red',
  },
  toggleScannerBtn: {
    flex: 2,
    width: '66%',
    alignSelf: 'center',
    color: 'red',
  },
  qrScanner: {
    ...StyleSheet.absoluteFillObject,
  },
});