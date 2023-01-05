import { Text, View, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as SMS from 'expo-sms';
import Button from '../button';

export default function Home(props) {
  const {
    onStartClick
  } = props;

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      console.log(status);//granted
    };

    getBarCodeScannerPermissions();
  }, []);

  return (
    <View style={styles.container}>
        <Text style={styles.header}>Secret Santa</Text>
        <Button style={styles.start} title="Start" onPress={onStartClick} />
        <Button styles={styles.scan} title="Scan Results" onPress={() => {}} />
        <BarCodeScanner />
        <Button title="Send SMS" onPress={() => SMS.sendSMSAsync(['9047163144'], 'hello world')} />
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