export const MessageAppCodeType = 'secret-santa';

export const DefaultSettings = {
    engine: 1,
    canSelfGift: true,
  };

export const TestingData = [{
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
  }];