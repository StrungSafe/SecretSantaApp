import { StyleSheet, SafeAreaView } from 'react-native';
import QRScanner from '../components/QRScanner';
import { MessageAppCodeType } from '../constants';

import defaultStyles from './styles';

export default function ScanScreen(props) {
  const {
    navigation,
  } = props;

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
  };

  return (
    <SafeAreaView style={styles.container}>
      <QRScanner
        onBarCodeScanned={onBarCodeScanned}
        show
        style={styles.qrScanner}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...defaultStyles.container,
    flex: 1,
  },
  qrScanner: {
    ...defaultStyles.absoluteFillObject,
  },
});