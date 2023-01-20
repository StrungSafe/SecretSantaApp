import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Button from '../components/button';
import QRScanner from '../components/QRScanner';
import { MessageAppCodeType } from '../constants';

import defaultStyles from './styles';

export default function HomeScreen(props) {
  const {
    navigation
  } = props;

  const [showScanner, setShowScanner] = useState(false);

  const onBarCodeScanned = ({ type: scanType, data = {} }) => {
    const {
      type,
      gifter,
      giftee
    } = JSON.parse(data);
    if (type === MessageAppCodeType) {
      const gifters = [gifter, giftee];
      const results = {
        [gifter.value]: giftee.value
      };
      navigation.navigate('Share', { gifters, results })
    }
    setShowScanner(false);
  };

  const onStartClick = () => {
    navigation.navigate('Settings');
  };

  const toggleScannerButtonTitle = showScanner ? "Hide" : "Open Camera";

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
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