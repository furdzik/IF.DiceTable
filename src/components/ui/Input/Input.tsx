import React from 'react';

import { InputTypes } from 'constant';

import {
  InputWrapper,
  StyledInput
} from './Input.styles';

export interface InputProps {
  name: string;
  value: string | number;
  className?: string;
  disabled?: boolean;
  maxLength?: number;
  placeholder?: string;
  type?: InputTypes;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

const Input = React.forwardRef(({
  name,
  value,
  className = '',
  disabled = false,
  maxLength,
  placeholder,
  type = InputTypes.Text,
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {}
}: InputProps, ref) => (
  <InputWrapper className={className}>
    <StyledInput
      type={type}
      ref={ref as React.RefObject<HTMLInputElement>}
      name={name}
      id={`input_${name}`}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      autoComplete="off"
      maxLength={maxLength}
    />
  </InputWrapper>
));

export default Input;
