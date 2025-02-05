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
    padding: .5rem 1rem;
    border: .1rem solid ${(props) => props.theme.color.gray};
    p {
      font-size: 1.4rem;
    }
    &[colSpan="2"] {
      text-align: center;
    }
  }
  th {
    padding: .5rem 1rem;
    font-weight: bold;
    color: ${(props) => props.theme.mainColors.primary};
    text-align: center;
  }
  .figure-table {
    width: 100%;
    font-size: 1.4rem;
    th {
      text-align: left;
    }
    td:first-of-type:not([colSpan="2"]) {
      font-weight: bold;
      color: ${(props) => props.theme.mainColors.primary};
      text-align: right;
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
    margin-top: -.4rem;
    font-size: 3rem;
    font-style: normal;
    line-height: 1;
    color: ${(props) => props.theme.mainColors.secondary};
    vertical-align: middle;
    & + i {
      margin-right: .2rem;
      margin-left: .2rem;
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
