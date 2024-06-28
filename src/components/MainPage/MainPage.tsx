import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from 'interfaces';

import { NUMBER_OF_ROWS } from 'constant';

import Container from 'components/Container';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Rules from 'components/Rules';
import Modal from 'components/ui/Modal';
import Options from 'features/options/Options';
import ScoresTable from 'features/scoresTable/ScoresTable';

import { initOptions } from 'features/options/optionsSlice';
import { initScoresTable } from 'features/scoresTable/scoresTableSlice';

import {
  Wrapper
} from './MainPage.styles';

const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [optionsVisible, setOptionsVisible] = useState(false);
  const [rulesVisible, setRulesVisible] = useState(false);

  const columns = useSelector((state: RootState) => state.options.columns);
  const config = useSelector((state: RootState) => state.scoresTable.config);
  
  useEffect (() => {
    dispatch(initOptions());
    dispatch(initScoresTable());
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
            <Rules
              numberOfRounds={NUMBER_OF_ROWS * columns}
              numberOfColumns={columns}
              config={config}
            />
          </Modal>
        ) : null
      }
      <Container>
        <Wrapper>
          <ScoresTable />
        </Wrapper>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default MainPage;
