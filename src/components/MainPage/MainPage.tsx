import React, { useState } from 'react';

import Container from 'components/Container';
import Header from 'components/Header';
import Options from 'features/options/Options';

import {
  Wrapper
} from './MainPage.styles';

const MainPage = () => {
  const [optionsVisible, setOptionsVisible] = useState(false);

  return (
    <React.Fragment>
      <Header optionsClick={()  => setOptionsVisible(!optionsVisible)} />
      {
        optionsVisible ? (
          <Options />
        ) : null
      }
      <Container>
        <Wrapper>
          App
        </Wrapper>
      </Container>
    </React.Fragment>
  );
}

export default MainPage;
