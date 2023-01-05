export const engines = [{
    process: ({ settings, members }) => {
      const gifters = [...members];
      const giftees = [...members];
      const results = {};
      members.map(member => {
        gifters.filter(gifter => gifter.value === member.value);
        results[member.value] = giftees.pop().value;
      });
      return results;
    } 
  }, {
    process: ({ settings, members }) => {
      let gifters = [...members];
      let giftees = [...members];
      const results = {};
      members.map(member => {
        gifters = gifters.filter(gifter => gifter.value === member.value);
        let giftee = 0;
        let index = 0;
        do {
            index = Math.floor(Math.random() * giftees.length);
            giftee = giftees[index].value;
        } while(giftee === member.value && !settings.canSelfGift);
        results[member.value] = giftee;
        giftees = giftees.filter((g, i) => i != index);
      });
      return results;
    } 
  }];