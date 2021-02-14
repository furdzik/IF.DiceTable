import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ScoresTable from '../../components/ScoresTable';

import { onSubmitScoresFn } from './ScoresTable.reducer';
import selector from './ScoresTable.selector';

const ScoresTableContainer = (props) => {
  console.log('scores', props);
  return (
    <React.Fragment>
      <ScoresTable onSubmitScores={props.onSubmitScores} />
    </React.Fragment>
  );
}

ScoresTableContainer.propTypes = {
  onSubmitScores: PropTypes.func.isRequired
};

ScoresTableContainer.defaultProps = {
};

const mapDispatchToProps = {
  onSubmitScores: onSubmitScoresFn
};

export default connect(selector, mapDispatchToProps)(ScoresTableContainer);
