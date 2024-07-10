import { ConfigElement, ElementValue, ScoreElement, Throw, X_VALUE } from 'interfaces';
import { FigureId } from 'constant';

const getThrowMultiply = (throwCount: Throw | null) => {
  switch (throwCount) {
    case Throw.first: {
      return 3;
    }
    case Throw.second: {
      return 2;
    }
    case Throw.third: {
      return 1;
    }
    default: {
      return 1;
    }
  }
};

const getCalculatedValue = (singleScore: ScoreElement | null, scoreType: ConfigElement) => {
  switch (scoreType.id) {
    case FigureId.School1:
    case FigureId.School2:
    case FigureId.School3:
    case FigureId.School4:
    case FigureId.School5:
    case FigureId.School6: {
      return Number(scoreType?.initialValue) + (Number(scoreType?.value || 0) * (singleScore?.quantity || 0));
    }
    case FigureId.TwoOfKind: {
      return 2 * Number(singleScore?.dice);
    }
    case FigureId.ThreeOfKind: {
      return 3 * Number(singleScore?.dice);
    }
    case FigureId.FourOfKind: {
      return 4 * Number(singleScore?.dice);
    }
    case FigureId.Vice:
    case FigureId.General: {
      return Number((scoreType.value as ElementValue)[singleScore?.dice as number]);
    }
    case FigureId.SuperSmall:
    case FigureId.SuperBig: {
      return Number((scoreType.value as ElementValue)[singleScore?.value as number]);
    }

    default: {
      return Number(scoreType?.value || 0) + Number(singleScore?.value || 0);
    }
  }
};

export const calculateScore = (singleScore: ScoreElement | null, scoreType: ConfigElement) => {
  if (!singleScore?.value && !singleScore?.dice && !singleScore?.throw && !singleScore?.quantity) {
    return null;
  }
  if (singleScore?.value === X_VALUE) {
    return singleScore?.value;
  }

  const throwMultiply = getThrowMultiply(singleScore.throw);
  const calculatedValue = getCalculatedValue(singleScore, scoreType);

  return calculatedValue * throwMultiply;
};
