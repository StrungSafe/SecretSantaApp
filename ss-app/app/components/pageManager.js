import { StyleSheet, View } from 'react-native';

export default function PageManager(props) {
    const {
        viewId,
        style
    } = props;
    return (
        <View
            style={style ?? styles.default}
        >
            { props.children[viewId] }
            <View
                style={styles.backNext}
            >
                {(viewId > 0) && <Button style={styles.back} title='Back' onPress={() => onPress(-1)} />}
                {(viewId < viewLength - 1) && <Button style={styles.next} title='Next' onPress={() => onPress(1)} />}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    default: {
    },
    back: {

    },
    next: {

    },
});