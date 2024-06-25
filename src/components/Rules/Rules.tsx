import React from 'react';

import {
  Wrapper
} from './Rules.styles';

export interface OptionsProps {
  className?: string;
}
const defaultProps = {
  className: ''
};

const Rules = (props: OptionsProps) => {
  return (
    <Wrapper className={props.className}>
      Nic
    </Wrapper>
  );
}

Rules.defaultProps = defaultProps;

export default Rules;
