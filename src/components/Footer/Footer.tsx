import React from 'react';

import Container from 'components/Container';

import { Wrapper } from './Footer.styles';

export interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
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
