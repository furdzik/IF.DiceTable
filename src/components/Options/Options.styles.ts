import styled from "@emotion/styled/macro";

import Input from 'components/ui/Input';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.color.gray};
`;

const Label = styled.label`
  width: 10rem;
  margin-right: 4rem;
`;

const InputStyled = styled(Input)`
  width: 17rem;
`;

const InputWrapper = styled.div`
  ${InputStyled} + ${InputStyled} {
    margin-top: 1rem;
  }
`;

const AddPlayerWrapper = styled.div`
  margin-bottom: 2rem;
`;

const AddPlayer = styled.button`
  color: ${(props) => props.theme.mainColors.primary};
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

const DeleteButton = styled.button`
  color: ${(props) => props.theme.color.lightPink};
  margin-left: 4rem;
`;

export {
  Wrapper,
  Label,
  InputStyled,
  InputWrapper,
  AddPlayerWrapper,
  AddPlayer,
  DeleteButton
};
