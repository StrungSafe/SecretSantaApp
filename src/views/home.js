import { Button, Text, View } from 'react-native';

export default function Home(props) {
  const {
    onStartClick
  } = props;
  return (
    <View>
        <Text>Secret Santa</Text>
        <Button title="Start" onPress={onStartClick} />
    </View>
  );
}