import { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Alert } from 'react-native';
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

  const onHomeClick = () => navigation.navigate('Home');

  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        // if (!hasUnsavedChanges) {
        //   // If we don't have unsaved changes, then we don't need to do anything
        //   return;
        // }
        console.log(e.data.action.payload);

        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert(
          'Discard changes?',
          'You have unsaved changes. Are you sure to discard them and leave the screen?',
          [
            { text: "Don't leave", style: 'cancel', onPress: () => {} },
            {
              text: 'Discard',
              style: 'destructive',
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              onPress: () => navigation.dispatch(e.data.action),
            },
          ]
        );
      }),
    [navigation]
  );

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
          onPress={onHomeClick}
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