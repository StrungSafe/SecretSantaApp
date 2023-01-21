import { useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Button from '../../components/button';
import PageManager from './pageManager';
import Share from './share';

import defaultStyles from '../styles';

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

  return (
    <SafeAreaView
      style={styles.container}
    >
      <View style={styles.upper}>
        <PageManager
          viewId={viewId}
          setViewId={setViewId}
          viewLength={gifters.length}
        >
          {
            gifters.map(gifter =>
              <Share
                key={gifter.key}
                gifter={gifter}
                gifters={gifters}
                results={results}
              />)
          }
        </PageManager>
      </View>
      <View style={styles.lower}>
        <Button
          style={styles.startOver}
          title='Start Over'
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
    justifyContent: 'center',
  },
  upper: {
    flex: 3,
    paddingTop: 25,
  },
  lower: {
    flex: 1
  },
  startOver: {
    ...defaultStyles.button,
    paddingTop: 10,
  },
});