import React from 'react';
import PropTypes from 'prop-types';

import { iconShape, buttonTypes } from './Button.types';

import {
  ButtonWrapper,
  ButtonText,
  IconWrapper,
  IconStyled
} from './Button.styles';

const Button = (props) => {
  const iconElement = () => (
    <IconWrapper
      type={props.type}
      iconPlacement={props.icon.placement}
      buttonPrimary={!props.secondary}
      buttonSecondary={props.secondary}
      iconSize={props.icon.size}
      iconColor={props.icon.color}
      disabled={props.disabled}
    >
      <IconStyled
        path={props.icon.iconPath}
      />
    </IconWrapper>
  );

  return (
    <ButtonWrapper
      className={props.className}
      type={props.type}
      onClick={props.onClick}
      data-test={props.dataTest && `button-${props.dataTest}`}
      disabled={props.disabled}
      buttonPrimary={!props.secondary}
      buttonSecondary={props.secondary}
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

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  counter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  counterWithBrackets: PropTypes.bool,
  dataTest: PropTypes.string,
  disabled: PropTypes.bool,
  icon: iconShape,
  rounded: PropTypes.bool,
  secondary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'regular', 'large']),
  type: buttonTypes,
  onClick: PropTypes.func
};

Button.defaultProps = {
  children: null,
  className: '',
  counter: null,
  counterWithBrackets: false,
  dataTest: null,
  disabled: false,
  icon: null,
  rounded: false,
  type: 'button',
  size: 'regular',
  secondary: false,
  onClick: () => {}
};

export default Button;

