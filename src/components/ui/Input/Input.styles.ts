import styled from '@emotion/styled';
import { css } from '@emotion/react';

/* Variables */
const inputBorderColor = (props: any) => props.theme.mainColors.darkGray;
const inputBackground = (props: any) => props.theme.mainColors.lightGray;

const labelActiveColor = (props: any) => props.theme.mainColors.primary;
const disabledColor = '#cecece';

/* Component style */
const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

/* {(props) => props.filledOrFocused && css`
//   &:active,
//   &:focus {
//     border-color: ${labelActiveColor};
//   }
// `} */

const StyledInput = styled.input`
  width: 100%;
  padding: .5rem;
  border: 1px solid ${inputBorderColor};
  outline: 0;
  background: ${inputBackground};
  font-family: inherit;
  font-size: ${(props) => props.theme.fontSize.big};

  &:active,
  &:focus {
    border-color: ${labelActiveColor};
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
