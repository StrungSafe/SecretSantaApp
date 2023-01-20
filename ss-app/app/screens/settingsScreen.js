import { Text, Switch, StyleSheet, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Button from '../components/button';
import { DefaultSettings } from '../constants';

import defaultStyles from './styles';

export default function SettingsScreen(props) {
  const {
    navigation,
  } = props;

  const [settings, setSettings] = useState(DefaultSettings);

  const onNextClick = () => navigation.navigate('Add', { settings });

  const toggleSetting = () => {
    setSettings(prev => ({ ...prev, canSelfGift: !prev.canSelfGift }));
  };

  return (
    <SafeAreaView
      style={styles.container}
    >
      <Text>Using Engine {settings.engine}</Text>
      <Text>Self Gift</Text>
      <Switch
        onValueChange={toggleSetting}
        value={settings.canSelfGift}
      />
      <Button
        style={styles.next}
        title="Next"
        onPress={onNextClick}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...defaultStyles.container,
    flex: 1,
    justifyContent: 'center'
  },
  next: {
    ...defaultStyles.button,
  },
});