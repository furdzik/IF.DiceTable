import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: ${(props) => props.theme.layout.width};
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.layout.sidePadding};
`;

export {
  Wrapper
};
