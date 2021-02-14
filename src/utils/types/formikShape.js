import PropTypes from 'prop-types';
// import { itemShape } from '@utils/types/itemShape';

// export const formikShape = PropTypes.object;

export const playerShape = PropTypes.shape({
  name: PropTypes.string,
  id: PropTypes.number
});

export const scoreShape = PropTypes.shape({
  columnId: PropTypes.number,
  nursery: PropTypes.shape({
    1: PropTypes.number,
    2: PropTypes.number,
    3: PropTypes.number,
    4: PropTypes.number,
    5: PropTypes.number,
    6: PropTypes.number
  }),
  vice: PropTypes.shape({
    pair: PropTypes.number,
    twoPairs: PropTypes.number,
    treeOfAKind: PropTypes.number,
    fourOfAKind: PropTypes.number,
    vice: PropTypes.number,
    general: PropTypes.number
  }),
  straights: PropTypes.shape({
    smallStraight: PropTypes.number,
    bigStraight: PropTypes.number,
    mustache: PropTypes.number
  }),
  divided: PropTypes.shape({
    even: PropTypes.number,
    odd: PropTypes.number,
    treeToThree: PropTypes.number,
    fourToTwo: PropTypes.number
  }),
  other: PropTypes.shape({
    full: PropTypes.number,
    threePairs: PropTypes.number,
    smallest: PropTypes.number,
    caw: PropTypes.number
  }),
  chance: PropTypes.number,
  // TODO: zapytać anety
  bonuses: PropTypes.shape({
    nurseryPoints: PropTypes.number,
    columnFilled: PropTypes.number,
    firstGetsHighestSum: PropTypes.number // see constants
  })
});

export const optionsShape = PropTypes.shape({
  columnsNumber: PropTypes.number,
  players: PropTypes.arrayOf(playerShape)
});

export const scoresShape = PropTypes.shape({
  playerId: PropTypes.number,
  score: PropTypes.arrayOf(scoreShape)
});

export const valuesShape = PropTypes.shape({
  options: PropTypes.shape(optionsShape),
  scores: PropTypes.arrayOf(PropTypes.shape(scoresShape))
});
