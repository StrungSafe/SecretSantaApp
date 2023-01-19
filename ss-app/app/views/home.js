import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import Button from '../components/button';
import QRScanner from '../components/QRScanner';

import defaultStyles from './styles';

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
      <View
        style={styles.body}
      >
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...defaultStyles.container,
    flex: 1,
  },
  header: {
    ...defaultStyles.header,
    flex: 1,
  },
  body: {
    flex: 3,
  },
  start: {
    ...defaultStyles.button,
    paddingBottom: 20,
  },
  toggleScannerBtn: {
    ...defaultStyles.button,
  },
  qrScanner: {
    ...defaultStyles.absoluteFillObject,
    marginTop: 75,
  },
});