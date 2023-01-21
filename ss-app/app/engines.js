import { ExceptionTypes } from "./exceptions";

export const engineFactory = key => {
  const engine = Engines.find(engine => engine.key == key);
  if(!engine) {
    throw ExceptionTypes.InvalidEngineConfigurationException
  }
  return engine;
};

export const Engines = [{
  // 0
  // Just pops the next giftee...not a very good secret santa generator
  // Better for testing and iterative design
  key: 0,
  name: 'v0',
  process: ({ settings, gifters }) => {
    const giftees = [...gifters];
    const results = {};
    gifters.map(gifter => {
      results[gifter.value] = giftees.pop().value;
    });
    return results;
  }
}, {
  // 1
  // Randomizes the gifter and giftee
  // Consumes settings to enable features
  // SelfGifting (canSelfGift): Can a person self gift?
  // TODO: Other ppl gifting restrictions, make it arbitrary
  key: 1,
  name: 'v1',
  process: ({ settings, gifters }) => {
    const isGifterTheGiftee = ({ giftees, gifter, giftee }) => {
      const isGifterTheGiftee = giftee === gifter.value;
      if (isGifterTheGiftee && giftees.length === 1) {
        throw ExceptionTypes.OutOfGifteesException;
      }
      return isGifterTheGiftee;
    };

    const mapGiftersAndGiftees = ({ settings, gifters }) => {
      try {
        const results = {};
        let giftees = [...gifters];

        const getGiftee = (runRule = false, stopRule = () => false) => {
          let giftee;
          do {
            const index = Math.floor(Math.random() * giftees.length);
            giftee = giftees[index].value;
          } while (runRule && stopRule(giftee));
          return giftee;
        };

        gifters.map(gifter => {
          let giftee = getGiftee(!settings.canSelfGift, giftee => isGifterTheGiftee({ giftees, gifter, giftee }));
          results[gifter.value] = giftee;
          giftees = giftees.filter(g => g.value != giftee.value);
        });

        return results;
      } catch (exception) {
        if (exception.type && exception.retry) {
          return mapGiftersAndGiftees({ settings, gifters });
        }
      }
    };

    return mapGiftersAndGiftees({ settings, gifters });
  }
}, {
  // 2
  // For TESTING exception handling
  key: 2,
  name: 'v1',
  testingEngine: true,
  process: () => {
    throw ExceptionTypes.OutOfGifteesException;
  }
}];