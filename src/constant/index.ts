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

export const SAFARI_BAR_VH = 0.01;
export const VIEWPORT_SIZE_CHECKING_DELAY = 500;

export const NUMBER_OF_ROWS = 27;