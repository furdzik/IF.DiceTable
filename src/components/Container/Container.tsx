import React, { ReactElement } from 'react';

import { Wrapper } from './Container.styles';

export interface ContainerProps {
  children: ReactElement | ReactElement[] | string;
  className?: string;
}

const Container = ({ children, className = '' }: ContainerProps) => (
  <Wrapper className={className}>
    {children}
  </Wrapper>
);

export default Container;
