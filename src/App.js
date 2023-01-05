import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ViewManager from './viewManager';
import Home from './views/home';
import Settings from './views/settings';
import AddGifters from './views/addGifters';
import Share from './views/share';
import { engines } from './engines';

const initState = {
  viewId: 0,
  settings: {
    engine: 1,
    canSelfGift: true,
  },
  gifters: [{
    key: 'mother',
    name: 'mother',
    value: 'mother',
    noGift: ['father']
  },
  {
    key: 'father',
    name: 'father',
    value: 'father',
    noGift: ['mother']
  },
  {
    key: 'son',
    name: 'son',
    value: 'son'
  },
  {
    key: 'daughter',
    name: 'daughter',
    value: 'daughter'
  }],
  results: {
    "daughter": "mother"
  },
};

export default function App() {
  const [sharedState, setSharedState] = useState(initState);

  const onNextViewClick = () => {
    setSharedState(prev => ({ ...prev, viewId: prev.viewId + 1 }));
  };

  const onResetClick = () => {
    setSharedState(initState);
  };

  const addGifter = gifter => {
    setSharedState(prev => ({ ...prev, gifters: [...prev.gifters, gifter] }));
  }

  const onRunClick = () => {
    const {
      gifters: gifters,
      settings,
      settings: {
        engine,
      }
    } = sharedState;
    const results = engines[engine].process({ settings, gifters });
    setSharedState(prev => ({ ...prev, results }));
    onNextViewClick();
  };

  const toggleSetting = () => setSharedState(prev => ({ ...prev, settings: { ...prev.settings, canSelfGift: !prev.settings.canSelfGift }}));

  const views = [
    <Home
      key='home'
      onStartClick={onNextViewClick}
    />,
    <Settings
      key='setttings'
      onNextClick={onNextViewClick}
      toggleSetting={toggleSetting}
      {...sharedState}
    />,
    <AddGifters
      key='addGifters'
      addGifter={addGifter}
      onRunClick={onRunClick}
      {...sharedState}
    />,
    <Share
      key='share'
      onResetClick={onResetClick}
      {...sharedState}
    />
  ];

  return (
    <View style={styles.container}>
      <ViewManager
        viewId={sharedState.viewId}
      >
        {views}
      </ViewManager>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9eceb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    height: 100,
    width: 100,
  }
});