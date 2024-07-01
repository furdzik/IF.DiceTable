import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ButtonsSizes, ButtonFontSizes, ButtonHeightSizes } from 'constant';

import { InputProps } from './Input';

interface Input extends InputProps {
  inputSize: ButtonsSizes;
}

const disabledColor = '#cecece';

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input<Input>`
  width: 100%;
  padding: .6rem 2.5rem;
  border: .1rem solid ${(props) => props.theme.color.lightGray};
  border-radius: 2.5rem;
  outline: 0;
  background: ${(props) => props.theme.color.lightGray};
  font-family: inherit;
  font-size: ${(props) => props.theme.fontSize.medium};

  ${(props) => props.inputSize === ButtonsSizes.Small && css`
    height: ${ButtonHeightSizes.Small};
    min-height: ${ButtonHeightSizes.Small};
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: ${ButtonFontSizes.Small};
  `};
  ${(props) => props.inputSize === ButtonsSizes.Normal && css`
    height: ${ButtonHeightSizes.Normal};
    min-height: ${ButtonHeightSizes.Normal};
    font-size: ${ButtonFontSizes.Normal};
  `};
  ${(props) => props.inputSize === ButtonsSizes.Large && css`
    height: ${ButtonHeightSizes.Large};
    min-height: ${ButtonHeightSizes.Large};
    font-size: ${ButtonFontSizes.Large};
  `};

  &:active,
  &:focus {
    border-width: .2rem;
    padding-right: 2.4rem;
    padding-left: 2.4rem;
    border-color: ${(props) => props.theme.mainColors.primary};

    ${(props) => props.inputSize === ButtonsSizes.Small && css`
    padding-left: .9rem;
    padding-right: .9rem;
  `};
  }

  ${(props) => props.disabled && css`
    border-style: dashed;
    border-color: ${disabledColor};
    color: ${disabledColor};
    cursor: not-allowed;
    &:active,
    &:focus {
      border-color: ${disabledColor};
      color: ${disabledColor};
      cursor: not-allowed;
    }
  `}
`;

export {
  InputWrapper,
  StyledInput
};
