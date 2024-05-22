import React from 'react';

import { Children } from 'interfaces';

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
export type Size = 'small' | 'normal' | 'large';
export type Type = 'button' | 'submit' | 'reset' | 'link';
export interface ButtonProps {
  type?: Type | undefined;
  children?: Children | null;
  disabled?: boolean;
  onClick?: () => void;
  size?: Size;
  icon?: Icon;
  secondary?: boolean;
  rounded?: boolean;
  className?: string;
}
const defaultProps = {
  type: 'button',
  children: '',
  disabled: false,
  size: 'normal',
  secondary: false,
  rounded: true
};

const Button = (props: ButtonProps) => {
  const iconElement = () => (
    <IconWrapper
      type={props.type}
      icon={props.icon}
      secondary={!props.secondary}
      disabled={props.disabled}
    >
      <IconStyled path={props.icon?.iconPath || ''} />
    </IconWrapper>
  );

  return (
    <ButtonWrapper
      className={props.className}
      buttonType={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      secondary={props.secondary}
      size={props.size}
      rounded={props.rounded}
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

