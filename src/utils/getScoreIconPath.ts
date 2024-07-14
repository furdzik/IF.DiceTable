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
  mdiNumeric1,
  mdiNumeric2,
  mdiNumeric3,
  mdiNumeric4,
  mdiNumeric5,
  mdiNumeric6,
  mdiRomanNumeral1,
  mdiRomanNumeral2,
  mdiRomanNumeral3
} from '@mdi/js';

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

export const getNumberIconPath = (dice: number) => {
  switch (dice) {
    case 1: {
      return mdiNumeric1;
    }
    case 2: {
      return mdiNumeric2;
    }
    case 3: {
      return mdiNumeric3;
    }
    case 4: {
      return mdiNumeric4;
    }
    case 5: {
      return mdiNumeric5;
    }
    case 6: {
      return mdiNumeric6;
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
