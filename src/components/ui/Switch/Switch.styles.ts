import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { hexToRgbMixin } from 'styles/mixins';

import { SwitchProps } from './Switch';

const SwitchWrapper = styled.div<SwitchProps>`
  position: relative;
  width: 3.4rem;
  height: 1.4rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.color.gray};
  transition: ${(props) => props.theme.layout.transition};
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    top: -.3rem;
    left: 0;
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: #ececec;
    box-shadow: 0 .1rem .4rem 0 rgba(0 0 0 / .2);
    transition: ${(props) => props.theme.layout.transition};
  }
  ${(props) => props.checked && css`
    background-color: ${hexToRgbMixin(props.theme.mainColors.secondary, .5)};
    &::before {
      right: 0;
      left: auto;
      background: ${props.theme.mainColors.secondary};
    }
  `};
  ${(props) => props.disabled && css`
    background-color: ${props.theme.mainColors.primary};
    &::before {
      right: 0;
      left: auto;
      background: ${props.theme.mainColors.primary};
    }
  `};
`;

export {
  SwitchWrapper
};
