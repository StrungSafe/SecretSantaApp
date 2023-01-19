import { StyleSheet } from 'react-native';

export const defaultStyles = StyleSheet.create({
    container: {
    },
    header: {
        paddingTop: 50,
        paddingBottom: 20,
        textAlign: 'center',
        fontSize: 30,
        color: 'red',
        fontWeight: 'bold',
    },
    button: {
        width: '66%',
        alignSelf: 'center',
        color: 'red',
    },
    absoluteFillObject: {
        ...StyleSheet.absoluteFillObject,
    },
}
);
export default defaultStyles;