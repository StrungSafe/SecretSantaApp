import { StyleSheet, View } from 'react-native';
import Button from '../../components/button';

export default function PageManager(props) {
    const {
        viewId,
        setViewId,
        viewLength,
    } = props;
    const onPress = value => () => setViewId(prev => prev + value);
    return (
        <View
            style={styles.container}
        >
            { props.children[viewId] }
            <View
                style={styles.buttonGroup}
            >
                {(viewId > 0) && <Button style={styles.back} title='Back' onPress={onPress(-1)} />}
                {(viewId < viewLength - 1) && <Button style={styles.next} title='Next' onPress={onPress(1)} />}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 25,
    },
    back: {
        paddingHorizontal: 10,
        width: '33%',
        color: 'red',
    },
    next: {
        paddingHorizontal: 10,
        width: '33%',
        color: 'red',
    },
});