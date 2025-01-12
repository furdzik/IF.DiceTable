import React, { useState, useEffect } from 'react';
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
  Stats,
  SumPlayers
} from 'interfaces';
import { getStats } from 'utils';
import { MAX_PLAYER_ROUND_GAP } from 'constant';

import AddScore from 'components/AddScore';

import {
  Wrapper,
  TablesWrapper,
  Table,
  Th,
  Td,
  StatsSection,
  StatsTitle,
  StatsWrapper,
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
  gameEnded: boolean;
  options: Options;
  saveScore: ({ score, scoreType, playerId }: SaveScore) => void;
  className?: string | undefined;
}

const TITLE_LENGTH = 1;

const checkIfRoundAreEven = (stats: Stats, sum: SumPlayers, players: Player[], setIsRoundsNotEvenWarning: React.Dispatch<React.SetStateAction<boolean>>) => {
  const playerRoundsEvenTable: boolean[] = [];
  players.forEach((player: Player) => {
    playerRoundsEvenTable.push((stats?.currentRound || 0) >= (sum?.[`player${player.id}`]?.round + MAX_PLAYER_ROUND_GAP));
  });

  if (playerRoundsEvenTable.includes(true)) {
    setIsRoundsNotEvenWarning(true);
  } else {
    setIsRoundsNotEvenWarning(false);
  }
}

const ScoresTable = ({ config, scores, bonuses, sum, gameStarted, options, saveScore, className = '' }: ScoresTableProps) => {
  const [isRoundsNotEvenWarning, setIsRoundsNotEvenWarning] = useState(false);
  const figuresPart1 = Object.entries(config.figures).slice(0, 3);
  const figuresPart2 = Object.entries(config.figures).slice(3);

  const onAddScoreClick = (score: ScoreElement | null, scoreType: ConfigElement, playerId: number) => {
    saveScore({ score, scoreType, playerId });
  };

  const stats = getStats(options, sum);

  useEffect(() => {
    if (gameStarted) {
      checkIfRoundAreEven(stats, sum, options.players, setIsRoundsNotEvenWarning);
    }
  }, [gameStarted, stats, sum, options]);

  return (
    <React.Fragment>
      {
        gameStarted && options.showStats && (
          <StatsSection>
            <StatsTitle>
              Statystyki
              <Icon path={mdiChevronRightCircleOutline} size={1} />
            </StatsTitle>
            <StatsWrapper>
              <div>
                <StatsLabel>Runda:</StatsLabel> {stats.currentRound}/{stats.numberOfRounds}
              </div>
              <div>
                <StatsLabel>Kolejność:</StatsLabel> {stats.winners.join(', ')}
              </div>
              <div>
                <StatsLabel>Różnica do zwycięzcy:</StatsLabel> {stats.difference.join(', ')}
              </div>
            </StatsWrapper>
          </StatsSection>
        )
      }
      <Wrapper className={className}>
        {options.players?.map((player: Player) => {
          const playerScore: Score | null = scores?.[`player${player.id}`];
          const playerBonuses: Bonuses | null = bonuses?.[`player${player.id}`];
          const columns: number[] = [...Array(options.columns).keys()];

          return (
            <TablesWrapper players={options.players.length} key={`player${player.id}`}>
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
                        {
                          (stats.currentRound || 0) < stats.numberOfRounds
                            ? sum?.[`player${player.id}`]?.allSumWithoutSchool
                            : sum?.[`player${player.id}`]?.all || 0
                        }
                        <small>(bez bonusów: {sum?.[`player${player.id}`]?.sumWithoutBonuses || 0})</small>
                      </div>
                    </Th>
                  </tr>
                  {
                    gameStarted && options.showStats && (
                      <tr>
                        <Td
                          variant={RowVariants.Stats}
                          isWarning={(stats?.currentRound || 0) > (sum?.[`player${player.id}`]?.round + MAX_PLAYER_ROUND_GAP)}
                        >
                          Runda
                        </Td>
                        <Td
                          variant={RowVariants.Stats}
                          isWarning={(stats?.currentRound || 0) > (sum?.[`player${player.id}`]?.round + MAX_PLAYER_ROUND_GAP)}
                        >
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
                              roundsNotEvenWarning={(stats?.currentRound || 0) === (sum?.[`player${player.id}`]?.round) && isRoundsNotEvenWarning}
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
                        {gameStarted ? (playerBonuses?.schoolGeneral as number[])?.[index] || 0 : ''}
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
                                  roundsNotEvenWarning={(stats?.currentRound || 0) === (sum?.[`player${player.id}`]?.round) && isRoundsNotEvenWarning}
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
                                  roundsNotEvenWarning={(stats?.currentRound || 0) === (sum?.[`player${player.id}`]?.round) && isRoundsNotEvenWarning}
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
                    <Td
                      playerColor={player.color}
                      variant={RowVariants.Bonus}
                    >
                      Kolumny
                    </Td>
                    {columns.map((index) => {
                      const columnValue = (playerBonuses?.columnBonus as number[])?.[index];
                      return (
                        <Td
                          key={`${player.id}-bonuses-columnAllResults-${index}`}
                          playerColor={player.color}
                          variant={RowVariants.Bonus}
                        >
                          {columnValue || 0}
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
                      {playerBonuses?.thousandBonus as number || 0 }
                    </Th>
                  </tr>
                  <tr>
                    <Th variant={RowVariants.Bonus} playerColor={player.color}>Reszta</Th>
                    <Th variant={RowVariants.Bonus} colSpan={options.columns} playerColor={player.color}>
                      {playerBonuses?.restBonuses as number || 0}
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
