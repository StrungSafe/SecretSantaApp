import { useState } from 'react';
import { Text, View } from 'react-native';
import Button from '../button';
import PageManager from './pageManager';

export default function Share(props) {
  const {
    onResetClick,
    gifters,
    results
  } = props;

  const [viewId, setViewId] = useState(0);
  const viewLength = gifters.length;

  return (
    <View>
      <Text>Share Results</Text>
      <PageManager
        viewId={viewId}
      >
        {
          gifters.map(gifter => {
            const [showing, setShowing] = useState(false);
            const buttonTitle = showing ? 'Hide' : 'Show';
            const onPress = value => {
              setShowing(false);
              setViewId(prev => prev + value);
            }
            return (
              <View key={gifter.key}>
                <Text>{gifter.name}:</Text>
                <Button title={buttonTitle} onPress={() => setShowing(prev => !prev)} />
                { showing && <Text>{gifters.find(m => m.value === results[gifter.value]).name}</Text> }
                { (viewId < viewLength - 1) && <Button title='Next' onPress={() => onPress(1)} /> }
                { (viewId > 0) && <Button title='Back' onPress={() => onPress(-1)} /> }
              </View>
            );
          })
        }
      </PageManager>
      <Button title="Share" onPress={() => { }} />
      <Button title="Start Over" onPress={onResetClick} />
    </View>
  );
}