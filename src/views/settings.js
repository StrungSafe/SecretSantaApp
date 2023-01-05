import { Button, Text, View, Switch } from 'react-native';

export default function Settings(props) {
  const {
    onNextClick
  } = props;
  return (
    <View>
        <Text>Settings</Text>
        <Text>Self Gift</Text><Switch disabled value></Switch>
        <Text>Spouse Gift</Text><Switch disabled value></Switch>
        <Button title="Next" onPress={onNextClick} />
    </View>
  );
}