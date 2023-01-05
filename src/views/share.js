import { Text, View, Button } from 'react-native';

export default function Share(props) {
  const {
    onResetClick,
    gifters,
    results
  } = props;
  return (
    <View>
        <Text>Share Results</Text>
        {
          gifters.map(gifter => (
            <View key={gifter.key}>
              <Text>{gifter.name}:</Text>
              <Text>{gifters.find(m => m.value === results[gifter.value]).name}</Text>
            </View>
          ))
        }
        <Button title="reset" onPress={onResetClick} />
    </View>
  );
}