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
export interface ButtonProps {
  children?: Children | null;
  className?: string;
  color?: ButtonColors;
  disabled?: boolean;
  icon?: Icon | null;
  size?: ButtonsSizes;
  type?: ButtonTypes | undefined;
  variant?: ButtonVariants | undefined;
  onClick?: () => void;
}

const Button = ({
  children = null,
  className = '',
  color = ButtonColors.Primary,
  disabled = false,
  icon = null,
  size = ButtonsSizes.Normal,
  type = ButtonTypes.Button,
  variant =  ButtonVariants.Button,
  onClick = () => {}
}: ButtonProps) => {
  const iconElement = () => (
    <IconWrapper
      color={color}
      disabled={disabled}
      icon={icon}
      type={type}
      variant={variant}
    >
      <IconStyled path={icon?.iconPath || ''} />
    </IconWrapper>
  );

  return (
    <ButtonWrapper
      color={color}
      className={className}
      // @ts-ignore
      type={type}
      disabled={disabled}
      size={size}
      variant={variant}
      onClick={onClick}
    >
      {
        icon ? (
          iconElement()
        ) : null
      }
      {
        children ? (
          <ButtonText>
            {children}
          </ButtonText>
        ) : null
      }
    </ButtonWrapper>
  );
};

export default Button;

