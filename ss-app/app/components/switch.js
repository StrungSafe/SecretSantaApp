import { Text, Switch, StyleSheet, View } from 'react-native';

export default function SwitchWrapper(props) {
    const {
        text,
        onValueChange,
        value,
        disabled,
    } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{text}</Text>
            <Switch
                style={styles.switch}
                onValueChange={onValueChange}
                value={value}
                disabled={disabled}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    label: {
        alignSelf: 'center',
        flex: 1,
    },
    switch: {
        flex: 1,
    },
});