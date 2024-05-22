import React, { ReactElement } from 'react';

import { Wrapper } from './Container.styles';

export interface ContainerProps {
  children: ReactElement | ReactElement[] | string;
  className?: string;
}

const Container = (props: ContainerProps) => (
  <Wrapper className={props.className}>
    {props.children}
  </Wrapper>
);

export default Container;
