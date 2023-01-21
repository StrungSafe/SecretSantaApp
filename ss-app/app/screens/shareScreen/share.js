import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from '../../components/button';
import QRCode from '../../components/QRCode';
import { MessageAppCodeType } from '../../constants';

import defaultStyles from '../styles';

export default function Share(props) {
    const {
        gifter,
        gifters,
        results,
    } = props;

    const [showing, setShowing] = useState(false);
    const [sharing, setSharing] = useState(false);

    const showButtonTitle = showing ? 'Hide' : 'Show';
    const shareButtonTitle = sharing ? 'Hide' : 'Share';
    const giftee = gifters.find(m => m.value === results[gifter.value]);
    return (
        <View
            style={styles.container}
            key={gifter.key}
        >
            <Text style={styles.gifter}>{gifter.name}</Text>

            <Button style={styles.show} title={showButtonTitle} onPress={() => setShowing(prev => !prev)} />
            {showing && <Text style={styles.giftee}>{giftee.name}</Text>}

            <Button style={styles.share} title={shareButtonTitle} onPress={() => setSharing(prev => !prev)} />
            {sharing &&
                <QRCode
                    style={styles.code}
                    value={JSON.stringify({ type: MessageAppCodeType, gifter, giftee })}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    gifter: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 75,
    },
    giftee: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        paddingVertical: 25,
    },
    show: {
        ...defaultStyles.button,
    },
    share: {
        ...defaultStyles.button,
    },
    code: {
        alignItems: 'center',
        paddingTop: 10,
    },
});