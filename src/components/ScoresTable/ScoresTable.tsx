import React from 'react';

import { Config, ConfigElement, ScoreElement, Options, Player, ScorePlayers, Section } from 'interfaces';

import {
  Wrapper,
  TablesWrapper,
  Table,
  Th,
  Td
} from './ScoresTable.styles';

export enum RowVariants {
  MainTitle,
  Sum,
  FigureGrup
}
export interface ScoresTableProps {
  config: Config;
  scores: ScorePlayers;
  options: Options;
  className?: string | undefined;
}

const TITLE_LENGTH = 1;

const ScoresTable = ({ config, scores, options, className = '' }: ScoresTableProps) => {
  const figuresPart1 = Object.entries(config.figures).slice(0, 3);
  const figuresPart2 = Object.entries(config.figures).slice(3);

  return (
    <Wrapper className={className}>
      {options.players.map((player: Player) => {
        const playerScore: Config | null = scores?.[`player${player.id}`];
        const columns: number[] = [...Array(options.columns).keys()];

        return (
          <TablesWrapper>
            <Table>
              <thead>
              <tr>
                <Th variant={RowVariants.MainTitle} colSpan={2}>{player.name}</Th>
              </tr>
              <tr>
                <Th variant={RowVariants.Sum}>Suma</Th>
                <Th variant={RowVariants.Sum}>
                  {playerScore?.sum?.reduce ((a, b) => Number (a + b), 0)}
                </Th>
              </tr>
              </thead>
            </Table>
            <Table>
              <tbody>
              <tr>
                <Th variant={RowVariants.FigureGrup} colSpan={options.columns + TITLE_LENGTH}>Szkoła</Th>
              </tr>
              {Object.entries (config.school).map (([key, value]: [string, ConfigElement]) => (
                <tr key={`${player.id}-${key}`}>
                  <Td>{value.name}</Td>
                  {columns.map ((index: number) => {
                    // @ts-ignore
                    const columnValue = playerScore?.school?.[Number(key)][index]?.value || '';
                    return (
                      <Td key={`${player.id}-${key}-${index}`}>
                        {columnValue}
                      </Td>
                    );
                  })}
                </tr>
              ))}
              <tr>
                <Th variant={RowVariants.FigureGrup} colSpan={options.columns + TITLE_LENGTH}>Figury</Th>
              </tr>
              {figuresPart1.map(([figuresKey, figuresValue]: [string, Section]) => (
                <React.Fragment key={`${player.id}-${figuresKey}`}>
                  <tr>
                    <Td separator colSpan={options.columns + TITLE_LENGTH} />
                  </tr>
                  {Object.entries(figuresValue).map(([key, value]: [string, ConfigElement | ScoreElement[]]) => (
                    <tr key={`${player.id}-${figuresKey}-${key}`}>
                      <Td>{(value as ConfigElement).name}</Td>
                      {columns.map((index) => {
                        // @ts-ignore
                        const columnValue = (playerScore?.figures?.[figuresKey][key][index])?.value;
                        return (
                          <Td key={`${player.id}-${figuresKey}-${key}-${index}`}>
                            {columnValue}
                          </Td>
                        )
                      })}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
              </tbody>
            </Table>
            <Table>
              <tbody>
              {figuresPart2.map(([figuresKey, figuresValue]: [string, Section], index) => (
                <React.Fragment key={`${player.id}-${figuresKey}`}>
                  {
                    index !== 0 && (
                      <tr>
                        <Td separator colSpan={options.columns + TITLE_LENGTH} />
                      </tr>
                    )
                  }
                  {Object.entries(figuresValue).map(([key, value]: [string, ConfigElement | ScoreElement[]]) => (
                    <tr key={`${player.id}-${figuresKey}-${key}`}>
                      <Td>{(value as ConfigElement).name}</Td>
                      {columns.map((index) => {
                        // @ts-ignore
                        const columnValue = (playerScore?.figures?.[figuresKey][key][index])?.value;
                        return (
                          <Td key={`${player.id}-${figuresKey}-${key}-${index}`}>
                            {columnValue}
                          </Td>
                        )
                      })}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
              <tr>
                <Th variant={RowVariants.FigureGrup} colSpan={options.columns + TITLE_LENGTH}>Bonusy</Th>
              </tr>
              <tr>
                <Th>{'>'} 1000</Th>
                <Th colSpan={options.columns}>{playerScore?.bonuses?.firstAboveThousand?.toString ()}</Th>
              </tr>
              </tbody>
            </Table>
          </TablesWrapper>
        );
      })}
    </Wrapper>
  );
}

export default ScoresTable;
