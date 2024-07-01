import React, { useState } from 'react';
import { useClickAway } from 'use-click-away-react';

import Icon from '@mdi/react';

import { ConfigElement, Player, X } from 'interfaces';
import { ButtonColors, ButtonsSizes, ButtonVariants } from 'constant';

import { getDiceOrNumberIconPath, getThrowIconPath } from 'utils/getScoreIconPath';

import {
  Wrapper,
  Section,
  ChoiceBox,
  AddBox,
  Header,
  Label,
  Score,
  ButtonWrapper,
  StyledButton,
  StyledInput,
  Selector,
  DiceIcon
} from './AddScore.styles';

const ICON_SIZE = 1.5;

export interface AddScoreProps {
  singleScore: number | null | X;
  scoreType: ConfigElement;
  player: Player;
  columnId: number;
  onLeft?: boolean;
  className?: string;
  onClick?: (value: number | null | X) => void;
}

const AddScore = ({ singleScore, scoreType, player, columnId, onLeft = false, className = '', onClick = () => {} }: AddScoreProps) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(scoreType);

  const { clickAwayRef } = useClickAway<HTMLDivElement>(() => setIsOpen(false));

  const diceAndQuantityOptions = [1, 2, 3, 4, 5, 6];
  const throwOptions = [1, 2, 3];

  return (
    <Wrapper className={className}>
      <Score
        singleScore={singleScore}
        playerColor={player.color}
        addingInProgress={isOpen}
        onClick={() => {
          console.log('score kliknięty');
          setIsOpen(!isOpen);
        }}
      >
        {singleScore}
      </Score>
      {
        isOpen && (
          <AddBox ref={clickAwayRef} playerColor={player.color} onLeft={onLeft}>
            <Header>Dodaj wynik: {scoreType.name} <span>(kolumna: {columnId})</span></Header>
            <Section>
              <Label>Wynik:</Label>
              <StyledInput
                size={ButtonsSizes.Small}
                name="scoreTyped"
                value="3"
                playerColor={player.color}
              />
            </Section>
            <Section>
              <Label>Ilość:</Label>
              <div>
                <ChoiceBox>
                  {
                    diceAndQuantityOptions.map((dice) => (
                      <Selector playerColor={player.color}>
                        <Icon path={getDiceOrNumberIconPath(dice, false)} size={ICON_SIZE} />
                      </Selector>
                    ))
                  }
                </ChoiceBox>
              </div>
            </Section>
            <Section>
              <Label>Kość:</Label>
              <ChoiceBox>
                {
                  diceAndQuantityOptions.map((dice) => (
                    <Selector playerColor={player.color} noBorder>
                      <DiceIcon
                        path={getDiceOrNumberIconPath(dice, true)}
                        size={ICON_SIZE}
                        playerColor={player.color}
                      />
                    </Selector>
                  ))
                }
              </ChoiceBox>
            </Section>
            <Section>
              <Label>Rzut:</Label>
              <ChoiceBox>
                {
                  throwOptions.map((throwNumber) => (
                    <Selector playerColor={player.color}>
                      <Icon path={getThrowIconPath(throwNumber)} size={ICON_SIZE} />
                    </Selector>
                  ))
                }
              </ChoiceBox>
            </Section>
            <ButtonWrapper playerColor={player.color}>
              <StyledButton color={ButtonColors.Primary} size={ButtonsSizes.Small} playerColor={player.color}>
                Zapisz
              </StyledButton>
              <StyledButton size={ButtonsSizes.Small} variant={ButtonVariants.Link} playerColor={player.color}>
                Usuń
              </StyledButton>
              <StyledButton size={ButtonsSizes.Small} variant={ButtonVariants.Link} playerColor={player.color}>
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
