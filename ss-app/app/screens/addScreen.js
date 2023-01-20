import { useState } from 'react';
import { Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import Button from '../components/button';
import { engineFactory } from '../engines';
import { TestingData } from '../constants';

import defaultStyles from './styles';

export default function AddScreen(props) {
  const {
    navigation,
    route: {
      params: {
        settings,
      },
    },
  } = props;

  const [name, setName] = useState('');
  const [gifters, setGifters] = useState(TestingData);

  const onNameChange = value => setName(value);

  const onAddGifterClick = () => {
    if (!name) {
      return;
    }
    setGifters(prev => [...prev, { key: name, name, value: name }]);
    setName('');
  };

  const onRunClick = () => {
    const results = engineFactory(settings.engine).process({ settings, gifters });
    navigation.navigate('Share', { settings, gifters, results });
  };

  return (
    <SafeAreaView
      style={styles.container}
    >
      <TextInput style={styles.name} placeholder='Name' onChangeText={onNameChange} value={name} />
      <Button style={styles.add} title="Add Gifter" onPress={onAddGifterClick} />
      {
        gifters.map(gifter => (<Text style={styles.gifter} key={gifter.key}>{gifter.name}</Text>))
      }
      <Button style={styles.run} title="Run" onPress={onRunClick} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...defaultStyles.container,
    flex: 1,
    justifyContent: 'center'
  },
  add: {
    ...defaultStyles.button,
    flex: 2,
  },
  run: {
    ...defaultStyles.button,
    flex: 2,
  }
});