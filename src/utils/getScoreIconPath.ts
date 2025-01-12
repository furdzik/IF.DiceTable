import {
  mdiDice1,
  mdiDice2,
  mdiDice3,
  mdiDice4,
  mdiDice5,
  mdiDice6,
  mdiDice1Outline,
  mdiDice2Outline,
  mdiDice3Outline,
  mdiDice4Outline,
  mdiDice5Outline,
  mdiDice6Outline,
  mdiRomanNumeral1,
  mdiRomanNumeral2,
  mdiRomanNumeral3
} from '@mdi/js';
import { ConfigElement } from '../interfaces';

export const getDiceIconPath = (dice: number, isSelected: boolean) => {
  switch (dice) {
    case 1: {
      return isSelected ? mdiDice1 : mdiDice1Outline;
    }
    case 2: {
      return isSelected ? mdiDice2 : mdiDice2Outline;
    }
    case 3: {
      return isSelected ? mdiDice3 : mdiDice3Outline;
    }
    case 4: {
      return isSelected ? mdiDice4 : mdiDice4Outline;
    }
    case 5: {
      return isSelected ? mdiDice5 : mdiDice5Outline;
    }
    case 6: {
      return isSelected ? mdiDice6 : mdiDice6Outline;
    }
  }

  return '';
};

export const getNumber = (dice: number | null | undefined , scoreType: ConfigElement) => {
  switch (dice) {
    case 1: {
      return Number(-2 * (scoreType?.value as number)).toString();
    }
    case 2: {
      return Number(-1 * (scoreType?.value as number)).toString();
    }
    case 3: {
      return Number(0).toString();
    }
    case 4: {
      return `+${Number(scoreType?.value).toString()}`;
    }
    case 5: {
      return `+${Number(2 * (scoreType?.value as number)).toString()}`;
    }
    case 6: {
      return `+${Number(3 * (scoreType?.value as number)).toString()}`;
    }
  }

  return '';
};

export const getThrowIconPath = (throwNumber: number) => {
  switch (throwNumber) {
    case 1: {
      return mdiRomanNumeral1;
    }
    case 2: {
      return mdiRomanNumeral2;
    }
    case 3: {
      return mdiRomanNumeral3;
    }
  }

  return '';
}
