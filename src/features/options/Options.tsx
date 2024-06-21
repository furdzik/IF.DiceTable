import React from 'react';

import OptionsComponent from 'components/Options';

const Options = () => {

  return (
    <OptionsComponent
      values={{}}
      players={[]}
      setFieldValue={(field: string, value: any, shouldValidate?: boolean) => {}}
      submitForm={() => {}}
      handleSubmit={() => {}}
      addPlayer={() => {}}
      deletePlayer={() => {}}
      onModalClose={() => {}}
    />
  );
}

export default Options;
