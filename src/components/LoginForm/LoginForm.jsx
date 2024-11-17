
import css from './LoginForm.module.css';
import React from 'react';
import * as Yup from 'yup';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(login(values));
    actions.resetForm();
  };

  //State of initialValues
  const contactValue = {
    email: '',
    password: '',
  };

  //Validation config
  const FeedbackSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string()
      .min(4, 'Too Short!')
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
        <label className={css.inputName} htmlFor={emailFieldId}>
          Email
        </label>
        <Field
          className={css.field}
          type="text"
          name="email"
          id={emailFieldId}
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
        />
        <ErrorMessage
          name="password"
          component="div"
          style={{ color: 'red', fontSize: '12px' }}
        />
        <button className={css.btn} type="submit">
          Sign in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;