import { Text, View, Button } from 'react-native';

export default function Share(props) {
  const {
    onResetClick,
    members,
    results
  } = props;
  return (
    <View>
        <Text>Share Results</Text>
        {
          members.map(member => (
            <View key={member.key}>
              <Text>{member.name}:</Text>
              <Text>{members.find(m => m.value === results[member.value]).name}</Text>
            </View>
          ))
        }
        <Button title="reset" onPress={onResetClick} />
    </View>
  );
}