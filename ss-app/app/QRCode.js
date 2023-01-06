import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

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