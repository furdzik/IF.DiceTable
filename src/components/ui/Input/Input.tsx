import React from 'react';

import { ButtonsSizes, InputTypes } from 'constant';

import {
  InputWrapper,
  StyledInput
} from './Input.styles';

export interface InputProps {
  name: string;
  value: string | number;
  id?: string;
  className?: string;
  disabled?: boolean;
  maxLength?: number;
  placeholder?: string;
  type?: InputTypes;
  size?: ButtonsSizes;
  autoFocus?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement> & React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  pattern? : string;
  inputMode?: 'search' | 'text' | 'email' | 'tel' | 'url' | 'none' | 'numeric' | 'decimal' | undefined;
}

const Input = React.forwardRef(({
  name,
  value,
  id = '',
  className = '',
  disabled = false,
  maxLength,
  placeholder,
  type = InputTypes.Text,
  size = ButtonsSizes.Normal,
  autoFocus = false,
  onChange = () => {},
  onKeyDown = () => {},
  onBlur = () => {},
  onFocus = () => {},
  pattern,
  inputMode
}: InputProps, ref) => (
  <InputWrapper className={className}>
    <StyledInput
      ref={ref as React.RefObject<HTMLInputElement>}
      type={type}
      name={name}
      id={id}
      value={value}
      inputSize={size}
      onChange={onChange}
      onKeyDown={onKeyDown}
      disabled={disabled}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      autoComplete="off"
      maxLength={maxLength}
      autoFocus={autoFocus}
      pattern={pattern}
      inputMode={inputMode}
    />
  </InputWrapper>
));

export default Input;
