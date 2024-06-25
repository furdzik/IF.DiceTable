import React from 'react';

import {
  Wrapper
} from './ScoresTable.styles';

export interface ScoresTableProps {
  className?: string | undefined;
}

const defaultProps = {
  className: ''
}

const ScoresTable = (props: ScoresTableProps) => {
  console.log(props);
  return (
    <Wrapper className={props.className}>
      Jeszcze nic
    </Wrapper>
  );
}

ScoresTable.defaultProps = defaultProps;

export default ScoresTable;
