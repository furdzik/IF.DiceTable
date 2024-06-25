import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from 'interfaces';

import Container from 'components/Container';
import Header from 'components/Header';
import Rules from 'components/Rules';
import Modal from 'components/ui/Modal';
import Options from 'features/options/Options';
import ScoresTable from 'features/scoresTable/ScoresTable';

import { initOptions } from 'features/options/optionsSlice';

import {
  Wrapper
} from './MainPage.styles';

const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [optionsVisible, setOptionsVisible] = useState(false);
  const [rulesVisible, setRulesVisible] = useState(false);

  useEffect (() => {
    dispatch(initOptions());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Header
        optionsClickHandler={() => setOptionsVisible(!optionsVisible)}
        rulesClickHandler={() => setRulesVisible(!rulesVisible)}
      />
      {
        optionsVisible ? (
          <Modal header="Opcje" onClose={() => setOptionsVisible(!optionsVisible)}>
            <Options onModalClose={() => setOptionsVisible(!optionsVisible)} />
          </Modal>
        ) : null
      }
      {
        rulesVisible ? (
          <Modal header="Zasady gry" onClose={() => setRulesVisible(!rulesVisible)}>
            <Rules />
          </Modal>
        ) : null
      }
      <Container>
        <Wrapper>
          <ScoresTable />
        </Wrapper>
      </Container>
    </React.Fragment>
  );
}

export default MainPage;
