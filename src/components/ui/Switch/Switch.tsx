import React from 'react';

import {
  SwitchWrapper
} from './Switch.styles';

export interface SwitchProps {
  id: string;
  checked?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Switch = ({ id, checked = false, disabled = false, onClick = () => {}  }: SwitchProps) => (
  <SwitchWrapper
    id={id}
    onClick={onClick}
    checked={checked}
    disabled={disabled}
  />
);

export default Switch;
