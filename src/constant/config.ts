import { Config } from 'interfaces';

export enum ResultsId {
  School,
  ChoseDice,
  ThrowCount,
  Result
}
export enum FigureId {
  School1 = '1',
  School2 = '2',
  School3 = '3',
  School4 = '4',
  School5 = '5',
  School6 = '6',
  TwoOfKind = 'twoOfKind',
  TwoOfTwoOfKind = 'twoOfTwoOfKind',
  ThreeOfKind = 'threeOfKind',
  FourOfKind = 'fourOfKind',
  Vice = 'vice',
  General = 'general',
  SmallTriangle = 'smallTriangle',
  BigTriangle = 'bigTriangle',
  Goat = 'goat',
  SmallStraight = 'smallStraight',
  BigStraight = 'bigStraight',
  Runner = 'runner',
  Evens = 'evens',
  Odds = 'odds',
  ThreeToThree = 'threeToThree',
  TwoToFour = 'twoToFour',
  FullHouse = 'fullHouse',
  ThreeOfTwoOfKind = 'threeOfTwoOfKind',
  SuperSmall = 'superSmall',
  SuperBig = 'superBig',
  Chance = 'chance'
}

export const config: Config = {
  school: {
    1: {
      id: FigureId.School1,
      name: '1',
      initialValue: 3 * -1,
      value: 1,
      resultsId: ResultsId.School
    },
    2: {
      id: FigureId.School2,
      name: '2',
      initialValue: 3 * -2,
      value: 2,
      resultsId: ResultsId.School
    },
    3: {
      id: FigureId.School3,
      name: '3',
      initialValue: 3 * -3,
      value: 3,
      resultsId: ResultsId.School
    },
    4: {
      id: FigureId.School4,
      name: '4',
      initialValue: 3 * -4,
      value: 4,
      resultsId: ResultsId.School
    },
    5: {
      id: FigureId.School5,
      name: '5',
      initialValue: 3 * -5,
      value: 5,
      resultsId: ResultsId.School
    },
    6: {
      id: FigureId.School6,
      name: '6',
      initialValue: 3 * -6,
      value: 6,
      resultsId: ResultsId.School
    }
  },
  figures: {
    section1: {
      twoOfKind: {
        id: FigureId.TwoOfKind,
        name: 'Para',
        value: 0,
        resultsId: ResultsId.ChoseDice
      },
      twoOfTwoOfKind: {
        id: FigureId.TwoOfTwoOfKind,
        name: '2 x Para',
        value: 0,
        resultsId: ResultsId.Result
      },
      threeOfKind: {
        id: FigureId.ThreeOfKind,
        name: 'Trójka',
        value: 0,
        resultsId: ResultsId.ChoseDice
      },
      fourOfKind: {
        id: FigureId.FourOfKind,
        name: 'Kareta',
        value: 0,
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
        fullName: 'Mały Trójkąt',
        value: 30,
        resultsId: ResultsId.ThrowCount
      },
      bigTriangle: {
        id: FigureId.BigTriangle,
        name: 'DT',
        fullName: 'Duży Trójkąt',
        value: 40,
        resultsId: ResultsId.ThrowCount
      },
      goat: {
        id: FigureId.Goat,
        name: 'Kozy',
        value: 25,
        resultsId: ResultsId.ThrowCount
      }
    },
    section4: {
      smallStraight: {
        id: FigureId.SmallStraight,
        name: 'MS',
        fullName: 'Mały Straight',
        value: 15,
        resultsId: ResultsId.ThrowCount
      },
      bigStraight: {
        id: FigureId.BigStraight,
        name: 'DS',
        fullName: 'Duży Straight',
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
      evens: {
        id: FigureId.Evens,
        name: 'Evens',
        fullName: 'Parzyste',
        value: 0,
        resultsId: ResultsId.Result
      },
      odds: {
        id: FigureId.Odds,
        name: 'Odds',
        fullName: 'Nieparzyste',
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
        name: '4 + 2',
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
          32: 32,
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
      initialValue: 50,
      value: 25,
      minimalSum: 30,
      maxBonusValue: 475
    },
    thousandBonus: {
      name: 'Przekroczenie 1000 punktów',
      value: 100,
      minimalSum: 1000
    },
    sameValueVice: {
      name: 'Takie same wyniki Vicek',
      initialValue: 300,
      value: 50
    },
    sameValueGeneral: {
      name: 'Takie same wyniki Generał',
      initialValue: 600,
      value: 100
    },
    section1AllResults: {
      name: 'Wszystkie wyniki',
      valuePerColumn: true,
      initialValue: 400,
      value: 50,
      rows: 6,
      sectionNames: [
        FigureId.TwoOfKind, FigureId.TwoOfTwoOfKind, FigureId.ThreeOfKind, FigureId.FourOfKind,
        FigureId.Vice, FigureId.General
      ]
    },
    section2AllResults: {
      name: 'Wszystkie wyniki',
      value: 0,
      rows: 2,
      sectionNames: [
        FigureId.Vice, FigureId.General
      ]
    },
    section3AllResults: {
      name: 'Wszystkie wyniki',
      valuePerColumn: true,
      value: 70,
      rows: 3,
      sectionNames: [
        FigureId.SmallTriangle, FigureId.BigTriangle, FigureId.Goat
      ]
    },
    section4AllResults: {
      name: 'Wszystkie wyniki',
      valuePerColumn: true,
      value: 70,
      rows: 3,
      sectionNames: [
        FigureId.SmallStraight, FigureId.BigStraight, FigureId.Runner
      ]
    },
    section5AllResults: {
      name: 'Wszystkie wyniki',
      valuePerColumn: true,
      value: 50,
      rows: 4,
      sectionNames: [
        FigureId.Evens, FigureId.Odds, FigureId.ThreeToThree, FigureId.TwoToFour
      ]
    },
    section6AllResults: {
      name: 'Wszystkie wyniki',
      valuePerColumn: true,
      value: 100,
      rows: 4,
      sectionNames: [
        FigureId.FullHouse, FigureId.ThreeOfTwoOfKind, FigureId.SuperSmall, FigureId.SuperBig
      ]
    },
    columnBonus: {
      name: 'Ukończenie kolumny',
      value: 500
    }
  }
};
