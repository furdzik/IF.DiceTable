import React from 'react';

import { Config } from 'interfaces';

import {
  Wrapper,
  Table
} from './ScoresTable.styles';

export interface ScoresTableProps {
  config: Config;
  scores: unknown;
  className?: string | undefined;
}

const ScoresTable = ({ config, scores, className = '' }: ScoresTableProps) => {
  console.log(config);
  console.log(scores);
  return (
    <Wrapper className={className}>
      <Table>
        
      </Table>
    </Wrapper>
  );
}

export default ScoresTable;
