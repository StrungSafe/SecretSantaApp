import { View, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scanner(props) {
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      const statuses = ['granted'];
    };

    getBarCodeScannerPermissions();
  }, []);

  return (
    <View>
        <BarCodeScanner {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
});