import { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Button from '../button';

export default function Add(props) {
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
    <View>
      <Text>Add Gifters</Text>
      <TextInput placeholder='Name' onChangeText={onNameChange} />
      <Button title="Add Gifter" onPress={onAddGifterClick} />
      {
        gifters.map(gifter => (<Text key={gifter.key}>{gifter.name}</Text>))
      }
      <Button title="Run" onPress={onRunClick} />
    </View>
  );
}

const styles = StyleSheet.create({
});