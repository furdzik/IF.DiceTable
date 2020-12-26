import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import selector from './MainPage.selector';

const MainPage = () => {
  return (
    <div>aaa</div>
  );
};

MainPage.propTypes = {

};

MainPage.defaultProps = {
};

const mapDispatchToProps = {
  // getFilterDictionaries
};

export default connect(selector, mapDispatchToProps)(MainPage);
