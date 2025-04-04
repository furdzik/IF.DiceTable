import React from 'react';
import Icon from '@mdi/react';
import { useIntl } from 'react-intl';
import { mdiChevronRightCircleOutline, mdiCrown, mdiDice6 } from '@mdi/js';

import {
  Bonuses,
  BonusesPlayers,
  Config,
  ConfigElement,
  Options,
  Player, RestBonusesDetails,
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
  StatsSection,
  StatsTitle,
  StatsWrapper,
  StatsLabel,
  StatsSectionBox,
  WinnerBox,
  PlayerName,
  RoundWrapper,
  CurrentPlayerIcon,
  SmallBonusTable
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

const ScoresTable = ({ config, scores, bonuses, sum, gameStarted, gameEnded, options, saveScore, className = '' }: ScoresTableProps) => {
  const intl = useIntl();

  const figuresPart1 = Object.entries(config.figures).slice(0, 3);
  const figuresPart2 = Object.entries(config.figures).slice(3);

  const onAddScoreClick = (score: ScoreElement | null, scoreType: ConfigElement, playerId: number) => {
    saveScore({ score, scoreType, playerId });
  };

  const stats = getStats(options, sum);

  return (
    <React.Fragment>
      {
        !gameEnded && gameStarted && options.showStats && (
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
                <StatsLabel>Pozostało rund:</StatsLabel> {stats.numberOfRounds - stats.currentRound}
              </div>
              <div>
                <StatsLabel>Ilość rund na gracza:</StatsLabel> {options.roundsPerPlayer}
              </div>
              <div>
                <StatsLabel>Kolej:</StatsLabel> {options.players.filter((el) => el.id === stats.currentPlayer)[0].name}
              </div>
              <div>
                <StatsLabel>Różnica do zwycięzcy:</StatsLabel> {stats.difference.join(', ')}
              </div>
            </StatsWrapper>
          </StatsSection>
        )
      }
      {
        gameEnded ? (
          <StatsSection gameSummary>
            <StatsTitle>
              Podsumowanie gdy
              <Icon path={mdiChevronRightCircleOutline} size={1} />
            </StatsTitle>
            <StatsWrapper>
              <WinnerBox playerColor={stats.winner.color}>
                <StatsLabel>Zwycięzca:</StatsLabel> <Icon path={mdiCrown} size={1.2} /> {stats.winners[0]}
              </WinnerBox>
              <StatsSectionBox>
                <StatsLabel>Różnica do zwycięzcy:</StatsLabel> {stats.difference.join(', ')}
              </StatsSectionBox>
            </StatsWrapper>
          </StatsSection>
        ) : null
      }
      <Wrapper className={className}>
        {options.players?.map((player: Player) => {
          const playerScore: Score | null = scores?.[`player${player.id}`] as Score;
          const playerBonuses: Bonuses | null = bonuses?.[`player${player.id}`] as Bonuses;
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
                        {gameStarted ? intl.formatNumber(sum?.[`player${player.id}`]?.all, { style: 'decimal' }) : 0}
                        <small>
                          (bez szkoły: <b>{gameStarted ? intl.formatNumber(sum?.[`player${player.id}`]?.allSumWithoutSchool || 0, { style: 'decimal' }) : 0}</b>)
                        </small>
                      </div>
                    </Th>
                  </tr>
                  {
                    gameStarted && options.showStats && (
                      <tr>
                        <Td
                          variant={RowVariants.Stats}
                          isWarning={(stats?.currentRound || 0) > (sum?.[`player${player.id}`]?.round + options.roundsPerPlayer)}
                        >
                          Runda
                        </Td>
                        <Td
                          variant={RowVariants.Stats}
                          isWarning={(stats?.currentRound || 0) > (sum?.[`player${player.id}`]?.round + options.roundsPerPlayer)}
                        >
                          <RoundWrapper>
                            {gameStarted && stats.currentPlayer === player.id && !gameEnded ? (
                              <CurrentPlayerIcon path={mdiDice6} color={player.color} />
                            ) : null}
                            {sum?.[`player${player.id}`]?.round}
                          </RoundWrapper>
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
                              roundsNotEvenWarning={stats.currentPlayer !== player.id}
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
                                  roundsNotEvenWarning={stats.currentPlayer !== player.id}
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
                                  roundsNotEvenWarning={stats.currentPlayer !== player.id}
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
                    <Th variant={RowVariants.Bonus} playerColor={player.color}>Szkoła</Th>
                    <Th variant={RowVariants.Bonus} colSpan={options.columns} playerColor={player.color}>
                      {gameStarted ? playerBonuses?.schoolGeneralSum as number || 0 : 0}
                    </Th>
                  </tr>
                  <tr>
                    <Th variant={RowVariants.Bonus} playerColor={player.color}>Reszta</Th>
                    <Th variant={RowVariants.Bonus} colSpan={options.columns} playerColor={player.color}>
                      <SmallBonusTable>
                        <tr>
                          <td>Wicki</td>
                          <td>Generały</td>
                          <td><span title={`${(playerBonuses?.sectionsBonus as number[])?.join(' | ')}`}>Sekcje</span></td>
                          <td>Kolumny</td>
                        </tr>
                        <tr>
                          <td>{(playerBonuses?.restBonusesDetails as RestBonusesDetails)?.vice}</td>
                          <td>{(playerBonuses?.restBonusesDetails as RestBonusesDetails)?.general}</td>
                          <td>
                            <span title={`${(playerBonuses?.sectionsBonus as number[])?.join(' | ')}`}>
                              {(playerBonuses?.restBonusesDetails as RestBonusesDetails)?.sections}
                            </span>
                          </td>
                          <td>{(playerBonuses?.restBonusesDetails as RestBonusesDetails)?.columns}</td>
                        </tr>
                        <tr>
                          <td colSpan={4}>
                            <b>Suma Reszty: {playerBonuses?.restBonuses as number || 0}</b>
                          </td>
                        </tr>
                      </SmallBonusTable>
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
