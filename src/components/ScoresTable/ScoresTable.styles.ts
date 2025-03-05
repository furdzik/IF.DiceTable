import styled from '@emotion/styled/macro';
import { css } from '@emotion/react';
import Icon from '@mdi/react';

import { hexToRgbMixin } from 'styles/mixins';

import { Colors, EmotionTheme } from 'interfaces';

import { RowVariants } from './ScoresTable';

export interface RowProps {
  variant?: RowVariants | undefined;
  normalBorder?: boolean | undefined;
  separator?: boolean | undefined;
  children?: unknown;
  isWarning?: boolean | undefined;
}

export interface PlayersProps {
  players?: number | undefined;
  playerColor?: Colors | string | undefined;
}

export interface StatsProps {
  gameSummary?: boolean | undefined;
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
  min-width: 4rem;
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
      height: 3rem;
      padding: 0;
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
      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .5rem;
      }
      small {
        font-size: 1rem;
        font-weight: ${props.theme.fontWeight.regular};
      }
    }
  `};
  ${props.variant === RowVariants.SchoolSum && css`
    &, &:first-of-type {
      background: ${hexToRgbMixin(props.playerColor as string, .3) || props.theme.color.lightGreen};
      font-weight: ${props.theme.fontWeight.bold};
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
  ${props.variant === RowVariants.Stats && css`
    &, &:first-of-type {
      height: auto;
      padding: .4rem 0 .2rem;
      border: .2rem solid #e2e2e2;
      background: #e2e2e2;
      font-size: 1.2rem;
      font-weight: normal;
      color: ${props.theme.colorMono.black};
      text-transform: uppercase;
    }
  `};
  ${props.variant === RowVariants.Bonus && css`
    &, &:first-of-type {
      background: linear-gradient(
        -45deg,
        ${hexToRgbMixin(props.playerColor || props.theme.mainColors.secondary, .2)} 25%,
        ${hexToRgbMixin(props.playerColor || props.theme.mainColors.secondary, .3)} 25%,
        ${hexToRgbMixin(props.playerColor || props.theme.mainColors.secondary, .3)} 50%,
        ${hexToRgbMixin(props.playerColor || props.theme.mainColors.secondary, .2)} 50%,
        ${hexToRgbMixin(props.playerColor || props.theme.mainColors.secondary, .2)} 75%,
        ${hexToRgbMixin(props.playerColor || props.theme.mainColors.secondary, .3)} 75%
      );
      background-size: 7px 7px;
      font-size: ${props.theme.fontSize.small};
    }
  `};
  ${props.separator && css`
    height: 0;
    margin-top: -.1rem;
    padding: 0;
    border-bottom: .2rem solid #5e5e5e;
  `};
  ${props.isWarning && css`
    && {
      border: .2rem solid #ff0000;
      background: #ff6868;
    }
  `}
`;

const Th = styled.th<RowProps & PlayersProps>`
  ${Row};
`;

const Td = styled.td<RowProps & PlayersProps>`
  ${Row};
`;

const StatsSection = styled.section<StatsProps>`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border: .2rem solid #969696;
  background: #e2e2e2;
  font-size: 1.2rem;

  ${(props) => props.gameSummary && css`
    border: .2rem solid #dfcf23;
    background: #fce703;
  `};
`;

const StatsTitle = styled.h4`
  display: flex;
  align-items: center;
  gap: .5rem;
  margin-bottom: 0;
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: #494747;
  text-transform: uppercase;
`;

const StatsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StatsLabel = styled.b`
  text-transform: uppercase;
`;

const StatsSectionBox = styled.div`
  color: #a19c69;
`;

const WinnerBox = styled.div<PlayersProps>`
  display: flex;
  align-items: center;
  gap: .5rem;
  text-transform: uppercase;
  color: ${(props) => props.playerColor};
  font-weight: bold;
`;

const PlayerName = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  svg > {
    margin-top: -.3rem;
  }
`;

const RoundWrapper = styled.div`
  position: relative;
`;

const CurrentPlayerIcon = styled(Icon)<PlayersProps>`
  position: absolute;
  margin-left: -3rem;
  margin-top: -.3rem;
  width: 2rem;
  height: 2rem;
  color: ${(props) => props.color || props.theme.mainColors.secondary};
`;

export {
  Wrapper,
  TablesWrapper,
  Table,
  Th,
  Td,
  StatsSection,
  StatsTitle,
  StatsWrapper,
  StatsLabel,
  StatsSectionBox,
  WinnerBox,
  PlayerName,
  RoundWrapper,
  CurrentPlayerIcon
};
