import { useState } from 'react';
import { Text, StyleSheet, TextInput, SafeAreaView, View } from 'react-native';
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
      <View style={styles.top}>
        <TextInput style={styles.name} placeholder='Name' onChangeText={onNameChange} value={name} />
        <Button style={styles.add} title="Add Gifter" onPress={onAddGifterClick} />
      </View>
      <View style={styles.middle}>
        {
          gifters.map(gifter => (<Text style={styles.gifter} key={gifter.key}>{gifter.name}</Text>))
        }
      </View>
      <View style={styles.bottom}>
        <Button style={styles.run} title="Run" onPress={onRunClick} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...defaultStyles.container,
    flex: 1,
    justifyContent: 'center'
  },
  top: {
    flex: 1
  },
  name: {
    paddingVertical: 25,
    fontSize: 20,
  },
  add: {
    ...defaultStyles.button,
  },
  middle: {
    flex: 1
  },
  gifter: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  bottom: {
    flex: 1,
    flexDirection: 'column-reverse'
  },
  run: {
    ...defaultStyles.button,
    paddingBottom: '25%',
  }
});