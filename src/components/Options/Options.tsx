import React from 'react';

import { FormikValues } from 'formik';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

import Button from 'components/ui/Button';

import {
  Wrapper,
  Label,
  InputStyled,
  InputWrapper,
  AddPlayerWrapper,
  AddPlayer,
  DeleteButton
} from './Options.styles';
import { ButtonTypes, InputTypes } from '../../constant';

export interface Players {
  id: number;
  name: string;
}
export interface OptionsFormValues {

}
export interface OptionsProps {
  values: FormikValues;
  players: Players[];
  // setFieldValue: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<OptionsFormValues>>;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  submitForm: () => void;
  handleSubmit: () => void;
  addPlayer: () => void;
  deletePlayer: (id: number) => void;
  onModalClose: () => void;
  className?: string;
}
const defaultProps = {
  className: ''
};

const Options = (props: OptionsProps) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Wrapper className={props.className}>
        <Label>Ilość kolumn</Label>
        <InputWrapper>
          <InputStyled
            type={InputTypes.Number}
            name="columnsNumber"
            onChange={(event: Event) => props.setFieldValue('columnsNumber', (event.target as HTMLInputElement).value)}
            value={props.values.columnsNumber}
          />
        </InputWrapper>
      </Wrapper>
      {props.players.map((item: any, index: number) => (
        <Wrapper
          key={index}
          className={props.className}
        >
          <Label>Gracz {index + 1}</Label>
          <InputWrapper>
            <InputStyled
              disabled
              type={InputTypes.Number}
              name={`options.players[${index}]`}
              placeholder="Id Gracza"
              onChange={(event: Event) => props.setFieldValue(`players[${index}]`, {
                ...item,
                id: Number((event.target as HTMLInputElement).value)
              })}
              value={
                props.players[index]
                && props.players[index].id
              }
            />
            <InputStyled
              type={InputTypes.Text}
              name={`options.players[${index}]`}
              placeholder="Nazwa Gracza"
              onChange={(event: Event) => props.setFieldValue(`players[${index}]`, {
                ...item,
                name: (event.target as HTMLInputElement).value
              })}
              value={props.players[index]?.name}
            />
          </InputWrapper>
          <DeleteButton
            title="Usuń Gracza"
            type="button"
            onClick={() => props.deletePlayer(index)}
          >
            <Icon
              path={mdiClose}
              size="2rem"
            />
          </DeleteButton>
        </Wrapper>
      ))}
      <AddPlayerWrapper>
        <AddPlayer onClick={() => props.addPlayer()}>
          Dodaj gracza
        </AddPlayer>
      </AddPlayerWrapper>
      <Button
        type={ButtonTypes.Submit}
        onClick={() => {
          props.submitForm();
          props.onModalClose();
        }}
      >
        Zapisz
      </Button>
    </form>
  );
}

Options.defaultProps = defaultProps;

export default Options;
