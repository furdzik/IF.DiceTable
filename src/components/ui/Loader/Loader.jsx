import React from 'react';
import PropTypes from 'prop-types';

import LoaderIcon from './LoaderIcon';

import {
  LoaderWrapper,
  Spinner,
  CenterWrapper
} from './Loader.styles';

const Loader = (props) => {
  const loader = (
    <LoaderWrapper
      className={props.className}
      covered={props.covered}
      fixed={props.fixed}
      static={props.static}
      transparent={props.transparent}
    >
      <Spinner>
        <LoaderIcon />
      </Spinner>
    </LoaderWrapper>
  );

  return (
    <React.Fragment>
      {
        props.center ? (
          <CenterWrapper>
            {loader}
          </CenterWrapper>
        ) : loader
      }
    </React.Fragment>
  );
};

Loader.propTypes = {
  center: PropTypes.bool,
  className: PropTypes.string,
  covered: PropTypes.bool,
  fixed: PropTypes.bool,
  static: PropTypes.bool,
  transparent: PropTypes.bool
};

Loader.defaultProps = {
  center: false,
  className: '',
  covered: false,
  fixed: false,
  static: false,
  transparent: false
};

export default Loader;
