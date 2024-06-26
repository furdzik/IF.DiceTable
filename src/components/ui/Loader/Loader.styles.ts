import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { LoaderProps } from './Loader';

const LoaderWrapper = styled.div<LoaderProps>`
  position: absolute;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  ${(props) => props.covered && css`
    background: ${props.theme.colorMono.white};
  `}
  ${(props) => props.fixed && css`
    position: fixed;
  `}
  ${(props) => props.sstatic && css`
    position: static;
  `}
  ${(props) => props.transparent && css`
    background: transparent;
  `}
`;

const Spinner = styled.div`
  text-align: center;
`;

const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 9rem;
`;

const Svg = styled.svg`
  animation: rotator 1.5s linear infinite;

  @keyframes rotator {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(100deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }
`;

const Circle = styled.circle`
  transform-origin: center;
  animation: dash 1.5s ease-in-out infinite;
  stroke: ${(props) => props.theme.mainColors.secondary};
  stroke-dasharray: 140;
  stroke-dashoffset: 0;

  @keyframes dash {
    0% {
      stroke-dashoffset: 140;
    }
    50% {
      transform: rotate(200deg);
      stroke-dashoffset: 35;
    }
    100% {
      transform: rotate(450deg);
      stroke-dashoffset: 140;
    }
  }
`;

export {
  LoaderWrapper,
  Spinner,
  CenterWrapper,
  Svg,
  Circle
};
