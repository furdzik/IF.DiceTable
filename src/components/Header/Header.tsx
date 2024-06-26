import React from 'react';

import { ButtonColors } from 'constant';

import Button from 'components/ui/Button';

import { ButtonWrapper, StyledContainer, Title, Wrapper } from './Header.styles';

export interface HeaderProps {
  className?: string;
  optionsClickHandler?: () => void;
  rulesClickHandler?: () => void;
}

const Header = ({ optionsClickHandler, rulesClickHandler, className = '' }: HeaderProps) => {
  return (
    <Wrapper className={className}>
      <StyledContainer>
        <Title>
          Kości
        </Title>
        <ButtonWrapper>
          <Button
            color={ButtonColors.SecondaryDark}
            onClick={optionsClickHandler}
          >
            Opcje
          </Button>
          <Button
            color={ButtonColors.PrimaryDark}
            onClick={rulesClickHandler}
          >
            Zasady
          </Button>
        </ButtonWrapper>
      </StyledContainer>
    </Wrapper>
  );
};

export default Header;
