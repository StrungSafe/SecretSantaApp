import { Text, StyleSheet, SafeAreaView, View } from 'react-native';
import { useState, useEffect } from 'react';
import Button from '../components/button';
import Switch from '../components/switch';
import { DefaultSettings } from '../constants';

import defaultStyles from './styles';
import { engineFactory } from '../engines';

export default function SettingsScreen(props) {
  const {
    navigation,
  } = props;

  const [settings, setSettings] = useState(DefaultSettings);
  const [engine, setEngine] = useState('');

  const onNextClick = () => navigation.navigate('Add', { settings });

  const onDefaultClick = () => setSettings(DefaultSettings);

  const toggleSetting = () => {
    setSettings(prev => ({ ...prev, canSelfGift: !prev.canSelfGift }));
  };

  useEffect(() => {
    var e = engineFactory(settings.engine);
    setEngine(e);
  }, [settings.engine])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.settings}>
        { engine.testingEngine && <Text style={styles.testingEngine}>--TESTING ENGINE --</Text> }
        <Text style={styles.engine}>Santa's {engine.testingEngine && 'Testing '}Engine: {engine.name}</Text>
        <Text style={styles.configure}>Configure</Text>
        <Switch text='Self Gift' onValueChange={toggleSetting} value={settings.canSelfGift} />
        <Switch text='Spouse Gift' disabled />
        <Button
          style={styles.default}
          title='Default'
          onPress={onDefaultClick}
        />
      </View>
      <Button
        style={styles.next}
        title='Next'
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
    flex: 2,
  },
  engine: {
    textAlign: 'center'
  },
  testingEngine: {
    textAlign: 'center',
    color: 'red',
  },
  configure: {
    paddingVertical: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  default: {
    ...defaultStyles.button,
    paddingTop: 30,
  },
  next: {
    ...defaultStyles.button,
    flex: 1,
  },
});