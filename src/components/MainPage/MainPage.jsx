import React from 'react';
import PropTypes from 'prop-types';
// import { useIntl } from 'react-intl';

import Container from '../Container';
import Header from '../Header';

// import messages from './MainPage.messages';

const MainPage = (props) => {
  // const intl = useIntl();

  return (
    <React.Fragment>
      <Header optionsClick={props.optionsClick} />
      <Container>
        aaa
      </Container>
    </React.Fragment>
  );
};

MainPage.propTypes = {
  optionsClick: PropTypes.func.isRequired
};

MainPage.defaultProps = {

};

export default MainPage;
