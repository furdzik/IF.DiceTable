import React, { useState } from 'react';

import { ButtonColors, ButtonsSizes } from 'constant';

import Button from 'components/ui/Button';

import {
  Color,
  ColorInputWrapper,
  ColorPickerWrapper,
  StyledColorPicker,
  ButtonWrapper
} from './ColorInput.styles';
import { useClickAway } from 'use-click-away-react';

export interface ColorInputProps {
  value: string | undefined;
  defaultValue: string | undefined;
  className?: string;
  onChange?: (data: string | undefined) => void;
}

const ColorInput = React.forwardRef(({
  value,
  defaultValue,
  className = '',
  onChange = () => {}
}: ColorInputProps, ref) => {
  const [color, setColor] = useState(value);
  const [showPicker, setShowPicker] = useState(false);

  const { clickAwayRef } = useClickAway<HTMLDivElement>(() => setShowPicker(false));
  
  return (
    <ColorInputWrapper className={className}>
      <Color color={value} onClick={() => setShowPicker(!showPicker)} />
      {
        showPicker && (
          <ColorPickerWrapper ref={clickAwayRef}>
            <StyledColorPicker
              color={color}
              onChange={(newColor: string) => setColor(newColor)}
            />
            <ButtonWrapper>
              <Button
                size={ButtonsSizes.Small}
                color={ButtonColors.Primary}
                onClick={() => {
                  onChange?.(color);
                  setShowPicker(!showPicker);
                }}
              >
                Ustaw
              </Button>
              <Button
                size={ButtonsSizes.Small}
                color={ButtonColors.Secondary}
                onClick={() => {
                  setColor(defaultValue);
                  onChange?.(defaultValue);
                  setShowPicker(!showPicker);
                }}
              >
                Resetuj
              </Button>
            </ButtonWrapper>
          </ColorPickerWrapper>
        )
      }
    </ColorInputWrapper>
  );
});

export default ColorInput;
