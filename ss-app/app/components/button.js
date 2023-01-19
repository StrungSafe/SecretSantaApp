import { Button, View, StyleSheet } from 'react-native';

export default function ButtonWrapper(props) {
  const {
    style,
  } = props;
  return (
    <View style={style ?? styles.default}>
        <Button color={style?.color} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
    default: {
        padding: 5,        
    }
});