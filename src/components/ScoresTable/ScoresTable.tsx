import React from 'react';
// import { useFormikContext } from 'formik';

// import { scoreHeaders } from 'constants';

// import {
//   TableWrapper,
//   PlayerTitleWrapper,
//   PlayerNameWrapper,
//   ScoresTableWrapper,
//   ScoresRow
// } from './ScoresTable.styles.js';

export interface ScoresTableProps {
  className?: string | undefined;
}

const defaultProps = {
  className: ''
}

const ScoresTable = (props: ScoresTableProps) => {
  console.log(props);
  return (
    <div>Jeszcze nic</div>
  );
}

ScoresTable.defaultProps = defaultProps;

export default ScoresTable;
