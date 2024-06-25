import React from 'react';

import { ButtonColors } from 'constant';

import Button from 'components/ui/Button';

import { ButtonWrapper, StyledContainer, Title, Wrapper } from './Header.styles';

export interface HeaderProps {
  className?: string;
  optionsClickHandler?: () => void;
  rulesClickHandler?: () => void;
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
        <ButtonWrapper>
          <Button
            color={ButtonColors.SecondaryDark}
            onClick={props.optionsClickHandler}
          >
            Opcje
          </Button>
          <Button
            color={ButtonColors.PrimaryDark}
            onClick={props.rulesClickHandler}
          >
            Zasady
          </Button>
        </ButtonWrapper>
      </StyledContainer>
    </Wrapper>
  );
};

Header.defaultProps = defaultProps;

export default Header;
