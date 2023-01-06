import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from '../button';
import QRCode from '../QRCode';
import { MessageAppCodeType } from '../constants';

export default function ShareGifter(props) {
    const {
        style,
        viewId,
        viewLength,
        setViewId,
        gifter,
        gifters,
        results,
    } = props;

    const [showing, setShowing] = useState(false);
    const [sharing, setSharing] = useState(false);

    const showButtonTitle = showing ? 'Hide' : 'Show';
    const shareButtonTitle = sharing ? 'Hide' : 'Share';
    const giftee = gifters.find(m => m.value === results[gifter.value]);
    const onPress = value => {
        setShowing(false);
        setSharing(false);
        setViewId(prev => prev + value);
    }
    return (
        <View
            key={gifter.key}
            styles={style ?? styles.container}
        >
            <Text style={styles.header}>{gifter.name}</Text>

            <Button title={showButtonTitle} onPress={() => setShowing(prev => !prev)} />
            {showing && <Text>{giftee.name}</Text>}

            <Button title={shareButtonTitle} onPress={() => setSharing(prev => !prev)} />
            {sharing &&
                <QRCode
                    value={JSON.stringify({ type: MessageAppCodeType, gifter, giftee })}
                />
            }

            {(viewId > 0) && <Button title='Back' onPress={() => onPress(-1)} />}
            {(viewId < viewLength - 1) && <Button title='Next' onPress={() => onPress(1)} />}
            <Button title='test' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {

    },
});