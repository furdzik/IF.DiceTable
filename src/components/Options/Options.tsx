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
  className?: string;
}

const Options = ({ options, saveData, clearData, onModalClose, className = '' }: OptionsProps) => {
  const [columns, setColumns] = useState<number>(0);
  const [roundsPerPlayer, setRoundsPerPlayer] = useState<number>(0);
  const [players, setPlayers] = useState<Player[]>([]);
  const [showStats, setShowStats] = useState(options.showStats);

  const delatePlayer = (id: number) => {
    const restPlayers = _cloneDeep(players).filter((element: Player) => element.id !== id);

    setPlayers(restPlayers);
  };

  const changePlayer = (id: number, name: string, color: string | undefined) => {
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

  const setId = (newId: number, usedIds: number[]): number => {
    const idTaken = usedIds.indexOf(newId) !== -1;
    return idTaken ? newId + 1 : newId;
  }
  const addPlayer = () => {
    if (players.length >= MAX_PLAYERS_ALLOWED) {
      return;
    }

    const newPlayers = _cloneDeep(players);
    const usedIds = players.map((el) => el.id).concat(newPlayers.map((el) => el.id));

    newPlayers.push({
      id: setId(newPlayers.length + 1, usedIds),
      name: `Gracz ${setId(newPlayers.length + 1, usedIds)}`,
      color: colorsByOrder[setId(newPlayers.length + 1, usedIds)]
    });

    setPlayers(newPlayers);
  };

  useEffect(() => {
    setColumns(options?.columns as number);
    setRoundsPerPlayer(options?.roundsPerPlayer as number);
    setPlayers(options?.players as Player[]);
    setShowStats(options?.showStats as boolean);
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
          <Label htmlFor="oprionsRoundsPerPlayer">Ilość rund na gracza</Label>
          <InputStyled
            type={InputTypes.Number}
            name="roundsPerPlayer"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setRoundsPerPlayer(Number(event.target.value));
            }}
            value={roundsPerPlayer}
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
            const firstPlayer = _cloneDeep(players)[0];
            firstPlayer.startingPlayer = true;
            const restPlayers = _cloneDeep(players).filter((element: Player) => element.id !== firstPlayer.id);

            saveData({ columns, roundsPerPlayer, players: [ firstPlayer, ...restPlayers ], showStats });
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
