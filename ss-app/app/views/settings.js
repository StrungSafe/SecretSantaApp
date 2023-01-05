import { Text, View, Switch } from 'react-native';
import Button from '../button';

export default function Settings(props) {
  const {
    onNextClick,
    toggleSetting,
    settings: {
      canSelfGift,
    }
  } = props;

  const onValueChange = toggleSetting;

  return (
    <View>
        <Text>Settings</Text>
        <Text>Self Gift</Text>
        <Switch
          onValueChange={onValueChange}
          value={canSelfGift}
        />
        <Button title="Next" onPress={onNextClick} />
    </View>
  );
}