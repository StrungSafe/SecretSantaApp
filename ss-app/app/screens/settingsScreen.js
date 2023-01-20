import { Text, StyleSheet, SafeAreaView, View } from 'react-native';
import { useState } from 'react';
import Button from '../components/button';
import Switch from '../components/switch';
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
    <SafeAreaView style={styles.container}>
      <View style={styles.settings}>
        <Text style={styles.engine}>Using Engine {settings.engine}</Text>
        <Switch text='Self Gift' onValueChange={toggleSetting} value={settings.canSelfGift} />
        <Switch text='Spouse Gift' disabled />
      </View>
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
  settings: {
    flex: 1,
  },
  engine: {
  },
  next: {
    ...defaultStyles.button,
    flex: 1,
  },
});