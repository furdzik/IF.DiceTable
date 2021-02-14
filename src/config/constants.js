export const SAFARI_BAR_VH = 0.01;

export const VIEWPORT_SIZE_CHECKING_DELAY = 500;

// Dice constants
export const smallerHighestSum = 1000;
export const biggerHighestSum = 2000;

export const scoreHeaders = {
  nursery: {
    title: 'Szkółka',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6'
  },
  vice: {
    title: 'Vicki',
    pair: 'Para',
    twoPairs: 'Dwie pary',
    treeOfAKind: 'Trójka',
    fourOfAKind: 'Kareta',
    vice: 'Vicek',
    general: 'Generał'
  },
  straights: {
    smallStraight: 'MS',
    bigStraight: 'DS',
    mustache: 'Wąs'
  },
  divided: {
    even: 'Parzyste',
    odd: 'Nie parzyste',
    treeToThree: '3 + 3',
    fourToTwo: '4 + 2'
  },
  other: {
    full: 'Full',
    threePairs: 'Trzy pary',
    smallest: 'Maluśki',
    caw: 'Krowa'
  },
  chance: null,
  // TODO: zapytać anety
  bonuses: {
    title: 'Bonusy',
    nurseryPoints: 'Za szkółkę',
    columnFilled: 'Kolumny',
    firstGetsHighestSum: '>1000'
  }
};

export const scores = {
  columnId: null,
  nursery: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null
  },
  vice: {
    pair: null,
    twoPairs: null,
    treeOfAKind: null,
    fourOfAKind: null,
    vice: null,
    general: null
  },
  straights: {
    smallStraight: null,
    bigStraight: null,
    mustache: null
  },
  divided: {
    even: null,
    odd: null,
    treeToThree: null,
    fourToTwo: null
  },
  other: {
    full: null,
    threePairs: null,
    smallest: null,
    caw: null
  },
  chance: null,
  // TODO: zapytać anety
  bonuses: {
    nurseryPoints: null,
    columnFilled: null,
    firstGetsHighestSum: null // see constants
  }
};
