import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PageManager from './pageManager';
import Home from './views/home';
import Settings from './views/settings';
import Add from './views/add';
import Share from './views/share';
import { engines } from './engines';
import { MessageAppCodeType } from './constants';

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

export default function SS() {
  const [sharedState, setSharedState] = useState(initState);

  const onResetClick = () => {
    console.log('reset', initState);
    setSharedState(initState);
  };

  const onNextViewClick = () => {
    setSharedState(prev => ({ ...prev, viewId: prev.viewId + 1 }));
  };

  const toggleSetting = () => setSharedState(prev => ({ ...prev, settings: { ...prev.settings, canSelfGift: !prev.settings.canSelfGift } }));

  const addGifter = gifter => {
    setSharedState(prev => ({ ...prev, gifters: [...prev.gifters, gifter] }));
  };

  const handleBarCodeScanned = ({ type: scanType, data = {} }) => {
    const {
      type,
      gifter,
      giftee
    } = JSON.parse(data);
    if (type === MessageAppCodeType) {
      const gifters = [gifter, giftee];
      const results = {
        [gifter.value]: giftee.value
      };
      setSharedState(prev => ({ ...prev, gifters, results, viewId: 3 }));
    }
  };

  const onRunClick = () => {
    const {
      gifters,
      settings,
      settings: {
        engine,
      }
    } = sharedState;
    const results = engines[engine].process({ settings, gifters });
    setSharedState(prev => ({ ...prev, results }));
    onNextViewClick();
  };

  const views = [
    <Home
      key='home'
      onStartClick={onNextViewClick}
      handleBarCodeScanned={handleBarCodeScanned}
    />,
    <Settings
      key='setttings'
      onNextClick={onNextViewClick}
      toggleSetting={toggleSetting}
      {...sharedState}
    />,
    <Add
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
      <PageManager
        viewId={sharedState.viewId}
        style={styles.pager}
      >
        {views}
      </PageManager>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  page: {
  },
});