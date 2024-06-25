import React from 'react';

import { InputTypes } from 'constant';

import {
  InputWrapper,
  StyledInput
} from './Input.styles';

export type InputType = InputTypes.Text | InputTypes.File | InputTypes.Email | InputTypes.Number;
export interface InputProps {
  name: string;
  value: string | number;
  className?: string;
  disabled?: boolean;
  maxLength?: number;
  placeholder?: string;
  type?: InputType;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}
const defaultProps = {
  className: '',
  disabled: false,
  maxLength: undefined,
  placeholder: undefined,
  type: InputTypes.Text
};

const Input = React.forwardRef((props: InputProps, ref) => (
  <InputWrapper className={props.className}>
    <StyledInput
      type={props.type}
      ref={ref as React.RefObject<HTMLInputElement>}
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

Input.defaultProps = defaultProps;

export default Input;
