import React, { useState } from 'react';

import Container from 'components/Container';
import Header from 'components/Header';

import Options from 'features/options/Options';

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
        App
      </Container>
    </React.Fragment>
  );
}

export default MainPage;
