import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ViewManager from './viewManager';
import Home from './views/home';
import Settings from './views/settings';
import AddMembers from './views/addMembers';
import Share from './views/share';
import { engines } from './engines';

const initState = {
  viewId: 0,
  settings: {
    engine: 1,
    canSpouseGift: true,
    canSelfGift: true,
  },
  members: [{
    key: 'mother',
    name: 'mother',
    value: 'mother',
    noGift: [ 'father' ] 
  }, 
  {
    key: 'father',
    name: 'father',
    value: 'father',
    noGift: [ 'mother' ]
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
  results: {},
};

export default function App() {
  const [sharedState, setSharedState] = useState(initState);

  const onNextViewClick = () => {
    setSharedState(prev => ({ ...prev, viewId: prev.viewId + 1 }));
  };

  const onResetClick = () => {
    setSharedState(initState);
  };

  const addMember = member => {
    setSharedState(prev => ({ ...prev, members: [...prev.members, member] }));
  }

  const onRunClick = () => {
    const {
      members,
      settings,
      settings: {
        engine
      }
    } = sharedState;
    const results = engines[engine].process({ settings, members });
    setSharedState(prev => ({ ...prev, results }));
    onNextViewClick();
  };

  const views = [
    <Home
      onStartClick={onNextViewClick}
    />,
    <Settings
      onNextClick={onNextViewClick}
    />,
    <AddMembers
      onRunClick={onRunClick}
      addMember={addMember}
      {...sharedState}
    />,
    <Share
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});