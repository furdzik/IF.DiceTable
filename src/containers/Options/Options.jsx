import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Options from '../../components/Options';

import { onSubmitOptionsFn } from './Options.reducer';
import selector from './Options.selector';

const OptionsContainer = (props) => (
    <Options
    onSubmitOptions={props.onSubmitOptions}
    onModalClose={props.onModalClose}
  />
);

OptionsContainer.propTypes = {
  onSubmitOptions: PropTypes.func.isRequired
};

OptionsContainer.defaultProps = {
};

const mapDispatchToProps = {
  onSubmitOptions: onSubmitOptionsFn
};

export default connect(selector, mapDispatchToProps)(OptionsContainer);
