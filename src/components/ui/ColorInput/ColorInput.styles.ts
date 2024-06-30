import styled from '@emotion/styled';
import { HexColorPicker } from 'react-colorful';

export interface ColorProps {
  color?: string | null;
}

const ColorInputWrapper = styled.div`
  position: relative;
`;

const ColorPickerWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 100;
  padding: 16px;
  border-radius: 12px;
  background: #e6e9ee;
  box-shadow: 0 .6rem 1.2rem #999999;
`;

const Color = styled.div<ColorProps>`
  width: 4rem;
  height: 4rem;
  border: .2rem solid ${(props) => props.theme.colorMono.white};
  border-radius: 50%;
  background: ${(props) => props.color || props.theme.color.gray};
  box-shadow: 0 0 .5rem #999999;
  cursor: pointer;
`;

const StyledColorPicker = styled(HexColorPicker)`
  .react-colorful__saturation {
    margin: 1.5rem 0;
    border-bottom: none;
    border-radius: .5rem;
  }
  .react-colorful__hue {
    order: -1;
  }
  .react-colorful__hue,
  .react-colorful__alpha {
    height: 1.4rem;
    border-radius: .5rem;
  }
  .react-colorful__hue-pointer,
  .react-colorful__alpha-pointer {
    width: 2rem;
    height: 2rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export {
  ColorInputWrapper,
  ColorPickerWrapper,
  Color,
  StyledColorPicker,
  ButtonWrapper
};
