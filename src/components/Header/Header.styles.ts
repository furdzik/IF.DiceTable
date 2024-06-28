import styled from '@emotion/styled';

import Container from 'components/Container';

const Wrapper = styled.div`
  padding: 1.3rem 0;
  margin-bottom: 1rem;
  background: ${(props) => props.theme.mainColors.primary};
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.6rem;
  color: ${(props) => props.theme.colorMono.white};
`;

const ButtonWrapper = styled.div`
  margin-left: auto;
  display: flex;
  gap: 0 1rem;
`;

export {
  Wrapper,
  StyledContainer,
  Title,
  ButtonWrapper
};
