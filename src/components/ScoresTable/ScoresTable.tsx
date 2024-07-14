import React from 'react';
import Icon from '@mdi/react';
import { mdiChevronRightCircleOutline, mdiCrown } from '@mdi/js';

import {
  Bonuses,
  BonusesPlayers,
  Config,
  ConfigElement,
  Options,
  Player,
  SaveScore,
  Score,
  ScoreElement,
  ScorePlayers,
  SumPlayers
} from 'interfaces';
import { getStats } from 'utils';

import AddScore from 'components/AddScore';

import {
  Wrapper,
  TablesWrapper,
  Table,
  Th,
  Td,
  StatsWrapper,
  StatsTitle,
  Stats,
  StatsLabel,
  PlayerName
} from './ScoresTable.styles';

export enum RowVariants {
  MainTitle,
  Sum,
  SchoolSum,
  Bonus,
  FigureGrup,
  Stats
}
export interface ScoresTableProps {
  config: Config;
  scores: ScorePlayers;
  bonuses: BonusesPlayers;
  sum: SumPlayers;
  gameStarted: boolean;
  options: Options;
  saveScore: ({ score, scoreType, playerId }: SaveScore) => void;
  className?: string | undefined;
}

const TITLE_LENGTH = 1;

const ScoresTable = ({ config, scores, bonuses, sum, gameStarted, options, saveScore, className = '' }: ScoresTableProps) => {
  const figuresPart1 = Object.entries(config.figures).slice(0, 3);
  const figuresPart2 = Object.entries(config.figures).slice(3);

  const onAddScoreClick = (score: ScoreElement | null, scoreType: ConfigElement, playerId: number) => {
    saveScore({ score, scoreType, playerId });
  };

  const stats = getStats(options, sum);

  return (
    <React.Fragment>
      {
        gameStarted && options.showStats && (
          <StatsWrapper>
            <StatsTitle>
              Statystyki
              <Icon path={mdiChevronRightCircleOutline} size={1} />
            </StatsTitle>
            <Stats>
              <div>
                <StatsLabel>Runda:</StatsLabel> {stats.currentRound}/{stats.numberOfRounds}
              </div>
              <div>
                <StatsLabel>Kolejność:</StatsLabel> {stats.winners.join(', ')}
              </div>
              <div>
                <StatsLabel>Różnica do zwycięzcy:</StatsLabel> {stats.difference.join(', ')}
              </div>
            </Stats>
          </StatsWrapper>
        )
      }
      <Wrapper className={className}>
        {options.players?.map((player: Player) => {
          const playerScore: Score | null = scores?.[`player${player.id}`];
          const playerBonuses: Bonuses | null = bonuses?.[`player${player.id}`];
          const columns: number[] = [...Array(options.columns).keys()];

          return (
            <TablesWrapper players={options.players.length}>
              <Table playerColor={player.color}>
                <thead>
                  <tr>
                    <Th variant={RowVariants.MainTitle} colSpan={2} playerColor={player.color}>
                      <PlayerName>
                        {player.name}
                        {
                          gameStarted && stats.winners[0] === player.name && (
                            <Icon path={mdiCrown} size={1.5} color="#ffe700" />
                          )
                        }
                      </PlayerName>
                    </Th>
                  </tr>
                  <tr>
                    <Th variant={RowVariants.Sum} playerColor={player.color}>Suma punktów</Th>
                    <Th variant={RowVariants.Sum} playerColor={player.color}>
                      <div>
                        {sum?.[`player${player.id}`]?.all || 0}
                        <small>(bez bonusów: {sum?.[`player${player.id}`]?.sumWithoutBonuses || 0})</small>
                      </div>
                    </Th>
                  </tr>
                  {
                    gameStarted && options.showStats && (
                      <tr>
                        <Td variant={RowVariants.Stats} >
                          Runda
                        </Td>
                        <Td variant={RowVariants.Stats} >
                          {sum?.[`player${player.id}`]?.round}
                        </Td>
                      </tr>
                    )
                  }
                </thead>
              </Table>
              <Table players={options.players.length} playerColor={player.color}>
                <tbody>
                  <tr>
                    <Th
                      variant={RowVariants.FigureGrup}
                      colSpan={options.columns + TITLE_LENGTH}
                      playerColor={player.color}
                    >
                      Szkoła
                    </Th>
                  </tr>
                  {Object.entries(config.school).map(([key, scoreType]) => (
                    <tr key={`${player.id}-${key}`}>
                      <Td playerColor={player.color}>{scoreType.name}</Td>
                      {columns.map((index) => {
                        const columnValue = playerScore?.school?.[Number(key)][index];
                        return (
                          <Td key={`${player.id}-${key}-${index}`} playerColor={player.color}>
                            <AddScore
                              singleScore={columnValue || null}
                              scoreType={scoreType}
                              player={player}
                              columnId={index + 1}
                              onClick={onAddScoreClick}
                            />
                          </Td>
                        );
                      })}
                    </tr>
                  ))}
                  <tr>
                    <Td variant={RowVariants.SchoolSum} playerColor={player.color}>Suma</Td>
                    {columns.map((index) => (
                      <Td
                        key={`${player.id}-school-sum-${index}`}
                        variant={RowVariants.SchoolSum}
                        playerColor={player.color}
                      >
                        {sum?.[`player${player.id}`]?.school[index] || ''}
                      </Td>
                    ))}
                  </tr>
                  <tr>
                    <Td variant={RowVariants.Bonus} playerColor={player.color}>Bonus</Td>
                    {columns.map((index) => (
                      <Td
                        key={`${player.id}-school-sum-${index}`}
                        variant={RowVariants.Bonus}
                        playerColor={player.color}
                      >
                        {/*{playerBonuses?.school?.[index] || ''}*/}
                      </Td>
                    ))}
                  </tr>
                  <tr>
                    <Th
                      variant={RowVariants.FigureGrup}
                      colSpan={options.columns + TITLE_LENGTH}
                      playerColor={player.color}
                    >
                      Figury
                    </Th>
                  </tr>
                  {figuresPart1.map(([figuresKey, figuresValue]) => (
                    <React.Fragment key={`${player.id}-${figuresKey}`}>
                      <tr>
                        <Td separator colSpan={options.columns + TITLE_LENGTH}/>
                      </tr>
                      {Object.entries(figuresValue).map(([key, scoreType]) => (
                        <tr key={`${player.id}-${figuresKey}-${key}`}>
                          <Td playerColor={player.color}>{(scoreType as ConfigElement).name}</Td>
                          {columns.map((index) => {
                            const columnValue = (playerScore?.figures?.[figuresKey][key][index]);
                            return (
                              <Td key={`${player.id}-${figuresKey}-${key}-${index}`} playerColor={player.color}>
                                <AddScore
                                  singleScore={columnValue || null}
                                  scoreType={scoreType}
                                  player={player}
                                  columnId={index + 1}
                                  position={{ onTop: true }}
                                  onClick={onAddScoreClick}
                                />
                              </Td>
                            );
                          })}
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </Table>
              <Table players={options.players.length} playerColor={player.color}>
                <tbody>
                  <tr>
                    <Th
                      variant={RowVariants.FigureGrup}
                      colSpan={options.columns + TITLE_LENGTH}
                      playerColor={player.color}
                    >
                      Figury
                    </Th>
                  </tr>
                  {figuresPart2.map(([figuresKey, figuresValue], index) => (
                    <React.Fragment key={`${player.id}-${figuresKey}`}>
                      {
                        index !== 0 && (
                          <tr>
                            <Td
                              separator
                              colSpan={options.columns + TITLE_LENGTH}
                              playerColor={player.color}
                            />
                          </tr>
                        )
                      }
                      {Object.entries(figuresValue).map(([key, scoreType]) => (
                        <tr key={`${player.id}-${figuresKey}-${key}`}>
                          <Td playerColor={player.color}>{(scoreType as ConfigElement).name}</Td>
                          {columns.map((colIndex) => {
                            const columnValue = (playerScore?.figures?.[figuresKey][key][colIndex]);
                            return (
                              <Td key={`${player.id}-${figuresKey}-${key}-${colIndex}`} playerColor={player.color}>
                                <AddScore
                                  singleScore={columnValue || null}
                                  scoreType={scoreType}
                                  player={player}
                                  columnId={index + 1}
                                  position={{ onLeft: true }}
                                  onClick={onAddScoreClick}
                                />
                              </Td>
                            );
                          })}
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                  <tr>
                    <Td separator colSpan={options.columns + TITLE_LENGTH} playerColor={player.color} />
                  </tr>
                  <tr>
                    <Td playerColor={player.color}>Kolumny</Td>
                    {columns.map((index) => {
                      const columnValue = (playerBonuses?.columnAllResults as number[])?.[index];
                      return (
                        <Td key={`${player.id}-bonuses-columnAllResults-${index}`} playerColor={player.color}>
                          {columnValue}
                        </Td>
                      );
                    })}
                  </tr>
                  <tr>
                    <Th
                      variant={RowVariants.FigureGrup}
                      colSpan={options.columns + TITLE_LENGTH}
                      playerColor={player.color}
                    >
                      Bonusy
                    </Th>
                  </tr>
                  <tr>
                    <Th variant={RowVariants.Bonus} playerColor={player.color}>{'>'}1000</Th>
                    <Th variant={RowVariants.Bonus} colSpan={options.columns} playerColor={player.color}>
                      {bonuses?.[`player${player.id}`]?.thousandBonus || 0}
                    </Th>
                  </tr>
                  <tr>
                    <Th variant={RowVariants.Bonus} playerColor={player.color}>Reszta</Th>
                    <Th variant={RowVariants.Bonus} colSpan={options.columns} playerColor={player.color}>
                      {sum?.[`player${player.id}`]?.restBonuses || 0}
                    </Th>
                  </tr>
                </tbody>
              </Table>
            </TablesWrapper>
          );
        })}
      </Wrapper>
    </React.Fragment>
  );
};

export default ScoresTable;
