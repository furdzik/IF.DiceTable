import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useIntl } from 'react-intl';

import MainPage from '../../components/MainPage';
import Modal from '../../components/ui/Modal';
import Options from '../Options';
import MainPageForm from './MainPageForm';

import messages from './MainPage.messages';
import selector from './MainPage.selector';

const MainPageContainer = () => {
  const intl = useIntl();

  const [optionsOpened, setOptionsOpened] = useState(false);

  return (
    <React.Fragment>
      <MainPageForm>
        <MainPage
          mainName={intl.formatMessage(messages.greeting)}
          optionsClick={() => setOptionsOpened(!optionsOpened)}
        />
        {
          optionsOpened ? (
            <Modal
              header="Options"
              onClose={() => setOptionsOpened(!optionsOpened)}
            >
              <Options onModalClose={() => setOptionsOpened(!optionsOpened)} />
            </Modal>
          ) : null
        }
      </MainPageForm>
    </React.Fragment>
  );
};

MainPageContainer.propTypes = {
};

MainPageContainer.defaultProps = {
};


export default connect(selector, null)(MainPageContainer);
