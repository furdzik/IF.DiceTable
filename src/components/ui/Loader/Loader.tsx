import React from 'react';

import {
  LoaderWrapper,
  Spinner,
  CenterWrapper,
  Circle,
  Svg
} from './Loader.styles';

// @TODO: Refactor
export interface LoaderProps {
  center?: boolean;
  className?: string | undefined;
  covered?: boolean;
  fixed?: boolean;
  sstatic?: boolean;
  transparent?: boolean;
}

const Loader = ({
  center = true,
  className = '',
  covered = false,
  fixed = false,
  sstatic = false,
  transparent = false
}: LoaderProps) => {
  const loader = (
    <LoaderWrapper
      className={className}
      covered={covered}
      fixed={fixed}
      sstatic={sstatic}
      transparent={transparent}
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
        center ? (
          <CenterWrapper>
            {loader}
          </CenterWrapper>
        ) : loader
      }
    </React.Fragment>
  );
};

export default Loader;
