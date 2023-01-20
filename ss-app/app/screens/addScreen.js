import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import Button from '../components/button';
import { engines } from '../engines';
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
    const results = engines[settings.engine].process({ settings, gifters });
    navigation.navigate('Share', { settings, gifters, results });
  };

  return (
    <SafeAreaView
      style={styles.container}
    >
      <Text style={styles.header} >
        Add Gifters
      </Text>
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
  },
  header: {
    ...defaultStyles.header,
    flex: 1,
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