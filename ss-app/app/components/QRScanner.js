import { View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export const requestPermissionsAsync = BarCodeScanner.requestPermissionsAsync;
export const usePermissions = BarCodeScanner.usePermissions;

export default function QRScanner(props) {
    const {
        show
    } = props;
    const [permissionResponse, requestPermission] = BarCodeScanner.usePermissions();

    if (!permissionResponse || !permissionResponse.granted) {
        if (permissionResponse && permissionResponse.canAskAgain) {
            requestPermission();
        } else {
            return;
        }
    }

    if(!show) {
        return;
    }

    return (
        <View style={StyleSheet.absoluteFillObject}>
            <BarCodeScanner style={StyleSheet.absoluteFillObject}
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                {...props}
            />
        </View>
    );
}

const styles = StyleSheet.create({
});