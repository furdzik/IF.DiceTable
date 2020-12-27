import React from 'react';
import PropTypes from 'prop-types';
import _clone from 'lodash/clone';
import { useFormikContext } from 'formik';
import { useIntl } from 'react-intl';

import Button from '../ui/Button';

import {
  Wrapper,
  Label,
  InputStyled,
  InputWrapper,
  AddPlayerWrapper,
  AddPlayer,
  DeleteButton
} from './Options.styles.js';
import messages from './Options.messages.js';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

const NEW_EMPTY_FIELD = '';

const Options = (props) => {
  const intl = useIntl();
  const {
    values,
    handleSubmit,
    setFieldValue,
    submitForm
  } = useFormikContext();

  const { options } = values;

  const addPlayer = () => {
    const players = options.players ? options.players : [];
    const newPlayers = _clone(players);

    newPlayers.push({
      name: NEW_EMPTY_FIELD,
      id: players.length + 1
    });

    setFieldValue('options.players', newPlayers);
    console.log('newPlayer', values);
  };

  const deletePlayer = (index) => {
    const players = options.players ? options.players : [];
    const newPlayers = _clone(players);

    newPlayers.splice(index, 1);

    setFieldValue('options.players', newPlayers);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper
        className={props.className}
      >
        {console.log(values)}
      <Label>
        {intl.formatMessage(messages.columnsNumber)}
      </Label>
      <InputWrapper>
        <InputStyled
          type="number"
          name="options.columnsNumber"
          onChange={(event) => setFieldValue('options.columnsNumber', Number(event.target.value))}
          value={options && options.columnsNumber}
        />
      </InputWrapper>
      </Wrapper>

      {options && options.players.map((item, index) => (
        <Wrapper
          key={index}
          className={props.className}
        >
          <Label>
            {intl.formatMessage(messages.player, { id: index + 1 })}
          </Label>
          <InputWrapper>
            <InputStyled
              disabled
              type="number"
              name={`options.players[${index}]`}
              placeholder={intl.formatMessage(messages.playerId)}
              onChange={(event) => setFieldValue(`options.players[${index}]`, {
                ...item,
                id: Number(event.target.value)
              })}
              value={
                options.players[index]
                && options.players[index].id
              }
            />
            <InputStyled
              type="text"
              name={`options.players[${index}]`}
              placeholder={intl.formatMessage(messages.playerName)}
              onChange={(event) => setFieldValue(`options.players[${index}]`, {
                ...item,
                name: event.target.value
              })}
              value={
                options.players[index]
                && options.players[index].name
              }
            />
          </InputWrapper>
          <DeleteButton
            title={intl.formatMessage(messages.deletePlayer)}
            type="button"
            onClick={() => deletePlayer(index)}
          >
            <Icon
              path={mdiClose}
              size="2rem"
            />
          </DeleteButton>
        </Wrapper>
      ))}
      <AddPlayerWrapper>
        <AddPlayer onClick={() => addPlayer()}>
          {intl.formatMessage(messages.addPlayer)}
        </AddPlayer>
      </AddPlayerWrapper>

      <Button
        type="submit"
        onClick={() => {
          submitForm()
          props.onModalClose()
        }}
      >
        {intl.formatMessage(messages.save)}
      </Button>
    </form>
  );
}

Options.propTypes = {
  className: PropTypes.string,
  onModalClose: PropTypes.func
};

Options.defaultProps = {
  className: ''
};

export default Options;
