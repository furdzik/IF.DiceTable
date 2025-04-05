import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { breakpoints } from 'styles/basic';

import { ModalProps } from './Modal';

const shadowColor = 'rgba(0, 0, 0, 0.1)';

interface ModalContentProps {
  headerFooterHeight: number;
}

interface FooterProps {
  isOnlyMobile?: boolean | undefined ;
}

const LayerWrapper = styled.div<ModalProps>`
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ModalWrapper = styled.div<ModalProps>`
  position: relative;
  min-width: calc(100% - 1rem);
  max-width: calc(100% - 1rem);
  height: calc(100% - .5rem);
  border: .2rem solid ${(props) => props.theme.mainColors.primary};
  background: ${(props) => props.theme.colorMono.white};
  box-shadow: 0 1.1rem 1.5rem -.7rem rgba(0 0 0 / .2), 0 2.4rem 3.8rem 3rem rgba(0 0 0 / .14), 0 .9rem 4.6rem .8rem rgba(0 0 0 / .12);

  ${(props) => props.isLoading && css`
    min-height: 10rem;
  `};

  @media (min-width: ${breakpoints.smallTablet}) {
    min-width: 80%;
    max-width: 80%;
    height: auto;
  }

  @media (min-width: ${breakpoints.laptop}) {
    min-width: calc(${breakpoints.laptop} - (2 * ${(props) => props.theme.layout.padding}));
    max-width: calc(${breakpoints.laptop} - (2 * ${(props) => props.theme.layout.padding}));
  }
`;

const ModalHeader = styled.div<ModalProps>`
  position: relative;
  margin: 0 2.5rem;
  padding: 2rem 0;
  border-bottom: .2rem solid ${(props) => props.theme.mainColors.primary};

  ${(props) => props.isOnlyMobile && css`
    padding: 1.5rem 1.55rem;
    box-shadow:  0 .2rem .7rem ${shadowColor}, 0 .1rem .3rem ${shadowColor};
  `}
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.8rem;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  line-height: 1.3;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 1.3rem;
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  font-size: 3rem;
  color: ${(props) => props.theme.mainColors.primary};
  cursor: pointer;
`;

const ModalContent = styled.div<ModalProps & ModalContentProps>`
  overflow-y: auto;
  max-height: 76.6vh;
  max-height: calc(var(--vh, 1vh) * 76.6);
  padding: ${(props) => props.theme.layout.modalDefaultPadding} ${(props) => props.theme.layout.modalDefaultPadding};

  @media (height <= 500px) {
    max-height: 40vh;
    max-height: calc(var(--vh, 1vh) * 40);
  }

  ${(props) => props.isOnlyMobile && css`
    padding-right: 1.6rem;
    padding-bottom: 0;
    padding-left: 1.6rem;
  `}

  ${(props) => props.isMobileFilter && css`
    height: calc(100vh - 13.5rem) ;
    height: calc(calc(var(--vh, 1vh) * 100) - 13.5rem);
    max-height: calc(100vh - 1.35rem);
    max-height: calc(calc(var(--vh, 1vh) * 100) - 13.5rem);
  `}
`;

const ModalFooter = styled.div<FooterProps>`
  padding: 3.2rem 0;
  text-align: center;

  ${(props) => props.isOnlyMobile && css`
    padding: 1rem 1.55rem;
    box-shadow: 0 -.2rem .7rem ${shadowColor}, 0 -.1rem .3rem ${shadowColor};
  `}
`;

export {
  LayerWrapper,
  ModalWrapper,
  ModalHeader,
  Title,
  CloseButton,
  ModalContent,
  ModalFooter
};
