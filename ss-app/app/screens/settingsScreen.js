import { Text, View, Switch, StyleSheet, SafeAreaView } from 'react-native';
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
        <Text style={styles.header}>Settings</Text>
        <View
          style={styles.body}
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
        </View>
    </SafeAreaView>
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