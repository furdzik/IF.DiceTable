import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Icon from '@mdi/react';

import { ButtonProps, Type } from './Button';


const buttonRadius = '2.5rem';
const buttonFontSizeRegular = '1.6rem';
const buttonHeightSmall = '3rem';
const buttonHeightRegular = '4rem';
const buttonHeightLarge = '5rem';

export interface ButtonType extends Omit<ButtonProps, 'children'> {
  buttonType?: Type | undefined;
  children?: any;
}

const ButtonWrapper = styled.button<ButtonType>`
  ${(props) => props.buttonType !== 'link' && css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    height: ${buttonHeightRegular};
    padding: 0 2rem;
    border-radius: ${buttonRadius};
    font-family: inherit;
    font-size: ${buttonFontSizeRegular};
    font-weight: normal;
    transition: all 0.3s;
    cursor: pointer;

    ${!props.secondary && css`
      border-color: transparent;
      background-color: ${props.theme.mainColors.primary};
      color: ${props.theme.colorMono.white};
      &:focus,
      &:hover {
        background-color: ${props.theme.color.green};
      }
      &:active {
        background-color: ${props.theme.color.green};
      }
      &[disabled] {
        background-color: ${props.theme.color.lightGray};
        color: ${props.theme.color.lightGray};
        cursor: not-allowed;
      }
    `}
    ${props.secondary && css`
      border: 2px solid ${props.theme.mainColors.secondary};
      background-color: ${props.theme.mainColors.secondary};
      color: ${props.theme.colorMono.white};
      &:focus,
      &:hover {
        border-color: ${props.theme.color.lightPink};
        background-color: ${props.theme.color.lightPink};
        color: ${props.theme.colorMono.white};
      }
      &:active {
        border-color: ${props.theme.color.lightPink};
        background-color: ${props.theme.color.lightPink};
        color: ${props.theme.colorMono.white};
      }
      &[disabled] {
        border-color: ${props.theme.mainColors.gray};
        background-color: transparent;
        color: ${props.theme.mainColors.gray};
        cursor: not-allowed;
      }
    `}
    ${props.size === 'small' && css`
      height: ${buttonHeightSmall};
      min-height: ${buttonHeightSmall};
    `}
    ${props.size === 'large' && css`
      height: ${buttonHeightLarge};
      min-height: ${buttonHeightLarge};
    `}
    ${props.rounded && css`
      height: ${buttonHeightLarge};
      min-height: ${buttonHeightLarge};
      min-width: 5rem;
      max-width: 5rem;
      padding: 0;
    `}
  `};

  ${(props) => props.buttonType === 'link' && css`
    display: inline-flex;
    align-items: center;
    height: auto;
    font-size: 1.4rem;
    text-align: left;
    color: ${props.theme.mainColors.primary};
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
    &[disabled] {
      pointer-events: none;
      &, & > a {
        color: ${props.theme.color.gray};
      }
    }
  `};
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
    ${props.type === 'link' && css`
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
    ${props.type === 'link' && css`
       ${IconStyled} {
        margin-right: 0;
      }
    `};
  `}
  ${ButtonWrapper}:hover {
    ${(props) => !props.icon?.color && props.secondary && css`
      color: ${props.theme.mainColors.primary};
    `}
  }
  ${(props) => props.type === 'link' && css`
    margin-top: 0;
  `};
`;

export {
  ButtonText,
  ButtonWrapper,
  IconStyled,
  IconWrapper
};
