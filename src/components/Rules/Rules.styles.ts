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
  table {
    margin: 2rem 0;
  }
  td {
    border: .1rem solid ${(props) => props.theme.color.gray};
    padding: .5rem 1rem;
    p {
      font-size: 1.4rem;
    }
    &[colSpan="2"] {
      text-align: center;
    }
  }
  th {
    text-align: center;
    font-weight: bold;
    color: ${(props) => props.theme.mainColors.primary};
    padding: .5rem 1rem;
  }
  .figure-table {
    font-size: 1.4rem;
    width: 100%;
    th {
      text-align: left;
    }
    td:first-of-type:not([colSpan="2"]) {
      text-align: right;
      font-weight: bold;
      color: ${(props) => props.theme.mainColors.primary};
    }
    th:first-of-type:not([colSpan="2"]) {
      text-align: right;
    }
    p + p {
      margin-top: .5rem;
    }
  }
  i {
    display: inline-block;
    font-style: normal;
    font-size: 3rem;
    line-height: 1;
    vertical-align: middle;
    margin-top: -.4rem;
    color: ${(props) => props.theme.mainColors.secondary};
    & + i {
      margin-left: .2rem;
      margin-right: .2rem;
    }
  }
  code {
    font-size: 1.4rem;
  }
  svg {
    display: block;
  }
  .value {
    display: inline-block;
    margin-left: 1rem;
    &:first-of-type {
      margin-left: 0;
    }
  }
`;

export {
  Section
};
