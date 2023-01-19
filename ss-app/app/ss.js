import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PageManager from './components/pageManager';
import HomeScreen from './screens/homeScreen';
import SettingsScreen from './screens/settingsScreen';
import AddScreen from './screens/addScreen';
import ShareScreen from './screens/shareScreen';
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
    <HomeScreen
      key='home'
      onStartClick={onNextViewClick}
      handleBarCodeScanned={handleBarCodeScanned}
    />,
    <SettingsScreen
      key='setttings'
      onNextClick={onNextViewClick}
      toggleSetting={toggleSetting}
      {...sharedState}
    />,
    <AddScreen
      key='addGifters'
      addGifter={addGifter}
      onRunClick={onRunClick}
      {...sharedState}
    />,
    <ShareScreen
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
    marginTop: 20,
  },
  page: {
  },
});