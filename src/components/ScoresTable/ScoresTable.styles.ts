import styled from '@emotion/styled/macro';
import { css } from '@emotion/react';

import { hexToRgbMixin } from 'styles/mixins';

import { Colors, EmotionTheme } from 'interfaces';

import { RowVariants } from './ScoresTable';

export interface RowProps {
  variant?: RowVariants | undefined;
  normalBorder?: boolean | undefined;
  separator?: boolean | undefined;
  children?: unknown;
}

export interface PlayersProps {
  players?: number | undefined;
  playerColor?: Colors | string | undefined;
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const TablesWrapper = styled.section<PlayersProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  width: calc(50% - .5rem);

  ${(props) => props.players && props.players > 2 && props.players < 4 && css`
    width: calc((100% / ${props.players}) - (1rem * (${props.players } - 1) / ${props.players }));
  `};
  ${(props) => props.players && props.players > 4 && css`
    width: calc((100% / 3) - (1rem * (3 - 1) / 3 ));
  `};
`;

const Table = styled.table<PlayersProps>`
  width: 50%;
  margin-bottom: .2rem;
  border: .2rem solid ${(props) => props.playerColor || props.theme.mainColors.primary};
  border-collapse: collapse;

  ${(props) => props.players === 2 && css`
    width: 50%;
  `};

  &:first-of-type {
    width: 100%;
    margin-bottom: 1rem;
    border: .2rem solid ${(props) => props.playerColor || props.theme.mainColors.secondary};
    font-size: ${(props) => props.theme.fontSize.normal};
  }
  &:last-of-type {
    margin-right: -.2rem;
    margin-left: -.2rem;
  }
`;

const Row = (props: EmotionTheme & RowProps & PlayersProps) => css`
  min-width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: .1rem solid ${props.theme.color.darkGray};
  border-top: 0;
  text-align: center;

  &:first-of-type {
    background: ${hexToRgbMixin(props.playerColor || props.theme.mainColors.secondary, .2)};
    font-size: ${props.theme.fontSize.small};
    font-weight: ${props.theme.fontWeight.bold};
    text-transform: uppercase;
  }

  ${props.variant === RowVariants.MainTitle && css`
    &, &:first-of-type {
      border: none;
      background: ${props.playerColor || props.theme.mainColors.secondary};
      font-size: ${props.theme.fontSize.big};
      color: ${props.theme.colorMono.white};
      text-transform: uppercase;
    }
  `};
  ${props.variant === RowVariants.Sum && css`
    &, &:first-of-type {
      width: 50%;
      border: .2rem solid ${props.playerColor || props.theme.mainColors.secondary};
      background: ${hexToRgbMixin(props.playerColor || props.theme.mainColors.secondary, .2)};
      text-transform: uppercase;
    }
  `};
  ${props.variant === RowVariants.FigureGrup && css`
    &, &:first-of-type {
      background: ${hexToRgbMixin(props.playerColor as string, .7) || props.theme.color.lightGreen};
      font-size: ${props.theme.fontSize.normal};
      color: ${props.theme.colorMono.white};
      text-transform: uppercase;
    }
  `};
  ${props.separator && css`
    height: 0;
    padding: 0;
    border-bottom: .2rem solid #5e5e5e;
  `};
`;

const Th = styled.th<RowProps & PlayersProps>`
  ${Row};
`;

const Td = styled.td<RowProps & PlayersProps>`
  ${Row};
`;

export {
  Wrapper,
  TablesWrapper,
  Table,
  Th,
  Td
};
