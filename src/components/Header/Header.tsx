import React from 'react';

import {
  Wrapper,
  StyledContainer,
  Title,
  ButtonStyled,
} from './Header.styles';

export interface HeaderProps {
  className?: string;
  optionsClick?: () => void;
}
const defaultProps = {
  className: ''
};

const Header = (props: HeaderProps) => {
  return (
    <Wrapper className={props.className}>
      <StyledContainer>
        <Title>
          Kości
        </Title>
        <ButtonStyled
          secondary
          onClick={props.optionsClick}
        >
         Opcje
        </ButtonStyled>
      </StyledContainer>
    </Wrapper>
  );
};

Header.defaultProps = defaultProps;

export default Header;
