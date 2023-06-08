function writeCards(names, eventName) {
    const thankYouCards = [];
  
    for (let i = 0; i < names.length; i++) {
      const thankYouMessage = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouCards.push(thankYouMessage);
    }
  
    return thankYouCards;
  }
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }