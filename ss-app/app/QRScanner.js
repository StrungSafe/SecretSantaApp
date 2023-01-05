import { View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export const requestPermissionsAsync = BarCodeScanner.requestPermissionsAsync;
export const usePermissions = BarCodeScanner.usePermissions;

// permissionResponse: {"canAskAgain": true, "expires": "never", "granted": true, "status": "granted"}
export default function QRScanner(props) {
    const [permissionResponse, requestPermission] = BarCodeScanner.usePermissions();

    if (!permissionResponse || !permissionResponse.granted) {
        if (permissionResponse && permissionResponse.canAskAgain) {
            requestPermission();
        } else {
            return;
        }
    }

    const handleBarCodeScanned = ({ type, data }) => {
        console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    return (
        <View style={StyleSheet.absoluteFillObject}>
            <BarCodeScanner style={StyleSheet.absoluteFillObject}
                onBarCodeScanned={handleBarCodeScanned}
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                {...props}
            />
        </View>
    );
}

const styles = StyleSheet.create({
});