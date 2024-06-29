import { css } from '@emotion/react';
import _map from 'lodash/map';

import theme from '../styles/theme';

const baseFontFamily = _map(theme.fontFamily, (el: string): string => `${el}`).join(', ');

const GlobalStyles = css`
  html {
    font-size: ${theme.fontSize.base};
    background: #e2e2e2;
    @media print {
      background: none;
    }
  }
  body {
    box-sizing: border-box;
    overflow: hidden scroll;
    background: ${theme.colorMono.white};
    font-family: ${baseFontFamily};
    font-size: ${theme.fontSize.normal};
    font-weight: ${theme.fontWeight.regular};
    line-height: ${theme.lineHeight.normal};
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }
  p {
    margin-bottom: 2rem;
  }
  b, strong {
    font-weight: ${theme.fontWeight.semibold};
  }
  input {
    padding: 0;
    border-radius: 0;
    &::-ms-clear,
    &::-ms-reveal {
      display: none;
      pointer-events: none;
    }
    &::-webkit-contacts-auto-fill-button {
      position: absolute;
      right: 0;
      display: none;
      visibility: hidden;
      pointer-events: none;
    }
    &::-webkit-caps-lock-indicator,
    &::-webkit-credentials-auto-fill-button {
      display: none;
      pointer-events: none;
    }
    &:-webkit-autofill {
      box-shadow: 0 0 0 100rem ${theme.colorMono.white};
    }
    &:required {
      box-shadow: none;
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    border: 0;
    background: none;
    font: inherit;
    text-transform: inherit;
    &:hover, &:active, &:focus {
      outline: none;
      cursor: pointer;
    }
  }
  table {
    border: none;
    border-collapse: collapse;
    border-spacing: 0;
  }
  tr, th, td {
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 2rem;
  }
`;

export {
  GlobalStyles
};
