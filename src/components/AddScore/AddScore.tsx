import React, { useEffect, useState } from 'react';
import { useClickAway } from 'use-click-away-react';

import Icon from '@mdi/react';

import { ConfigElement, Player, ScoreElement, Throw, X_VALUE } from 'interfaces';
import { ButtonColors, ButtonsSizes, ButtonVariants, InputTypes, ResultsId } from 'constant';
import { calculateScore } from 'utils';

import { getDiceIconPath, getNumber, getThrowIconPath } from 'utils/getScoreIconPath';

import {
  AddBox,
  ButtonWrapper,
  ChoiceBox,
  Header,
  Label,
  Score,
  Section,
  Selector,
  NumberElement,
  StyledButton,
  StyledInput,
  Wrapper,
  WarningWrapper
} from './AddScore.styles';

const ICON_SIZE = 1.4;

export interface Position {
  onTop?: boolean;
  onLeft?: boolean;
}
export interface AddScoreProps {
  singleScore: ScoreElement | null;
  scoreType: ConfigElement;
  player: Player;
  columnId: number | null;
  position?: Position;
  className?: string;
  onClick?: (value: ScoreElement | null, scoreType: ConfigElement, playerId: number) => void;
  roundsNotEvenWarning?: boolean;
}

const AddScore = ({
  singleScore,
  scoreType,
  player,
  columnId,
  position = {  onTop: false, onLeft: false },
  className = '',
  onClick = () => {},
  roundsNotEvenWarning = false
}: AddScoreProps) => {
  const { clickAwayRef } = useClickAway<HTMLDivElement>(() => setIsOpen(false));
  const diceAndQuantityOptions = [1, 2, 3, 4, 5, 6];
  const throwOptions = [Throw.first, Throw.second, Throw.third];
  const showValue = [ResultsId.Result];
  const showQuantity = [ResultsId.School];
  const showDice = [ResultsId.ChoseDice];
  const showThrow = [ResultsId.School, ResultsId.ChoseDice, ResultsId.ThrowCount, ResultsId.Result];

  const [isOpen, setIsOpen] = useState(false);
  const [calculatedScore, setCalculatedScore] = useState(calculateScore(singleScore, scoreType));

  const [scoreOptions, setScoreOptions] =  useState<ScoreElement | null>(singleScore);

  useEffect(() => {
    setCalculatedScore(calculateScore(singleScore, scoreType));
  }, [singleScore, scoreType]);

  useEffect(() => {
    setScoreOptions(singleScore);
  }, [singleScore]);

  const onSubmit = () => {
    setCalculatedScore(calculateScore(singleScore, scoreType));
    onClick(scoreOptions, scoreType, player.id);
    setIsOpen(false);
  };

  return (
    <Wrapper className={className}>
      <Score
        singleScore={calculatedScore}
        playerColor={player.color}
        addingInProgress={isOpen}
        onClick={() => {
          setScoreOptions({
            ...scoreOptions as ScoreElement,
            throw: scoreOptions?.throw || Throw.third
          });
          setIsOpen(!isOpen);
        }}
      >
        {calculatedScore}
      </Score>
      {
        isOpen && (
          <AddBox ref={clickAwayRef} playerColor={player.color} position={position}>
            {
              !roundsNotEvenWarning || (roundsNotEvenWarning && singleScore?.throw) ? (
                <React.Fragment>
                  <Header>
                    Dodaj wynik:<br />
                    {scoreType.name} <span>(kolumna: {columnId})</span>
                  </Header>
                  {
                    showValue.indexOf(scoreType.resultsId as ResultsId) > -1 && (
                      <Section id="value">
                        <Label htmlFor="form-value">Wynik:</Label>
                        <StyledInput
                          id="form-value"
                          type={InputTypes.Number}
                          size={ButtonsSizes.Small}
                          name="scoreTyped"
                          value={scoreOptions?.value as string || ''}
                          playerColor={player.color}
                          onChange={(event) => setScoreOptions({
                            ...scoreOptions as ScoreElement,
                            value: Number(event.target.value)
                          })}
                          onKeyDown={(event) => {
                            console.log(event);
                            const enterLikeKeys = [
                              'Enter',
                              'NumpadEnter',
                              'Return',
                              'LineFeed',
                              '\r',
                              '\n',
                              'LF',
                              'CR',
                              'Backspace' // <-- included just in case BS is acting like Enter
                            ];

                            const isEnterKey =
                              enterLikeKeys.includes(event.key) ||
                              enterLikeKeys.includes(event.code) ||
                              event.keyCode === 13 ||
                              event.which === 13 ||
                              event.keyCode === 10;

                            if (isEnterKey) {
                              setScoreOptions({
                                ...scoreOptions as ScoreElement,
                                value: Number(event.target.value)
                              });

                              onSubmit();
                            }
                          }}
                          autoFocus
                          pattern="[0-9]*"
                          inputMode="decimal"
                        />
                      </Section>
                    )
                  }
                  {
                    showQuantity.indexOf(scoreType.resultsId as ResultsId) > -1 && (
                      <Section id="quantity">
                        <Label>Ilość:</Label>
                        <div>
                          <ChoiceBox>
                            {
                              diceAndQuantityOptions.map((number) => (
                                <Selector
                                  key={number}
                                  playerColor={player.color}
                                  selected={scoreOptions?.quantity === number}
                                  onClick={() => setScoreOptions({
                                    ...scoreOptions as ScoreElement,
                                    quantity: number
                                  })}
                                >
                                  <NumberElement>{getNumber(number, scoreType)}</NumberElement>
                                </Selector>
                              ))
                            }
                          </ChoiceBox>
                        </div>
                      </Section>
                    )
                  }
                  {
                    showDice.indexOf(scoreType.resultsId as ResultsId) > -1 && (
                      <Section id="dice">
                        <Label>Kość:</Label>
                        <ChoiceBox>
                          {
                            diceAndQuantityOptions.map((dice) => (
                              <Selector
                                key={dice}
                                playerColor={player.color}
                                noBorder
                                selected={scoreOptions?.dice === dice}
                                onClick={() => setScoreOptions({
                                  ...scoreOptions as ScoreElement,
                                  dice
                                })}
                              >
                                <Icon
                                  path={getDiceIconPath(dice, scoreOptions?.dice === dice)}
                                  size={ICON_SIZE}
                                  color={scoreOptions?.dice === dice ? player.color : '#5c5c5c'}
                                />
                              </Selector>
                            ))
                          }
                        </ChoiceBox>
                      </Section>
                    )
                  }
                  {
                    showThrow.indexOf(scoreType.resultsId as ResultsId) > -1 && (
                      <Section id="throw">
                        <Label>Rzut:</Label>
                        <ChoiceBox>
                          {
                            throwOptions.map((throwNumber) => (
                              <Selector
                                key={throwNumber}
                                playerColor={player.color}
                                selected={scoreOptions?.throw === throwNumber}
                                onClick={() => setScoreOptions({
                                  ...scoreOptions as ScoreElement,
                                  throw: throwNumber
                                })}
                              >
                                <Icon path={getThrowIconPath(throwNumber)} size={ICON_SIZE} />
                              </Selector>
                            ))
                          }
                        </ChoiceBox>
                      </Section>
                    )
                  }
                </React.Fragment>
              ) : (
                <WarningWrapper>
                  Nierówna liczba rund,<br />dodaj ten wynik w kolumnie innego gracza
                </WarningWrapper>
              )
            }
            <ButtonWrapper playerColor={player.color}>
              <StyledButton
                color={ButtonColors.Primary}
                size={ButtonsSizes.Small}
                playerColor={player.color}
                disabled={!scoreOptions?.throw}
                onClick={onSubmit}
              >
                Zapisz
              </StyledButton>
              <StyledButton
                size={ButtonsSizes.Small}
                variant={ButtonVariants.Link}
                playerColor={player.color}
                onClick={() => {
                  const newScoreOptions = {
                    ...scoreOptions as ScoreElement,
                    quantity: null,
                    dice: null,
                    throw: null,
                    value: null
                  };
                  setScoreOptions(newScoreOptions);
                  onClick(newScoreOptions, scoreType, player.id);
                  setIsOpen(false);
                }}
              >
                Usuń
              </StyledButton>
              <StyledButton
                size={ButtonsSizes.Small}
                variant={ButtonVariants.Link}
                playerColor={player.color}
                onClick={() => {
                  const newScoreOptions = {
                    ...scoreOptions as ScoreElement,
                    quantity: null,
                    dice: null,
                    throw: Throw.third,
                    value: X_VALUE
                  };
                  setScoreOptions(newScoreOptions);
                  onClick(newScoreOptions, scoreType, player.id);
                  setIsOpen(false);
                }}
              >
                Skreśl
              </StyledButton>
            </ButtonWrapper>
          </AddBox>
        )
      }
    </Wrapper>
  );
};

export default AddScore;
