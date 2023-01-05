import { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

export default function AddMembers(props) {
  const {
    members,
    addMember,
    onRunClick,
  } = props;

  const [name, setName] = useState('');

  const onNameChange = value => setName(value);

  const onAddMemberClick = () => {
    if(!name) {
      return;
    }
    addMember({
      key: name,
      name,
      value: name
    });
    setName('');
  };

  return (
    <View>
      <Text>Add Members</Text>
      <TextInput placeholder='name' onChangeText={onNameChange} />
      <Button title="Add Member" onPress={onAddMemberClick} />
      {
        members.map(member => (<Text key={member.key}>{member.name}</Text>))
      }
      <Button title="Run" onPress={onRunClick} />
    </View>
  );
}

const styles = StyleSheet.create({
});