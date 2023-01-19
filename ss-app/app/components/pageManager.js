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
        </View>
    );
}

const styles = StyleSheet.create({
    default: {
    }
});