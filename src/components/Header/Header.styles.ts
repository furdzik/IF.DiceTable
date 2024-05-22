import styled from '@emotion/styled';

import Container from 'components/Container';
import Button from 'components/ui/Button';

const Wrapper = styled.div`
  padding: 1rem 0;
  margin-bottom: 3rem;
  background: ${(props) => props.theme.mainColors.primary};
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.colorMono.white};
`;

const ButtonStyled = styled(Button)`
  margin-left: auto;
`;

export {
  Wrapper,
  StyledContainer,
  Title,
  ButtonStyled
};
