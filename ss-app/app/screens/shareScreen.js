import { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
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
        title='Start Over'
        onPress={onResetClick}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...defaultStyles.container,
    flex: 1,
    justifyContent: 'center',
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