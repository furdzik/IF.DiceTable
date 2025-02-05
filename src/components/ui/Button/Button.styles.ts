import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Icon from '@mdi/react';

import {
  ButtonsSizes,
  ButtonVariants,
  ButtonColors,
  ButtonTypes,
  ButtonFontSizes,
  ButtonHeightSizes
} from 'constant';

import { hexToRgbMixin } from 'styles/mixins';

import { ButtonProps } from './Button';

export interface Button extends ButtonProps {
  // @TODO: remove any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
  buttonType: ButtonTypes | undefined;
}

const ButtonWrapper = styled.button<Button>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  border-radius: 2.5rem;
  font-family: inherit;
  font-weight: normal;
  transition: all 0.3s;
  cursor: pointer;

  ${(props) => props.size === ButtonsSizes.Small && css`
    height: ${ButtonHeightSizes.Small};
    min-height: ${ButtonHeightSizes.Small};
    padding-right: 1rem;
    padding-left: 1rem;
    font-size: ${ButtonFontSizes.Small};

    ${props.variant === ButtonVariants.Icon && css`
      min-width: ${ButtonHeightSizes.Small};
      max-width: ${ButtonHeightSizes.Small};
    `};
  `};
  ${(props) => props.size === ButtonsSizes.Normal && css`
    height: ${ButtonHeightSizes.Normal};
    min-height: ${ButtonHeightSizes.Normal};
    font-size: ${ButtonFontSizes.Normal};

    ${props.variant === ButtonVariants.Icon && css`
      min-width: ${ButtonHeightSizes.Normal};
      max-width: ${ButtonHeightSizes.Normal};
    `};
  `};
  ${(props) => props.size === ButtonsSizes.Large && css`
    height: ${ButtonHeightSizes.Large};
    min-height: ${ButtonHeightSizes.Large};
    font-size: ${ButtonFontSizes.Large};

    ${props.variant === ButtonVariants.Icon && css`
      min-width: ${ButtonHeightSizes.Large};
      max-width: ${ButtonHeightSizes.Large};
    `};
  `};

  ${(props) => props.variant === ButtonVariants.Icon && css`
    padding: 0;
  `}

  ${(props) => props.color === ButtonColors.Primary && css`
    border-color: ${props.theme.mainColors.primary};
    background-color: ${props.theme.mainColors.primary};
    color: ${props.theme.colorMono.white};

    &:focus,
    &:hover {
      background-color: ${hexToRgbMixin(props.theme.mainColors.primary, 0.9)};
    }
    &:active {
      background-color: ${hexToRgbMixin(props.theme.mainColors.primary, 0.9)};
    }
    &[disabled] {
      background-color: ${props.theme.color.lightGray};
      color: ${props.theme.color.gray};
      cursor: not-allowed;
    }
  `}

  ${(props) => props.color === ButtonColors.Secondary && css`
    border-color: ${props.theme.mainColors.secondary};
    background-color: ${props.theme.mainColors.secondary};
    color: ${props.theme.colorMono.white};

    &:focus,
    &:hover {
      background-color: ${hexToRgbMixin(props.theme.mainColors.secondary, 0.9)};
    }
    &:active {
      background-color: ${hexToRgbMixin(props.theme.mainColors.secondary, 0.9)};
    }
    &[disabled] {
      background-color: ${props.theme.color.lightGray};
      color: ${props.theme.color.gray};
      cursor: not-allowed;
    }
  `}

  ${(props) => props.color === ButtonColors.PrimaryDark && css`
    border-color: ${props.theme.mainColors.primaryDark};
    background-color: ${props.theme.mainColors.primaryDark};
    color: ${props.theme.colorMono.white};

    &:focus,
    &:hover {
      background-color: ${hexToRgbMixin(props.theme.mainColors.primaryDark, 0.9)};
    }
    &:active {
      background-color: ${hexToRgbMixin(props.theme.mainColors.primaryDark, 0.9)};
    }
    &[disabled] {
      background-color: ${props.theme.color.lightGray};
      color: ${props.theme.color.gray};
      cursor: not-allowed;
    }
  `}

  ${(props) => props.color === ButtonColors.SecondaryDark && css`
    border-color: ${props.theme.mainColors.secondaryDark};
    background-color: ${props.theme.mainColors.secondaryDark};
    color: ${props.theme.colorMono.white};

    &:focus,
    &:hover {
      background-color: ${hexToRgbMixin(props.theme.mainColors.secondaryDark, 0.9)};
    }
    &:active {
      background-color: ${hexToRgbMixin(props.theme.mainColors.secondaryDark, 0.9)};
    }
    &[disabled] {
      background-color: ${props.theme.color.lightGray};
      color: ${props.theme.color.gray};
      cursor: not-allowed;
    }
  `}

  ${(props) => props.variant === ButtonVariants.Link && css`
    &,
    &:focus,
    &:hover,
    &:active {
      padding-right: 0;
      padding-left: 0;
      border: 0;
      background: none;
      color: ${props.theme.mainColors.secondary};
    }
    &:focus,
    &:hover {
      text-decoration: underline;
    }
    &[disabled] {
      background: none;
      color: ${props.theme.color.lightGray};
      cursor: not-allowed;
    }
  `}
`;

const ButtonText = styled.span`
  display: block;
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const IconStyled = styled(Icon)`
  width: 2.4rem;
  transition: all 0.3s;
`;

const IconWrapper = styled.span<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${IconStyled} {
    ${(props) => props.icon?.size && css`
      width: ${props.icon?.size}rem;
    `}
  }

  ${(props) => props.icon?.placement === 'left' && css`
    margin-right: .5rem;
    ${IconStyled}  {
      margin-right: 0;
      margin-left: -1rem;
    }
    ${props.variant === ButtonVariants.Link && css`
      margin-left: 0;
      ${IconStyled}  {
        margin-left: 0;
      }
    `};
  `}
  ${(props) => props.icon?.placement === 'right' && css`
    order: 1;
    margin-right: 0;
    margin-left: .5rem;
    ${IconStyled} {
      margin-right: -1rem;
      margin-left: 0;
    }
    ${props.variant === ButtonVariants.Link && css`
       ${IconStyled} {
        margin-right: 0;
      }
    `};
  `}
  ${ButtonWrapper}:hover {
    ${(props) => !props.icon?.color && props.color === ButtonColors.Secondary && css`
      color: ${props.theme.mainColors.primary};
    `}
  }
  ${(props) => props.variant === ButtonVariants.Link && css`
    margin-top: 0;
  `};
`;

export {
  ButtonText,
  ButtonWrapper,
  IconStyled,
  IconWrapper
};
