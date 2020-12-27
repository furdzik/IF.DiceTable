import styled from 'styled-components';

import Container from '../Container';
import Button from '../ui/Button';

const Wrapper = styled.div`
  padding: 1rem 0;
  margin-bottom: 3rem;
  background: ${(props) => props.theme.mainColors.primary};
`;

const ContainerStyled = styled(Container)`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.monoColors.white};
`;

const ButtonStyled = styled(Button)`
  margin-left: auto;
`;

export {
  Wrapper,
  ContainerStyled,
  Title,
  ButtonStyled
};
