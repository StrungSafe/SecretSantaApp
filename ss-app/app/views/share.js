import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from '../button';
import PageManager from '../pageManager';
import ShareGifter from './shareGifter';

export default function Share(props) {
  const {
    onResetClick,
    gifters,
    results
  } = props;

  const [viewId, setViewId] = useState(0);
  const viewLength = gifters.length;

  return (
    <View
      style={styles.container}
    >
      <Text
        styles={styles.header}
      >
        Share Results
      </Text>
      <PageManager
        viewId={viewId}
        styles={styles.pager}
      >
        {
          gifters.map(gifter => 
            <ShareGifter
              key={gifter.key} 
              style={styles.share}
              viewId={viewId} 
              viewLength={viewLength} 
              setViewId={setViewId} 
              gifter={gifter} 
              gifters={gifters} 
              results={results} 
            />)
        }
      </PageManager>
      <Button
        title="Start Over"
        onPress={onResetClick}
        style={styles.startOver}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  pager: {
    flex: 2,
  },
  share: {
    flex: 1,
  },
  startOver: {
    flex: 1,
  },
});