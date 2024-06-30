import styled from '@emotion/styled';
import { css } from '@emotion/react';

const disabledColor = '#cecece';

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 4rem;
  padding: .6rem 2.5rem;
  border: .1rem solid ${(props) => props.theme.color.lightGray};
  border-radius: 2.5rem;
  outline: 0;
  background: ${(props) => props.theme.color.lightGray};
  font-family: inherit;
  font-size: ${(props) => props.theme.fontSize.medium};

  &:active,
  &:focus {
    padding: .5rem 2.4rem;
    border-width: .2rem;
    border-color: ${(props) => props.theme.mainColors.primary};
  }

  ${(props) => props.disabled && css`
    border-style: dashed;
    border-color: ${disabledColor};
    color: ${disabledColor};
    cursor: not-allowed;
    &:active,
    &:focus {
      border-color: ${disabledColor};
      color: ${disabledColor};
      cursor: not-allowed;
    }
  `}
`;

export {
  InputWrapper,
  StyledInput
};
