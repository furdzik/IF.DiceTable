import React from 'react';

import Container from 'components/Container';
import Header from 'components/Header';

const MainPage = (props) => (
  <React.Fragment>
    <Header optionsClick={props.optionsClick} />
    <Container>
      App
    </Container>
  </React.Fragment>
);

export default MainPage;
