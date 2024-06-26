import styled from '@emotion/styled/macro';

const Section = styled.section`
  font-size: ${(props) => props.theme.fontSize.medium};
  line-height: 1.5;
  p {
    margin-bottom: 0;
  }
  > p + p {
    margin-top: 1rem;
  }
  & + & {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: .1rem solid ${(props) => props.theme.color.gray};
  }
`;

export {
  Section
};
