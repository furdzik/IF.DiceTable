import styled, { css } from 'styled-components';

const borderColor = (props) => props.theme.color.gray;

const TableWrapper = styled.table`
  width: 100%;
  border: 1px solid ${borderColor};
`;

const PlayerTitleWrapper = styled.td`
  width: 100%;
  & + & {
    border-left: 1px solid ${borderColor};
  }

  ${(props) => props.playerName && css`
    width: calc(100% / ${props.playerName});
  `};
`;

const PlayerNameWrapper = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  border-bottom: 1px solid ${borderColor};
  background: ${(props) => props.theme.color.lightPink};
  font-size: 1.6rem;
  font-weight: bold;
  color: ${(props) => props.theme.monoColors.white};
  text-align: center;
`;

const ScoresTableWrapper = styled.table`
  width: 100%;
`;

const ScoresRow = styled.tr`

`;

export {
  TableWrapper,
  PlayerTitleWrapper,
  PlayerNameWrapper,
  ScoresTableWrapper,
  ScoresRow
};
