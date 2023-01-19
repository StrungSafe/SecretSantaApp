import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from '../components/button';
import PageManager from '../components/pageManager';
import ShareGifter from './shareGifter';

import defaultStyles from './styles';

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
        style={styles.header}
      >
        Share Results
      </Text>
      <View
        style={styles.body}
      >
        <PageManager
          style={styles.pager}
          viewId={viewId}
        >
          {
            gifters.map(gifter => 
              <ShareGifter
                style={styles.gifter}
                key={gifter.key} 
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
          style={styles.startOver}
          title="Start Over"
          onPress={onResetClick}
        />
      </View>
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
  body: {
    flex: 3,
  },
  pager: {
  },
  gifter: {
  },
  startOver: {
    ...defaultStyles.button,
    paddingTop: 10,
  },
});