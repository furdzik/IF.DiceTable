import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { EmotionTheme } from 'interfaces';

import { RowVariants } from './ScoresTable';

export interface RowProps {
  variant?: RowVariants | undefined;
  normalBorder?: boolean | undefined;
  separator?: boolean | undefined;
  children?: any;
}

export interface ColumnProps {
  children?: any;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
`;

const TablesWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0;
  width: calc(50% - .5rem);
`;

const Table = styled.table`
  border-collapse: collapse;
  margin-bottom: .2rem;
  width: 50%;
  border: .2rem solid ${(props) => props.theme.mainColors.primary};

  &:first-of-type {
    width: 100%;
    margin-bottom: 1rem;
    border: .2rem solid ${(props) => props.theme.mainColors.secondary};
    font-size: ${(props) => props.theme.fontSize.big};
  }
  &:last-of-type {
    margin-left: -.2rem;
    margin-right: -.2rem;
  }
`;

const Row = (props: EmotionTheme & RowProps) => css`
  min-width: 2.5rem;
  height: 2.5rem;
  padding: .2rem .3rem;
  border: .1rem solid ${props.theme.color.darkGray};
  border-top: 0;
  text-align: center;
  
  &:first-of-type {
    background: #e2e2e2;
    font-size: ${props.theme.fontSize.medium};
    font-weight: ${props.theme.fontWeight.bold};
    text-transform: uppercase;
  }

  ${props.variant === RowVariants.MainTitle && css`
    &, &:first-of-type {
      color: ${props.theme.colorMono.white};
      border: none;
      background: ${props.theme.mainColors.secondary};
      text-transform: uppercase;
      font-size: ${props.theme.fontSize.big};
    }
  `};
  ${props.variant === RowVariants.Sum && css`
    &, &:first-of-type {
      background: #f5c4e0;
      text-transform: uppercase;
      width: 50%;
      border: .1rem solid #f5c4e0;
    }
  `};
  ${props.variant === RowVariants.FigureGrup && css`
    &, &:first-of-type {
      background: ${props.theme.color.lightGreen};
      color: ${props.theme.colorMono.white};
      text-transform: uppercase;
      font-size: ${props.theme.fontSize.normal};
    }
  `};
  ${props.normalBorder && css`
    &, &:first-of-type {
      border-right: .1rem solid ${props.theme.color.darkGray};
      font-size: ${props.theme.fontSize.normal};
    }
    border-right: .1rem solid ${props.theme.color.darkGray};
  `};
  ${props.separator && css`
    padding: 0;
    height: 0;
    border-bottom: 2px solid #5e5e5e;
  `};
`;

const Th = styled.th<RowProps>`
  ${Row};
`;

const Td = styled.td<RowProps>`
  ${Row};
`;

export {
  Wrapper,
  TablesWrapper,
  Table,
  Th,
  Td
};
