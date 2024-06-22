import React from 'react';

import { Children } from 'interfaces';
import { ButtonsSizes, ButtonTypes, ButtonVariants, ButtonColors } from 'constant';

import {
  ButtonWrapper,
  ButtonText,
  IconWrapper,
  IconStyled
} from './Button.styles';

export interface Icon {
  placement: string;
  size: string;
  color: string;
  iconPath: string;
}
export type Sizes = ButtonsSizes.Small | ButtonsSizes.Normal | ButtonsSizes.Large;
export type Types = ButtonTypes.Button | ButtonTypes.Submit | ButtonTypes.Reset;
export type Variants = ButtonVariants.Button | ButtonVariants.Icon | ButtonVariants.Link;
export type Colors = ButtonColors.Primary | ButtonColors.Secondary | ButtonColors.PrimaryDark | ButtonColors.SecondaryDark;
export interface ButtonProps {
  children?: Children | null;
  className?: string;
  color?: Colors;
  disabled?: boolean;
  icon?: Icon | null;
  size?: Sizes;
  type?: Types | undefined;
  variant?: Variants | undefined;
  onClick?: () => void;
}
const defaultProps = {
  children: null,
  className: '',
  color: ButtonColors.Primary,
  disabled: false,
  icon: null,
  rounded: true,
  size: ButtonsSizes.Normal,
  type: ButtonTypes.Button,
  variant: ButtonVariants.Button
};

const Button = (props: ButtonProps) => {
  const iconElement = () => (
    <IconWrapper
      color={props.color}
      disabled={props.disabled}
      icon={props.icon}
      type={props.type}
      variant={props.variant}
    >
      <IconStyled path={props.icon?.iconPath || ''} />
    </IconWrapper>
  );

  return (
    <ButtonWrapper
      color={props.color}
      className={props.className}
      // @ts-ignore
      type={props.type}
      disabled={props.disabled}
      size={props.size}
      variant={props.variant}
      onClick={props.onClick}
    >
      {
        props.icon ? (
          iconElement()
        ) : null
      }
      {
        props.children ? (
          <ButtonText>
            {props.children}
          </ButtonText>
        ) : null
      }
    </ButtonWrapper>
  );
};

Button.defaultProps = defaultProps;

export default Button;

