import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  InputWrapper,
  StyledInput
} from './Input.styles';

const Input = React.forwardRef((props, ref) => (
  <InputWrapper className={props.className}>
    <StyledInput
      type={props.type}
      ref={ref}
      name={props.name}
      id={`input_${props.name}`}
      value={props.value}
      onChange={props.onChange}
      disabled={props.disabled}
      placeholder={props.placeholder}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      autoComplete="off"
      maxLength={props.maxLength}
    />
  </InputWrapper>
));

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'file', 'email', 'number']),
  onBlur: PropTypes.func,
  onFocus: PropTypes.func
};

Input.defaultProps = {
  className: '',
  disabled: false,
  label: null,
  maxLength: null,
  placeholder: null,
  showError: true,
  suffix: null,
  type: 'text',
  onBlur: () => {},
  onFocus: () => {}
};

export default Input;
