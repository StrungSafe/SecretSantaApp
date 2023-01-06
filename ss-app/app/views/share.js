import { useState } from 'react';
import { Text, View } from 'react-native';
import Button from '../button';
import PageManager from './pageManager';
import QRCode from '../QRCode';

export default function Share(props) {
  const {
    onResetClick,
    gifters,
    results
  } = props;

  const [viewId, setViewId] = useState(0);
  const viewLength = gifters.length;

  const gifterView = gifter => {
    const [showing, setShowing] = useState(false);
    const [sharing, setSharing] = useState(false);

    const showButtonTitle = showing ? 'Hide' : 'Show';
    const shareButtonTitle = sharing ? 'Hide' : 'Share';
    const giftee = gifters.find(m => m.value === results[gifter.value]);
    const onPress = value => {
      setShowing(false);
      setSharing(false);
      setViewId(prev => prev + value);
    }
    return (
      <View key={gifter.key}>
        <Text>{gifter.name}:</Text>

        <Button title={showButtonTitle} onPress={() => setShowing(prev => !prev)} />
        {showing && <Text>{giftee.name}</Text>}

        <Button title={shareButtonTitle} onPress={() => setSharing(prev => !prev)} />
        {sharing &&
          <QRCode
            value={JSON.stringify({ type: 'secret-santa', gifter, giftee })}
          />
        }

        {(viewId > 0) && <Button title='Back' onPress={() => onPress(-1)} />}
        {(viewId < viewLength - 1) && <Button title='Next' onPress={() => onPress(1)} />}
      </View>
    );
  };

  return (
    <View>
      <Text>Share Results</Text>
      <PageManager
        viewId={viewId}
      >
        {
          gifters.map(gifterView)
        }
      </PageManager>
      <Button title="Start Over" onPress={onResetClick} />
    </View>
  );
}