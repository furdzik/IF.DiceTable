import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import {
  Wrapper,
  ContainerStyled,
  Title,
  ButtonStyled
} from './Header.styles.js';
import messages from './Header.messages';

const Header = (props) => {
  const intl = useIntl();

  return (
    <Wrapper
      className={props.className}
    >
      <ContainerStyled>
        <Title>
          {intl.formatMessage(messages.title)}
        </Title>
        <ButtonStyled
          secondary
          onClick={props.optionsClick}
        >
          {intl.formatMessage(messages.options)}
        </ButtonStyled>
      </ContainerStyled>
    </Wrapper>
  );
};

Header.propTypes = {
  optionsClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

Header.defaultProps = {
  className: ''
};

export default Header;
