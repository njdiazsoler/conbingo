const shuffle = (list) => {
  let currentIndex = list.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = list[currentIndex];
    list[currentIndex] = list[randomIndex];
    list[randomIndex] = temporaryValue;
  }

  return list;
};

export default { shuffle };
