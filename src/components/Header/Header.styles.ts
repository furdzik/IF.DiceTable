import styled from '@emotion/styled';

import Container from 'components/Container';

const Wrapper = styled.div`
  margin-bottom: 1rem;
  padding: 1.3rem 0;
  background: ${(props) => props.theme.mainColors.primary};
  box-shadow: 0 0 .5rem #999999;
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
  display: flex;
  gap: 0 1rem;
  margin-left: auto;
`;

export {
  Wrapper,
  StyledContainer,
  Title,
  ButtonWrapper
};
