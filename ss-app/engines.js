export const engines = [{
  // 0
  // Just pops the next giftee...not a very good secret santa generator
  // Better for testing and iterative design
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
  process: ({ settings, gifters }) => {
    const isGifterTheGiftee = ({ giftees, gifter, giftee }) => {
      const isGifterTheGiftee = giftee === gifter.value;
      if (isGifterTheGiftee && giftees.length === 1) {
        throw { type: 'isGifterTheGiftee', retry: true };
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
          } while (runRule && stopRule());
          return giftee;
        };

        gifters.map(gifter => {
          let giftee = getGiftee(!settings.canSelfGift, () => isGifterTheGiftee({ giftees, gifter, giftee }));
          results[gifter.value] = giftee;
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
}];