import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

// value: string only
// content: string or obj
export default function QRCodeWrapper(props) {
    const {
        style
    } = props;
    return (
        <View
            style={style}
        >
            <QRCode
                {...props}
            />
        </View>
    );
}