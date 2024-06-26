import React, {
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import ReactDOM from 'react-dom';
import { useClickAway } from 'use-click-away-react';
import { useTheme } from '@emotion/react'

import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import _throttle from 'lodash/throttle';

import { Children } from 'interfaces';

import Loader from 'components/ui/Loader';

import { SAFARI_BAR_VH, VIEWPORT_SIZE_CHECKING_DELAY } from 'constant';

import {
  LayerWrapper,
  ModalWrapper,
  ModalHeader,
  Title,
  CloseButton,
  ModalContent,
  ModalFooter
} from './Modal.styles';

// function calculates css --vh variable (fix to mobile vh unit)
const calculateViewportHeight = () => {
  const vh = window.innerHeight * SAFARI_BAR_VH;
  window.document.documentElement.style.setProperty('--vh', `${vh}px`);
};

const throttledCalculateViewportHeight = _throttle(
  calculateViewportHeight,
  VIEWPORT_SIZE_CHECKING_DELAY
);
interface ClientHeight {
  clientHeight: number | unknown;
}
export interface ModalProps {
  children: Children;
  className?: string;
  footer?: Children | undefined;
  header?: Children;
  isLoading?: boolean;
  isMobileFilter?: boolean;
  isOnlyMobile?: boolean;
  onClose?: (event?: unknown) => void;
}

const Modal = ({
  children,
  className = '',
  footer = null,
  header = null,
  isLoading = false,
  isMobileFilter = false,
  isOnlyMobile = false,
  onClose = () => {}
}: ModalProps): React.ReactElement | null  => {
  const { clickAwayRef } = useClickAway<HTMLDivElement>(onClose);
  const theme = useTheme()

  const modalHeaderRef = useRef<ClientHeight>(null);
  const modalFooterRef = useRef<ClientHeight>(null);
  const [headerFooterHeight, setHeaderFooterHeight] = useState(0);

  const checkHeaderFooterHeight = () => {
    const modalHeaderHeight: unknown = modalHeaderRef?.current?.clientHeight || 0;
    const modalFooterHeight: unknown = modalFooterRef?.current?.clientHeight || 0;
    setHeaderFooterHeight(
      (modalHeaderHeight as number) + (modalFooterHeight as number)
    );
  };

  const useHandleResize = useCallback(() => {
    checkHeaderFooterHeight();
  }, []);

  useEffect(() => {
    checkHeaderFooterHeight();
    window.addEventListener('resize', useHandleResize);
    return () => window.removeEventListener('resize', useHandleResize);
  }, [useHandleResize]);

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown, false);
    calculateViewportHeight();
    window.addEventListener('resize', throttledCalculateViewportHeight);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
      window.removeEventListener('resize', throttledCalculateViewportHeight);
    };
  }, [ children, className, footer, header, isLoading, isMobileFilter, isOnlyMobile, onClose ]);

  return ReactDOM.createPortal(
    <LayerWrapper>
      <ModalWrapper
        className={className}
        isLoading={isLoading}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalHeaderText"
        aria-describedby="modalContainer"
        onClick={handleModalClick}
        isMobileFilter={isMobileFilter}
        ref={clickAwayRef}
      >
        <React.Fragment>
          {
            header ? (
              <ModalHeader ref={modalHeaderRef as React.RefObject<HTMLDivElement>}>
                <Title>{header}</Title>
                <CloseButton
                  type="button"
                  onClick={onClose}
                >
                  <Icon
                    path={mdiClose}
                    color={theme.mainColors.secondary}
                    size="3rem"
                  />
                </CloseButton>
              </ModalHeader>
            ) : null
          }
        </React.Fragment>
        <ModalContent
          isMobileFilter={isMobileFilter}
          isOnlyMobile={isOnlyMobile}
          headerFooterHeight={headerFooterHeight}
        >
          {
            isLoading ? (
              <Loader />
            ) : children
          }
        </ModalContent>
        <React.Fragment>
          {
            footer ? (
              <ModalFooter
                isOnlyMobile={isOnlyMobile}
                ref={modalFooterRef as React.RefObject<HTMLDivElement>}
              >
                {footer}
              </ModalFooter>
            ) : null
          }
        </React.Fragment>
      </ModalWrapper>
    </LayerWrapper>,
    document.body
  );
};

export default Modal;
