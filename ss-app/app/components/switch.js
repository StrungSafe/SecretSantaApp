import { Text, Switch, StyleSheet, View } from 'react-native';

export default function SwitchWrapper(props) {
    const {
        text,
        onValueChange,
        value,
        disabled,
    } = props;

    const labelStyle = disabled ? { ...styles.label, ...styles.disabledLabel } : styles.label;

    return (
        <View style={styles.container}>
            <Text style={labelStyle} disabled={disabled}>{text}</Text>
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
    disabledLabel: {
        color: 'gray',
    },
    switch: {
        flex: 1,
    },
});