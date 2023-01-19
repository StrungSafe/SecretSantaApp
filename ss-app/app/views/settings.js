import { Text, View, Switch, StyleSheet } from 'react-native';
import Button from '../components/button';

import defaultStyles from './styles';

export default function Settings(props) {
  const {
    onNextClick,
    toggleSetting,
    settings: {
      engine,
      canSelfGift,
    }
  } = props;

  const onValueChange = toggleSetting;

  return (
    <View
      style={styles.container}
    >
        <Text style={styles.header}>Settings</Text>
        <View
          style={styles.body}
        >
          <Text>Using Engine {engine}</Text> 
          <Text>Self Gift</Text>
          <Switch
            onValueChange={onValueChange}
            value={canSelfGift}
          />
          <Button
            style={styles.next}
            title="Next"
            onPress={onNextClick} 
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...defaultStyles.container,
    flex: 1,
  },
  header: {
    ...defaultStyles.header,
    flex: 1,
  },
  body: {
    flex: 3,
  },
  next: {
    ...defaultStyles.button,
  },
});