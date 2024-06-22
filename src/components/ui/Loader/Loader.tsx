import React from 'react';

import {
  LoaderWrapper,
  Spinner,
  CenterWrapper,
  Circle,
  Svg
} from './Loader.styles';

export interface LoaderProps {
  center: boolean;
  className?: string | undefined;
  covered: boolean;
  fixed: boolean;
  static: boolean;
  transparent: boolean;
}
const defaultProps = {
  className: ''
}

const Loader = (props: LoaderProps) => {
  const loader = (
    <LoaderWrapper
      className={props.className}
      covered={props.covered}
      fixed={props.fixed}
      static={props.static}
      transparent={props.transparent}
    >
      <Spinner>
        <Svg
          width="65"
          height="65"
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Circle
            fill="none"
            strokeWidth="4"
            strokeLinecap="round"
            cx="33"
            cy="33"
            r="20"
          />
        </Svg>
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

Loader.defaultProps = defaultProps;

export default Loader;
