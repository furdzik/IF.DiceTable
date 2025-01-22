import React, { useEffect, useState } from 'react';

import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import _cloneDeep from 'lodash/cloneDeep';
import _orderBy from 'lodash/orderBy';

import Button from 'components/ui/Button';
import ColorInput from 'components/ui/ColorInput';

import {
  ButtonColors,
  ButtonTypes,
  ButtonVariants,
  InputTypes,
  colorsByOrder,
  MAX_PLAYERS_ALLOWED
} from 'constant';
import { OptionsState, Player } from 'interfaces';

import {
  Wrapper,
  InnerWrapper,
  Label,
  InputStyled,
  AddPlayerWrapper,
  AddPlayer,
  ClearDataWrapper
} from './Options.styles';
import Switch from '../ui/Switch';

export interface OptionsProps {
  options: OptionsState;
  saveData: (data: OptionsState) => void;
  clearData: () => void;
  onModalClose: () => void;
  gameStarted: boolean;
  className?: string;
}

const Options = ({ options, saveData, clearData, onModalClose, gameStarted, className = '' }: OptionsProps) => {
  const [columns, setColumns] = useState<number>(0);
  const [players, setPlayers] = useState<Player[]>([]);
  const [showStats, setShowStats] = useState(options.showStats);

  const delatePlayer = (id: number) => {
    const restPlayers = _cloneDeep(players).filter((element: Player) => element.id !== id);

    setPlayers(restPlayers);
  };

  const changePlayer = (id: number, name: string, color: string | undefined) => {
    // @TODO: refactor
    const player = _cloneDeep(players).filter((element: Player) => element.id === id)[0];
    const restPlayers = _cloneDeep(players).filter((element: Player) => element.id !== id);

    const changedPlayer = { ...player, name, color };
    const changedPlayers = [
      ...restPlayers,
      changedPlayer
    ];
    const sortedPlayers = _orderBy(changedPlayers, ['id']);

    setPlayers(sortedPlayers);
  };

  const addPlayer = () => {
    if (players.length >= MAX_PLAYERS_ALLOWED) {
      return;
    }

    const newPlayers = _cloneDeep(players);
    newPlayers.push({
      id: newPlayers.length + 1,
      name: `Gracz ${newPlayers.length + 1}`,
      color: colorsByOrder[newPlayers.length]
    });

    setPlayers(newPlayers);
  };

  useEffect(() => {
    setColumns(options?.columns);
    setPlayers(options?.players);
    setShowStats(options?.showStats);
  }, [options]);

  return (
    <React.Fragment>
      <Wrapper className={className}>
        <InnerWrapper>
          <Label htmlFor="oprionsComuns">Ilość kolumn</Label>
          <InputStyled
            type={InputTypes.Number}
            name="columnsNumber"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setColumns(Number(event.target.value));
            }}
            value={columns}
          />

        </InnerWrapper>
        <InnerWrapper>
          <Label htmlFor="showStats">Pokaż statystyki</Label>
          <Switch
            id="showStats"
            checked={showStats}
            onClick={() => {
              setShowStats(!showStats);
            }}
          />
        </InnerWrapper>
      </Wrapper>
      <Wrapper>
        <h1>Gracze</h1>
        {players.map((item: Player, index: number) => (
          <InnerWrapper key={index}>
            <Label>Gracz {index + 1}</Label>
            <InputStyled
              type={InputTypes.Text}
              name={`options.players[${index}].name`}
              placeholder="Nazwa Gracza"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => changePlayer(item.id, event.target.value, colorsByOrder[index])}
              value={item.name}
            />
            <ColorInput
              onChange={(color: string | undefined) => changePlayer(item.id, item.name, color)}
              value={item.color}
              defaultValue={colorsByOrder[index]}
            />
            <Button
              variant={ButtonVariants.Icon}
              color={ButtonColors.Secondary}
              onClick={() => delatePlayer(item.id)}
            >
              <Icon
                path={mdiClose}
                size="2rem"
              />
            </Button>
          </InnerWrapper>
        ))}
        <AddPlayerWrapper>
          <AddPlayer onClick={() => addPlayer()}>
            Dodaj nowego gracza
          </AddPlayer>
        </AddPlayerWrapper>
        <Button
          type={ButtonTypes.Submit}
          onClick={() => {
            saveData({ columns, players, showStats });
            onModalClose();
          }}
        >
          Zapisz
        </Button>
      </Wrapper>
      <ClearDataWrapper>
        <h1>Wyczyść wszystko</h1>
        <p>Uwaga: To czynność nieodwracalna!</p>
        <InnerWrapper>
          <Button
            disabled={!gameStarted}
            type={ButtonTypes.Button}
            color={ButtonColors.SecondaryDark}
            onClick={() => {
              clearData();
            }}
          >
            Wyczyść
          </Button>
        </InnerWrapper>
      </ClearDataWrapper>
    </React.Fragment>
  );
};

export default Options;
