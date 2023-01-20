import { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Button from '../components/button';
import PageManager from '../components/pageManager';
import ShareGifter from '../components/shareGifter';

import defaultStyles from './styles';

export default function ShareScreen(props) {
  const {
    navigation,
    route: {
      params: {
        gifters,
        results,
      },
    },
  } = props;

  const [viewId, setViewId] = useState(0);

  const onResetClick = () => navigation.navigate('Home');

  const viewLength = gifters.length;

  return (
    <SafeAreaView
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