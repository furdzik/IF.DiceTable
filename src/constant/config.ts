import { Config } from 'interfaces';

export enum ResultsId {
  School,
  ChoseDice,
  ThrowCount,
  Result
}
export enum FigureId {
  School1,
  School2,
  School3,
  School4,
  School5,
  School6,
  TwoOfKind,
  TwoOfTwoOfKind,
  ThreeOfKind,
  FourOfKind,
  Vice,
  General,
  SmallTriangle,
  BigTriangle,
  Goat,
  SmallStraight,
  BigStraight,
  Runner,
  Evens,
  Odds,
  ThreeToThree,
  TwoToFour,
  FullHouse,
  ThreeOfTwoOfKind,
  SuperSmall,
  SuperBig,
  Chance
}

export const config: Config = {
  school: {
    1: {
      id: FigureId.School1,
      name: '1',
      value: 3 * -1,
      resultsId: ResultsId.School
    },
    2: {
      id: FigureId.School2,
      name: '2',
      value: 3 * -2,
      resultsId: ResultsId.School
    },
    3: {
      id: FigureId.School3,
      name: '3',
      value: 3 * -3,
      resultsId: ResultsId.School
    },
    4: {
      id: FigureId.School4,
      name: '4',
      value: 3 * -4,
      resultsId: ResultsId.School
    },
    5: {
      id: FigureId.School5,
      name: '5',
      value: 3 * -5,
      resultsId: ResultsId.School
    },
    6: {
      id: FigureId.School6,
      name: '6',
      value: 3 * -6,
      resultsId: ResultsId.School
    }
  },
  figures: {
    section1: {
      twoOfKind: {
        id: FigureId.TwoOfKind,
        name: 'Para',
        value: 1,
        resultsId: ResultsId.ChoseDice
      },
      twoOfTwoOfKind: {
        id: FigureId.TwoOfTwoOfKind,
        name: '2 x Para',
        value: 1,
        resultsId: ResultsId.Result
      },
      threeOfKind: {
        id: FigureId.ThreeOfKind,
        name: 'Trójka',
        value: 1,
        resultsId: ResultsId.ChoseDice
      },
      fourOfKind: {
        id: FigureId.FourOfKind,
        name: 'Kareta',
        value: 1,
        resultsId: ResultsId.ChoseDice
      }
    },
    section2: {
      vice: {
        id: FigureId.Vice,
        name: 'Vicek',
        value: {
          1: 55,
          2: 60,
          3: 65,
          4: 70,
          5: 75,
          6: 80
        },
        resultsId: ResultsId.ChoseDice
      },
      general: {
        id: FigureId.General,
        name: 'Generał',
        value: {
          1: 110,
          2: 120,
          3: 130,
          4: 140,
          5: 150,
          6: 160
        },
        resultsId: ResultsId.ChoseDice
      }
    },
    section3: {
      smallTriangle: {
        id: FigureId.SmallTriangle,
        name: 'MT',
        value: 30,
        resultsId: ResultsId.ThrowCount
      },
      bigTriangle: {
        id: FigureId.BigTriangle,
        name: 'DT',
        value: 40,
        resultsId: ResultsId.ThrowCount
      },
      goat: {
        id: FigureId.Goat,
        name: 'Kozy',
        value: 0,
        resultsId: ResultsId.Result
      }
    },
    section4: {
      smallStraight: {
        id: FigureId.SmallStraight,
        name: 'MS',
        value: 15,
        resultsId: ResultsId.ThrowCount
      },
      bigStraight: {
        id: FigureId.BigStraight,
        name: 'DS',
        value: 20,
        resultsId: ResultsId.ThrowCount
      },
      runner: {
        id: FigureId.Runner,
        name: 'Wąs',
        value: 35,
        resultsId: ResultsId.ThrowCount
      }
    },
    section5: {
      even: {
        id: FigureId.Evens,
        name: 'Evens',
        value: 0,
        resultsId: ResultsId.Result
      },
      odd: {
        id: FigureId.Odds,
        name: 'Odds',
        value: 0,
        resultsId: ResultsId.Result
      },
      threeToThree: {
        id: FigureId.ThreeToThree,
        name: '3 + 3',
        value: 0,
        resultsId: ResultsId.Result
      },
      twoToFour: {
        id: FigureId.TwoToFour,
        name: '2 + 4',
        value: 0,
        resultsId: ResultsId.Result
      }
    },
    section6: {
      fullHouse: {
        id: FigureId.FullHouse,
        name: 'Full',
        value: 0,
        resultsId: ResultsId.Result
      },
      threeOfTwoOfKind: {
        id: FigureId.ThreeOfTwoOfKind,
        name: '3 x Para',
        value: 0,
        resultsId: ResultsId.Result
      },
      superSmall: {
        id: FigureId.SuperSmall,
        name: 'Maluśki',
        value: {
          10: 10,
          9: 30,
          8: 50,
          7: 70,
          6: 90
        },
        resultsId: ResultsId.Result
      },
      superBig: {
        id: FigureId.SuperBig,
        name: 'Krowa',
        value: {
          33: 43,
          34: 54,
          35: 65,
          36: 76
        },
        resultsId: ResultsId.Result
      }
    },
    section7: {
      chance: {
        id: FigureId.Chance,
        name: 'Szansa',
        value: 0,
        resultsId: ResultsId.Result
      }
    }
  },
  bonuses: {
    schoolGeneral: {
      name: 'Bonus za szkołę',
      value: 100
    },
    firstAboveThousand: {
      name: '> 1000',
      value: 100
    },
    sameValueVice: {
      name: 'Takie same wyniki Vicek',
      value: 50
    },
    sameValueGeneral: {
      name: 'Takie same wyniki Generał',
      value: 100
    },
    section1AllResults: {
      name: 'Wszystkie wyniki',
      value: 300
    },
    section3AllResults: {
      name: 'Wszystkie wyniki',
      value: 150
    },
    section4AllResults: {
      name: 'Wszystkie wyniki',
      value: 150
    },
    section5AllResults: {
      name: 'Wszystkie wyniki',
      value: 150
    },
    section6AllResults: {
      name: 'Wszystkie wyniki',
      value: 200
    },
    columnAllResults: {
      name: 'Ukończenie kolumny',
      initialValue: 50,
      value: 50 // 1: 100, 2: 150, 3: 200, 4: 250 etc.
    }
  }
};
