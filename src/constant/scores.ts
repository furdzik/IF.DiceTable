import { Score, ScoreElement } from 'interfaces';

export const figureScore: ScoreElement = {
  columnId: null,
  throw: null,
  dice: null,
  value: null,
  quantity: null
};

export const scoresDefault: Score = {
  school: {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: []
  },
  figures: {
    section1: {
      twoOfKind: [],
      twoOfTwoOfKind: [],
      threeOfKind: [],
      fourOfKind: []
    },
    section2: {
      vice: [],
      general: []
    },
    section3: {
      smallTriangle: [],
      bigTriangle: [],
      goat: []
    },
    section4: {
      smallStraight: [],
      bigStraight: [],
      runner: []
    },
    section5: {
      even: [],
      odd: [],
      threeToThree: [],
      twoToFour: []
    },
    section6: {
      fullHouse: [],
      threeOfTwoOfKind: [],
      superSmall: [],
      superBig: []
    },
    section7: {
      chance: []
    }
  },
  bonuses: {
    schoolGeneral: null,
    firstAboveThousand: null,
    sameValueVice: null,
    sameValueGeneral: null,
    section1AllResults: null,
    section3AllResults: null,
    section4AllResults: null,
    section5AllResults: null,
    section6AllResults: null,
    columnAllResults: []
  },
  sum: []
};
