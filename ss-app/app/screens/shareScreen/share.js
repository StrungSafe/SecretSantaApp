import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from '../../components/button';
import QRCode from '../../components/QRCode';
import { MessageAppCodeType } from '../../constants';

import defaultStyles from '../styles';

export default function Share(props) {
    const {
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
            style={styles.container}
            key={gifter.key}
        >
            <Text style={styles.name}>{gifter.name}</Text>

            <Button style={styles.show} title={showButtonTitle} onPress={() => setShowing(prev => !prev)} />
            {showing && <Text>{giftee.name}</Text>}

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
    name: {
    },
    show: {
        ...defaultStyles.button,
    },
    share: {
        ...defaultStyles.button,
    },
    code: {
        ...defaultStyles.button,
    },
    backNext: {
        flexDirection: 'row',
        width: '66%',
        alignContent: 'center'
    },
    back: {
        ...defaultStyles.button,
        flex: 1,
    },
    next: {
        ...defaultStyles.button,
        flex: 1,
    }
});