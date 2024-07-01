import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Icon from '@mdi/react';

import { Colors, X } from 'interfaces';
import { ButtonColors, ButtonVariants } from 'constant';

import { hexToRgbMixin } from 'styles/mixins';

import Button from 'components/ui/Button';
import Input from 'components/ui/Input';

interface ScoreProps {
  singleScore: number | null | X;
  addingInProgress?: boolean | undefined;
}
interface ColorPlayerProps {
  playerColor: Colors | string | undefined;
}
interface IconWrapperProps {
  selected?: boolean | undefined;
  noBorder?: boolean | undefined;
}
interface AddBoxProps {
  onLeft?: boolean | undefined;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  text-align: left;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: .5rem;
`;

const ChoiceBox = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`;

const AddBox = styled.div<ColorPlayerProps & AddBoxProps>`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 100;
  width: 25rem;
  padding: 1rem;
  border: .2rem solid ${(props) => props.playerColor || props.theme.mainColors.primary};
  border-radius: 1.2rem;
  background: ${(props) => props.theme.color.lightGray};
  box-shadow: 0 .6rem 1.2rem #999999;
  font-size: ${(props) => props.theme.fontSize.small};

  ${(props) => props.onLeft && css`

  `}
`;

const Header = styled.h3`
  text-transform: uppercase;
  line-height: 1.5;
  border-bottom: .1rem solid ${(props) => props.theme.color.darkGray};
  padding-bottom: 1rem;
  margin-bottom: 1rem;

  span {
    font-size: 1.2rem;
    text-transform: uppercase;
  }
`;
const Label = styled.label`
  width: 4rem;
  text-transform: uppercase;
  line-height: 1.5;
`;

const Score = styled.button<ScoreProps & ColorPlayerProps>`
  width: 100%;
  height: 100%;
  padding: .2rem .1rem;

  ${(props) => props.addingInProgress && css`
    background: linear-gradient(
      -45deg,
      white 25%,
      ${hexToRgbMixin(props.playerColor as string, 0.2)} 25%,
      ${hexToRgbMixin(props.playerColor as string, 0.2)} 50%,
      white 50%,
      white 75%,
      ${hexToRgbMixin(props.playerColor as string, 0.2)} 75%
    );
    background-size: 7px 7px;
  `};

  ${(props) => props.singleScore !== null && css`
    cursor: not-allowed;
  `};
`;

const ButtonWrapper = styled.div<ColorPlayerProps>`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  background: ${(props) => hexToRgbMixin(props.playerColor as string, 0.2)};
  padding: 1rem;
  margin: 1rem -1rem -1rem;
`;

const StyledButton = styled(Button)<ColorPlayerProps>`
  && {
    ${(props) => props.variant === ButtonVariants.Link && css`
      color: ${props.playerColor};
    `};
    ${(props) => props.color === ButtonColors.Primary && css`
      border-color: ${props.playerColor};
      background-color: ${props.playerColor};
      &:focus,
      &:hover {
        background-color: ${hexToRgbMixin(props.playerColor as string, 0.9)};
      }
      &:active {
        background-color: ${hexToRgbMixin(props.playerColor as string, 0.9)};
      }
      &[disabled] {
        background-color: ${props.theme.color.lightGray};
        color: ${props.theme.color.lightGray};
        cursor: not-allowed;
      }
    `};
  }
`;

const StyledInput = styled(Input)<ColorPlayerProps>`
  && input {
    border-color: ${(props) => props.theme.color.darkGray};
    &:active,
    &:focus {
      border-color: ${(props) => props.playerColor};
    }
  }
`;

const Selector = styled.button<IconWrapperProps & ColorPlayerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.6rem;
  height: 2.6rem;
  padding: 0;

  border-radius: 50%;
  ${(props) => !props.noBorder && css`
    border: .1rem solid ${props.theme.color.darkGray};
  `};

  ${(props) => props.selected && css`
    ${!props.noBorder && css`
      border: .1rem solid ${props.playerColor};
      background: ${props.playerColor};
      color: ${props.theme.colorMono.white};
    `};
  `};
`;

const DiceIcon = styled(Icon)<IconWrapperProps & ColorPlayerProps>`
  color: #5c5c5c;

  ${(props) => props.selected && css`
    color: ${props.playerColor};
  `};
`;

export {
  Wrapper,
  Section,
  ChoiceBox,
  AddBox,
  Header,
  Label,
  Score,
  ButtonWrapper,
  StyledButton,
  StyledInput,
  Selector,
  DiceIcon
};
