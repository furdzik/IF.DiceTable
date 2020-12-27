import styled, { css } from 'styled-components';

import Icon from '@mdi/react';

const buttonRadius = '2.5rem';
const buttonFontSizeRegular = '1.6rem';
const buttonHeightSmall = '3rem';
const buttonHeightRegular = '4rem';
const buttonHeightLarge = '5rem';

const buttonPrimaryBackgroundColor = (props) => props.theme.mainColors.primary;
const buttonPrimaryBorderColor = 'transparent';
const buttonPrimaryColor = (props) => props.theme.monoColors.white;
const buttonPrimaryBackgroundColorFocus = (props) => props.theme.color.green;
const buttonPrimaryBackgroundColorActive = (props) => props.theme.color.green;
const buttonPrimaryBackgroundColorDisabled = (props) => props.theme.color.lightGray;
const buttonPrimaryColorDisabled = (props) => props.theme.color.lightGray;

const buttonSecondaryBackgroundColor = (props) => props.theme.mainColors.secondary;
const buttonSecondaryColor = (props) => props.theme.monoColors.white;
const buttonSecondaryBorderColor = (props) => props.theme.mainColors.secondary;
const buttonSecondaryBorderWidth = '2px';
const buttonSecondaryBackgroundColorFocus = (props) => props.theme.color.lightPink;
const buttonSecondaryBorderColorFocus = (props) => props.theme.color.lightPink;
const buttonSecondaryColorFocus = (props) => props.theme.monoColors.white;
const buttonSecondaryBackgroundColorActive = (props) => props.theme.color.lightPink;
const buttonSecondaryBorderColorActive = (props) => props.theme.color.lightPink;
const buttonSecondaryColorActive = (props) => props.theme.monoColors.white;
const buttonSecondaryBackgroundColorDisabled = 'transparent';
const buttonSecondaryBorderColorDisabled = (props) => props.theme.mainColors.gray;
const buttonSecondaryColorDisabled = (props) => props.theme.mainColors.gray;

const anchorColor = (props) => props.theme.mainColors.primary;
const anchorColorDisabled = (props) => props.theme.color.gray;

const ButtonWrapper = styled.button`
  ${(props) => props.type !== 'link' && css`
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
    ${props.buttonPrimary && css`
      border-color: ${buttonPrimaryBorderColor};
      background-color: ${buttonPrimaryBackgroundColor};
      color: ${buttonPrimaryColor};
      &:focus,
      &:hover {
        background-color: ${buttonPrimaryBackgroundColorFocus};
      }
      &:active {
        background-color: ${buttonPrimaryBackgroundColorActive};
      }
      &[disabled] {
        background-color: ${buttonPrimaryBackgroundColorDisabled};
        color: ${buttonPrimaryColorDisabled};
        cursor: not-allowed;
      }
    `}
    ${props.buttonSecondary && css`
      border: ${buttonSecondaryBorderWidth} solid ${buttonSecondaryBorderColor};
      background-color: ${buttonSecondaryBackgroundColor};
      color: ${buttonSecondaryColor};
      &:focus,
      &:hover {
        border-color: ${buttonSecondaryBorderColorFocus};
        background-color: ${buttonSecondaryBackgroundColorFocus};
        color: ${buttonSecondaryColorFocus};
      }
      &:active {
        border-color: ${buttonSecondaryBorderColorActive};
        background-color: ${buttonSecondaryBackgroundColorActive};
        color: ${buttonSecondaryColorActive};
      }
      &[disabled] {
        border-color: ${buttonSecondaryBorderColorDisabled};
        background-color: ${buttonSecondaryBackgroundColorDisabled};
        color: ${buttonSecondaryColorDisabled};
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

  ${(props) => props.type === 'link' && css`
    display: inline-flex;
    align-items: center;
    height: auto;
    font-size: 1.4rem;
    text-align: left;
    color: ${anchorColor};
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
    &[disabled] {
      pointer-events: none;
      &, & > a {
        color: ${anchorColorDisabled};
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

const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  ${IconStyled} {
    ${(props) => props.iconSize && css`
      width: ${props.iconSize}rem;
    `}
  }

  ${(props) => props.iconPlacement === 'left' && css`
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
  ${(props) => props.iconPlacement === 'right' && css`
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
    ${(props) => !props.iconColor && props.buttonSecondary && css`
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
