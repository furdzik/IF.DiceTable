import styled from "@emotion/styled/macro";

import Input from 'components/ui/Input';

const Wrapper = styled.section`
  & + & {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: .1rem solid ${(props) => props.theme.color.gray};
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  & + & {
    margin-top: 2rem;
  }
`;

const InputStyled = styled(Input)`
  max-width: 17rem;
`;

const AddPlayerWrapper = styled.div`
  margin-bottom: 2rem;
`;

const AddPlayer = styled.button`
  margin-top: 2rem;
  color: ${(props) => props.theme.mainColors.primary};
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

const ClearDataWrapper = styled.section`
  margin: 3rem -${(props) => props.theme.layout.modalDefaultPadding} -${(props) => props.theme.layout.modalDefaultPadding};
  padding: 2rem;
  border: .1rem solid ${(props) => props.theme.colorMono.white};
  background: ${(props) => props.theme.mainColors.secondary};
  color: ${(props) => props.theme.colorMono.white};
`;

export {
  Wrapper,
  InnerWrapper,
  InputStyled,
  AddPlayerWrapper,
  AddPlayer,
  ClearDataWrapper
};
