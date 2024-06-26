import React from 'react';

import {
  Wrapper
} from './ScoresTable.styles';

export interface ScoresTableProps {
  className?: string | undefined;
}

const ScoresTable = ({ className = '' }: ScoresTableProps) => {
  console.log('nic');
  return (
    <Wrapper className={className}>
      Jeszcze nic
    </Wrapper>
  );
}

export default ScoresTable;
