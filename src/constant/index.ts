import { Colors } from 'interfaces';

export * from './config';
export * from './scores';

export enum ButtonsSizes {
  Small = 'small',
  Normal = 'normal',
  Large = 'large'
}

export enum ButtonTypes {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset'
}

export enum ButtonVariants {
  Button = 'button',
  Icon = 'icon',
  Link = 'link'
}
export enum ButtonColors {
  Primary = 'primary',
  Secondary = 'secondary',
  PrimaryDark = 'primaryDark',
  SecondaryDark = 'secondaryDark'
}

export enum InputTypes {
  Text = 'text',
  File = 'file',
  Email = 'email',
  Number = 'number'
}

export enum ButtonFontSizes {
  Small = '1.4rem',
  Normal = '1.6rem',
  Large = '1.8rem'
}
export enum ButtonHeightSizes {
  Small = '3rem',
  Normal = '4rem',
  Large = '5rem'
}

export const SAFARI_BAR_VH = 0.01;
export const VIEWPORT_SIZE_CHECKING_DELAY = 500;

export const NUMBER_OF_ROWS = 27;

export const colorsByOrder = [
  Colors.Pink,
  Colors.Green,
  Colors.Blue,
  Colors.Orange,
  Colors.Red,
  Colors.Velvet
];

export const MAX_PLAYERS_ALLOWED = 6;

export const THOUSAND_BONUS_VALUE = 1000;
export const SCHOOL_BONUS_MIN_VALUE = 30;

export const MAX_PLAYER_ROUND_GAP = 2;

export const NUMBER_OF_SECTIONS_FOR_BONUS = 6;
