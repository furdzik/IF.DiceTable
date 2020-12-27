import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { valuesShape } from '../../utils/types/formikShape';

import { onSubmitOptionsFn } from '../Options/Options.reducer';
import selector from '../Options/Options.selector';

const MainPageForm = (props) => {
  const history = useHistory();

  return (
    <Formik
      enableReinitialize
      initialValues={props.initialValues}
      onSubmit={(values) => {
        props.onSubmitOptions(values)
      }}
      onReset={(values, formikBag) => {
        formikBag.submitForm();
      }}
    >
      {() => props.children}
    </Formik>
  );
};

MainPageForm.propTypes = {
  initialValues: valuesShape.isRequired,
  onSubmitOptions: PropTypes.func.isRequired,
  children: PropTypes.node
};

MainPageForm.defaultProps = {
  children: null
};

const mapDispatchToProps = {
  onSubmitOptions: onSubmitOptionsFn
};

export default connect(selector, mapDispatchToProps)(MainPageForm);
