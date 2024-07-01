import {
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

export const getDiceOrNumberIconPath = (dice: number, isDice: boolean) => {
  switch (dice) {
    case 1: {
      return isDice ? mdiDice1Outline : mdiNumeric1;
    }
    case 2: {
      return isDice ? mdiDice2Outline : mdiNumeric2;
    }
    case 3: {
      return isDice ? mdiDice3Outline : mdiNumeric3;
    }
    case 4: {
      return isDice ? mdiDice4Outline : mdiNumeric4;
    }
    case 5: {
      return isDice ? mdiDice5Outline : mdiNumeric5;
    }
    case 6: {
      return isDice ? mdiDice6Outline : mdiNumeric6;
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
