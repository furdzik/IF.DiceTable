import React from 'react';

import { ButtonsSizes, InputTypes } from 'constant';

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
  size?: ButtonsSizes;
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
  size = ButtonsSizes.Normal,
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {}
}: InputProps, ref) => (
  <InputWrapper className={className}>
    <StyledInput
      ref={ref as React.RefObject<HTMLInputElement>}
      type={type}
      name={name}
      id={`input_${name}`}
      value={value}
      inputSize={size}
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
