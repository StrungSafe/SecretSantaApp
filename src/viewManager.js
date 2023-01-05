import { StyleSheet } from 'react-native';

export default function ViewManager(props) {
    const {
        viewId
    } = props;
    return props.children[viewId];
}

const styles = StyleSheet.create({
});