import css from './RegistrationForm.module.css';
import React from 'react';
import { useId } from 'react';
import * as Yup from 'yup';
import clsx from 'clsx';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const RegistrationForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log('values: ', values);
    dispatch(register(values));
    actions.resetForm();
  };

  //State of initialValues
  const contactValue = {
    name: '',
    email: '',
    password: '',
  };

  //Validation config
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces')
      .required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string()
      // .min(8, 'Password must be at least 8 characters')
      //   .max(50, 'Too Long!')
      //   .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      //   .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      //   .matches(/[0-9]/, 'Password must contain at least one number')
      .min(8, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={contactValue}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.inputName} htmlFor={nameFieldId}>
          Name
        </label>
        <Field
          className={css.field}
          type="text"
          name="name"
          id={nameFieldId}
          placeholder="Adrian Cross"
        />
        <ErrorMessage
          name="name"
          component="div"
          style={{ color: 'red', fontSize: '12px' }}
        />

        <label className={css.inputName} htmlFor={emailFieldId}>
          Email
        </label>
        <Field
          className={css.field}
          type="text"
          name="email"
          id={emailFieldId}
          placeholder="across@mail.com"
        />
        <ErrorMessage
          name="email"
          component="div"
          style={{ color: 'red', fontSize: '12px' }}
        />

        <label className={css.inputName} htmlFor={passwordFieldId}>
          Password
        </label>
        <Field
          className={css.field}
          type="text"
          name="password"
          id={passwordFieldId}
          placeholder="examplepwd12345"
        />
        <ErrorMessage
          name="password"
          component="div"
          style={{ color: 'red', fontSize: '12px' }}
        />
        <button className={css.btn} type="submit">
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;