import React from 'react';

import Container from 'components/Container';

import { Wrapper } from './Footer.styles';

export interface HeaderProps {
  className?: string;
}

const Footer = ({ className = '' }: HeaderProps) => {
  const year = new Date().getFullYear();
  return (
    <Wrapper className={className}>
      <Container>
        <p>All right reserved @ {year}</p>
      </Container>
    </Wrapper>
  );
};

export default Footer;
