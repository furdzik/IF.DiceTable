import styled from '@emotion/styled/macro';
import { css } from '@emotion/react';

import { hexToRgbMixin } from 'styles/mixins';

import { Colors, EmotionTheme } from 'interfaces';

import { RowVariants } from './ScoresTable';

export interface RowProps {
  variant?: RowVariants | undefined;
  normalBorder?: boolean | undefined;
  separator?: boolean | undefined;
  children?: any;
}

export interface PlayersProps {
  players?: number | undefined;
  playerColor?: Colors | string | undefined;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
`;

const TablesWrapper = styled.section<PlayersProps>`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  width: calc(50% - .5rem);
  
  ${(props) => props.players && props.players > 2 && props.players < 4 && css`
    width: calc((100% / ${props.players}) - (1rem * (${props.players } - 1) / ${props.players }));
  `};
  ${(props) => props.players && props.players > 4 && css`
    width: calc((100% / 3) - (1rem * (3 - 1) / 3 ));
  `};
`;

const Table = styled.table<PlayersProps>`
  border-collapse: collapse;
  margin-bottom: .2rem;
  width: 50%;
  border: .2rem solid ${(props) => props.playerColor || props.theme.mainColors.primary};
  
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
    margin-left: -.2rem;
    margin-right: -.2rem;
  }
`;

const Row = (props: EmotionTheme & RowProps & PlayersProps) => css`
  min-width: 2.5rem;
  height: 2.5rem;
  padding: .2rem .1rem;
  border: .1rem solid ${props.theme.color.darkGray};
  border-top: 0;
  text-align: center;
  
  &:first-of-type {
    background: ${hexToRgbMixin(props.playerColor || props.theme.mainColors.secondary, .2)}; // #e2e2e2;
    font-size: ${props.theme.fontSize.small};
    font-weight: ${props.theme.fontWeight.bold};
    text-transform: uppercase;
  }

  ${props.variant === RowVariants.MainTitle && css`
    &, &:first-of-type {
      color: ${props.theme.colorMono.white};
      border: none;
      background: ${props.playerColor || props.theme.mainColors.secondary};
      text-transform: uppercase;
      font-size: ${props.theme.fontSize.big};
    }
  `};
  ${props.variant === RowVariants.Sum && css`
    &, &:first-of-type {
      background: ${hexToRgbMixin(props.playerColor || props.theme.mainColors.secondary, .2)}; // #f5c4e0
      text-transform: uppercase;
      width: 50%;
      border: .2rem solid ${props.playerColor || props.theme.mainColors.secondary};
    }
  `};
  ${props.variant === RowVariants.FigureGrup && css`
    &, &:first-of-type {
      background: ${hexToRgbMixin(props.playerColor as string, .7) || props.theme.color.lightGreen};
      color: ${props.theme.colorMono.white};
      text-transform: uppercase;
      font-size: ${props.theme.fontSize.normal};
    }
  `};
  ${props.separator && css`
    padding: 0;
    height: 0;
    border-bottom: 2px solid #5e5e5e;
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
