import { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Button from '../components/button';

import defaultStyles from './styles';

export default function AddScreen(props) {
  const {
    gifters,
    addGifter,
    onRunClick,
  } = props;

  const [name, setName] = useState('');

  const onNameChange = value => setName(value);

  const onAddGifterClick = () => {
    if(!name) {
      return;
    }
    addGifter({
      key: name,
      name,
      value: name
    });
    setName('');
  };

  return (
    <View
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
  add: {
    ...defaultStyles.button,
    flex: 2,
  },
  run: {
    ...defaultStyles.button,
    flex: 2,
  }
});